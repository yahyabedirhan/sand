# How tweakcn structures its preview pages

Research for ticket `../issues/01-tweakcn-previews.md`. A fact base, not a
recommendation. Observed on 2026-09-19 against the live site and the public
source (`github.com/jnsahaj/tweakcn`, branch `main`, commit
`a3b47b37cba97dd637de517aab52c45ec0f83456`, Apache-2.0). Site and source may
drift; the commit pins what was read.

Sources used:

- Live site, `https://tweakcn.com/editor/theme?p=<preview>`, read with the
  browser's accessibility tree and page text, one screenshot per preview.
- Source files, read raw from GitHub. Paths below are relative to the repo
  root.

## 1. How the previews are organised in the UI

- The editor is one route, `app/editor/theme/[[...themeId]]/page.tsx`. The
  screen is a left control panel (Colors, Typography, Other, Generate tabs)
  and a right preview panel. Both live on the same page; there is no per
  preview route.
- The preview panel is `components/editor/theme-preview-panel.tsx`. It renders
  a shadcn `Tabs` whose value is bound to the URL query parameter `p` through
  `nuqs` (`useQueryState("p", { defaultValue: "cards" })`). Switching a tab
  rewrites `?p=`; loading `?p=marketing` opens that tab. Default is `cards`.
- Tab values and their labels, in the order rendered:

  | value | label | where in the UI |
  | --- | --- | --- |
  | `custom` | Custom | pill |
  | `cards` | Cards | pill |
  | `dashboard` | Dashboard | pill, hidden below the `md` breakpoint |
  | `application` | Application | pill, hidden below the `md` breakpoint |
  | `marketing` | Marketing | pill |
  | `mail` | Mail | "More previews" dropdown (kebab button) |
  | `typography` | Typography | dropdown |
  | `colors` | Color Palette | dropdown |

- Each preview is a `TabsContent` wrapping `ExamplesPreviewContainer`
  (`components/editor/theme-preview/examples-preview-container.tsx`), which
  is a `@container` div plus a `Suspense` boundary with a skeleton fallback.
  Every demo is `lazy()` imported, so a preview's code loads on first open.
- Every preview scrolls inside a shadcn `ScrollArea`. Dashboard and Mail set
  a minimum width (`min-w-[1400px]` and `min-w-[1300px]`) and add a horizontal
  scrollbar rather than reflowing to narrow panes. The others reflow through
  Tailwind container queries (`@3xl:`, `@5xl:`, `@7xl:`).
- Extras on the panel toolbar: "Open in v0", an inspector toggle that
  overlays the hovered element's theme classes
  (`components/editor/inspector-overlay.tsx`), a fullscreen toggle, and (in
  fullscreen only) a light/dark toggle.
- No iframes are used for the built-in previews. Checked in the browser:
  `document.querySelectorAll('iframe').length` is 0 on every tab except
  Custom. The demos are ordinary React components rendered in the same
  document as the editor.

## 2. How a theme change propagates

- State lives in a zustand store, `store/editor-store.ts` (`themeState` with
  `styles.light`, `styles.dark`, `currentMode`).
- `components/theme-provider.tsx` subscribes to that store and, in a
  `useEffect`, calls `applyThemeToElement(themeState, document.documentElement)`
  on every change.
- `utils/apply-theme.ts` does four things to `<html>`:
  1. toggles the `dark` class for the current mode;
  2. writes the mode-independent variables from `config/theme.ts`
     `COMMON_STYLES` (`font-sans`, `font-serif`, `font-mono`, `radius`,
     `shadow-opacity`, `shadow-blur`, `shadow-spread`, `shadow-offset-x`,
     `shadow-offset-y`, `letter-spacing`, `spacing`), always taken from the
     `light` definition;
  3. writes every colour variable for the current mode, converted to HSL by
     `colorFormatter(value, "hsl", "4")`;
  4. calls `setShadowVariables` (`utils/shadows.ts`), which derives
     `--shadow-2xs` through `--shadow-2xl` and `--shadow-color`.
- Writing is done by `utils/apply-style-to-element.ts`, which edits the
  element's `style` attribute string: it strips any existing `--key:` entry
  with a regex and appends `--key: value;`. Confirmed live: the `<html>`
  element carries an inline `style` of about 2.6 KB with 52 custom
  properties (radius, three font stacks, shadow inputs, letter-spacing,
  spacing, the 32 shadcn colour tokens including `sidebar-*` and `chart-1..5`,
  and the nine derived shadow values).
- Because the variables are set on the document root and the demos are in
  the same document, propagation is plain CSS inheritance. The editor chrome
  and the previews share the same variables, so the editor itself is also
  themed by the user's edits. The shadcn `ui/*` components in the demos read
  `bg-primary`, `text-muted-foreground`, and so on through Tailwind, which
  resolves to `var(--primary)` etc.; nothing in the demos knows about the
  store.
- Exceptions to "plain inheritance":
  - `Color Palette` (`components/editor/theme-preview/color-preview.tsx`)
    receives `styles` and `currentMode` as props and prints the raw values as
    text beside a swatch, with copy and "focus this control" buttons.
  - `Custom` (`components/examples/custom/index.tsx` ->
    `components/dynamic-website-preview.tsx`) embeds the user's own site in a
    sandboxed `iframe`. The site must include `public/live-preview.js`, which
    listens for `message` events from the parent and calls
    `root.style.setProperty("--key", value)` on its own document root, and
    posts navigation updates back. The script first checks that the required
    shadcn variables exist on the host page.
  - Card-level shadows are suppressed in the Cards and Application previews
    (`**:data-[slot=card]:shadow-none` on the demo root). Unknown why; the
    source has no comment.

## 3. Source layout

```
components/editor/theme-preview-panel.tsx      tabs, lazy imports, toolbar
components/editor/theme-preview/
  examples-preview-container.tsx               @container + Suspense + skeleton
  color-preview.tsx                            the Color Palette tab
  tabs-trigger-pill.tsx                        pill-styled TabsTrigger
components/examples/
  cards/index.tsx        + one file per card
  dashboard/index.tsx    + components/ (sidebar, header, charts, data-table) + data.json
  application/index.tsx  + one file per block
  marketing/index.tsx    + one file per section
  mail/index.tsx         + components/ + data.tsx + use-mail.ts
  typography/typography-demo.tsx + blog-post.tsx + font-showcase.tsx
  custom/index.tsx       -> components/dynamic-website-preview.tsx
  music/, tasks/         present in the tree, not imported by the preview panel
public/examples/         avatars and marketing images (webp)
components/ui/*          the shadcn components the demos import
utils/apply-theme.ts, utils/apply-style-to-element.ts, utils/shadows.ts
store/editor-store.ts, components/theme-provider.tsx
```

Registration is manual: a new preview means a new `lazy()` import, a new
`TabsTriggerPill` or dropdown item, and a new `TabsContent` in
`theme-preview-panel.tsx`. There is no registry array or config file.

Every demo folder's `index.tsx` is a pure composition file: it imports the
blocks and lays them out with Tailwind grid and container-query classes. The
blocks themselves are self-contained with hard-coded sample data (or a sibling
`data.json` / `data.tsx`).

Charts are `recharts` wrapped in shadcn's `ui/chart` (`ChartContainer`,
`ChartTooltip`, `ChartConfig`), used in Cards (stats, activity goal, exercise
minutes), Dashboard (area, pie donut, bar mixed, plus a sparkline inside the
data table sheet), and Application (stock market).

The Marketing and Application blocks are attributed on screen to "shadcncraft
Pro" with a link. The Cards, Dashboard, Mail, Music, and Tasks demos match
the layout and copy of the shadcn/ui examples (the Cards demo is the shadcn
"cards" example, the Dashboard is the shadcn "dashboard-01" block layout with
`AppSidebar` + `SectionCards` + `ChartAreaInteractive` + `DataTable`). That
provenance is inferred from matching content, not stated in the source.

## 4. Per preview: blocks and shadcn components

Component lists come from `grep '@/components/ui/'` over each demo folder in
the pinned commit. Block lists come from each `index.tsx` and from the live
page text.

### Cards (`p=cards`)

Layout: a two-column grid at `@5xl` (4/6 columns) and `@7xl` (6/5), single
column below; some cards are duplicated in hidden/visible variants so the
grid stays balanced at each breakpoint.

Blocks (one file each under `components/examples/cards/`): stats (Total
Revenue and Subscriptions with tiny line charts), calendar (single month
picker), activity goal ("Move Goal", stepper plus bar chart), exercise
minutes (line chart), forms ("Upgrade your subscription": name, email, card
number, plan radio cards, notes, two checkboxes), team members (avatar rows
with a role select popover), cookie settings (switch rows), create account
(GitHub/Google buttons, email, password), chat (message thread with send
input, plus a "New message" command dialog), github card (star button,
language, star count, updated date), date picker with range (popover with
two-month calendar), share (link copy input, people with access and their
permission select), report issue (area select, severity select, subject,
description). A `payments` card and a `payment-method` file exist in the
folder; `payment-method` is not imported by `index.tsx`, `payments` is a data
table shown only at `@3xl` and above.

shadcn components: card, button, label, input, select, chart, avatar,
textarea, radio-group, popover, command, checkbox, calendar, tooltip, table,
switch, separator, dropdown-menu, and a project-local `revola` (a responsive
dialog/drawer wrapper, unknown origin).

### Dashboard (`p=dashboard`)

Layout: `SidebarProvider` with `AppSidebar variant="inset"`, `SidebarInset`
with a `SiteHeader`, then a vertical stack. Minimum width 1400px, horizontal
scroll below that.

Blocks (under `components/examples/dashboard/components/`): app sidebar
(brand, "Quick Create" primary button, main nav, Documents group with "More"
dropdowns, secondary nav Settings/Get Help/Search, user footer with avatar
dropdown), site header ("Documents" title, sidebar toggle), section cards
(four KPI cards: Total Revenue, New Customers, Active Accounts, Growth Rate,
each with a trend badge and two lines of footer text), chart area interactive
(Total Visitors, gradient area chart with a Last 3 months / 30 days / 7 days
toggle group), data table (Outline / Past Performance / Key Personnel / Focus
Documents tabs with count badges, Customize Columns and Add Section buttons,
sortable and drag-reorderable rows with checkbox selection, per-row Reviewer
select and kebab menu, row-click opens a sheet with a sparkline chart and an
edit form, 68 rows paginated 10 per page), pie donut with centre text, mixed
bar chart (browsers).

shadcn components: sidebar, chart, card, dropdown-menu, separator, select,
badge, toggle-group, tabs, table, sheet, label, input, checkbox, button,
avatar. Also `@tanstack/react-table` and `@dnd-kit` (core, sortable, modifiers) for
the data table, seen in `data-table.tsx`.

### Application (`p=application`)

Layout: attribution line, a ticker strip, then a 1/2/3 column grid at
`@3xl`/`@6xl`.

Blocks (under `components/examples/application/`): ticker (four stock tiles
with an avatar-style badge, symbol, price, change), stock market (card with
1W/1M/1Y tabs, price and change badge, area chart, Market Cap and Volume
footer), transactions (card with Completed/Pending/Cancelled tabs, rows with
a featured icon, title, description, signed amount, date, and a View all
button), activity feed (All/Tasks/Meetings tabs, avatar rows with relative
time and a nested quoted item), messaging (chat header with online status,
call and video buttons, message bubbles with reactions and a file attachment,
send input). `featured-icon.tsx` is a shared icon tile.

shadcn components: card, separator, button, avatar, input, badge, tabs,
select, chart.

### Marketing (`p=marketing`)

Layout: a single vertical page, `max-w-7xl` sections, ordered Nav, Hero,
LogoStrip, Benefits, Testimonials, Metrics, Pricing, Insights, FAQ,
Newsletter, Footer.

Blocks (one file each under `components/examples/marketing/`): nav (brand,
four links, Login, Get started), hero ("New features released" badge,
headline, subcopy, CTA, hero image), logo strip ("Trusted by leading
companies", four placeholder logos), benefits (section heading, six feature
cards with images on two of them), testimonials (one large quote with a
row of four people to switch between, own markup, not `ui/tabs`), metrics (four stats with labels and links, plus an
image), pricing (yearly/monthly tabs, three tiers, "Most Popular" badge,
feature checklists), insights (three blog cards with category badge, read
time, author, date), FAQ (six expandable questions, numbered), newsletter
(email input and Subscribe), footer (four link columns, one "New" badge,
copyright). `section-heading.tsx` is a shared eyebrow + title + subcopy.

shadcn components: button, separator, badge, avatar, tabs (pricing only),
input, card. No accordion; FAQ uses its own markup (the page text shows numbered items, and
`ui/accordion` is not imported). Marketing images are static webp files in
`public/examples/marketing/`.

### Mail (`p=mail`)

Layout: the shadcn "mail" example. `ResizablePanelGroup` with three panels:
collapsible nav, list, and reading pane. Minimum width 1300px.

Blocks (under `components/examples/mail/components/`): account switcher
(select), nav (two link groups with counts, collapsible to icons with
tooltips), mail list (All mail / Unread tabs, search input, cards with
sender, relative time, subject, excerpt, tag badges), mail display (toolbar
with archive/junk/trash/snooze popover with a calendar, reply/forward, more
dropdown; header with avatar; body; reply textarea with "Mute this thread"
switch and Send). State via `use-mail.ts`, a small zustand store.

shadcn components: tooltip, separator, dropdown-menu, button, textarea,
tabs, switch, select, scroll-area, resizable, popover, label, input,
calendar, badge, avatar.

### Typography (`p=typography`)

Layout: nine-column grid; a sticky font showcase in three columns (large
screens only) and a blog post in six.

Blocks: font showcase (Sans-Serif, Serif, Monospace, each at five weights),
blog post (category badges, title, subcopy, author avatar, date and read time,
prose with h2, blockquote, bulleted list, a "Pro Tip" callout, like and
comment counts, Share and Save buttons, author bio card with Follow).

shadcn components: card, separator, scroll-area, button, badge, avatar.

### Color Palette (`p=colors`)

Not a composition of blocks. A grid of swatches grouped as Primary Theme
Colors, Secondary & Accent, UI Component (card, popover, muted), Utility &
Form (border, input, ring), Status & Feedback (destructive), Chart &
Visualization (chart 1..5), Sidebar & Navigation (eight sidebar tokens).
Each swatch shows the raw value, a copy button, and an edit button that
focuses the matching control in the left panel.

### Custom (`p=custom`)

A URL input above an empty frame with setup instructions (script tag per
framework: Script Tag, Next.js App, Next.js Pages, Vite, Remix). See section
2 for the mechanism. The frame is a sandboxed iframe; the theme is pushed by
`postMessage`, not inherited.

## 5. Things not verified

- Whether `music/` and `tasks/` are reachable anywhere else in the app
  (community pages, AI chat preview). Only the editor preview panel was
  checked; no import of either was found from `app/`, `components/editor/`,
  or `components/theme-preview.tsx`.
- The exact provenance of each block (shadcn/ui examples vs. shadcncraft).
  The on-screen attribution covers only Marketing and Application.
- Why card shadows are removed in Cards and Application.
- The origin and behaviour of the local `revola` component.
- Whether the built-in previews behave differently on the deployed site than
  in the pinned commit. The live site was consistent with the source on every
  point checked (tab list, `p` values, root inline style, no iframes).

## 6. Screenshot record

Screenshots were taken through the browser tool at 800x600 for each preview
and inspected, but the tool returns them inline rather than to disk, so none
are saved in the repo. What they showed, for the record (dark mode, default
theme):

- Marketing: dark full-width landing page, centred hero headline, pill badge
  above it, nav row with Get started button.
- Cards: two stat cards on top, calendar and Move Goal side by side below.
- Dashboard: inset sidebar on the left, KPI cards and the Total Visitors area
  chart to the right.
- Application: ticker strip of four stocks, Stock Market card with area chart.
- Mail: three-pane layout, nav with counts, inbox list with tag badges.
- Typography: font showcase column and a blog post.
- Color Palette: swatch grid with oklch values.
- Custom: URL bar, globe-x-tweakcn icon, "Preview your Website in tweakcn"
  instructions and a script snippet tab strip.
