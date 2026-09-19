# sand

The design system package and its docs site, one React + Vite app. Everything in this folder travels to a consumer; nothing outside it does.

Sibling workspace packages import it as `sand` through the `exports` map in `package.json`, which points at source files with no build step. Exported components import `@/...` internally. A consumer aliases `@/` to this package's `src/` in its own Vite and TypeScript config.

Adopt or update through [installation.md](installation.md).

- [README.md](README.md) - human entry; points at the installation guide
- [installation.md](installation.md) - new project, existing project, and the overwrite script
- [AGENTS.md](AGENTS.md) - rules for an agent working from this snapshot
- [VERSION](VERSION) - the current tag, without the `v` prefix
- [guides/](guides/index.md) - upgrade guides for breaking releases
- [scripts/](scripts/index.md) - `update-sand` overwrites this folder from a git tag
- [package.json](package.json) - name, dependencies, scripts, and the exports map
- [src/](src/index.md) - the app: tokens, components, hooks, docs shell, pages
- [rules/](rules/index.md) - usage constraints, one markdown file per topic
- [components.json](components.json) - shadcn CLI config; `pnpm dlx shadcn add` runs from this folder
- [.oxlintrc.json](.oxlintrc.json) - lint rules
