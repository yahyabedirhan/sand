# Map: the Sand spec

Label: wayfinder:map
Status: complete 2026-09-19, all tickets resolved
Tracker: local markdown (`.scratch/sand-spec/issues/`)

## Destination

`.specs/00-sand-design-system.md` rewritten in place so it states what Sand is
for, who consumes it, and what v1 is, with every open decision on this map
resolved or explicitly deferred inside it. Nothing left to decide before the
foundation and component pages are written.

## Notes

- Domain: a React design system (Sand), its docs site, and the projects that
  will adopt it. Glossary in `CONTEXT.md`; read it before any ticket.
- Settled in the charting session (2026-09-19), carry into the spec:
  - Purpose: a design system the maintainer builds real projects with, carrying
    their own aesthetic. Learning is continuous and recorded as it happens, not
    a phase. Portfolio value is a side effect, served by a beginner-friendly
    README with visuals at the end.
  - Consumers: the docs site first, then an example project (to-do or kanban,
    generic), built after all docs pages are written. Real projects follow.
  - Adoption mechanism (package, clone into a monorepo, copy, or other) is
    undecided. Do not assume npm. Do not use the word "revised" anywhere.
  - Component pages are demo-first and lightweight; sections grow over time.
    The `00` skeleton (Purpose, Anatomy, When to use, Variants, Rules,
    Accessibility) is too heavy as a requirement.
  - Rules are markdown under `rules/`, rendered on the docs pages by manual
    sync. Decided in ticket 03.
  - Two workstreams: build Sand and its docs site first, make it consumable
    by other projects second. Ticket 04 belongs to the second and is worked
    after the pages are done.
  - Preview pages (cards, dashboard, application, marketing, in the style of
    tweakcn) show the whole system at once so a token change is visible
    everywhere. Shape decided in ticket 02.
  - Standing principle: start with something workable and structure every
    part so it can be expanded quickly later. Do not gold-plate v1.
  - The aesthetic is discovered iteratively against the previews. The
    inherited palette, radii, shadows, and fonts are provisional.
  - Two layers: Design (the raw material and rules) and Mechanics (how this
    repo realises it). "Module" as a code boundary was a misunderstanding and
    is being removed. Decided in ticket 07.
  - Still out of scope: a second framework, Storybook, prop tables, JSON
    token sources. Single-component libraries (date picker, command,
    carousel, otp, resizable) are documented on their component's page.
    Deployment is deferred, not out.
- Skills: `grilling` + `domain-modeling` for every grilling ticket;
  `writing-for-agents` for the skill ticket; `no-ai-slop` on spec prose.
- Repo rules apply inside tickets: no employer names, no `git add`/`commit`
  unless asked, no em-dash overuse, `TODO:` for unfinished work.

## Decisions so far

<!-- one line per closed ticket: [title](issues/NN-slug.md): gist -->

- [How tweakcn structures its preview pages](issues/01-tweakcn-previews.md): eight previews (cards, dashboard, application, marketing, mail, typography, colors, custom) are lazy React components under `components/examples/<name>/index.tsx`, switched by shadcn Tabs bound to `?p=` on one route; each index composes sibling block files with self-contained sample data; a theme change writes CSS variables inline on `<html>` and previews inherit them, no iframe except the custom tab.
- [The shape of Sand's preview pages](issues/02-preview-pages-shape.md): four previews in v1 (cards, application, marketing, dashboard), a Previews sidebar section last, previews exempt from the standard docs layout, blocks are preview-local fixtures not a consumer layer, no coverage rule, start small and expand.
- [The form of agent-readable rules](issues/03-agent-readable-rules.md): markdown source of truth under `rules/` (one file per topic, `system.md` cross-cutting, `index.md`), pages synced by hand with a written check procedure, minimum rule is title plus one sentence, no generator; consumer-side reading deferred to ticket 04.
- [The learning-notes skill](issues/05-learning-notes-skill.md): `/human-notes` skill written, user-invoked at session end before `/handoff`; writes per-concept notes and the journal section into `.notes/` (renamed from `notes/`).
- [What a module is](issues/07-module-terminology.md): Sand is Design (raw material and rules) realised by Mechanics (React, Vite, Tailwind, shadcn, Base UI, Tabler, Recharts, fontsource, tw-animate-css); the code-level module boundary is a misunderstanding to remove (ticket 08); Modules docs become Mechanics, no swap field.
- [Remove the module boundary from the code](issues/08-remove-module-boundary.md): `src/modules` and the lint rule are gone, components import Base UI, Tabler, and Recharts directly, fonts and animation are imported in `styles.css`, the Modules pages are the Mechanics section (role, choice, dependents); the per-library decision notes still need a rewrite with the maintainer.

- [Write the spec](issues/06-write-the-spec.md): `.specs/00-sand-design-system.md` rewritten in place from the map; two seams (page registry, rules sync check); Design and Mechanics confirmed; adoption, deployment, the example project contents, the README visuals, and `design.md` listed as deferred inside it. The destination is reached; only ticket 04 stays open, for a later effort.
- [How a consumer project adopts Sand](issues/04-adoption-mechanism.md): git snapshot of `sand/` at a tag into the consumer's pnpm workspace, imported as a workspace package, consumer owns the files; this repo becomes a workspace with `sand/` and `examples/`; agent-first `installation.md`; semver tags 0.0.1 / 0.1.0 / 1.0.0; update is overwrite for now.

## Not yet specified

- The aesthetic itself: what Sand looks like beyond the inherited warm-sand
  theme. Discovered by iterating on the previews once they exist, not decided
  in a spec. May graduate into prototype tickets after the previews ticket.
- The example project's contents and scope (to-do vs kanban vs other). Lives
  in `examples/`; its own shape comes after the pages.
- A reusable block layer on top of components (blocks a consumer can adopt).
  Not v1; revisit once the four previews exist.
- A mail preview and any further previews beyond the four in v1.
- A single `design.md` holding the whole design layer (fonts, colors,
  spacing, roles, rules) as one document. Raised in ticket 07 as a
  possibility; relates to `rules/` from ticket 03.
- The README's final form (beginner-friendly, with visuals). Comes last; may
  need a ticket on which visuals and how they are produced.
- Whether and when the docs site is deployed. Deferred until pages exist.

## Out of scope

- A second framework or framework-agnostic tokens.
- Storybook or another workbench: the docs site is the workbench.
- Prop tables, exhaustive API docs, JSON token generators.
