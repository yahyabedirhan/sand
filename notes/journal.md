# Journal

One section per working session, newest last. What changed, why, and what to revisit.

## 2026-09-14, session 1: scoping

Grilled the idea into [.specs/00-sand-design-system.md](../.specs/00-sand-design-system.md). Every recommendation in the final round was accepted. Decisions the spec states without explaining were written into the first handoff: Tailwind over plain CSS was a call for shadcn compatibility; Base UI, Tabler, and Recharts were inherited from a previous project so its components could be copied; Oxlint is an exploration.

## 2026-09-14, session 2: repository setup

`git init`, default skill set installed and pinned, `AGENTS.md` with the `CLAUDE.md` alias. One commit per workflow step. No app code yet.

## 2026-09-14, session 3: bootstrap and typography

Built the whole bootstrap scope from the spec and the first real page.

- Vite 8 `react-ts` template, which now ships Oxlint by default. TypeScript 6 makes `strict` the default; it is set explicitly anyway. `baseUrl` is deprecated in TS 6, so `paths` works without it.
- `shadcn add --all` wrote into a literal `@/` folder because the root `tsconfig.json` is a references-only file with no `paths`; moved the output into `src/`. Worth remembering for the next `shadcn add`.
- The generated registry imports Base UI, Tabler, and Recharts directly. Repointed every import at `src/modules/*` so the boundary holds inside the registry too; see [decisions/module-boundary.md](decisions/module-boundary.md). The lint rule was proven against a deliberate bad import before anything relied on it.
- Fonts and animation are CSS-only modules (`index.css`) because Tailwind needs their imports inside the stylesheet it compiles.
- The docs shell, registry, and theme toggle are the first consumer. 73 pages in the registry, 3 written (Overview, Modules, Typography), the rest TODO stubs.
- Gitleaks guard copied from the workstation repo; history scanned clean.
- Typography: the decision note compares raw-only, fixed handpicked, ratio-based, and semantic-only, and picks fixed handpicked roles with the raw scale kept for exceptions. The roles live in `styles.css` as `--text-<role>` tokens with their own line height, weight, and tracking.
- Mid-session, the framing changed from "example design system" to a production design system named Sand, and the repository is to be renamed `sand`. The rename happens after this session ends because the running environment is keyed to the current path.

Revisit:

- Built CSS is 270 kB because every registry component's classes are compiled. Fine for now; check again when the site is deployed.
- The type-role sizes were chosen against the docs site alone; see the TODO in [decisions/typography.md](decisions/typography.md).
- The Icons page can be generated from the icons module's export list.
- No test runner yet. The registry and the lint boundary are the first candidates.
