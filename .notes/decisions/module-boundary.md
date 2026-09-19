# Module boundary

Status: superseded, 2026-09-19

Superseded by ticket 07 of the sand-spec map (`.scratch/sand-spec/issues/07-module-terminology.md`). Components import their libraries directly. There is no code-level module boundary and no lint rule that restricts imports.

The options and decision below are historical. They describe a layout that was removed.

## Context

An earlier spec treated five third-party libraries as swappable units, each imported in exactly one place, with the linter failing on a direct import anywhere else. The shadcn registry, as generated, imports Base UI, Tabler, and Recharts directly in `components/ui`.

## Options

1. Treat `components/ui` as inside the boundary: generated code may import libraries directly, only pages and the shell go through wrappers. Cheap, but a swap still touches sixty files, and the lint rule would have to exempt the folder.
2. Repoint the generated components at wrapper entry points and keep the lint rule strict everywhere except those wrappers. Each `shadcn add` afterwards needs the same repointing.
3. Skip lint enforcement and rely on convention.

## Decision

Option 2 was the live choice until 2026-09-19. Wrappers lived in one folder per library, `index.ts` for JavaScript libraries and `index.css` for CSS-only ones (fonts, animation), because Tailwind needs CSS imports inside the stylesheet it compiles.

The rule was `no-restricted-imports` with one pattern group per library, turned off under those wrapper folders. It was proven by linting a file with two direct imports before the rule was relied on.

## Consequences

Those wrappers are gone. Components import Base UI, Tabler, and Recharts directly. Fonts and animation are `@import`s in `styles.css`. A swap is a search across the files that use the library.

- `useRender`, `mergeProps`, and `DirectionProvider` are Base UI helpers, not components. They are imported from Base UI where they are used.
- `chart.tsx` is written against the Recharts API; a swap changes that component together with every other Recharts import.
