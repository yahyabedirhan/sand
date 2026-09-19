# 08: Colors page

**What to build:** The Colors foundation page presents the semantic tokens only, each rendered in light and dark, with the pairing rule, the surface stacking rule, and the opacity rule written in the colors rule file and shown on the page. The chart and sidebar color sets are shown and named. The page states that no raw palette is exposed.

Follow `.scratch/sand-build/page-format.md` for the page layout, the preview container, and the rules block; open the prototype there if anything is unclear.

**Blocked by:** 02 Rules as markdown, 21 Docs page skeleton and preview container

**Status:** ready-for-agent

- [ ] every semantic color token rendered with its foreground pair in both themes
- [ ] `rules/colors.md` holds pairing, stacking, and opacity rules; the page shows the same text
- [ ] chart and sidebar sets documented
- [ ] the sync check passes for colors
