# Sand

A design system and its documentation site, built as one React + Vite
app. Written for consumers of the system; the reasoning lives in `.notes/`.

## Setup

```bash
pnpm install
pnpm dev
```

## Usage

```bash
pnpm dev          # documentation site with hot reload
pnpm check        # typecheck, lint, and format check
pnpm build        # production build into dist/
```

## Layout

- `src/` - the app: tokens in `styles.css`, components in `components/ui`,
  documentation pages in `pages/`
- `.specs/` - product specs, numbered
- `.notes/` - maintainer notes: journal, decision notes, concept notes
- `.handoff/` - session handoffs

## Agents

Rules live in `AGENTS.md` (`CLAUDE.md` links to it). Skills are pinned in
`skills-lock.json`; reinstall with `npx skills@latest add`.
