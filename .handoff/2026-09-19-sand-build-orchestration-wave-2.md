# Handoff: Sand build orchestration, wave 2

Date: 2026-09-19

Supersedes
[`2026-09-19-sand-build-orchestration-session-extension.md`](2026-09-19-sand-build-orchestration-session-extension.md)
for current git and ticket state. The original plan in
[`2026-09-19-sand-build-orchestration.md`](2026-09-19-sand-build-orchestration.md)
still describes how to delegate (one implement agent per ticket, worktree,
commit, no push, merge `--no-ff` on main). Spec and glossary are unchanged.

## Current state

- Main checkout is the repository root.
- `main` is at `a479092` (`feat: merge spacing radius shadow and motion pages`).
- `pnpm check` and `pnpm build` passed after that merge. Build still emits the
  Vite chunk-size warning.
- No `origin` remote. No GitHub PRs.
- Untracked leftover:
  `.handoff/2026-09-19-sand-build-orchestration-session-extension.md` (stale
  relative to this file).

## Done on main

02, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 21, 22, plus 00 and 01.

All four previews are written. The preview placeholder was deleted after 07.
Named spacing is `--space-xs` through `--space-2xl` (ticket 22). All eight
foundation pages are written.

## Open tickets

| # | Status | Notes |
|---|---|---|
| 03 | ready-for-agent | First implement pass left `/private/tmp/sand-ticket-03` at `07e74de` with no commits. Relaunch from current main. |
| 15 | ready-for-agent | First implement pass left `/private/tmp/sand-ticket-15` at `b7402bd` with no commits. Remaining TODO component slugs are exactly 15's seven pages. After 15, no component slug should be a stub. |
| 16 | blocked-on-human | Maintainer must choose whether React, Vite, Tailwind, and shadcn get Mechanics pages beside primitives, icons, charts, fonts, animation. Do not invent that set. Branch `codex/ticket-16-mechanics` at `57e6343` only records the block. |
| 17 | blocked on 15 and 16 | Also needs the maintainer to pick to-do vs kanban, and to create tag `v0.0.1`. Alias `@/` vs dropping it in exported files is a ticket 17 decision recorded for 18. |
| 18 | blocked on 17 | |
| 19 | blocked on 18 | Outside consumer test. Needs the maintainer. |
| 20 | blocked on 17 | README visuals. |

## How to continue

1. Recreate worktrees for 03 and 15 from current `main`. Follow
   `.claude/skills/implement/SKILL.md`. Merge `--no-ff` when each reports.
2. Do not start 17 until 15 is `done` and 16 is `done`. Do not invent 16's
   page list. Do not create git tags.
3. After each merge wave, write or update a `.handoff/` file and
   `.handoff/index.md`. Do that before compaction.
4. Reconcile `sand/src/docs/registry.ts` and the `index.md` files on every
   merge. Ticket 03 will also touch `package.json` check scripts.

## Worktrees

Many `/private/tmp/sand-ticket-*` worktrees remain from finished branches.
Remove them only after the branch is on main (already true for 02, 04–14, 22).
Keep 16 until the block is resolved.

## Suggested skills

- `implement` (read the file; it is `disable-model-invocation`)
- `code-review` after each ticket
- `resolving-merge-conflicts` on registry and tracker merges
- `writing-for-agents` before `AGENTS.md` or any `index.md`
- `tdd` for ticket 03 at the two spec seams only
- `handoff` before compaction
- `human-notes` at session end
