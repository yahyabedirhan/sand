# Handoff: Sand bootstrap, part 3

Date: 2026-09-14
Supersedes the "remaining" lists of both earlier handoffs. [2026-09-14-sand-bootstrap.md](2026-09-14-sand-bootstrap.md) still holds the reference material and the decisions the spec does not explain; read the spec first, then that, then this.

## Where things stand

- The whole bootstrap scope from the spec is built and committed on `main`, plus Typography (decision note and page), the `notes/` scaffold, the gitleaks guard, and a code-review pass. Twelve commits since the previous handoff; `git log` is the record.
- `pnpm check` (typecheck, lint, format) and `pnpm build` pass. Tree is clean.
- Session journal for all three sessions of 2026-09-14 is in [notes/journal.md](../notes/journal.md); decision notes in [notes/decisions/](../notes/decisions/index.md). Do not re-derive what they record.
- The folder is now `$HOME/Developer/yahyabedirhan/sand`. Nothing in the repo depended on the old name. The GitHub repository does not exist yet and is to be named `yahyabedirhan/sand`; the user has not yet said yes to creating it. Ask, do not assume.
- Sand is presented as a production design system, not an example. The "example" wording was removed everywhere; do not reintroduce it. The spec's "learning vehicle first" positioning line was left untouched on purpose; the user has not asked to change it.

## Remaining, in suggested order

1. Ask whether to create the GitHub repository (`gh repo create yahyabedirhan/sand --public`) and push. Only on an explicit yes at that moment.
2. Foundations pages, each with a decision note first where one is missing: Colors (note exists), Fonts (exists), Spacing, Radius, Shadow, Motion, Icons. Follow the foundation skeleton and the Typography page as the pattern. The Icons page can render the whole set from the exports of `src/modules/icons/index.ts`.
3. Guidelines pages: color pairing, opacity usage.
4. Component pages, one per registry entry, following the component skeleton in the spec. Start with Button (the Overview "start here" list links to it).
5. Concept notes in `notes/concepts/` as things are learned (oklch, Tailwind v4 theme model, token formats).
6. Vault-side follow-ups from the first handoff (catalog item, `LOGS.md` entry) are still untouched and belong in the vault.

## Things to know that the code does not say

- `shadcn add` writes into a literal `@/` folder at the repo root because the root `tsconfig.json` is references-only with no `paths`. Move the output into `src/`, then repoint imports with `sed 's#from "@base-ui/react[^"]*"#from "@/modules/primitives"#'` and the same for `@tabler/icons-react` and `recharts`; `pnpm lint` catches any that are missed. Add any new icon to the curated list in `src/modules/icons/index.ts`.
- Page skeleton pieces live in `src/docs/page.tsx` (`PageHeader`, `Section`, `Prose`, `InlineCode`, `DoDont`). `DoDont` takes `do={{ text, example }}` and `dont={{ text, example }}`.
- A page is "done" when its registry entry has a `component`; there is no separate status field. Flip a page by adding the component to its entry in `src/docs/registry.ts`.
- Serif on `heading-1` and `heading-2` is applied by the page layout (`font-serif`), not by the role or the element defaults, so component titles stay sans.
- The lint boundary cannot see CSS `@import`s; fonts and animation are convention plus the stylesheet layout.
- Prettier ignores `*.md`; prose is never reformatted.
- The in-app browser's screenshot breaks after scrolling; emulate a tall viewport (`resize_window` height 2500) to see a whole page, and reset to desktop afterwards.
- Commits: one per step, `git -c commit.gpgsign=false`, `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>` trailer, only when asked or when a skill instructs it. The gitleaks pre-commit hook prints on every commit. Signing was never confirmed either way.
- Dev server: `.claude/launch.json` has a `sand` entry on port 5173.
- The old path `$HOME/Developer/yahyabedirhan/design-system/` may still exist holding only a `.vite` cache from the last dev server; it can be deleted.

## Suggested skills

- `writing-for-agents` for any edit to `AGENTS.md` or an `index.md`.
- `code-review` after each page batch, with the spec path as the spec source (no issue tracker is configured).
- `show-me` if the user wants the token-layer or module picture drawn before the Colors page.
- `grilling` only for a decision the spec does not cover; the foundations pages are covered.
- `handoff` at session end.
