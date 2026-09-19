# sand

The design system package and its docs site, one React + Vite app. Everything in this folder travels to a consumer; nothing outside it does.

Sibling workspace packages import it as `sand` through the `exports` map in `package.json`, which points at source files with no build step. Exported components import `@/...` internally, so a sibling package needs the same `@/` alias to `sand/src` in its own Vite and TypeScript config. TODO: settle this when the first example project is built (ticket 17).

- [package.json](package.json) - name, dependencies, scripts, and the exports map
- [src/](src/index.md) - the app: tokens, components, hooks, docs shell, pages
- [rules/](rules/index.md) - usage constraints, one markdown file per topic
- [components.json](components.json) - shadcn CLI config; `pnpm dlx shadcn add` runs from this folder
- [.oxlintrc.json](.oxlintrc.json) - lint rules
