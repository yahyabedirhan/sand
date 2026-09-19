---
name: human-notes
description: End-of-session learning discussion, written into .notes/ as concept notes and a journal section.
argument-hint: "Optional: the session's topic, for the journal heading"
disable-model-invocation: true
---

Run the end-of-session learning discussion and write its results into
`.notes/`, the maintainer's notes in their own words. Agent-facing material
(specs, handoffs, tracker files under `.scratch/`) goes elsewhere; `.notes/`
holds what the human learned and decided, for the human to re-read.

## Steps

1. Read `.notes/index.md`, `.notes/concepts/index.md`, and the last section of
   `.notes/journal.md`, so existing concepts are extended rather than
   duplicated and the session number continues.
2. Ask the user, in one round, which things were new to them this session.
   Offer three to five candidates drawn from what the session touched (a
   library, a token model, a pattern, a trade-off) and let them pick, add, or
   dismiss. Wait for the answer. The user's words are the source: never write
   a concept from your own understanding alone.
3. For each concept the user names, ask one follow-up if their answer is a
   label rather than an explanation ("what is it, in a sentence, and what did
   it change about how you see Sand?"). Done when every named concept has an
   explanation in the user's words.
4. Write one file per concept at `.notes/concepts/<kebab-concept>.md` using
   the format below. If the file exists, append a dated section under the
   existing body rather than rewriting it.
5. Add or update the line for each file in `.notes/concepts/index.md`, and
   remove its `TODO:` placeholder once the first note exists.
6. Append the session section to `.notes/journal.md`: heading
   `## YYYY-MM-DD, session N: <topic>`, then what changed and why in a few
   bullets, a `Revisit:` list if anything is open, and a link to each concept
   note touched this session.
7. Report the files written. Done when every concept from step 2 has a file,
   the index lists it, and the journal section links it.

## Concept note format

```markdown
# <Concept name>

Learned: YYYY-MM-DD, while <what the session was doing>.

<The concept in the user's words, one to three paragraphs. What it is, why
it mattered here, what it changed.>

See also: [<related decision note>](../decisions/<file>.md)
```

Keep the `See also` line only when a decision note or another concept note
is genuinely related. Follow the writing rules in `AGENTS.md`.
