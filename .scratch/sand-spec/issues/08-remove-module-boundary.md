# 08 - Remove the module boundary from the code

Type: task
Status: open
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
