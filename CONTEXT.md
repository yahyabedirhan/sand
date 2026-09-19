# Sand

The design system, the projects that use it, and the site that documents it.
This file is the glossary; reasoning lives in `.notes/`.

## Language

**Sand**:
The design system itself: tokens, components, mechanics, and their usage rules.
Not the site that documents it.
_Avoid_: the app, the project (ambiguous with a consumer project)

**Docs site**:
The React + Vite application that renders Sand's documentation. It is one
consumer of Sand, and the only one so far.
_Avoid_: the app, Sand (when the site is meant)

**Consumer**:
A real project that adopts Sand and builds its UI with it. How adoption
works (package, clone, copy, or something else) is undecided. The docs site is
the first consumer; the intent is for other projects to follow.
_Avoid_: reader, user (a reader of the docs site is not a consumer)

**Design**:
Sand's raw material: fonts, colors, spacing, type roles, radii, motion, and
the rules behind them. Independent of any library or build tool.
_Avoid_: tokens (a token is one value inside the design)

**Mechanics**:
How this repository realises the design: React, Vite, Tailwind, the shadcn
conventions, Base UI, Tabler, Recharts, fontsource, tw-animate-css.
Documented as what Sand is built on, not as swappable units.
_Avoid_: module (the earlier code-boundary meaning is retired)

**Example project**:
A small generic app (a to-do list, a kanban board) kept in this repository and
importing Sand from source, built after the docs pages are written, to
demonstrate Sand in a real-world setting. It does not test adoption; a
consumer outside this repository does that.
_Avoid_: demo (a demo is a rendered component on a docs page), consumer (it
does not adopt a snapshot)

**Outside consumer**:
A project outside this repository that adopts Sand through the installation
guide, with no import from source. The first one is a throwaway created to
test adoption; real projects follow.

**Installation guide**:
The agent-facing document that installs Sand into a consumer project. For a
new project it names the packages to install, the files to copy, and where
they go. For an existing project it has the agent list the changes and get the
maintainer's confirmation before making them.
_Avoid_: setup docs, README (the README is for human readers)

**Upgrade guide**:
The agent-facing document written with a Sand release that has breaking
changes, telling a consumer's agent how to move from the previous version.
A release without breaking changes needs none; the consumer runs the update
script.

**Snapshot**:
The versioned copy of Sand a consumer holds. Adoption installs a snapshot;
an update moves the consumer to a newer one.
_Avoid_: fork (a fork diverges; a snapshot is meant to be updated)

**Rule**:
A usage constraint on one part of Sand, written in markdown under `rules/`
(one file per topic, `system.md` for constraints that span topics, `index.md`
listing them all). The docs page for that topic renders the same rule, synced
by hand. Minimum is a title and one sentence. Rules start few and grow.
_Avoid_: guideline

**Demo**:
A rendered instance of a component or token on a docs page. Component pages
are demo-first and lightweight, not exhaustive.

**Preview**:
A page in the docs site that composes many Sand components into a small
realistic app or screen (cards, dashboard, application, marketing) so the
whole system is seen at once and a change is visible everywhere. Maintainer
tooling, not a consumer surface.
_Avoid_: example (reserved for the example project), kitchen sink

**Block**:
A self-contained piece of a preview (a checkout card, a chat widget, a
transactions list) built from Sand's components with hard-coded sample data.
Blocks belong to their preview; Sand does not offer them to consumers.
Promoting blocks to a reusable layer is a possible later step.
