# Sand

A design system and its documentation site, one React + Vite app in a pnpm workspace.

`sand/` is the package. Copy that folder into another workspace and own the files. `examples/kanban` imports it the same way a consumer does.

## Getting started

```bash
pnpm install
pnpm dev
```

That runs the docs site. `pnpm kanban` runs the example board. `pnpm check` typechecks, lints, checks format, and tests. Other scripts live in `package.json`.

## Install in another project

Follow [sand/installation.md](sand/installation.md). A new project walks the whole guide. An existing project lists the changes, then waits for confirmation before writing files.

Consumer agent rules for a snapshot live in [sand/AGENTS.md](sand/AGENTS.md).

## Repository layout

```text
sand/       package a consumer copies (tokens, components, docs, rules)
examples/   workspace apps that import sand
.specs/     product spec
```

Maintainer layout and working rules are in [AGENTS.md](AGENTS.md). The product spec is [.specs/00-sand-design-system.md](.specs/00-sand-design-system.md).
