# Handoff: Sand build orchestration, wave 3

Date: 2026-09-19

Supersedes
[`2026-09-19-sand-build-orchestration-wave-2.md`](2026-09-19-sand-build-orchestration-wave-2.md)
for current git and ticket state. Delegation is still one implement agent per
ticket, isolated worktree, one commit, no push, merge `--no-ff` on main. Spec
and glossary are unchanged except the Mechanics list (nine pages).

## Current state

- `main` includes tickets 03 and 16 (`d12fbbd`, `feat: merge the nine mechanics pages`). `pnpm check` and `pnpm build` passed after both merges.
- Registry tests still treat the seven conversation slugs as TODO stubs. Ticket 15 must retarget those assertions when the pages are written.
- Do not put absolute home paths in committed files. Gitleaks rejects them.
- Do not create git tags. The maintainer tags `v0.0.1`.

Maintainer decisions recorded 2026-09-19:

- Ticket 16. Nine Mechanics pages (Primitives, Icons, Charts, Fonts,
  Animation, React, Vite, Tailwind, shadcn). See
  `.notes/decisions/mechanics-pages.md`.
- Ticket 17. Example project is a simple kanban. Version `0.0.1` in
  `package.json` only.
- Ticket 19. Outside consumer test and `0.1.0` deferred. Status
  `blocked-on-human`. Do not implement this wave.

## In flight

Worktrees under `/private/tmp/sand-ticket-NN`. Recreate from current `main`
if a tree is empty or stuck.

- Tickets 03 and 16 are on main.
- Ticket 15 (`codex/ticket-15-conversation`). Worktree recreated from current
  `main` after a stalled empty tree. Seven conversation component pages.
  Browser on port 5187. Register via `writtenComponentPages`. Update
  `sand/src/docs/registry.test.tsx` so those slugs are no longer stub fixtures.

Ports already used by earlier tickets. Pick a free 518x.

## After 15 merges

- 17 simple kanban under `examples/`. Wait for 15 on main.
- 18 after 17.
- 20 after 17. Skip 19.

## Suggested skills

- `implement` for each remaining ticket
- `code-review` on `git diff main...HEAD` before merge
- `handoff` plus `writing-for-agents` before compaction
- `tdd` only for ticket 03 seams
