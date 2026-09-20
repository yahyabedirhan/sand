# 01: Make light and dark comparisons full width

**What to build:** Present light and dark preview variants vertically so each variant receives the full preview width. This shared behavior should keep dense mechanics examples legible instead of compressing two copies into narrow columns.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] Activating the combined light and dark view stacks the two variants vertically at the normal documentation widths.
- [x] Each variant receives the full preview width, including dense Primitives, Icons, Charts, Tailwind, and shadcn showcases.
- [x] The variants remain visually distinct and appear in a predictable light-then-dark order.
- [x] The comparison control's accessible name and tooltip accurately describe the resulting view.
- [x] Single-theme previews and code panes retain their current behavior.
- [x] Automated coverage verifies the comparison layout and unchanged single-theme behavior.
