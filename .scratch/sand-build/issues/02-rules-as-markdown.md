# 02: Rules as markdown

**What to build:** Rules live as markdown inside the package, one file per topic, `system.md` for cross-cutting rules, an index listing them. The four typography rules that exist today as JSX move into the typography rule file, and the Typography page renders the same text, so an agent reading the file and a human reading the page see one source of truth. A written maintainer procedure checks that files and pages agree. The Guidelines sidebar section goes away and the sidebar order becomes Overview, Foundations, Components, Mechanics, Previews (Previews may be empty until its ticket lands).

Render the rules on the page through the rules checklist piece from ticket 21; do not build a second rules renderer.

**Blocked by:** 01 Workspace restructure, 21 Docs page skeleton and preview container

**Status:** done

- [x] a `rules/` folder inside the package with `index.md`, `system.md`, and `typography.md`
- [x] the four existing typography rules exist once, in the markdown file, and the Typography page shows the same titles and sentences
- [x] the minimum rule shape (title plus one sentence) is stated in the rules index; examples are optional
- [x] the sync-check procedure is written where a maintainer will find it and is runnable by hand
- [x] the Guidelines section and its two placeholder pages are removed from the registry
- [x] sidebar order is Overview, Foundations, Components, Mechanics, Previews
- [x] `check` and `build` pass
