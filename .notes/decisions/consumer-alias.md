# Consumer `@/` alias

Status: decided, 2026-09-19

## Context

Exported `sand/ui/*` files import `@/...` internally (other UI files, hooks).
A Vite app that imports those files must resolve `@/` or the imports fail.
Ticket 01 left this open for the first example project.

## Options

1. Alias `@/` in the consumer's Vite and TypeScript config to the sand
   package source (`sand/src`).
2. Rewrite every sand export to relative imports so a consumer can keep
   `@/` for its own files.

## Decision

Option 1. The kanban example aliases `@/` to the sand package source and
uses relative imports for its own files. Ticket 17 does not rewrite
exports.

## Consequences

- A consumer cannot also use `@/` for its own source while this stands.
- Ticket 18's installation guide documents this alias. The example is in
  `examples/kanban/` (`vite.config.ts`, `tsconfig.app.json`).
- Tailwind v4 ignores `node_modules`. `sand/src/styles.css` lists
  `@source "./components/ui"` and `@source "./hooks"` so importing the
  stylesheet is enough to generate component classes.
- A later ticket can still rewrite exports if consumers need `@/` for
  themselves.
