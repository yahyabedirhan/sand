# 01: Workspace restructure

**What to build:** The repository is a pnpm workspace. The whole app (tokens, components, hooks, docs shell, pages) lives in a `sand/` package that a consumer can copy verbatim; an empty `examples/` workspace folder waits for example projects. Running the usual dev, check, and build commands from the root still works, and the docs site renders exactly as before the move. The package exposes its components and stylesheet through package exports so a sibling workspace package can import them.

**Blocked by:** None (can start immediately)

**Status:** done

- [x] `sand/` holds the application; the root holds only workspace config, maintainer folders, and the skills
- [x] `pnpm-workspace.yaml` lists `sand` and `examples/*`
- [x] root scripts (`dev`, `check`, `build`) delegate to the package and pass
- [x] package exports expose the component files and the stylesheet under stable names
- [x] the docs site renders every existing page unchanged in the browser
- [x] `AGENTS.md`, `README.md`, and every folder `index.md` describe the new layout; `writing-for-agents` consulted for `AGENTS.md` and `index.md` edits
- [x] a spec line or note records that consumer material is everything under `sand/` and nothing else
