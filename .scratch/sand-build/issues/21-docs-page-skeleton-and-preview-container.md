# 21: Docs page skeleton and preview container

**What to build:** The shared pieces every docs page is built from, exactly as `page-format.md` describes: the preview container (card box, optional tab strip with named panes including a Code pane, toolbar with a container-only theme toggle and a light/dark split), the page layout with a sticky "On this page" rail of anchor links, the section piece with an id, the rules checklist with the optional do/don't disclosure, and the retirement of the old `DoDont` block. Prove them by rebuilding the existing Typography page on the new pieces so it matches the format, and rebuild the Overview page with the sample screen, the two layer panels, and the section cards. After this ticket a new page is composition of these pieces, nothing else.

**Blocked by:** 01 Workspace restructure

**Status:** ready-for-agent

- [ ] preview container with tabs, Code pane, container-scoped theme toggle, and split view, matching `page-format.md`
- [ ] page layout with the sticky rail of section links; preview pages can opt out
- [ ] rules checklist piece with optional do/don't disclosure; `DoDont` removed
- [ ] Typography page rebuilt on the pieces (header, tokens in the container, roles table, rules)
- [ ] Overview page rebuilt: realistic sample screen in the container, two equal-height layer panels, four section cards; no status list
- [ ] light and dark both correct, including the container toggled against the page theme
- [ ] `check` and `build` pass
