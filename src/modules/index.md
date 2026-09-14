# modules

One folder per third-party library, one entry point each. The lint rule rejects a direct import anywhere else. Reasoning is in [notes/decisions](../../notes/decisions/index.md).

- [primitives/](primitives/index.ts) - Base UI namespaces
- [icons/](icons/index.ts) - the icon set, curated
- [charts/](charts/index.ts) - Recharts
- [fonts/](fonts/index.css) - fontsource faces
- [animation/](animation/index.css) - tw-animate-css
