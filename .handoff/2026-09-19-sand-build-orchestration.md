# Handoff: orchestrating the Sand build tickets

Date: 2026-09-19
Supersedes [2026-09-19-sand-spec-wayfinding.md](2026-09-19-sand-spec-wayfinding.md). The spec is written; the work now is delegating implementation tickets to sub-agents and merging their results.

## Where everything lives

- Spec: `.specs/00-sand-design-system.md`. Final. Read "Repository and application shape", "Documentation structure", "Consumers and adoption" before delegating anything.
- Glossary: `CONTEXT.md`. Use its words in prompts (Design, Mechanics, Consumer, Preview, Block, Rule, Demo, Installation guide, Snapshot, Outside consumer).
- Tickets: `.scratch/sand-build/index.md` holds the status table (ticket, blocked by, status). One file per ticket under `issues/`. The ticket file is the source of truth; the table is the index; both are updated in the same edit.
- Page format: `.scratch/sand-build/page-format.md`. Every page ticket follows it. The prototype behind it is `.scratch/sand-build/prototypes/docs-pages.html`, variant A is the reference, B and C are rejected.
- Decisions: `.notes/decisions/adoption.md` (git snapshot into a pnpm workspace) and the sand-spec map `.scratch/sand-spec/map.md` (complete, all eight tickets resolved, do not reopen).
- Maintainer wants: ADHD-mode replies (the `i-have-adhd` skill was on all session; first line is the next action, restate state each turn, short). They were AFK when this was written and said "don't ask me further questions, start working".

## State at handoff

- Branch `main`, clean tree. Last commits: `f4cf063` (ticket 21, page skeleton and preview container), `1b3c755` (ticket 01, app moved into `sand/`), `34a32b6` (spec and tickets).
- Done: 00 (prototype), 01 (workspace), 21 (skeleton). Ticket 21's report lists the exported pieces: `PreviewContainer` (`panes`, `code`, `align`, `padding`, `fullWidth`), `PageLayout`, `Section({id,title})`, `RuleList`, `Rule({title, body, do?, dont?})`, registry `Page.layout: "docs" | "wide" | "full"`, `pageCount`, `sectionPath`, type `SidebarSection`. Read `sand/src/docs/index.md` for the current list.
- Ticket 22 added from a 21 finding: the named spacing tokens shadow Tailwind's container sizes (`max-w-xs` is 4px), so overlays render narrow. It blocks 12 and informs 10.
- Frontier now: 02, 04, 11, 16, 22 (all `ready-for-agent`). Then 03, 08, 09, 10 (after 02), 05, 06, 07 (after 04), 12 to 15 (after 11, 12 also after 22). Then 17 to 20, which need the maintainer (tags, review of the example project, the outside consumer test).

## How the delegation has been run

- One sub-agent per ticket, launched with the Agent tool (general purpose), `run_in_background: true`. The prompt tells it to read `AGENTS.md`, `CONTEXT.md`, `.claude/skills/implement/SKILL.md` and follow it, the ticket file, `page-format.md`, and the relevant spec sections; to claim the ticket first (status in file and table); to run `pnpm check` and `pnpm build` from the root; to verify pages with the browser preview tool using the `sand` config in `.claude/launch.json`; to run the `code-review` skill via the Skill tool and apply real findings; to tick the criteria, set `done` in both places, and commit once with a conventional prefix and the co-author line. `implement` and `to-tickets` are `disable-model-invocation`, so a sub-agent cannot call them through the Skill tool; it reads the skill file and follows it instead. `code-review` works through the Skill tool.
- Sequential for 01 and 21 because both touched everything. From the wave of 02, 04, 11, 16, 22 onward, agents run in parallel. For parallel tickets, use `isolation: "worktree"` on the Agent tool so agents do not collide in one tree, have each commit on its own branch, then merge into `main` yourself and resolve conflicts (expect small ones in `sand/src/docs/registry.ts` and the `index.md` files). Rebuild the index table after each merge if two agents edited it.
- Sub-agent reports come as task notifications. Relay the result to the maintainer in a few lines: commit hash, check and build tails, anything left as TODO.
- Repo rules the agents must keep: no `git stash`, no employer names, no em-dash overuse, no colon introducing a list in prose, `TODO:` for unfinished work, `writing-for-agents` before editing `AGENTS.md` or an `index.md`.

## Known facts later tickets depend on

- Exported `sand/ui/*` files import `@/...` internally; an `examples/*` package must alias `@/` to `sand/src` or the package must drop the alias in exported files. Decide in ticket 17, document in 18. Recorded on both tickets.
- `pnpm-workspace.yaml` has `publicHoistPattern` for `@types/react` and `@types/react-dom` (input-otp types resolution); a consumer needs the same. Recorded on ticket 18.
- Guidelines section removed from the registry in ticket 21 (spec-consistent); Previews group exists and is empty until ticket 04.
- `SidebarTrigger` has no accessible name (pre-existing, not ticketed).
- Root `package.json` is `sand-workspace`; the package is `sand`; Prettier runs from the root over the whole repo.
- A stale gitignored `dist/` at the repo root could not be deleted by an agent (`rm -rf` denied). Harmless.

## Suggested skills

- `wayfinder` is finished for this effort; do not re-run it on the sand-spec map.
- `code-review` inside each sub-agent, as above.
- `writing-for-agents` for any `AGENTS.md` or `index.md` edit you make yourself.
- `grilling` and `domain-modeling` only if a sub-agent surfaces a decision the spec and `page-format.md` do not cover; park it on the ticket and ask the maintainer when they return.
- `human-notes` then `handoff` at session end. No journal section has been written for 2026-09-19 yet; the next `/human-notes` run should cover the whole day (wayfinding, spec, adoption grilling, prototyping, tickets 01 and 21).
