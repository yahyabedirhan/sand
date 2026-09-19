# 16: Mechanics pages settled

**What to build:** The Mechanics section lists everything Sand is built on. The open question in the spec (whether React, Vite, Tailwind, and shadcn get pages beside primitives, icons, charts, fonts, animation) is decided with the maintainer and the pages written. Each page states role, current choice, and what depends on it.

Follow `.scratch/sand-build/page-format.md` for the page layout, the preview container, and the rules block; open the prototype there if anything is unclear.

**Blocked by:** 01 Workspace restructure, 21 Docs page skeleton and preview container

**Status:** done

Maintainer decision, 2026-09-19, recorded in
`.notes/decisions/mechanics-pages.md`. The nine pages are Primitives, Icons,
Charts, Fonts, Animation, React, Vite, Tailwind, and shadcn. The spec TODO
for this list is already closed. Write the four new pages and bring every
Mechanics page up to `.scratch/sand-build/page-format.md` (Primitives is the
reference). No setup guides.

- [x] decision recorded and the spec's TODO line removed
- [x] every mechanic decided on has a page with role, choice, dependents
- [x] each page has the showcase in the container, the parts chip row with the expandable linked list, external links, and alternatives with links
- [x] no setup guides on the pages
- [x] the per-library decision notes under `.notes/decisions/` no longer describe the removed module folders (rewrite with the maintainer or mark the stale lines)
