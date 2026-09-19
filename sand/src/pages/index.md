# pages

Documentation pages, one folder per sidebar section. A page is registered in [docs/registry.ts](../docs/registry.ts); until then it renders as TODO. Build a page from the pieces in [docs/page.tsx](../docs/page.tsx) and [docs/preview-container.tsx](../docs/preview-container.tsx). Component pages use the shared demo-first pattern in [docs/component-page.tsx](../docs/component-page.tsx). The format is `.scratch/sand-build/page-format.md` at the repository root.

- [overview/](overview/) - `overview.tsx`, `sample-screen.tsx` (the workspace settings sample)
- [foundations/](foundations/index.md) - `colors.tsx`, `typography.tsx`, `fonts.tsx`, `spacing.tsx`, `radius.tsx`, `shadow.tsx`, `motion.tsx`, `icons.tsx`
- [components/](components/) - form-control and overlay pages; each uses the shared demo-first component page pattern
- [mechanics/](mechanics/) - nine pages; `mechanic-page.tsx` is the shared layout
- [previews/](previews/) - full-width compositions for seeing Sand as a whole
