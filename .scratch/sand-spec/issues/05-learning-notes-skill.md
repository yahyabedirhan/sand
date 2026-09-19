# 05 - The learning-notes skill

Type: task
Status: resolved
Blocked by: none

## Question

Write a project skill at `.agents/skills/<name>/SKILL.md`, symlinked into
`.claude/skills/`, using `writing-for-agents`. It tells an agent how to run
the end-of-session learning discussion: a few questions about what was new to
the maintainer this session, answers written to `notes/concepts/` in the
maintainer's words, a pointer added to `notes/concepts/index.md` and the
journal. Decide the note format and the file naming as part of the task and
record them in the skill. The answer records the skill's name and path.

## Answer

Done 2026-09-19.

- Skill: `.agents/skills/human-notes/SKILL.md`, symlinked at
  `.claude/skills/human-notes`. User-invoked (`/human-notes`), runs at
  session end before `/handoff`. Named "human notes" to mark `.notes/` as
  the human's material, as opposed to agent-facing `.scratch/`.
- It asks one round of questions about what was new, writes one file per
  concept at `.notes/concepts/<concept>.md` in the user's words (appending a
  dated section when the file exists), updates `.notes/concepts/index.md`,
  and appends the session section to `.notes/journal.md` with links to the
  concept notes touched.
- `notes/` renamed to `.notes/` as a meta folder; every reference in
  `AGENTS.md`, `README.md`, `CONTEXT.md`, the spec, the handoffs, and
  `src/modules/index.md` updated. `AGENTS.md` points at the skill and names
  `.scratch/`.
- Not added to `skills-lock.json`: that file pins imported skills only.
