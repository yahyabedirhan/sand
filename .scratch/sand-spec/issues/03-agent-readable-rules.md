# 03 - The form of agent-readable rules

Type: grilling
Status: resolved
Blocked by: none

## Question

A rule lives on the page of the thing it constrains and must be reachable by
an agent building a consumer project without a browser. What is the source
form of a rule (a TSX page section, a markdown file beside the page, a data
structure the page renders from), how does the docs page render it, and how
does an agent find all rules for, say, typography? Decide the minimum that
works for the first three rules, not a rules engine.

## Answer

Resolved 2026-09-19 by grilling.

- Rules are documentation, not JSX. Source of truth is markdown under
  `rules/`: one file per topic (`typography.md`, `colors.md`, later
  component files), `system.md` for rules that combine several parts,
  `index.md` listing every file so an agent starts there. Location is a
  default and may move.
- The docs page for a topic renders its rules (the existing `DoDont` layout
  is fine) and is synced by hand from the markdown. A maintainer procedure,
  written down, checks that the page and the markdown agree; the spec names
  it, the implementation writes it. No generator script: overengineered for
  now.
- A rule's minimum is a title and one sentence. Do/don't examples are
  optional and added when a rule earns them.
- Cross-cutting rules keep a home (`system.md`) and a page for it in the
  docs site. Whether that sidebar section is still called Guidelines is a
  detail for the spec ticket.
- Work is split into (1) building Sand and its docs site, (2) making Sand
  consumable by agents in other projects. (1) comes first for visible
  progress. How consumer agents read the rules (the markdown as is, a
  digest, or something else) belongs to (2) and stays open in ticket 04.
- Consequence for the map: ticket 04 no longer blocks ticket 06; the spec
  states adoption as deferred and lists the candidates.

`CONTEXT.md` Rule entry updated.
