---
name: continue
description: Read the active handoff pointer and resume the task it describes.
argument-hint: "Optional focus or correction"
disable-model-invocation: true
---

# Continue

Resume work from the active handoff.

1. Read the root `HANDOFF.md`. If it is missing or does not point to a file,
   report that the handoff is unavailable.
2. Read the pointed document under `.handoff/` and follow its suggested skills,
   task scope, and open work.
3. Inspect the current workspace and git state, then continue the handoffed
   task from its first unfinished item.

If the user supplied a focus or correction, apply it while preserving the
handoff's intended task.
