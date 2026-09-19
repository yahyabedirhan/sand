# 00 - Sand Design System

Status: in progress
Last updated: 2026-09-19

Sand is a design system the maintainer builds their own projects with, and a
docs site that documents it. Both live in one React + Vite application. The
words used below (Sand, Docs site, Consumer, Design, Mechanics, Rule, Demo,
Preview, Block, Example project) are defined in `CONTEXT.md`.

## Problem Statement

I have consumed and revamped design systems, but I have never defined one from
the ground up. I do not have a system of my own that carries my aesthetic,
that I can drop into a new project, and whose rules an agent can follow
without me in the room. Most design-system documentation I have seen records
component props and leaves the real rules implicit, such as which font goes
where, which color pairs are legal, when opacity is acceptable.

I also want to understand every decision inside such a system as I make it.
Learning happens while building, never as a separate phase, and it should
leave a track record in my own words.

## Solution

Build Sand as two layers. Design is the raw material and the rules behind it,
independent of any library. Mechanics is how this repository realises the
design (React, Vite, Tailwind, the shadcn conventions, Base UI, Tabler,
Recharts, fontsource, tw-animate-css), documented as what Sand is built on.

Document Sand on a docs site whose pages render the real tokens and
components. Foundation pages carry the design. Component pages are demo-first
and lightweight. Preview pages compose many components into small realistic
screens so the whole system is seen at once and a change is visible
everywhere. Rules are markdown files an agent can read directly, rendered on
the page of the thing they constrain.

The docs site is the first consumer. An example project in this repository
demonstrates Sand after the pages are written. A project outside this
repository adopts Sand by copying the `sand/` folder at a tagged version into
its pnpm workspace, guided by an agent-facing installation guide, and owns
the copy.

Start every part small and workable, and structure it so it expands quickly
later.

## User Stories

### Consumer of Sand

1. As a consumer, I want a sidebar listing every section and page, so that I can find what I need without searching.
2. As a consumer, I want an Overview page that states what Sand is and what to reach for first, so that I understand the intent before the details.
3. As a consumer, I want the Overview to show which pages are written and which are still TODO, so that the site reports its own state honestly.
4. As a consumer, I want a Colors page that presents semantic tokens only, so that I never pick a raw value.
5. As a consumer, I want the Colors page to carry the pairing rule (`x` with `x-foreground`) and the surface stacking rule, so that text stays legible and layered surfaces stay consistent.
6. As a consumer, I want the Colors page to say when an opacity modifier is acceptable, so that half-transparent colors are deliberate.
7. As a consumer, I want every color rendered in light and dark, so that I can see the pairing hold in both themes.
8. As a consumer, I want a Typography page that lists semantic text roles over the raw size scale, so that I pick a role rather than a pixel size.
9. As a consumer, I want a Fonts page that names the three faces and the role of each, so that I know which font is legal where.
10. As a consumer, I want Spacing, Radius, Shadow, and Motion pages with named scales and their rules, so that these choices are limited and consistent.
11. As a consumer, I want an Icons page that shows the icons Sand uses and how they pair with text, so that icons look consistent.
12. As a consumer, I want a page for every component in the registry, so that no component is undocumented.
13. As a consumer, I want each component page to open with a rendered demo, so that I see the real output before reading anything.
14. As a consumer, I want a component page to gain sections (variants, when to use, accessibility) only as they are written, so that a light page is still a complete page.
15. As a consumer, I want the rules for a topic on that topic's page, so that a rule is next to the thing it constrains.
16. As a consumer, I want rules that are a title and one sentence at minimum, with examples where they exist, so that a rule is easy to read and easy to add.
17. As a consumer, I want a place for rules that span more than one topic, so that cross-cutting rules have a home.
18. As a consumer, I want a Mechanics section with a page per thing Sand is built on, so that I know what is under the hood.
19. As a consumer, I want a light/dark toggle that defaults to my system preference and remembers my choice, so that I can check both themes.
20. As a consumer, I want a README that explains what Sand is, how it is built, and how it is used, in beginner-friendly language with visuals, so that a first-time reader understands the project without opening the code.

### Consumer agent

21. As a consumer agent, I want every rule in a markdown file I can read without a browser, so that I can follow Sand's rules while building a project.
22. As a consumer agent, I want an index of the rule files, so that I can find the rules for a topic in one hop.
23. As a consumer agent, I want the rule for a topic to be the same text the docs page shows, so that there is one source of truth.

### Maintainer of Sand

24. As a maintainer, I want Preview pages (cards, application, marketing, dashboard) that compose many components into small realistic screens, so that a token change is visible across the whole system at once.
25. As a maintainer, I want previews built from blocks with hard-coded sample data, so that a preview is cheap to write and cheap to change.
26. As a maintainer, I want previews free of the standard docs page layout, so that a preview gets the width and height its content needs.
27. As a maintainer, I want to switch between previews from the sidebar or from inside the preview page, so that comparing them is quick.
28. As a maintainer, I want to discover the aesthetic by iterating against the previews, so that the look is chosen by seeing it rather than by deciding it up front.
29. As a maintainer, I want the inherited palette, radii, shadows, and fonts marked provisional, so that changing them later is expected, not a rewrite.
30. As a maintainer, I want a written procedure for checking that the rule files and the docs pages agree, so that the manual sync stays honest.
31. As a maintainer, I want a single page registry that drives the sidebar, the routes, and the Overview status list, so that adding a page is one entry.
32. As a maintainer, I want a page without a component to render as TODO automatically, so that the sidebar never lies about coverage.
33. As a maintainer, I want each Mechanics page to state the role, the current choice, and what depends on it, so that dependencies are visible without a setup guide.
34. As a maintainer, I want a decision note per foundation and mechanic recording the options and the pick, so that the reasoning survives.
35. As a maintainer, I want consumer pages free of reasoning, so that consumer and maintainer documentation do not blur.
36. As a maintainer, I want a journal with one section per session, so that the next session knows what changed and why.
37. As a maintainer, I want a short learning discussion at the end of each session, saved as concept notes in my own words, so that learning is recorded as it happens.
38. As a maintainer, I want session handoffs and agent tracker files kept apart from my own notes, so that human notes and agent scratch do not mix.
39. As a maintainer, I want an example project (a to-do list or a kanban board) in this repository, importing Sand the way a consumer does, so that Sand is shown in a real-world setting.
40. As a maintainer, I want this repository shaped as a pnpm workspace with Sand in one folder, so that the folder a consumer copies is exactly the folder I maintain.
41. As a maintainer, I want a throwaway outside consumer created from the installation guide before 0.1.0, so that adoption is tested before a real project depends on it.
42. As a maintainer, I want versions as git tags with a version file inside the folder, so that a consumer and its agent know which Sand they hold.
43. As a maintainer, I want a written upgrade guide for every release with breaking changes, so that a consumer's agent can move versions without me.
44. As a maintainer, I want no employer or company names anywhere in the repository, so that it can be shown to anyone.

### Consumer agent, adoption

45. As a consumer agent, I want the README to point me at one installation guide, so that I know where to start.
46. As a consumer agent, I want the installation guide for a new project to list the packages to install, the files to add, and the workspace entry, so that I can set Sand up without guessing.
47. As a consumer agent, I want the installation guide for an existing project to have me list the changes and get confirmation first, so that I do not alter a repository unasked.
48. As a consumer agent, I want to import Sand as a workspace package, so that there is one React and Tailwind scans the folder without extra config.
49. As a consumer agent, I want the whole Sand source, rules, and docs site in the copied folder, so that I can read the internals and the maintainer can run the docs site against their own edits.
50. As a consumer agent, I want one update script, so that a release without breaking changes is one command.
51. As a consumer agent, I want a version file in the copied folder, so that the upgrade guide's "from" version is on disk.

## Implementation Decisions

### Purpose and priorities

- Sand exists so the maintainer can build real projects with a system that
  carries their own aesthetic. Learning is continuous and recorded as it
  happens. Portfolio value is a side effect, served by the README at the end.
- Two workstreams, in order. First build Sand and its docs site. Second make
  Sand consumable by other projects. The adoption mechanism is decided (see
  Consumers and adoption); its guides and scripts are written in the second
  workstream, but the repository shape it needs is set before the pages.
- Every part starts small and workable and is structured to expand quickly.
  Nothing in v1 is polished beyond what it needs.
- This document is the spec. It is updated in place and never gets a
  successor that describes it as a rewrite.

### Design and Mechanics

- Design is the raw material and its rules. Fonts, colors, spacing, type
  roles, radii, motion. It is independent of any library and could in
  principle be one document.
- Mechanics is how this repository realises the design. React, Vite,
  Tailwind, the shadcn conventions, Base UI, Tabler, Recharts, fontsource,
  tw-animate-css. Mechanics are documented as what Sand is built on. The docs do not
  present them as swappable and carry no setup guides.
- There is no code-level module boundary. Components import their libraries
  directly, as shadcn generates them. No lint rule restricts imports.
- Single-component libraries (date picker, command palette, carousel, OTP
  input, resizable panels) are documented on their component's page, not as
  mechanics.

### Repository and application shape

- This repository is a pnpm workspace. `sand/` is the design system package
  and holds everything a consumer receives. `examples/` holds in-repo example
  projects that import `sand` as a workspace package. Maintainer material
  (`.notes/`, `.handoff/`, `.scratch/`, `.specs/`, the skills, the root
  `AGENTS.md`, `CONTEXT.md`, `examples/`) stays at the root and never
  travels. The restructure happens before the docs pages are written.
- `sand/` is one React 19 + Vite + TypeScript (strict) application: tokens,
  components, hooks, the docs shell, pages, previews, `rules/`, `guides/`,
  `installation.md`, `VERSION`, `README.md`, and a short consumer-facing
  `AGENTS.md`. It exposes its components and stylesheet through package
  exports.
- Tailwind v4 through the Vite plugin, shadcn CSS variables mapped into the
  Tailwind theme. Utilities are the consumer surface; the variables are the
  token layer beneath them.
- Dark mode from day one. A `dark` class on the root element switches the
  same variable names, default from the system preference, choice persisted,
  toggle in the sidebar footer.
- Client routing. One page registry (section, slug, title, component) drives
  the sidebar, the routes, and the Overview status list. Status is derived
  from whether a component exists.
- Tooling is pnpm, Oxlint, Prettier. A test runner is added when the first
  seam below is worth locking.

### Tokens

- Handwritten CSS variables in the shadcn style. JSON token formats and
  generators are a later exploration, not v1.
- Colors are the "warm sand" oklch palette inherited from a previous project,
  limited to the standard shadcn semantic set (background, foreground, card,
  popover, primary, secondary, muted, accent, destructive, border, input,
  ring, the chart colors, the sidebar set). No raw palette layer is exposed to
  consumers, and the Colors page says so.
- Two-layer principle everywhere. A semantic layer consumers reach for, a raw
  layer for exceptions. Colors (semantic over oklch), typography (roles over
  the size scale), spacing (named steps over the numeric scale).
- Typography is semantic text roles defined in the theme as real utilities,
  sizes fixed and handpicked per role, HTML elements mapped to roles as
  defaults. The comparison of scale models lives in the typography decision
  note.
- Fonts are Geist (sans, UI and body), Fraunces (serif, top two title levels
  only, never inside components or body text), Geist Mono (code, keyboard
  keys, tabular numbers), self-hosted through fontsource.
- Spacing is the Tailwind numeric scale as raw with a short named set as the
  semantic layer. Radius, shadow, and letter-spacing scales are inherited.
- Motion is duration and easing tokens in the theme, enter and exit through
  tw-animate-css, reduced motion respected as a non-negotiable rule.
- All of the above is provisional. The aesthetic is discovered by iterating
  on the previews once they exist, and the palette, radii, shadows, and fonts
  are expected to change.

### Components

- The full shadcn registry on Base UI is installed. Every registry component
  has a page entry; a page without a component renders as TODO.
- Component pages are demo-first and lightweight. The demo comes first.
  Further sections (variants, when to use and the alternative, rules,
  accessibility) are added as they are written. No fixed heavy skeleton is
  required for a page to count as written.
- The docs shell (sidebar, page header, layout, theme toggle) is built from
  Sand's components and tokens. The docs site is the first consumer.

### Previews and blocks

- Four previews in v1, in build order cards, application, marketing,
  dashboard, in the style of tweakcn's preview pages. They follow the same
  idea without copying the pages.
- A preview is a page in a Previews sidebar section placed last. Switching
  between previews happens from the sidebar or from a control inside the
  preview page; either is acceptable.
- Previews are exempt from the standard docs page layout. Standard pages
  share a layout to encourage consistency; a preview gets the area its
  content needs.
- A block is a self-contained piece of one preview (a checkout card, a chat
  widget, a transactions list), built from Sand's components with hard-coded
  sample data. Blocks belong to their preview. Sand does not offer blocks to
  consumers in v1. Nothing outside the previews imports a block, so blocks
  can later be promoted to a reusable layer by moving them.
- No coverage rule. Previews start with examples like tweakcn's and grow to
  exercise more components over time.
- Previews are maintainer tooling for seeing the whole system and iterating
  on the aesthetic. They are not a consumer surface.

### Rules

- A rule is markdown under a `rules/` folder at the repository root. One file
  per topic, `system.md` for rules that span topics, `index.md` listing them
  all. This is the single source of truth.
- The docs page for a topic renders the same rule text. Sync is manual. A
  written maintainer procedure checks that the files and the pages agree.
- The minimum rule is a title and one sentence. Examples (do and don't, with
  rendered instances) are optional and encouraged. Rules start few and grow.
- Rules may constrain any part of Sand (a color, a font, a component). There
  is no fixed schema for where a rule may exist.
- A Guidelines sidebar section is not required. Cross-cutting rules live in
  `system.md`; if they earn a page, one is added then.
- A consumer agent reads the rules as markdown from the copied folder. A
  digest is not planned.

### Documentation structure

- Sidebar order is Overview, Foundations, Components, Mechanics, Previews.
- One preview container wraps every rendered example on the site (demos,
  variant sets, the mechanics showcase, the overview sample, the preview
  pages). It is a card-colored box on the page background with an optional
  tab strip (Preview, Code, Variants) and a toolbar that flips the container
  alone between light and dark or shows both side by side. It is the visual
  line between documentation and example content.
- Standard pages are a content column with a sticky rail holding only the
  page's section links. Preview pages are exempt and run full width.
- Overview: a realistic sample screen in the container first, then the two
  layers (Design and Mechanics) as equal panels, then one card per section.
  No status list.
- Foundations are Colors, Typography, Fonts, Spacing, Radius, Shadow, Motion,
  Icons. A foundation page shows its tokens rendered live in the container
  (for colors, every token as an equal square with name and hex, light block
  above dark block, hex copies on click), a table of the roles or scale, then
  the rules.
- Components are one page per registry component. Demo in the container with
  Preview and Code tabs, then Variants with a tab per group, then rules, then
  accessibility. Everything after the demo is optional.
- Rules render as a checklist (title, one sentence, optional do/don't
  disclosure). Pages never show where the rule file lives.
- Mechanics are one page per thing Sand is built on: role, what it owns, a
  rich showcase in the container, the parts used with links to the library,
  external links, alternatives considered with links. Which of React, Vite,
  Tailwind, and shadcn get a page of their own, beyond the five that exist
  (primitives, icons, charts, fonts, animation), is decided when the section
  is filled in. TODO: settle the Mechanics page list.
- Previews are the four pages above, a pill row to switch between them, the
  container full width.
- The agreed format was prototyped on 2026-09-19; the prototype and the
  format notes live with the build tickets under `.scratch/sand-build/`.

### Consumers and adoption

- The docs site is the first consumer. The example project, a small generic
  app (a to-do list or a kanban board) under `examples/`, is built after all
  docs pages are written and imports `sand` as a workspace package. It
  demonstrates Sand; it does not test adoption.
- Adoption is a git snapshot. A consumer copies `sand/` at a tagged version
  into its own pnpm workspace, adds it to the workspace, imports components
  and the stylesheet from the package, and owns the copy. Everything under
  `sand/` travels, including the docs site, so the consumer can run it and
  see their own edits. An npm package and a shadcn registry were rejected:
  the consumer's agent must be able to read and edit the whole source, and
  Sand stays free to add libraries and blocks the shadcn ecosystem does not
  carry.
- Adoption is agent-first. The consumer's agent reads `README.md`, which
  points at `installation.md`. For a new project the guide lists packages,
  files, and the workspace entry. For an existing project the guide has the
  agent list the changes and get confirmation before acting.
- Versions are git tags, semver. 0.0.1 when the in-repo example project
  works. 0.1.0 when a throwaway outside consumer has adopted Sand through the
  installation guide; its friction log is kept in the maintainer notes.
  1.0.0 when the maintainer calls Sand mature. `VERSION` inside `sand/` holds
  the tag.
- Update is one script inside `sand/` that overwrites the folder with the new
  tag. The agent recovers local edits from git before running it. This is a
  recorded decision to improve later; a merge-based update is the noted
  candidate. A release with breaking changes ships an upgrade guide under
  `guides/`.
- Consumers not on pnpm are out of scope until 0.1.0.

### Maintainer notes and workflow

- `.notes/` holds the maintainer's own notes, in their words. `index.md`,
  `journal.md` (one section per session), `decisions/` (one per foundation
  and mechanic, ADR style), `concepts/` (one file per concept learned,
  appended to when the concept recurs).
- `.handoff/` holds session handoffs. `.scratch/` holds agent-facing tracker
  files. Neither is a home for human notes.
- Session end is `/human-notes` (a short learning discussion, written to
  `.notes/concepts/` and the journal) then `/handoff`.
- Consumer pages do not carry reasoning. Decision notes are the maintainer
  side.
- The README is written last, beginner-friendly, with visuals showing what
  Sand is, how it is built, how it is used, and how it is installed once that
  is decided.

## Testing Decisions

- A good test checks behavior visible from outside. A page renders under its
  route, the sidebar lists what the registry says, a rule title in a rule
  file appears on its page.
- Two seams, and no more unless one earns it:
  - The page registry. Given the registry, the sidebar lists every section
    and page in order, each route renders its page, a page without a
    component renders the TODO stub, and preview pages render outside the
    standard layout.
  - The rules sync check. Every rule title in a topic's rule file appears on
    that topic's page, and every rule on a page exists in the file. It starts
    as the written maintainer procedure and may become a script or a test
    later.
- No component-level tests and no visual tests. Previews are checked by
  looking at them.
- No test runner exists yet. One is added when the first seam is worth
  locking. There is no prior art in this repository.

## Out of Scope

- A second framework or framework-agnostic tokens. Sand stays in the React
  ecosystem.
- Storybook or another workbench. The docs site is the workbench.
- Prop tables and exhaustive API documentation.
- JSON design-token sources and generators.
- A reusable block layer for consumers (a possible later step, not v1).
- A mail preview and any preview beyond the four in v1.
- Setup guides for mechanics beyond what the installation guide needs.
- App-specific palettes from the project that seeded the colors.

## Deferred, not out

- Deployment and hosting, until the pages exist and the README wants a link.
- A merge-based update that preserves consumer edits.
- Consumers that do not use pnpm.
- The example project's exact contents.
- The README's visuals and how they are produced.
- A single `design.md` holding the whole design layer as one document.

## Further Notes

- The decisions above were reached on the sand-spec wayfinder map under
  `.scratch/sand-spec/`. The map's tickets hold the detail behind each one.
- The Overview status list and the TODO pages keep the site from looking
  more finished than it is.
- Every session ends with a journal section and, when a decision was made, a
  decision note.
