# Handoff: Sand build orchestration, wave 3

Date: 2026-09-19

Supersedes
[`2026-09-19-sand-build-orchestration-wave-2.md`](2026-09-19-sand-build-orchestration-wave-2.md)
for current git and ticket state. Delegation was one implement agent per
ticket, isolated worktree, one commit, no push, merge `--no-ff` on main.

## Current state

- `main` is at `f9ffc16` (`docs: merge the readme visuals and overview refresh`).
- Tickets 00–18 and 20–22 are `done`. Ticket 19 is `blocked-on-human`
  (outside consumer test and 0.1.0, deferred).
- `pnpm check` and `pnpm build` passed after the 20 merge.
- Do not create git tags. The maintainer tags `v0.0.1`.
- Do not put absolute home paths in committed files.

Consumers alias `@/` to the sand package source. See
`.notes/decisions/consumer-alias.md`. `sand/VERSION` is `0.0.1`.
`pnpm kanban` runs the example. Install steps are in
`sand/installation.md`.

## Next session

- Maintainer review, then tag `v0.0.1`.
- Ticket 19 when an outside consumer test is wanted.

## Suggested skills

- `handoff` plus `writing-for-agents` at session end
- `human-notes` for the journal
