# 06 - Write the spec

Type: grilling
Status: open
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
