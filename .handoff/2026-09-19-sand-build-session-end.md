# Handoff: Sand build session end

Date: 2026-09-19

This session closed the in-scope build tickets on `main`. Read the spec
[`.specs/00-sand-design-system.md`](../.specs/00-sand-design-system.md)
and the tracker [`.scratch/sand-build/index.md`](../.scratch/sand-build/index.md)
for product and ticket detail. Do not rerun wayfinder. Do not implement
ticket 19 unless the maintainer unblocks it.

HEAD is `a7d922e` (`docs: slim the readme and retire old bootstrap handoffs`).
Working tree was clean at that commit.

## Done

Tracker rows `00`–`18` and `20`–`22` are `done`. Ticket 19 is
`blocked-on-human`.

This session (and the orchestration it continued) landed:

- Ticket 03. Vitest in `pnpm check`. Registry and rules-sync tests. See
  `sand/src/docs/registry.test.tsx` and `sand/src/docs/rules-sync.test.tsx`.
- Ticket 15. Seven conversation component pages. No component slug is a stub.
- Ticket 16. Nine Mechanics pages. Decision
  [`.notes/decisions/mechanics-pages.md`](../.notes/decisions/mechanics-pages.md).
- Ticket 17. `examples/kanban`, `pnpm kanban`, `sand/VERSION` is `0.0.1`.
  Consumers alias `@/` to sand `src`. Decision
  [`.notes/decisions/consumer-alias.md`](../.notes/decisions/consumer-alias.md).
- Ticket 18. [`sand/installation.md`](../sand/installation.md),
  [`sand/scripts/update-sand`](../sand/scripts/update-sand),
  [`sand/AGENTS.md`](../sand/AGENTS.md), [`sand/guides/`](../sand/guides/).
- Ticket 20. Overview copy and live `pageCount()`. Root README later slimmed
  on maintainer request (no screenshots). `docs/` screenshot folder removed.

Maintainer decisions recorded 2026-09-19: nine Mechanics pages; example is a
simple kanban; outside consumer test deferred.

`pnpm check` and `pnpm build` passed after the 18 and 20 merges.

Delegation that worked: one implement agent per ticket, isolated worktree,
one commit, no push, merge `--no-ff` on main. Ban `WebSearch` / `WebFetch`
and `move_agent_to_root` on those agents. They hung ticket 15 on shadcn
lookups and workspace-root MCP.

## Remaining

Human work, not another implement wave:

1. Review `main`, then tag `v0.0.1`. Ticket 17 left that box unticked. Do
   not create the tag from an agent unless the maintainer says so at that
   moment.
2. Ticket 19 when wanted. Throwaway repo, follow the installation guide,
   log friction, fix, second clean run, then `0.1.0`. Ticket file
   [`.scratch/sand-build/issues/19-outside-consumer-test-and-010.md`](../.scratch/sand-build/issues/19-outside-consumer-test-and-010.md).
3. GitHub remote. Still ask before `gh repo create`.
4. Optional `human-notes` journal for this session.

Gitleaks rejects absolute home paths in committed files.

## Suggested skills

- `continue` to resume from `HANDOFF.md`
- `writing-for-agents` before `AGENTS.md` or `index.md`
- `human-notes` if the maintainer wants a journal section
- `implement` only after ticket 19 is unblocked
