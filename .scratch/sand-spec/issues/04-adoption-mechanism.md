# 04 - How a consumer project adopts Sand

Type: grilling
Status: open
Blocked by: 03

## Question

How does a second project (first the example project, later real ones) get
Sand's tokens, components, modules, and rules? Candidates the maintainer has
named: an npm package, cloning this repository into the project's monorepo and
linking the docs so agents follow them, copying files. None is preferred yet.
Decide which to try first for the example project and where the example
project lives (this repository or its own). Blocked by 03 because the rules'
source form changes what has to travel with the code.

## Comments

- 2026-09-19: deprioritised by ticket 03. Building Sand comes first; this
  ticket is worked when the docs pages are done and the example project is
  about to start. It no longer blocks ticket 06. Also decide here how a
  consumer agent reads `rules/` (as is, a digest, or other).
