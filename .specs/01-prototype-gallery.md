# Prototype gallery

Build a local Vite app at `prototype/` for durable interactive design studies.
It consumes Sand as a workspace package and stays separate from the docs app.

## Contract

- `pnpm prototype` starts the gallery.
- Each entry lives under `prototype/src/prototypes/<slug>/` and exports named
  React variants from `prototype.tsx`.
- The app discovers entries by convention and owns navigation, URL state, and
  variant switching.
- Metadata is optional. Entries may record `exploring`, `decided`, or
  `superseded`, a selected variant, and a decision date.
- Decided entries retain every variant. The selected variant opens first and
  carries a check in the switcher.
- Prototypes must build and typecheck. Tests remain specific to the question
  being explored rather than mandatory gallery infrastructure.
- The gallery is local-only. It has no deployment target.

## First artifact

Move the code-preview control study out of the docs app. Preserve variants A,
B, and C, with C selected on 2026-09-20. Use that decision to implement dark,
syntax-highlighted code blocks in Sand with a language label and copy action.
