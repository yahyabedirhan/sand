# 18: Installation guide, update script, consumer AGENTS.md

**What to build:** An agent in another repository can adopt Sand from the package's README and installation guide alone. The guide covers a new project (packages, files, workspace entry, stylesheet import, Tailwind source line) and an existing project (list the changes, get confirmation, then act). One script updates the package to a newer tag by overwriting it. A short consumer-facing agent rules file inside the package points at the guide, the rules index, and the guides folder.

**Blocked by:** 17 Example project and 0.0.1

**Status:** ready-for-agent

- [ ] `installation.md` at the package root, reachable from the package README
- [ ] new-project and existing-project paths both written; existing-project path requires confirmation before changes
- [ ] update script overwrites the package from a given tag and records the tag in `VERSION`
- [ ] `guides/` folder with an index, ready for upgrade guides
- [ ] consumer `AGENTS.md` inside the package, distinct from the maintainer one at the root
