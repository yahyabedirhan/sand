# Handoff: Sand build orchestration, wave 3

Date: 2026-09-19

Supersedes
[`2026-09-19-sand-build-orchestration-wave-2.md`](2026-09-19-sand-build-orchestration-wave-2.md)
for current git and ticket state. Delegation is still one implement agent per
ticket, isolated worktree, one commit, no push, merge `--no-ff` on main. Spec
and glossary are unchanged except the Mechanics list (nine pages).

## Current state

- `main` is at `ad833dd` (`docs: record mechanics pages, kanban, and deferred 19`).
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

- Ticket 03 (`codex/ticket-03-seams`). Uncommitted Vitest and seam tests on
  an older base (`a479092`). Merge after one commit. Registry tests must
  survive later conversation pages from 15.
- Ticket 15 (`codex/ticket-15-conversation`). Implement agent running. Seven
  conversation component pages. Browser on port 5187. Register via
  `writtenComponentPages`.
- Ticket 16 (`codex/ticket-16-mechanics`). Recreated at `ad833dd`. Nine pages
  at full page-format (Primitives is the reference). Browser on port 5188.
  Mark or rewrite stale `src/modules/` lines in `.notes/decisions/`.

Ports already used by earlier tickets. Pick a free 518x.

## After those three merge

- 17 simple kanban under `examples/`. Wait for 15 and 16 on main.
- 18 after 17.
- 20 after 17. Skip 19.

## Suggested skills

- `implement` for each remaining ticket
- `code-review` on `git diff main...HEAD` before merge
- `handoff` plus `writing-for-agents` before compaction
- `tdd` only for ticket 03 seams
