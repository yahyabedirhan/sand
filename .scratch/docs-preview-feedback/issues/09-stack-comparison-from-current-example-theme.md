# 09: Stack comparison from the current example theme

**What to build:** Opening light and dark stacked comparison keeps the visible example theme on top and places the other theme below. The sun/moon control stays enabled while stacked and instantly swaps which theme is on top. Closing the stack leaves the example on that top theme. The existing Motion enter/exit clip is unchanged except that it applies to the incoming bottom pane, not a fixed light-then-dark order.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] Opening the stack from a light example keeps light on top and shows dark below.
- [x] Opening the stack from a dark example keeps dark on top and shows light below.
- [x] While stacked, the single-theme control stays enabled and instantly swaps the two panes without replaying the height animation.
- [x] Closing the stack leaves the example on the theme that was on top, including after a swap.
- [x] The stacked enter/exit Motion clip still runs on the incoming bottom pane only.
- [x] Automated coverage verifies both opening orders, the instant swap, and the theme left after collapse.
