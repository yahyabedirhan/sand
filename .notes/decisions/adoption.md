# Adoption

Status: decided, 2026-09-19

## Context

Sand must be usable by projects other than its own docs site, and the adopter is an agent. I want the consumer to see and edit the whole source, including the rules and the docs site, and I do not want Sand tied to the shadcn ecosystem so I can add libraries and blocks it does not have.

## Options

1. npm package. Versioning and updates for free, but the consumer imports compiled files, cannot edit a component, and Tailwind needs extra config to scan `node_modules`.
2. shadcn registry. Copies files into the consumer, but ties Sand to the registry format and the shadcn CLI.
3. Git snapshot. Copy `sand/` at a tag into the consumer's pnpm workspace and import it as a workspace package. Sand writes its own install guide and update script.

## Decision

Option 3. This repository becomes a pnpm workspace with `sand/` as the package and `examples/` for in-repo example projects that import it the same way a consumer does. Everything under `sand/` travels, including the docs site so a consumer can run it. Maintainer folders stay behind.

Versions are git tags. 0.0.1 when the in-repo example project works, 0.1.0 when a throwaway outside consumer adopts through `installation.md`, 1.0.0 when I call it mature.

## Consequences

- Update is one script that overwrites `sand/`. Local edits are recovered by the agent from git before running it. This is the simplest thing that works with zero users; `git subtree` is the candidate for a merge-based update once the first real update happens.
- Breaking releases ship an upgrade guide under `guides/`.
- Consumers not on pnpm are out of scope until 0.1.0.
- The restructure into a workspace happens before the docs pages are written, so pages import from the final location.
