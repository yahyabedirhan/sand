# Handoff: Sand bootstrap, part 2

Date: 2026-09-14
Supersedes the repo-setup portion of [2026-09-14-sand-bootstrap.md](2026-09-14-sand-bootstrap.md). That document still holds the reference material, verified facts, and unexplained decisions; read it after the spec. This one records what is now done and what remains.

## Done this session (three commits on `main`)

- `git init` on `main`, `.gitignore` merged from the workstation template and the sibling repo's ignores (adds `node_modules/`, `dist/`).
- Default skill set installed per `workstation/workflows/new-project-setup.md`: `.agents/skills/`, `.claude/skills/` symlinks, `skills-lock.json`. Workflow checklist passes (`grill-me`, `i-have-adhd`, `show-me` present).
- `AGENTS.md` written, `CLAUDE.md -> AGENTS.md`. It states the layout, the generic no-names rule, writing style, git rules (no commits unless asked, no `gh repo create` without a yes), and the skill convention.

No `package.json`, no app code, no `notes/`, no `README.md` yet. No GitHub repository.

## Remaining, in order (steps 2 to 7 of the original handoff)

1. `README.md` from `workstation/template/README.md`, filled in. The workflow lists it under step 4; it was skipped so the app layout could inform it.
2. `pnpm create vite` (react-ts, strict), Tailwind v4 via `@tailwindcss/vite`, port the dashboard `styles.css` minus the track palette, add `@fontsource/geist-mono`. Versions pinned from the vault-root `package.json`.
3. `shadcn init` mirroring the dashboard's `components.json` (style `base-mira`, Tabler, Base UI), then add the whole registry.
4. Five module entry points and the Oxlint `eslint/no-restricted-imports` rule. Oxlint is not installed globally; add it as a dev dependency. Prove the rule fails on a direct import before moving on.
5. Page registry, router, sidebar with every section and `TODO` pages, theme toggle in the sidebar footer.
6. `notes/` scaffold (`index.md`, `journal.md`, `decisions/`, `concepts/`) with a first journal entry covering both bootstrap sessions. Ask before committing; ask again before `gh repo create`.
7. Typography: decision note first, page second.

## Things to know that the environment does not say

- The user is running Claude Code in the desktop app; commit as asked, do not batch several steps into one commit. This session used one commit per workflow step.
- Commits carry the `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` trailer.
- `git commit` was run with `-c commit.gpgsign=false`; check whether the user wants signing before assuming either way.
- The original handoff's "Vault-side follow-ups" (catalog item, `LOGS.md` entry) are untouched and belong in the vault, not here.

## Suggested skills

- `writing-for-agents` for `README.md`, `notes/index.md`, and any edit to `AGENTS.md`.
- `show-me` if the user wants the module-boundary picture before writing the entry points.
- `grilling` only for a decision the spec does not cover.
- `handoff` at session end, writing to `.handoff/`.
