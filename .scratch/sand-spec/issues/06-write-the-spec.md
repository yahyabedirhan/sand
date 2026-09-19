# 06 - Write the spec

Type: grilling
Status: resolved
Blocked by: 02, 03, 05, 07, 08

## Question

Rewrite `.specs/00-sand-design-system.md` in place from the map's Notes and
Decisions so far. Keep what still holds from the current text (tokens, tooling, maintainer
notes structure). Replace the Modules section with Design vs Mechanics per
ticket 07; drop stories 34-36. Replace purpose, consumers, page
skeletons, and out-of-scope. Add preview pages, markdown rules with the manual sync procedure, adoption
as deferred with its candidates (ticket 04 stays open), the example project,
and the learning workflow. Run
`no-ai-slop` on the result. Update `.specs/index.md`, `AGENTS.md` if a rule
changed, and `notes/journal.md`.

## Comments

- 2026-09-19: the `to-spec` skill is to be used for this ticket (maintainer's
  request). Its seam check was asked and not yet answered; proposed seams
  were the page registry (sidebar, routes, TODO stub, Previews exemption)
  and the rules sync check. The lint-boundary seam is gone with ticket 07.
- 2026-09-19: ticket 08 is resolved; the module boundary is out of the code
  and the docs section is Mechanics. The spec can drop stories 34, 35, 36 and
  describe the Mechanics page skeleton as role, choice, dependents.

## Answer

Resolved 2026-09-19 with `to-spec`, from the map and the full grilling
transcript of the charting session.

- `.specs/00-sand-design-system.md` overwritten in place. Sections follow the
  `to-spec` template. Kept from the old text where still true: tokens,
  tooling, application shape, notes structure. Replaced: purpose, consumers,
  page skeletons, modules (now Design and Mechanics), rules (markdown under
  `rules/`, manual sync), previews and blocks, adoption as deferred, out of
  scope, plus a "Deferred, not out" section.
- Seams confirmed by the maintainer: the page registry and the rules sync
  check. Names Design and Mechanics confirmed.
- `no-ai-slop` pass applied; `pnpm format:check` passes.
- `.specs/index.md` updated. `AGENTS.md` needed no rule change (ticket 08
  already removed the import rule).
- One `TODO:` left inside the spec: which of React, Vite, Tailwind, shadcn
  get their own Mechanics page. Settled when that section is filled in.
- The journal section is written by `/human-notes` at session end.
