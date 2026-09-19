# Sand

A design system and its documentation site, built as one React + Vite
app inside a pnpm workspace. Written for consumers of the system; the
reasoning lives in `.notes/`.

## Setup

```bash
pnpm install
pnpm dev
```

## Install

A consumer copies `sand/` into a pnpm workspace. The agent-facing steps are
in [`sand/installation.md`](sand/installation.md).

## Usage

```bash
pnpm dev          # documentation site with hot reload
pnpm check        # typecheck, lint, and format check
pnpm build        # production build into sand/dist/
```

## Layout

- `sand/` - the package a consumer copies. Tokens live in `src/styles.css`,
  components in `src/components/ui`, documentation pages in `src/pages`
- `examples/` - example projects importing `sand` as a workspace package
- `.specs/` - product specs, numbered
- `.notes/` - maintainer notes: journal, decision notes, concept notes
- `.handoff/` - session handoffs

## Agents

Rules live in `AGENTS.md` (`CLAUDE.md` links to it). Skills are pinned in
`skills-lock.json`; reinstall with `npx skills@latest add`.
