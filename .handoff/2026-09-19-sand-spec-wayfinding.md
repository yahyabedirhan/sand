# Handoff: the Sand spec, wayfinding session

Date: 2026-09-19
Supersedes the "remaining" list of [2026-09-14-sand-bootstrap-4.md](2026-09-14-sand-bootstrap-4.md). Its "things to know" and the earlier handoffs' reference material still apply, except anything about modules as a code boundary, which ticket 07 retired.

## What this session was

The maintainer stepped back to check the spec against their intent. A wayfinder map was charted and worked through in one session. Everything decided is on the map and its tickets; this document only says where to look and what is mid-flight.

- Map: [.scratch/sand-spec/map.md](../.scratch/sand-spec/map.md). Read Destination, Notes, and Decisions so far in full before anything else.
- Tickets: `.scratch/sand-spec/issues/`. 01, 02, 03, 05, 07 resolved (answers inside each). 04 open and deprioritised. 08 and 06 are next, in that order.
- Glossary: [CONTEXT.md](../CONTEXT.md), new this session. Use its words (Design, Mechanics, Consumer, Preview, Block, Rule, Demo, Example project).
- Research: `.scratch/sand-spec/research/tweakcn-previews.md`.

## Where things stand

- Nothing is committed. `git status` shows: `notes/` renamed to `.notes/` (delete plus untracked), reference edits in `AGENTS.md`, `README.md`, the spec, the four handoffs, `src/modules/index.md`; new `CONTEXT.md`, `.scratch/`, `.agents/skills/human-notes` with its `.claude/skills` symlink. Ask before staging or committing.
- The code is unchanged. `src/modules` still exists, the lint rule still runs, `pnpm check` should still pass (not re-run this session).
- The `.gitignore` does not exclude `.scratch/`. The maintainer has not said whether to commit it; ask.

## Next: ticket 08, then 06

1. Load the map, claim [08](../.scratch/sand-spec/issues/08-remove-module-boundary.md). It lists every file to touch. The maintainer rejected the rewrite script once because they wanted to see it before it ran: show the plan (or a dry-run diff) and wait for a yes before touching `src/`. Run `pnpm check` and `pnpm build` after.
2. Claim [06](../.scratch/sand-spec/issues/06-write-the-spec.md). The maintainer asked for the `to-spec` skill explicitly. It requires a seam check; the proposed seams (page registry, rules sync check) are in the ticket's comment and were not yet confirmed. The spec overwrites `.specs/00-sand-design-system.md` in place. Never use the word "revised". Confirm the names Design and Mechanics with the maintainer before writing them into the spec; they said "maybe".
3. After 06, the map's destination is reached. Remaining open ticket 04 is worked later, when the docs pages are done.

## Things to know

- One ticket per session is the wayfinder rule; the maintainer overrode it this session and may again. Ask.
- The maintainer's standing principle, on the map: start with something workable, structure every part to expand later, no gold-plating.
- Session end is `/human-notes` (new skill, writes `.notes/journal.md` and `.notes/concepts/`) then `/handoff`. This session's journal section was not written; the next session's `/human-notes` run should cover both sessions or the maintainer can skip it.
- Prose register: short declaratives, no slogans, no em-dash overuse. The maintainer reads prose closely and runs `/no-ai-slop`.

## Suggested skills

- `wayfinder` with the map path, to work 08 and 06.
- `to-spec` for ticket 06, on the maintainer's request.
- `grilling` and `domain-modeling` if 06 surfaces a decision the map does not cover.
- `writing-for-agents` for any edit to `AGENTS.md` or an `index.md` (ticket 08 touches both).
- `no-ai-slop` on the spec before finishing.
- `human-notes` then `handoff` at session end.
