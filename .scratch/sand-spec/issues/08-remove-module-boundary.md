# 08 - Remove the module boundary from the code

Type: task
Status: resolved
Blocked by: 07

## Question

Execute the decision of ticket 07. Rewrite every `@/modules/primitives`,
`@/modules/icons`, `@/modules/charts` import in `src/` back to the library
(Base UI subpaths per namespace, `@tabler/icons-react`, `recharts`), inline
the fonts and animation `@import`s from `src/modules/*/index.css` into
`src/styles.css`, delete `src/modules`, remove the `no-restricted-imports`
rule and its `src/modules/**` override from `.oxlintrc.json`, drop the
third-party-import hard rule from `AGENTS.md`, mark
`.notes/decisions/module-boundary.md` superseded with a pointer to ticket 07,
rename the docs section and folder from Modules to Mechanics (registry
section name, `src/pages/modules` to `src/pages/mechanics`, `ModulePage`
fields role/choice/dependents, no swap field), update `src/index.md`,
`src/pages/index.md`, `README.md`. `pnpm check` and `pnpm build` must pass.
A draft script for the import rewrite was written in the 2026-09-19 session
and rejected before running; it parsed the export map in
`src/modules/primitives/index.ts` to regroup specifiers by Base UI subpath.
The maintainer wants to see the change before it runs; ask first.

## Answer

Resolved 2026-09-19. The maintainer approved the rewrite script's dry-run
diff before it ran.

- Imports: every `@/modules/primitives` name mapped to its
  `@base-ui/react/<subpath>` from the old export map, `@/modules/icons` to
  `@tabler/icons-react`, `@/modules/charts` to `recharts`. 49 files in
  `src/components/ui` and `src/docs`. No `@/modules` reference remains.
- `src/styles.css` imports `tw-animate-css` and the eight fontsource faces
  directly. `src/modules/` deleted.
- `.oxlintrc.json`: `no-restricted-imports` and the `src/modules/**` override
  removed; the `components/ui` override stays.
- `src/pages/modules` is now `src/pages/mechanics`, `mechanic-page.tsx`
  exports `MechanicPage` and `Mechanic` (name, role, choice, dependents).
  Registry section renamed to Mechanics.
- Prose: `AGENTS.md` hard rule dropped and two module mentions reworded,
  `README.md`, `src/index.md`, `src/pages/index.md`, `CONTEXT.md` Sand entry,
  `.notes/decisions/module-boundary.md` superseded with a pointer to 07,
  `.notes/decisions/index.md` hook marked superseded.
- `pnpm check` and `pnpm build` pass.
- Code review applied: colon-free comment in `styles.css`, icons role text
  no longer claims a curated set, shorter `mechanic-page.tsx` header.

TODO: `.notes/decisions/{primitives,icons,charts,fonts,animation}.md` still
describe swap paths and `src/modules/*`; the icons note argues for a curated
export list that no longer exists. They are the human's notes, so rewrite
them with the maintainer, not in a ticket.
