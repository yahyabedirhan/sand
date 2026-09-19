# Module boundary

Status: superseded, 2026-09-19

Superseded by ticket 07 of the sand-spec map (`.scratch/sand-spec/issues/07-module-terminology.md`); components import their libraries directly.

## Context

The spec treats five third-party libraries as swappable modules, each imported in exactly one place, with the linter failing on a direct import anywhere else. The shadcn registry, as generated, imports Base UI, Tabler, and Recharts directly in `components/ui`.

## Options

1. Treat `components/ui` as inside the boundary: generated code may import libraries directly, only pages and the shell go through modules. Cheap, but a swap still touches sixty files, and the lint rule would have to exempt the folder.
2. Repoint the generated components at the module entry points and keep the lint rule strict everywhere except `src/modules`. Each `shadcn add` afterwards needs the same repointing.
3. Skip lint enforcement and rely on convention.

## Decision

Option 2. The boundary is only worth having if it is a fact, and the registry is the biggest consumer. Modules live at `src/modules/<name>` with a single entry point, `index.ts` for JavaScript libraries and `index.css` for CSS-only ones (fonts, animation), because Tailwind needs CSS imports inside the stylesheet it compiles.

The rule is `no-restricted-imports` with one pattern group per library, turned off under `src/modules/**`. It was proven by linting a file with two direct imports before the rule was relied on.

## Consequences

- Regenerating a component with `shadcn add` reintroduces direct imports; lint catches it, and the fix is a one-line `sed` on the import source.
- `useRender`, `mergeProps`, and `DirectionProvider` are Base UI helpers, not components, but they still belong to the primitives module because they are Base UI API.
- The charts module is `export *` because `chart.tsx` is written against the Recharts API; a swap changes the module and that component together. This is stated on the Modules page.
- The lint rule cannot see CSS `@import`s, so the fonts and animation boundary is convention plus the stylesheet layout.
