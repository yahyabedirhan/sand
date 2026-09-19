# 04 - How a consumer project adopts Sand

Type: grilling
Status: resolved
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

## Answer

Resolved 2026-09-19 by grilling, four rounds.

- Mechanism: a git snapshot. The consumer copies `sand/` at a tag into their
  pnpm workspace and imports it as a workspace package (`sand/ui/button`,
  `@import "sand/styles.css"`). The consumer owns the files. npm package and
  shadcn registry were rejected: the maintainer wants the whole source
  readable and editable by the consumer's agent, and no coupling to the
  shadcn ecosystem.
- What travels: everything under `sand/`. Tokens, components, hooks, the docs
  site, `rules/`, `guides/`, `installation.md`, `VERSION`, `README.md`, a
  consumer-facing `AGENTS.md`. The docs site travels so the consumer can run
  it and see their system. Maintainer material (`.notes/`, `.handoff/`,
  `.scratch/`, `.specs/`, `.agents/`, `.claude/`, root `AGENTS.md`,
  `CONTEXT.md`, `examples/`) never travels.
- Repo shape: pnpm workspace. `sand/` is the package, `examples/` holds
  in-repo example projects importing `sand` as a workspace package. Done
  before the docs pages are written.
- Adoption is agent-first. The agent reads `README.md` then `installation.md`.
  New project: packages, files, workspace entry. Existing project: list the
  changes, get confirmation, then act.
- Versions are git tags, semver. 0.0.1 when the in-repo example project
  works, 0.1.0 when a throwaway outside consumer adopts through the guide,
  1.0.0 when the maintainer calls it mature. `VERSION` inside `sand/` holds
  the tag.
- Update: one script (`sand/scripts/update`), plain overwrite, the agent
  recovers edits from git. Recorded in `.notes/decisions/adoption.md` as a
  decision to improve later; `git subtree` is the noted candidate. Breaking
  releases ship an upgrade guide under `guides/`.
- Consumers not on pnpm are out of scope until 0.1.0.
- Glossary: Installation guide, Upgrade guide, Snapshot, Outside consumer
  added; Example project narrowed to demonstration.
