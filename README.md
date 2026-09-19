# Sand

Sand is a source-owned design system for React applications. It brings visual foundations, editable components, usage rules, and a documentation site into a single package.

Instead of publishing an opaque npm dependency, Sand is distributed as a versioned snapshot. A project copies the [`sand/`](sand/) folder into its pnpm workspace and owns the source. People and agents can inspect, adapt, and run the complete system alongside the application that uses it.

## Start here

- **Explore Sand locally:** follow [Run the project](#run-the-project).
- **Install or update Sand in another project:** follow [sand/installation.md](sand/installation.md).
- **Understand the product direction:** read the [design-system spec](.specs/00-sand-design-system.md).
- **Work in this repository:** read [AGENTS.md](AGENTS.md).

## The system

Sand separates the visual language from the tools used to implement it.

### Design

Design is the library-independent layer. It defines color, typography, fonts, spacing, radius, shadow, motion, and icons. Each foundation provides semantic choices for normal use and a smaller raw layer for exceptional cases.

The constraints for those choices live as Markdown in [`sand/rules/`](sand/rules/index.md). The rule files are the source of truth, and the documentation site renders the same rules beside the foundations they govern.

### Mechanics

Mechanics is the implementation layer. Sand uses React, TypeScript, Vite, Tailwind CSS, shadcn conventions, Base UI, Tabler Icons, Recharts, Fontsource, and tw-animate-css.

Components import these libraries directly. The documentation site explains what each dependency owns and demonstrates the result with live examples.

```text
design tokens + rules
          ↓
     components
          ↓
 docs, previews, and consumer apps
```

## What Sand includes

- **Foundations** define the visual tokens and usage constraints for light and dark themes.
- **Components** provide editable React source for the full Sand component set.
- **Documentation** renders the real tokens and components, keeping examples tied to the implementation.
- **Previews** combine components into realistic screens so system-wide visual changes can be inspected quickly.
- **Rules** give people and agents the same constraints in a browser-independent format.
- **Adoption tools** cover installation, updates, version discovery, and breaking releases.

## Use Sand in an application

A consumer adds `sand` as a workspace dependency and imports its source exports.

```tsx
import { Button } from "sand/ui/button";
import "sand/styles.css";
```

Components are exported from `sand/ui/*`, hooks from `sand/hooks/*`, and the stylesheet from `sand/styles.css`. The exports point directly to source files, so there is no package build between Sand and its consumer.

Sand's components use `@/` for internal imports. A consuming application aliases `@/` to `sand/src` in Vite and TypeScript and uses relative paths for its own files. The complete workspace, React, Tailwind, and alias setup is in [sand/installation.md](sand/installation.md).

## Run the project

Install the workspace and start the documentation site.

```bash
pnpm install
pnpm dev
```

The site is Sand's first consumer. One page registry generates its navigation and routes across Overview, Foundations, Components, Mechanics, and Previews. Every page uses the same tokens and component source exported to applications.

Run the example consumer separately.

```bash
pnpm example:kanban
```

The example imports Sand as a workspace dependency and demonstrates the same integration used by an external project.

## Work on Sand

Use the root workspace commands for normal development.

```bash
pnpm dev          # run the documentation site
pnpm example:kanban # run the example consumer
pnpm check        # typecheck, lint, format-check, and test
pnpm build        # build Sand and every example
```

Read the relevant file in [`sand/rules/`](sand/rules/index.md) before changing a foundation or component. `pnpm check` also verifies that rule titles in Markdown match the titles rendered by the documentation pages.

The current snapshot version is stored in [`sand/VERSION`](sand/VERSION). Releases use Git tags. The consumer's update script replaces its snapshot with the `sand/` folder from a requested tag; breaking releases add a guide under [`sand/guides/`](sand/guides/index.md).

## Repository map

| Path | Purpose |
| --- | --- |
| [`sand/`](sand/index.md) | The complete package copied into consumer workspaces |
| [`sand/src/styles.css`](sand/src/styles.css) | Light and dark tokens mapped to Tailwind utilities |
| [`sand/src/components/ui/`](sand/src/components/ui/) | React component source |
| [`sand/src/pages/`](sand/src/pages/index.md) | Foundation, component, mechanics, and preview pages |
| [`sand/rules/`](sand/rules/index.md) | Source-of-truth usage constraints |
| [`examples/`](examples/index.md) | Applications that consume Sand as a workspace package |
| [`.specs/`](.specs/index.md) | Product specifications |
| [`.notes/`](.notes/index.md) | Maintainer decisions, concepts, and journal |
| [`.handoff/`](.handoff/index.md) | Session continuation records |

Everything under `sand/` travels to a consumer. Specifications, maintainer notes, handoffs, and example applications remain in this repository.
