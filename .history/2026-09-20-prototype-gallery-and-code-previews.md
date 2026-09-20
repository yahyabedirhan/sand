# 2026-09-20: Prototype gallery and code previews

## Outcome

The session began as a focused improvement to plaintext code examples and grew
into a reusable prototyping environment. The completed worktree contains:

- A root-level `prototype/` Vite app that consumes Sand as a workspace package.
- Convention-based discovery of React prototypes under
  `prototype/src/prototypes/<slug>/prototype.tsx`.
- Shared gallery navigation, shareable `?variant=` state, keyboard switching,
  and an optional selected-variant check.
- A persisted code-preview study with three alternatives. Variant C, the quiet
  footer, is selected and dated 2026-09-20.
- A repository workflow that composes the unchanged `/prototype` skill with
  persistent gallery artifacts.
- Production code previews powered by `prism-react-renderer`, with TSX as the
  default language, explicit metadata for other languages, a safe plaintext
  fallback, a dark Sand-inspired palette, line count, and copy confirmation.
- Focused tests for highlighting, fallback rendering, and the five-second copy
  confirmation.

`pnpm check` and `pnpm build` passed. Playwright verified the gallery and docs
on desktop and mobile. The docs build retained a large-chunk warning, but the
build completed.

## Session arc

1. Playwright inspected the docs app and established the existing page and
   preview behavior.
2. A grilling session settled the highlighting direction. The decisions were
   `prism-react-renderer`, explicit language metadata with a TSX default, a
   Sand-specific dark palette, language and copy controls, and plaintext
   fallback for unsupported languages.
3. A UI prototype placed three code-preview treatments directly inside the
   running docs app. The variants were a workbench bar, language rail, and quiet
   footer.
4. The human selected variant C. The act of viewing the prototype in context
   surfaced a larger need for reusable, durable design studies.
5. A second grilling round defined one local root app, self-contained React
   entries, convention-based discovery, optional metadata, lightweight quality
   gates, and retention of all alternatives after a decision.
6. The gallery, spec, and repository workflow were added. The temporary docs
   route moved into the gallery as its first decided artifact.
7. The selected code-preview treatment was rebuilt as production code in Sand,
   wired through component and mechanics pages, tested, and visually checked.

## Durable decisions

- Prototypes live in one local app under `prototype/`, separate from both the
  shipped `sand/` snapshot and `examples/`.
- `pnpm prototype` is the single entry point. The gallery is buildable and
  typechecked but has no deployment target.
- Gallery mechanics belong to the shell. Prototype entries provide React
  variants and may provide metadata on a best-effort basis.
- Decided studies retain every alternative. A selected variant and decision
  date may be recorded without requiring rationale.
- The project-level prototype workflow overrides the upstream skill's cleanup
  step. The upstream `/prototype` skill itself remains unchanged.
- Code blocks are always dark. Their grammar is explicit, with TSX as the
  default, and unsupported grammars remain readable as plaintext.
- Inline prose code remains a separate future feature.

## Human perspective

When I did the grilling session for a small feature, like updating the code previews with a syntax highlighter, after having enough detail, at some point I wanted to prototype the options and see what it would look like. I really like that prototyping on the app itself so I wanted to create a separate prototyping environment that helps me create different prototypes at any given time before updating the actual project that I'm working on. I wanted to do it in a way that they are saved in the repository so that I can check them out later on.

That part went pretty well but what I was not very happy about was the agent's use of Playwright because it used too many Playwright calls in the main session, which blurred the main context of the orchestrator agent. I didn't manually ask for it to use the skills to spec or to implement. I guess that's why it did everything all by itself after the grilling session. I think I should be explicit about using the spec and implementation skills after the grilling session.

## Agent perspective

The in-app prototype was the highest-leverage step. It replaced an abstract
toolbar discussion with three concrete treatments in the real visual context,
and the decision arrived immediately. Persisting that mechanism as a separate
consumer app also produced a better boundary than leaving experimental routes
inside the docs app.

The main process weakness was orchestration discipline. Browser verification
was performed through many small Playwright calls in the primary session. Each
call was locally useful, but together they displaced design and implementation
context. Future sessions should batch browser checks around explicit acceptance
criteria or delegate the exploratory and regression passes to a subagent, with
the orchestrator receiving a compact result.

The transition out of grilling also needed a stronger phase boundary. Once the
design tree was closed, the agent moved directly into specification,
implementation, and verification under its general autonomy. A better sequence
for work of this size is to state the settled design, invoke or offer the
repository's specification flow, then run the implementation flow against that
artifact. This makes the expansion in scope visible and gives the human a clear
point to redirect the process before code changes begin.

The durable learning is that prototypes are not only disposable validation
tools in this repository. They are primary design records. Production code
should still be rewritten to production standards, while the alternatives and
selection remain available in the gallery.

## Open threads at close

- All work from this session remains uncommitted.
- Research into existing editor themes with a similar palette remains optional
  future refinement.
- Syntax highlighting for inline prose code remains a separate feature.
- The prototype gallery remains local-only and has no deployment workflow.
- The docs production build reports a large JavaScript chunk warning.

## Source handoffs

No `.handoff/2026-09-20*.md` file exists. The handoff index still ends with the
2026-09-19 session-end record and was left unchanged. This history record was
reconstructed from the current conversation, `.specs/01-prototype-gallery.md`,
the prototype workflow, the implementation, and verification results.

## Commit ledger

No commits were created on 2026-09-20. The session began from
`2d68d80e15e04e0bccc0703bc88a195450e98804` (`docs: clarify project and snapshot
readmes`, 2026-09-19 23:25:43 +0300). The prototype gallery and syntax
highlighting exist only in the working tree at the close of this record.
