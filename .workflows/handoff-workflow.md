# Handoff workflow

This workflow composes the existing `/handoff` and `/continue` skills. Read
those skills for their individual actions; this file adds only the repository's
coordination rules.

## Artifact contract

- `HANDOFF.md` is the only active pointer. Overwrite it when a handoff is
  created, and keep it short.
- The detailed record lives at
  `.handoff/YYYY-MM-DD-<kebab-topic>.md`.
- The pointer links to the detailed record and names `/continue` as the resume
  entry point.
- Update `.handoff/index.md` when that index exists.
- Keep older dated records unless the user asks to remove or archive them.

## Record choice

- Continue the pointed record when the task is the same. Preserve its useful
  context and add the new state.
- Start a new dated record when the task has changed. Point `HANDOFF.md` at
  the new record.

Do not edit an existing skill to implement these coordination rules.
