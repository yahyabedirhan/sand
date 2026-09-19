# Primitives

Status: decided, 2026-09-14

## Context

The registry needs an unstyled, accessible primitive layer for dialogs, menus, selects, and the like.

## Options

- Base UI (`@base-ui/react`), the library shadcn's `base-*` styles are built on.
- Radix UI, the library the older shadcn styles are built on.

## Decision

Base UI, inherited from a previous project so its components could be copied freely. Not chosen on merit; the comparison with Radix is still to be done and would be the first thing to revisit if the primitives ever cause trouble.

## Consequences

- Composition uses Base UI's `render` prop rather than Radix's `asChild`.
- Components import Base UI directly. There is no primitives re-export folder.
