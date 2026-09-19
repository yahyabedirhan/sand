# 2026-09-14: Sand foundation bootstrap

This record consolidates the four handoffs from 2026-09-14. It records the
state reached that day and the commits that produced it. The four source
handoffs were retired after this record was created.

## Outcome

Sand moved from a written specification to a working, committed React and Vite
design-system application on `main`.

The day delivered:

- the repository and agent rules
- the pinned project skill set and skill links
- a README and workspace package setup
- the Vite, TypeScript, Tailwind, token, font, and animation foundation
- the complete shadcn registry on Base UI
- an Oxlint import-boundary rule for the library entry points
- the docs shell with routing, registry, sidebar, TODO pages, and theme toggle
- the Overview, Modules, and Typography pages
- maintainer notes with decision records and a session journal
- a gitleaks guard and a code-review cleanup pass
- a dedicated Modules sidebar section with one shared page layout and five module pages

The final bootstrap checks passed: `pnpm check` and `pnpm build`. The working
tree was clean at the end of the day.

## Session arc

### Scoping

The design-system specification was accepted as the source of truth. Decisions
that the spec stated without explaining were captured in the first handoff.
The main choices were Tailwind for shadcn compatibility, inherited Base UI,
Tabler, and Recharts integrations, and Oxlint as an experiment.

### Repository setup

The repository was initialized on `main`. The default project skill set was
installed and pinned, `AGENTS.md` was written, and `CLAUDE.md` was made an alias
to it. The repository rules established the layout, generic naming constraint,
writing style, git safeguards, and skill convention.

### Application bootstrap and typography

The Vite React and TypeScript application was scaffolded with strict typing,
Tailwind v4 through the Vite plugin, warm sand light and dark tokens, semantic
text roles, spacing and motion tokens, self-hosted fonts, and CSS-only font and
animation entry points.

The full component registry was added. Generated imports were moved under
`src/` and routed through the project module entry points. The Oxlint rule was
tested against a deliberate direct import before the boundary was relied on.

The docs shell became the first consumer of Sand. Its registry drives routes,
sidebar entries, and TODO status. The Typography decision note compared raw,
fixed, ratio-based, and semantic-only approaches, then selected fixed,
handpicked semantic roles while retaining the raw scale for exceptions.

The maintainer notes recorded decisions, the journal, and concept-note
scaffolding. A gitleaks workflow and hook installer were added. Code review
then moved element-to-role defaults into the base layer, derived page status
from component presence, improved shared page pieces, and added missing index
files.

### Overview and Modules refinement

The Overview page was shortened and its Principles section removed because the
copy read as slogans. The Modules content was then moved into its own final
sidebar section. A shared `ModulePage` layout now renders five data-only module
pages: Primitives, Icons, Charts, Fonts, and Animation. The specification and
pages index were updated with that hierarchy.

## Decisions and carry-forward state

- Sand was framed as a production design system rather than an example.
- The repository folder was renamed to `sand`; no project code depended on the old path.
- The remote repository had not been created. Creating or pushing one still required explicit approval.
- Foundation pages after Typography, guidelines, component pages, and concept notes remained future work.
- The Overview lead sentence was still being edited at session close, and the specification still mentioned the removed Overview Principles section. These were explicit TODOs, not silently resolved decisions.
- The generated CSS was about 270 kB because all registry component classes were compiled. This was accepted for the bootstrap and left for a later deployment check.
- No test runner existed yet. The registry and import boundary were the first likely seams to lock.

Later work may supersede these open threads. This record preserves what was
known at the close of 2026-09-14.

## Git record

All 18 commits below were made on `main` on 2026-09-14. The order is the
implementation order.

1. `84ffec1` `chore: initialize the repository with the spec and handoff`
2. `7c8a51c` `chore: install the default agent skill set`
3. `d33af9e` `docs: add agent rules with a claude alias`
4. `1c55c77` `docs: add the second bootstrap handoff`
5. `62d91a5` `docs: add the readme`
6. `f485bd1` `feat: scaffold the vite app with tailwind and the sand tokens`
7. `b98347a` `feat: add the full shadcn registry on base ui`
8. `ed0e7d1` `feat: enforce the module boundary with oxlint`
9. `80f140c` `feat: add the docs shell with registry, sidebar, and theme toggle`
10. `f0e1d88` `docs: present sand as a production design system`
11. `6ee3ac5` `chore: add the gitleaks secrets guard`
12. `4968e1e` `feat: add the typography page`
13. `558a5b2` `docs: add maintainer notes with decision notes and the journal`
14. `6b48075` `refactor: apply the code review findings`
15. `95816de` `docs: add the third bootstrap handoff`
16. `f667289` `docs: trim the overview and remove slop from the prose`
17. `85f58c5` `docs: add the fourth bootstrap handoff`
18. `48a660e` `refactor: move modules into their own sidebar section`

The four source handoffs consolidated here were:

- `2026-09-14-sand-bootstrap.md`
- `2026-09-14-sand-bootstrap-2.md`
- `2026-09-14-sand-bootstrap-3.md`
- `2026-09-14-sand-bootstrap-4.md`
