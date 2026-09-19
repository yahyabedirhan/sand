# src

The app. Entry is `main.tsx`, which loads `styles.css` and mounts `app.tsx`.

- [styles.css](styles.css) - the token layer: semantic variables, light and dark, mapped to utilities
- [app.tsx](app.tsx) - providers and the router, routes generated from the registry
- [docs/](docs/index.md) - the documentation shell: registry, sidebar, theme, page skeleton pieces
- [pages/](pages/index.md) - documentation pages, one folder per sidebar section
- `components/ui/` - the shadcn registry, generated; components import their libraries directly, as shadcn generates them. No index, the file names are the list.
- `hooks/` - generated with the registry
