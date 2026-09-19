# 07 - What a module is

Type: grilling
Status: resolved
Blocked by: none

## Question

The spec, `CONTEXT.md`, and the code treat a module as a code boundary: one
folder per third-party library, one entry point, a lint rule that fails any
direct import elsewhere. The maintainer means something else: a module is a
conceptual unit, the documentation of what Sand is built upon, for
maintainers and consumers to see the dependencies. Decide what a module is,
what happens to the built boundary and lint rule, which dependencies count
as modules, and what the Modules docs pages carry.

## Answer

Resolved 2026-09-19 by grilling. Execution moved to ticket 08.

- Sand has two layers. **Design** is the raw material: fonts, colors,
  spacing, type roles, radii, motion, and the rules behind them. It could in
  principle be one `design.md` and be realised without Tailwind or without a
  given component library. **Mechanics** is how this repository realises the
  design: React, Vite, Tailwind, the shadcn conventions, Base UI, Tabler,
  Recharts, fontsource, tw-animate-css.
- "Module" as a code boundary was a misunderstanding. The `src/modules`
  folders, the import repointing in `src/components/ui`, the lint rule, and
  the AGENTS.md hard rule about third-party imports are to be removed
  (ticket 08). Components import their libraries directly, as shadcn
  generates them.
- Mechanics are documented as what Sand is built on, for maintainers and
  consumers to see the dependencies. They are not presented as swappable and
  get no setup guides. The existing Modules docs pages become the Mechanics
  section; the "How to swap" field goes.
- Spec stories 34, 35, 36 (one entry point, lint fails, swap touches one
  folder) are dropped. The Modules module page skeleton is replaced by a
  Mechanics page skeleton: role, current choice, what depends on it.
- The terms Design and Mechanics are provisional; the maintainer said
  "maybe". Confirm the two names when writing the spec.
