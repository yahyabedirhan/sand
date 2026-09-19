# Handoff: Sand bootstrap session

Date: 2026-09-14
Next session: bootstrap the repository per the spec, then write the Typography page.

## Where things stand

- The product is fully specified in [.specs/00-sand-design-system.md](../.specs/00-sand-design-system.md). Read it first; this document only carries what the spec does not.
- The folder `$HOME/Developer/yahyabedirhan/design-system` contains only `.specs/` and `.handoff/`. No git repository, no package.json, nothing else. Nothing has been built or committed.
- The spec came out of a grilling session; every recommendation in its final round was accepted without changes.

## Hard rules for this repository

- No employer, company, or hiring-process names anywhere in this repository: code, notes, specs, handoffs, agent rules, commit messages. The user was explicit and it is strictly forbidden. Phrase the rule generically in `AGENTS.md`.
- The user's writing-style rules apply to every document here: sparing em dashes, no filler, action-first for agent-facing docs.
- Do not create the GitHub repository without the user's explicit yes at that moment.

## Reference material to copy from

- Bootstrap procedure: `$HOME/Developer/yahyabedirhan/workstation/workflows/new-project-setup.md`, with `template/` in the same repo holding the baseline `AGENTS.md`, `README.md`, and `.gitignore`. Read `template/index.md` before using them. That repo's `.notes/` layout (`index.md`, `journal.md`, `concepts/`) is the model for this repo's `.notes/`.
- Theme source: the schedule dashboard in the user's job-search vault at `interview-prep/dashboard/app/styles.css`. It has the complete light and dark oklch variable sets, the `@theme inline` mapping to Tailwind utilities, radius/shadow/tracking scales, and the fontsource imports. Its `components.json` (style `base-mira`, icon library `tabler`, Base UI) is the shadcn config to mirror. Its `package.json` lives two levels up at the vault root and pins the versions: `@base-ui/react`, `@shadcn/react`, `shadcn`, `tailwindcss` 4, `@tailwindcss/vite`, `@tabler/icons-react`, `recharts`, `@fontsource/geist`, `@fontsource/fraunces`, `tw-animate-css`, React 19.
- Leave out of the copy: everything under the "interview-prep track palette" comment (success/failure/revisit/track-* variables and their `--color-*` mappings). Those are app-specific.
- Sibling repo for conventions already proven: `$HOME/Developer/yahyabedirhan/steal` (spec numbering `NN-topic.md`, `.handoff/` naming, `AGENTS.md` shape, skill install pattern).

## Facts verified this session

- Oxlint 1.83.0 registers `eslint/no-restricted-imports` (category `restriction`, not on by default). Checked with `npx oxlint --rules --format=json`. Enable it explicitly in the config.
- The dashboard has no real mono face; `--font-mono` there is a fallback stack. Sand adds `@fontsource/geist-mono`.
- `Fraunces` is already scoped to the top two title levels in the dashboard's theme comment; Sand keeps that rule.

## Decisions made in conversation that the spec states but does not explain

- Tailwind over plain CSS was the user's call because it matches the shadcn default; the recommendation had been plain CSS to keep tokens visible. Do not relitigate.
- Base UI over Radix, Tabler over Lucide, Recharts: inherited from the dashboard so the user can copy freely, not chosen on merit. The decision notes should say so honestly and list the alternatives.
- Oxlint over ESLint was the user's preference; they want to explore it. Custom Oxlint plugins are a later curiosity, not v1.
- The typography decision note is the primary deliverable of the typography work: the user wants the options brainstormed and compared, then one picked with reasoning. They have used fixed handpicked sizes behind semantic tokens (`heading-1`, `caption`) in past work and are not familiar with ratio-based scales; teach the comparison in the note.
- The user is not familiar with JSON/W3C design-token formats; that is a concept note for later, not v1.
- "Modules" is one page under Overview, not a sidebar section. Icons is a Foundations page.

## Suggested order for the next session

1. Follow the workstation new-project workflow to the checklist.
2. `pnpm create vite` (react-ts), add Tailwind v4 via the Vite plugin, port `styles.css` minus the track palette, add Geist Mono.
3. `shadcn init` mirroring the dashboard's `components.json`, then add all registry components.
4. Create the five module entry points and the Oxlint restricted-imports rule; prove it fails on a direct import before moving on.
5. Page registry, router, sidebar with all sections and `TODO` pages, theme toggle.
6. `.notes/` scaffold with a first journal entry. First commit. Ask before `gh repo create`.
7. Then Typography: decision note first, page second.

## Vault-side follow-ups (do in the vault, not here)

- Create a `personal-project` catalog item for this repo, modelled on the existing `steal-extension` item, and point the two week-4 design-system slots at it. Use the schedule-planner skill.
- Add a `LOGS.md` entry for today's scoping session.

## Suggested skills

- `writing-for-agents` when writing `AGENTS.md` and the `.notes/` index files.
- `schedule-planner` for the vault-side catalog and slot updates.
- `show-me` if the user wants the module-boundary or token-layer picture drawn.
- `grilling` only if a new decision surfaces that the spec does not cover.
