# 02: Hide theme controls for fixed dual-theme previews

**What to build:** Hide the light, dark, and side-by-side preview controls on the Colors and Shadow token previews because those previews already present both themes. Keep theme controls available and unchanged on previews where visitors can use them.

**Blocked by:** 01: Keep preview controls on the page theme (done).

**Status:** done

- [x] The Colors token preview renders no control for changing the example theme or showing themes side by side.
- [x] The Shadow token preview renders no control for changing the example theme or showing themes side by side.
- [x] Both token previews continue to show their existing light and dark content together.
- [x] Preview containers elsewhere retain both theme controls and their existing behavior.
- [x] Automated coverage verifies controls can be omitted without changing the default behavior of other preview containers.
