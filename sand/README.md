# Sand

This project owns this Sand snapshot. Its tokens, components, rules, and documentation site live together in this folder and can be adapted with the application that uses them.

The installed version is recorded in [VERSION](VERSION).

## Use Sand

Import components from `sand/ui/*`, hooks from `sand/hooks/*`, and the shared stylesheet from `sand/styles.css`.

```tsx
import { Button } from "sand/ui/button";
import "sand/styles.css";
```

The application must alias `@/` to this package's `src/` directory in Vite and TypeScript. Sand uses that alias internally, so the application should use relative paths for its own files. The full integration is documented in [installation.md](installation.md).

## Follow the rules

Read [rules/index.md](rules/index.md) before using or changing a Sand topic. The linked Markdown files contain the source-of-truth constraints for colors, typography, fonts, spacing, radius, shadow, motion, icons, and the system as a whole.

Run the local documentation site to inspect the foundations, component demos, mechanics, and composed previews.

```bash
pnpm --filter sand dev
```

## Change the snapshot

Component source lives in `src/components/ui/`, tokens in `src/styles.css`, and documentation pages in `src/pages/`. Run the package checks after making changes.

```bash
pnpm --filter sand typecheck
pnpm --filter sand lint
pnpm --filter sand test
pnpm --filter sand build
```

An agent working in this folder should begin with [AGENTS.md](AGENTS.md).

## Update Sand

Recover any local changes that the project wants to keep before updating. The update process replaces this folder instead of merging it.

Follow the update procedure in [installation.md](installation.md). When a release includes breaking changes, read the matching document in [guides/](guides/index.md) before running the update script.

For a file-by-file package map, see [index.md](index.md).
