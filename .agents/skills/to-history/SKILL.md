---
name: to-history
disable-model-invocation: true
---

# To History

Turn completed handoffs into compact historical records.

## Steps

1. Identify the requested handoff dates and read every matching file under
   `.handoff/`, including the handoff index and the project spec when needed.
2. Inspect `git log` for each date. Use the commits to verify what actually
   landed and preserve the implementation order.
3. Create `.history/` and its `index.md` when they do not exist. Write one
   document per date as `YYYY-MM-DD-<semantic-name>.md`.
4. Record the day's outcome, session arc, durable decisions, open threads at
   the close of the day, source handoffs, and the relevant commit ledger.
5. Run `git diff --check` and confirm the new history files exist. Leave the
   source handoffs in place for the user to remove deliberately.

## Completion

The requested dates each have one linked history record, the record reflects
the handoffs and git history, and whitespace validation passes.
