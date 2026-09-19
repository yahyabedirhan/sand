# Handoff: Sand build orchestration, wave 3

Date: 2026-09-19

Supersedes
[`2026-09-19-sand-build-orchestration-wave-2.md`](2026-09-19-sand-build-orchestration-wave-2.md)
for current git and ticket state. Delegation is still one implement agent per
ticket, isolated worktree, one commit, no push, merge `--no-ff` on main. Spec
and glossary are unchanged except the Mechanics list (nine pages).

## Current state

- `main` includes tickets 03, 15, 16, and 17 (`d4ecd9a`). `pnpm check` and
  `pnpm build` passed, including `examples/kanban`.
- Registry tests assert every Components page is written.
- Do not put absolute home paths in committed files. Gitleaks rejects them.
- Do not create git tags. The maintainer tags `v0.0.1`.

Maintainer decisions recorded 2026-09-19:

- Ticket 16. Nine Mechanics pages. See `.notes/decisions/mechanics-pages.md`.
- Ticket 17. Simple kanban. `sand/VERSION` is `0.0.1`. Consumers alias `@/`
  to the sand package source (`.notes/decisions/consumer-alias.md`).
- Ticket 19. Outside consumer test and `0.1.0` deferred. Do not implement.

## In flight

Worktrees under `/private/tmp/sand-ticket-NN`.

- Ticket 18 (`codex/ticket-18-install`). Installation guide, update script,
  consumer `AGENTS.md` inside `sand/`.
- Ticket 20 (`codex/ticket-20-readme`). README screenshots and Overview copy.
  Merge 18 before 20 if both touch README files.

## After 18 and 20 merge

Skip 19. Goal is done for this wave. Maintainer still tags `v0.0.1`.

## Suggested skills

- `implement` for each remaining ticket
- `code-review` on `git diff main...HEAD` before merge
- `handoff` plus `writing-for-agents` before compaction
- `no-ai-slop` on ticket 20 copy
