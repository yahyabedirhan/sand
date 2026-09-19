# kanban

Run this board from the repository root with `pnpm example:kanban`.

Import components from `sand/ui/...` and the stylesheet from `sand/styles.css`.
Point `@/` at the sand package source in Vite and TypeScript; exported
components use that alias. The decision is in
[`.notes/decisions/consumer-alias.md`](../../.notes/decisions/consumer-alias.md).

- [package.json](package.json) - workspace dependency on `sand`, scripts
- [vite.config.ts](vite.config.ts) - `@/` alias to sand source, Tailwind plugin
- [src/app.tsx](src/app.tsx) - columns and movable cards
