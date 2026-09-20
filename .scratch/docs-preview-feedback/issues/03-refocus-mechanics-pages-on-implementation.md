# 03: Refocus mechanics pages on implementation

**What to build:** Make the Fonts, Animation, React, Vite, and shadcn mechanics pages explain how each dependency fits into Sand's implementation. Remove redundant component showcases where code communicates the mechanic better, make animation demonstrations easier to inspect and replay, and identify where displayed configuration code lives.

**Blocked by:** 01: Make light and dark comparisons full width.

**Status:** ready-for-agent

- [ ] Fonts focuses on package imports, stylesheet wiring, family-to-token mapping, and code usage rather than repeating the visual typography showcase.
- [ ] Animation presents named demonstrations in a readable table-like layout with one clear preview and replay action per demonstrated animation.
- [ ] Replaying an animation reliably restarts it and gives visitors enough time to observe the motion.
- [ ] React explains the library choice through representative component code without rendering another component showcase.
- [ ] Vite explains its build, plugin, and alias role through relevant configuration snippets without rendering another component showcase.
- [ ] The shadcn code pane visibly identifies the repository path of the displayed configuration.
- [ ] Mechanics pages that still benefit from interactive previews retain them.
- [ ] Shared mechanics and code-preview APIs express code-only content and source paths directly instead of relying on misleading empty previews or comments embedded in snippets.
- [ ] Automated coverage verifies code-only mechanics rendering, source-path presentation, and animation replay behavior.
