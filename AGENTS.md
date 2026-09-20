# Sand

Sand is a design system with a documentation site and example projects.

## Layout

- `sand/` - the package a consumer copies. Everything under `sand/` travels
  to a consumer, nothing else does. Run shadcn and oxlint from inside it.
- `examples/` - example projects importing `sand` as a workspace package.
- `prototype/` - local prototype gallery. Entries persist design alternatives
  and consume `sand` as a workspace package.
- `.specs/` - numbered specs, `NN-<kebab-topic>.md`, written before the work.
- `.handoff/` - session handoffs, `YYYY-MM-DD-<kebab-topic>.md`. The `handoff`
  skill writes here. Keep them committed. Read the newest one at session start.
- `.notes/` - the human's notes, in their words: `index.md`, `journal.md`
  (one section per session), `decisions/` (one per foundation and mechanic),
  `concepts/` (learning notes). The `human-notes` skill writes the journal and
  concepts at session end. Consumer pages carry no reasoning; it lives here.
- `.scratch/` - agent-facing tracker files (wayfinder maps and tickets).
- `.workflows/` - workflows that combine existing skills without overwriting
  them. This is one layer above the skills; read the relevant workflow when it
  is named here.
- `HANDOFF.md` - the root pointer to the current handoff document.
- Every folder gets a lowercase `index.md` pointing at its files.

## Hard rules

- Name no employer, company, or hiring process anywhere in this repository:
  code, notes, specs, handoffs, this file, commit messages. Describe such
  context generically ("a previous project", "a dashboard in my vault").

## Communication and writing style

Applies to code comments, docs, specs, notes, and commit messages.

- Do not fabricate. Mark the unknown as unknown, or ask.
- Mark unfinished work with an explicit `TODO:` so a later session can resume.
- Do not overuse the em dash (—). Restructure instead: split the sentence, use a
  subordinate clause, reorder, or use a comma.
- Avoid a colon introducing a list inside a prose sentence. Structural Markdown
  and metadata fields may still use colons.
- Agent-facing docs are action-first: what to do, then why, and only when the
  why is not obvious.
- Match the comment density and idiom of the surrounding code.

## Git

Do not run `git add`, `git commit`, or `git stash` unless asked for that action.
Do not create the GitHub repository without an explicit yes at that moment.

Commit messages use a conventional-commit prefix, lowercase after it, with a
bulleted body:

```text
feat: short imperative summary

- explanation 1
- explanation 2
```

Prefixes in use: `feat`, `fix`, `refactor`, `docs`, `chore`.

## Agent skills

Skills live in `.agents/skills/`, symlinked into `.claude/skills/`, pinned in
`skills-lock.json`. Imported skills are updated from upstream only; do not edit
their content. To add a project skill, create `.agents/skills/<name>/SKILL.md`
and symlink it:

```bash
ln -s ../../.agents/skills/<name> .claude/skills/<name>
```

Stage the symlink itself, not the file inside it.

Reach for `writing-for-agents` when editing this file or any `index.md`,
`show-me` for a mechanics or token-layer picture, `grilling` only when a
decision surfaces that the spec does not cover, `human-notes` then `handoff`
at session end.

## Workflows

Use a workflow when the task crosses a session boundary or combines existing
skills into a repeatable path.

| Workflow | Use when | Entry points |
| --- | --- | --- |
| [Handoff](.workflows/handoff-workflow.md) | Work must continue in another session, or a previous session left `HANDOFF.md` | `/handoff`, `/continue` |
| [Prototype](.workflows/prototype-workflow.md) | The `/prototype` skill is used, or an interactive design study must persist in the gallery | `/prototype`, prototype requests |

`CLAUDE.md` is a symlink to this file. Edit `AGENTS.md`.
