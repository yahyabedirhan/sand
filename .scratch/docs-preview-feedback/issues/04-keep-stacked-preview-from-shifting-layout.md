# 04: Keep stacked theme comparison from shifting the docs layout

**What to build:** Opening the stacked light and dark preview comparison must not jump the documentation chrome sideways. Today the extra height brings in a document scrollbar, which steals width and shifts the whole docs site left.

**Blocked by:** None (can start immediately).

**Status:** in-progress

- [ ] Enabling stacked light and dark comparison does not shift the docs site or preview chrome horizontally.
- [ ] Turning the comparison off is equally stable. The layout does not jump when the extra height goes away.
- [ ] Visitors can still reach overflowed page content by scrolling.
- [ ] Single-theme previews and code panes keep their current behavior.
- [ ] Automated coverage verifies the stacked comparison no longer depends on a layout that collapses the viewport width.
