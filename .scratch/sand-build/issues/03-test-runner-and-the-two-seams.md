# 03: Test runner and the two seams

**What to build:** A test runner exists and locks the two seams the spec names. The registry test asserts the sidebar lists every section and page in order, each registered page renders under its route, and a page without a component renders the TODO stub. The rules sync check is a script or test that fails when a rule title in a topic's rule file is missing from that topic's page or vice versa. Both run from the check command.

**Blocked by:** 02 Rules as markdown

**Status:** done

- [x] Vitest (or the runner the maintainer prefers, ask if unsure) installed in the package
- [x] a registry test covering order, routes, and the TODO stub
- [x] a rules sync check that reads the rule files and the pages and reports mismatches
- [x] `pnpm check` runs the tests and passes
- [x] the sync-check procedure from ticket 02 points at the script
