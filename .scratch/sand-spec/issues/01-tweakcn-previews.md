# 01 - How tweakcn structures its preview pages

Type: research
Status: resolved
Blocked by: none

## Question

Study `https://tweakcn.com/editor/theme?p=marketing` (and its sibling presets:
cards, dashboard, mail/application, and any others in the preset switcher).
Record, for each preview: what building blocks it composes (cards, charts,
tables, date pickers, chat, transactions, activity, sidebar, marketing hero),
how the previews are organised in the UI (tabs, routes, one scroll), which
shadcn components each one exercises, and how a theme change propagates to
them. Also note the source layout if the project is open source and its
preview code is readable. The goal is a fact base for ticket 02, not a
recommendation.

## Answer

- tweakcn is open source (Apache-2.0, `github.com/jnsahaj/tweakcn`). Findings
  pinned to commit `a3b47b3` in
  [research/tweakcn-previews.md](../research/tweakcn-previews.md).
- Previews are tabs on one editor route, not separate pages. The tab value
  is mirrored to the URL as `?p=`: custom, cards, dashboard, application,
  marketing, and (behind a kebab menu) mail, typography, colors.
- Each preview is a lazily imported React component under
  `components/examples/<name>/index.tsx` that only composes sibling block
  files with Tailwind grid and container queries. Blocks carry their own
  sample data. Registration is manual in `theme-preview-panel.tsx`.
- A theme change writes CSS variables inline on `<html>` (colours converted to
  HSL, plus radius, fonts, spacing, letter-spacing, and derived shadows) and
  toggles the `dark` class. Previews share the document, so they inherit; no
  iframe except the Custom tab, which pushes variables to a user site via
  `postMessage`.
- Blocks per preview: Cards = stats, calendar, activity goal, exercise chart,
  forms, team, cookies, sign-up, chat, share, report issue, date range;
  Dashboard = inset sidebar, header, four KPI cards, area chart, sortable
  data table with sheet, donut, bar chart; Application = ticker, stock chart,
  transactions, activity feed, messaging; Marketing = nav, hero, logo strip,
  benefits, testimonials, metrics, pricing, blog cards, FAQ, newsletter,
  footer; Mail = the shadcn resizable three-pane mail example.
- shadcn components exercised across all built-in previews: card, button,
  badge, avatar, input, label, textarea, select, checkbox, switch, radio-group,
  tabs, toggle-group, table, sheet, sidebar, separator, scroll-area,
  resizable, popover, tooltip, dropdown-menu, command, calendar, chart
  (recharts). Charts appear in Cards, Dashboard, and Application.
