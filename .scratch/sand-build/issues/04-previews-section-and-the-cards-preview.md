# 04: Previews section and the Cards preview

**What to build:** A Previews section sits last in the sidebar. A preview page renders outside the standard docs layout, with the width and height its content needs, and offers a way to switch between previews from inside the page. The first preview, Cards, composes a handful of blocks (a checkout or subscription card, a stats card, a chat card, a table card, a chart card, a date card, in the spirit of tweakcn's Cards) built from Sand's components with hard-coded sample data. Blocks live with their preview and nothing outside the previews imports them.

Follow `.scratch/sand-build/page-format.md` for the page layout, the preview container, and the rules block; open the prototype there if anything is unclear.

**Blocked by:** 01 Workspace restructure, 21 Docs page skeleton and preview container

**Status:** done

- [x] Previews section present, last in the sidebar
- [x] preview pages render without the standard page shell (no rail), full width, inside the preview container with toolbar only, and are exempt in the registry so the seam test can assert it
- [x] a switcher inside the preview page moves between registered previews
- [x] Cards preview with at least five blocks, each a self-contained file with sample data
- [x] blocks import only Sand components; nothing outside the previews folder imports a block
- [x] light and dark both look correct
- [x] the tweakcn research note under `.scratch/sand-spec/research/` consulted for block inventory
