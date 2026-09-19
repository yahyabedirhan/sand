# 16: Mechanics pages settled

**What to build:** The Mechanics section lists everything Sand is built on. The open question in the spec (whether React, Vite, Tailwind, and shadcn get pages beside primitives, icons, charts, fonts, animation) is decided with the maintainer and the pages written. Each page states role, current choice, and what depends on it.

Follow `.scratch/sand-build/page-format.md` for the page layout, the preview container, and the rules block; open the prototype there if anything is unclear.

**Blocked by:** 01 Workspace restructure, 21 Docs page skeleton and preview container

**Status:** blocked-on-human

The maintainer must choose whether React, Vite, Tailwind, and shadcn get
Mechanics pages beside the five that already exist (primitives, icons, charts,
fonts, animation). That choice is not recorded. The spec TODO stays until the
maintainer records it. Do not invent pages for those four.

- [ ] decision recorded and the spec's TODO line removed
- [ ] every mechanic decided on has a page with role, choice, dependents
- [ ] each page has the showcase in the container, the parts chip row with the expandable linked list, external links, and alternatives with links
- [ ] no setup guides on the pages
- [ ] the per-library decision notes under `.notes/decisions/` no longer describe the removed module folders (rewrite with the maintainer or mark the stale lines)
