# Icons

Status: decided, 2026-09-14

## Context

Components and the docs shell need an icon set. The module entry point also decides which icons exist in Sand at all.

## Options

- Tabler Icons, `@tabler/icons-react`. Inherited from a previous project.
- Lucide, the shadcn default.

## Decision

Tabler, inherited, not chosen on merit. The module exports a curated list rather than `export *`: the list is Sand's icon set, a new icon is added there first, and a swap re-maps names one by one.

## Consequences

- The Icons page can render the whole set from the module's exports.
- A component that needs an icon outside the list fails lint if it imports the library directly, which is the intended nudge to add it to the set.
