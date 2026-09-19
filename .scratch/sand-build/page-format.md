# Docs page format

Agreed 2026-09-19 from the prototype in [prototypes/docs-pages.html](prototypes/docs-pages.html), variant A. Open that file in a browser and switch pages with the bottom bar to see each format. Every batch ticket follows this document. B and C in the prototype are rejected alternatives; ignore them.

## Shared pieces

### Preview container

One component wraps every rendered example on the site: component demos, variant sets, the mechanics showcase, the overview sample, and the preview pages. It is the visual line between documentation and example content.

- A card-colored box (`bg-card`) with a border and the large radius, on the page background. This contrast is what marks the content as example, so it never sits on another card.
- Optional tab strip in the head. Tabs are named panes (Preview, Code, Variants, Sizes). With one pane, no tab strip is rendered.
- Toolbar at the right of the head, always present: a theme toggle that flips only the container between light and dark, and a split toggle that renders the same content twice side by side, light and dark. The container carries its own theme class so its content ignores the page theme when toggled.
- A Code pane renders a code block under the head on the muted background.
- Content is centered by default; a `left` alignment exists for grids and showcases; a `tight` padding exists for full-width content.
- On preview pages the container is full width and has no tab strip, only the toolbar.

### Page layout

- Content column with a sticky rail on the right. The rail holds only "On this page", a list of anchor links to the page's sections. No "at a glance" cards, no metadata cards.
- Page header: serif `heading-1` title, `body-lg` muted lead.
- Sections are `heading-2` with an id; the rail links to them.
- Preview pages are exempt: no content column, no rail, full width.

### Rules block

Rules render as a checklist: a check mark, the rule title in medium weight, the one-sentence body muted, all on one line wrapping. An optional `Example` disclosure below a rule holds a do/don't pair (two cards, captions "Do." and "Don't."). No source-file references on the page, ever.

## Page kinds

### Overview

1. Header: "Sand", lead sentence.
2. Sample: the preview container (toolbar only, no tabs) holding one realistic screen built only from Sand components (a workspace settings screen in the prototype: nav, header with actions, tabs, fields, switches, a table). It must read as a piece of a production app, not a component list.
3. Two layers: two equal-height panels side by side, Design (secondary background) and Mechanics (card background), each with layer label, serif title, one sentence, the items as chips, and a link to its section at the bottom.
4. Where to go: four cards, one per section (Foundations, Components, Mechanics, Previews), icon, title, one sentence, page count.

No "reach for these first". No status list.

### Foundation page (Colors is the reference)

1. Header.
2. Tokens: the preview container with two stacked blocks, light on top, dark below, no labels or tabs, toolbar on. Every color token is an equal square box, six per row, showing a small "Aa" in the foreground color at the top, the token name and its hex at the bottom. Clicking the hex copies it. The token grid renders from the real theme values, not a hand-typed list.
3. Roles: a table with columns Token, Foreground, Use. Each token cell carries a small swatch square before the name.
4. Rules: the rules block.

Other foundation pages keep the same order: header, tokens rendered live in the container, a table of the scale where one applies, rules.

### Component page (Button is the reference)

1. Header.
2. Demo: the container with Preview and Code tabs. Code shows the import and one or two uses.
3. Variants: the container with tabs per group (Variants, Sizes, and any further group) plus a Code tab.
4. Rules: the rules block.
5. Accessibility: short prose.

Sections after Demo are optional per component; a page with only a Demo is complete.

### Mechanics page (Primitives is the reference)

1. Header: name, one-line role.
2. What it owns: one paragraph.
3. Preview: the container (Preview and Code tabs, left aligned) with a rich showcase of Sand components that stand on this mechanic, six or more, each labeled with a small caption. Below the container, a chip row of the parts used, ending in a "+ N more" chip that expands to the full list, each item linking to the library's page for it.
4. Links: a row of external links (docs, a reference page, source, releases).
5. Alternatives considered: two or more cards, each with the alternative's name, a short comparison, and a link.

### Preview page (Cards is the reference)

1. A pill row at the top switching between previews (Cards, Application, Marketing, Dashboard); the same pages are in the sidebar.
2. The container, full width, toolbar only, holding the preview's blocks.

## Out of the format

Rejected during prototyping: dotted or dashed sandbox backgrounds, "at a glance" cards, source-file captions on rules, code tab on the overview sample, "Reach for these first", the status list, horizontal light/dark token layout, glance metadata rows. Ideas parked, not adopted: props playground, token pair hover, parts filter, width presets, RTL toggle, contrast badges.
