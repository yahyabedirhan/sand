# Handoff: Sand bootstrap, part 4

Date: 2026-09-14
Supersedes the "remaining" list of [2026-09-14-sand-bootstrap-3.md](2026-09-14-sand-bootstrap-3.md). That document still holds the "things to know" list (shadcn add gotcha, page skeleton pieces, commit conventions, browser quirks); read the spec, then it, then this. [2026-09-14-sand-bootstrap.md](2026-09-14-sand-bootstrap.md) still holds the reference material, except its line "Modules is one page under Overview" which is now wrong.

## Where things stand

- Everything from this session is committed on `main`; `git log` since `95816de` is the record. `pnpm check` passes. Session journal is in [.notes/journal.md](../.notes/journal.md), session 4.
- Sidebar order is now Overview, Foundations, Components, Guidelines, Modules. Modules has five done pages (Primitives, Icons, Charts, Fonts, Animation) sharing `src/pages/modules/module-page.tsx`; each `src/pages/modules/<slug>.tsx` holds only the data.
- The Overview page is header, Start here, Status. The Principles section was removed on request.
- The GitHub repository still does not exist. Ask before creating it.

## Open threads from this session

- TODO: the Overview lead sentence was being hand-edited at session end and reads "a component library built on the shadcn, and the usage rules." Ask the user for the final wording rather than guessing. The version before their edit was "A production design system for React apps, with foundations for color, type, spacing, and motion, a component library built on the shadcn conventions, and the guidelines for using them together."
- TODO: the spec still names a principles section on the Overview (story 2, and the documentation-structure bullet). The user has not said whether the lead counts as the principles or whether to edit the spec.
- The user ran a slop pass (`/no-ai-slop`) over all prose. Keep new prose in the same register: short declaratives, no slogan-then-gloss paragraphs, no kickers. The user called the old Principles paragraphs "reads bad" for exactly that shape.

## Remaining, in suggested order

1. Ask about the GitHub repository (`gh repo create yahyabedirhan/sand --public`) and push. Only on an explicit yes.
2. Foundations pages, decision note first where missing: Colors (note exists), Fonts (exists), Spacing, Radius, Shadow, Motion, Icons (note exists; render the set from `src/modules/icons/index.ts`). Pattern is the Typography page.
3. Guidelines pages: color pairing, opacity usage.
4. Component pages, Button first.
5. Concept notes in `.notes/concepts/` as they come up.
6. Vault-side follow-ups from the first handoff, in the vault.

## Suggested skills

- `writing-for-agents` for any edit to `AGENTS.md` or an `index.md`.
- `no-ai-slop` on any new page copy or note before committing; the user reviews prose closely.
- `code-review` after each page batch, spec path as the spec source.
- `grilling` only for a decision the spec does not cover.
- `handoff` at session end.
