# Icons

Status: decided, 2026-09-14

## Context

Components and the docs shell need an icon set.

## Options

- Tabler Icons, `@tabler/icons-react`. Inherited from a previous project.
- Lucide, the shadcn default.

## Decision

Tabler, inherited, not chosen on merit. Components import named glyphs from `@tabler/icons-react`. The Icons foundation page lists the glyphs in use; a new icon is added there when a component needs it.

## Consequences

- The Icons page renders the glyphs currently used in components and the docs shell.
- TODO: keep that list in sync when a component or the docs shell adds a glyph.
