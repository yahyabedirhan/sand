# 17: Example project and 0.0.1

**What to build:** A small generic app (a to-do list or a kanban board, maintainer's pick) lives under `examples/`, imports Sand as a workspace package, and runs with its own dev script. It uses Sand's tokens, components, and rules with nothing copied out of the package. A `VERSION` file inside the package reads 0.0.1 and the maintainer tags the commit.

Known from ticket 01: exported `ui/*` components import `@/...` internally, so the example project must alias `@/` to the package source in its own Vite and TypeScript config, or the package must stop using the alias in exported files. Decide which and record it; the installation guide (ticket 18) depends on the answer.

**Blocked by:** 05 Application preview, 06 Marketing preview, 07 Dashboard preview, 08 Colors page, 09 Fonts and Icons pages, 10 Spacing, Radius, Shadow, Motion pages, 11 Component page pattern and form controls, 12 Overlay and menu component pages, 13 Layout and navigation component pages, 14 Feedback and data component pages, 15 Conversation component pages, 16 Mechanics pages settled

**Status:** ready-for-agent

- [ ] example project runs from the root with one command
- [ ] it imports components and the stylesheet from the package, never by relative path into it
- [ ] it follows the rules (spot-checked against the rules files)
- [ ] `VERSION` file present; tag `v0.0.1` created by the maintainer after review
