# 01: Keep preview controls on the page theme

**What to build:** Keep the preview tab strip and theme controls visually tied to the documentation page theme while light and dark overrides affect only the rendered preview content. Preserve the existing single-theme toggle and side-by-side comparison behavior.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] On a light documentation page, switching a preview between light and dark leaves its tab strip, toolbar, controls, borders, and container chrome in the light page theme.
- [x] On a dark documentation page, switching a preview between light and dark leaves its tab strip, toolbar, controls, borders, and container chrome in the dark page theme.
- [x] The selected preview theme still applies to all rendered example content in single-theme mode.
- [x] Side-by-side mode still renders light and dark preview content together while its tab strip and controls retain the documentation page theme.
- [x] An automated interaction test changes the preview theme and verifies that preview content changes theme while the surrounding preview chrome does not.
