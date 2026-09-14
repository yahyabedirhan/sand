# 00 - Sand Design System

Status: planned
Last updated: 2026-09-14

Sand is an example design system and its consumer-facing documentation site,
built as one React + Vite application. The repository exists to learn what a
design system is made of, to write the usage rules that most systems leave
implicit, and to show the result publicly.

## Problem Statement

I have consumed and revamped design systems, but I have never sat down and
defined one from the ground up: which tokens exist, why they are layered the way
they are, which fonts are allowed where, which color pairs are legal, when an
opacity is acceptable, and what a consumer is supposed to reach for first. Most
design-system documentation I have seen documents component props and leaves
these rules in people's heads.

I also want to understand a design system as a set of modules. When a team wants
to swap the icon library, the chart library, or the primitive component
library, what has to change and what must not? Without a clear module boundary
that question is answered by grep.

## Solution

Build Sand: an opinionated example design system on top of the shadcn
conventions, and a documentation site whose pages are React components that
render the real tokens and components live. The site is written for consumers
of the system, not maintainers. Every foundation and component page follows a
fixed skeleton and carries do/don't rules with rendered examples.

The reasoning behind each choice (which fonts, which type-scale model, which
primitive library) is kept as maintainer-facing decision notes inside the
repository, separate from the consumer pages. The documentation site is itself
the first consumer of Sand: its sidebar, page layout, and theme toggle are built
from Sand's tokens and components.

Third-party dependencies are treated as swappable modules with one entry point
each, and the boundary is enforced by the linter rather than by convention.

## User Stories

### Consumer of the design system

1. As a consumer, I want a sidebar listing every section and page, so that I can find the rule I need without searching.
2. As a consumer, I want an Overview page that states Sand's principles in a few sentences, so that I understand the intent before the details.
3. As a consumer, I want a "start here" list on the Overview, so that I know the three things to reach for first.
4. As a consumer, I want the Overview to show which pages are complete and which are still `TODO`, so that the site tells me its own state honestly.
5. As a consumer, I want a Colors page that presents only semantic tokens, so that I never pick a raw value.
6. As a consumer, I want the Colors page to explain the `x` / `x-foreground` pairing rule, so that I always put legible text on a surface.
7. As a consumer, I want the Colors page to explain surface stacking (`background` under `card` under `popover`), so that layered surfaces stay consistent.
8. As a consumer, I want the Colors page to explain when an opacity modifier is acceptable and when it is not, so that half-transparent colors are used deliberately.
9. As a consumer, I want the chart color set and the sidebar color set documented on the Colors page, so that I know they exist and what they are for.
10. As a consumer, I want every color rendered in both light and dark, so that I can see the pairing hold in both themes.
11. As a consumer, I want a Typography page that lists semantic text tokens (`heading-1`, `heading-2`, `body`, `caption`, and so on), so that I pick a role rather than a pixel size.
12. As a consumer, I want the Typography page to say that the raw size scale is for exceptions only, so that I understand the two-layer rule.
13. As a consumer, I want a Fonts page that names the three faces (sans, serif, mono) and the role of each, so that I know which font is legal where.
14. As a consumer, I want the Fonts page to state that the serif face is for the top two title levels only and never inside components, so that the display face keeps its effect.
15. As a consumer, I want the Fonts page to state what the mono face is for (code, keyboard keys, tabular numbers), so that mono is never used decoratively.
16. As a consumer, I want a Spacing page with a named t-shirt scale, so that spacing choices are limited and consistent.
17. As a consumer, I want a Radius page, so that I know which radius belongs on which element size.
18. As a consumer, I want a Shadow page, so that I know which elevation each shadow step represents.
19. As a consumer, I want a Motion page with durations, easings, and the reduced-motion rule, so that animation is consistent and respects user preference.
20. As a consumer, I want an Icons page that shows the icon set, its sizing rules, and how icons pair with text, so that icons look consistent across the product.
21. As a consumer, I want a Modules page listing what libraries Sand is built from, so that I know what is under the hood.
22. As a consumer, I want a page for every component in the registry, so that no component is undocumented.
23. As a consumer, I want every component page to follow the same skeleton, so that I know where to look on any page.
24. As a consumer, I want every component page to have a "when not to use this, use X instead" section, so that I pick the right component.
25. As a consumer, I want variants rendered live on each component page, so that I see the actual output rather than a screenshot.
26. As a consumer, I want accessibility notes on each component page, so that I do not break keyboard or screen-reader behavior.
27. As a consumer, I want rules written as do/don't pairs with a rendered example each, so that every rule is concrete.
28. As a consumer, I want a Guidelines section for cross-cutting rules that belong to no single token or component, so that combination rules have a home.
29. As a consumer, I want a light/dark toggle that defaults to my system preference and remembers my choice, so that I can check both themes.
30. As a consumer, I want a consistent page skeleton on every foundation page (what it is, the tokens, the rules, examples), so that pages are predictable.

### Maintainer of the design system

31. As a maintainer, I want a decision note per foundation and module recording the options considered and the pick, so that reasoning survives beyond the person who made it.
32. As a maintainer, I want the typography decision note to compare fixed handpicked sizes, ratio-based scales, raw-only utilities, and semantic-only tokens before stating the pick, so that the brainstorm is the deliverable, not just the outcome.
33. As a maintainer, I want the consumer pages to stay free of reasoning, so that consumer and maintainer documentation do not blur.
34. As a maintainer, I want each third-party library imported from exactly one module entry point, so that swapping a library touches one folder.
35. As a maintainer, I want the linter to fail when a component imports a third-party library directly, so that the module boundary is a fact rather than a diagram.
36. As a maintainer, I want the Modules page to list, for each module, its role, current choice, dependents, alternatives considered, and how to swap it, so that a swap is a documented procedure.
37. As a maintainer, I want a single page registry that drives both the sidebar and the routes, so that adding a page is one entry.
38. As a maintainer, I want the page registry to carry a status per page, so that `TODO` pages render automatically in the sidebar and on the Overview.
39. As a maintainer, I want a journal with one section per working session, so that the next session knows what changed and why.
40. As a maintainer, I want concept notes for things learned along the way, so that the learning is kept in my own words.
41. As a maintainer, I want the repository to follow my standard project layout (agent rules file, pinned skills, secrets guard), so that it behaves like my other repositories.
42. As a maintainer, I want no employer or company names anywhere in the repository, so that it can be shown to anyone.

## Implementation Decisions

### Positioning and constraints

- Purpose, in priority order: a learning vehicle first, a public portfolio piece second. Reusable-package ergonomics are not a goal.
- No employer, company, or hiring-process names anywhere in the repository, including the agent rules file, notes, specs, and commit messages. The rule is phrased generically in the agent rules file so the rule itself does not leak a name.
- The system is named Sand, after its palette.
- Public repository, deployment deferred. A host is chosen at the end of the project, not now.
- No time limit. Sessions continue until the work is done.

### Application shape

- One plain React 19 + Vite + TypeScript (strict) application. No monorepo, no framework-agnostic token package yet. Documentation pages are TSX components. A framework-agnostic layer is a possible later evolution, not the first intention.
- Tailwind v4 through the Vite plugin, with the shadcn CSS variables mapped into the Tailwind theme, following the shadcn default. Utilities are the consumer surface; the variables are the token layer beneath them.
- Dark mode from day one: a `dark` class on the root element switching the same variable names, default from the system preference, choice persisted in local storage, toggle in the sidebar footer.
- Routing through a client router. A single page registry (section, slug, title, component, status) drives both the sidebar and the routes.
- Tooling: pnpm, Oxlint (not ESLint), Prettier. Test runner added only when something is worth testing.
- Repository bootstrap follows the standard new-project workflow: agent rules file with a symlinked Claude alias, default skill set installed and pinned, baseline ignores, secrets-guard pre-commit hook and GitHub Action, lowercase `index.md` per folder pointing at its files.

### Tokens

- Starting point is handwritten CSS variables in the shadcn style. JSON design-token formats and generators are a later exploration recorded in a concept note, not a v1 decision.
- Colors: the "warm sand" oklch palette already in use in my schedule dashboard, light and dark sets, limited to the standard shadcn semantic variables (background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, the five chart colors, the sidebar set). App-specific palettes from that dashboard are not carried over. There is no raw palette layer exposed to consumers; that is deliberate and stated on the Colors page.
- Two-layer principle applied everywhere: a semantic layer consumers reach for, a raw layer for exceptions. Colors (semantic over oklch), typography (semantic text tokens over the size scale), spacing (named steps over the numeric scale).
- Typography: semantic text tokens (`heading-1` through smaller headings, `body`, `caption`, and similar) defined in the theme so they are real utilities, on top of the standard size scale. Sizes are fixed and handpicked per role; HTML elements map to roles as defaults. The options considered are recorded in the typography decision note.
- Fonts: Geist (sans, all UI and body), Fraunces (serif, top two title levels only, never inside components or body text), Geist Mono (code, keyboard keys, tabular numbers). All self-hosted through the fontsource packages.
- Spacing: shadcn/Tailwind numeric scale as raw, a short named set (xs through 2xl) as the semantic layer.
- Radius, shadow, and letter-spacing scales carried over from the dashboard theme.
- Motion: duration and easing tokens in the theme, enter/exit animation via the animation module, reduced-motion respected as a non-negotiable rule.

### Components

- The full shadcn registry added at once, using the Base UI primitive library (not Radix), in the same style the dashboard uses. Undocumented components appear in the sidebar as `TODO` pages until their page is written.
- The docs shell (sidebar, page header, layout, theme toggle) is built from Sand components and tokens; the site is the system's first consumer.

### Modules

- Five modules, each with one entry point that is the only place its library is imported: Primitives (Base UI; Radix as the alternative considered), Icons (Tabler; Lucide as the alternative), Charts (Recharts; alternatives noted), Fonts (fontsource; hosted font link and manual self-hosting as alternatives), Animation (`tw-animate-css`; a motion library as the alternative).
- Enforcement through the linter's restricted-imports rule so direct imports of those libraries outside their module fail lint. Oxlint 1.83 ships `eslint/no-restricted-imports`, verified on 2026-09-14, so no second linter is needed.
- Forms and date handling are not modules; they are described inside the components that use them.

### Documentation structure

- Sidebar order: Overview, Foundations, Components, Guidelines.
- Overview holds the Overview page (principles, start-here list, status list derived from the registry) and the Modules page.
- Foundations: Colors, Typography, Fonts, Spacing, Radius, Shadow, Motion, Icons.
- Components: one page per registry component.
- Guidelines: cross-cutting rules (color pairing, opacity usage, and whatever else does not belong to one token or component).
- Foundation page skeleton: What it is, The tokens (rendered live), Rules (do/don't pairs with a rendered example each), Examples.
- Component page skeleton: Purpose, Anatomy (named parts), When to use / when not to use (with the alternative named, required), Variants (rendered live), Rules (do/don't), Accessibility notes. No prop tables.
- Modules page card per module: Role in the system, Current choice, What depends on it, Alternatives considered, How to swap (the one folder to change).

### Maintainer notes

- `notes/index.md`, `notes/journal.md` (one section per session, written at session end), `notes/decisions/<topic>.md` (one per foundation and module, ADR style: context, options, decision, consequences), `notes/concepts/` for learning notes (design-token formats, oklch, the Tailwind v4 theme model, and so on).
- Consumer pages do not carry reasoning. Decision notes are the maintainer side.

### First session scope

- Bootstrap only: standard project workflow, Vite app, Tailwind, fonts, shadcn init and all components, module entry points and lint rule, page registry, sidebar with every section and `TODO` pages, theme toggle, first commit. The GitHub repository is created only after explicit confirmation in that moment.
- Typography is the first real page, in the following session.

## Testing Decisions

- A good test checks behavior visible from outside: a page renders under its route, the sidebar lists what the registry says, the theme toggle switches the root class, the lint rule rejects a forbidden import.
- No test runner in the initial bootstrap. Add one when the first of these is worth locking down; the page registry and the lint boundary are the likely first candidates.
- The lint boundary is verified by running the linter against a deliberately wrong import during setup, so the rule is proven before it is relied on.
- Prior art: none in this repository yet. The schedule dashboard in my vault has a small build test that can serve as the shape reference.

## Out of Scope

- Framework-agnostic tokens, a Vue consumer, or any second framework.
- A separate package layout or publishing to a registry.
- Storybook or any maintainer-facing component workbench.
- Prop tables or exhaustive API documentation for components.
- JSON design-token sources and generators (exploration note only).
- Deployment and hosting choice.
- App-specific palettes from the dashboard that seeded the colors.
- Forms and date-handling as standalone modules.

## Further Notes

- Bootstrap follows the standard new-project workflow in my workstation repository; that document is the procedure, this spec is the product.
- Every session ends with a journal entry and, when a decision was made, a decision note.
- The Overview status list and the `TODO` pages are the honesty mechanism: the site must never look more finished than it is.
