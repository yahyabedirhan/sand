# Prototype workflow

This workflow composes the unchanged `/prototype` skill with Sand's persistent
prototype gallery. Read the skill first for the exploration method, then apply
this repository contract instead of its throwaway-branch cleanup.

## Create an artifact

1. Add `prototype/src/prototypes/<slug>/prototype.tsx` and export a `prototype`
   definition with at least one React variant.
2. Add a lowercase `index.md` in the entry folder that points at its files.
3. Keep prototype-specific code inside the entry folder. Add experimental
   dependencies to `prototype/package.json`, not `sand/package.json`.
4. Run `pnpm prototype` and inspect every variant in the gallery. Keep the
   `?variant=` URL shareable.

The gallery discovers entries by file convention. Agents do not edit a route
or sidebar registry.

## Record a decision

Keep every variant in the entry. When the user chooses one, set `selected` and
`decidedAt`; set `status` to `decided` when useful. Metadata is best effort and
may be omitted.

Implement the chosen direction in its production home as fresh production
code. The gallery artifact remains as the primary source for the alternatives.

## Completion

The work is complete when the entry is navigable in the gallery, its variants
run, the selected variant is marked when known, and the gallery builds and
typechecks.
