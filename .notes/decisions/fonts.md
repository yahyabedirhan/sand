# Fonts

Status: decided, 2026-09-14

## Context

Three faces with distinct roles, self-hosted so the site has no runtime dependency on a font host.

## Options

- fontsource packages imported as CSS.
- A hosted font link.
- Manual self-hosting of the font files.

## Decision

fontsource. Geist for all UI and body text, Fraunces for the top two title levels only and never inside components, Geist Mono for code, keyboard keys, and tabular numbers. The previous project had no real mono face; Sand adds Geist Mono because a design system shows code.

Weights loaded: Geist 400, 500, 600; Fraunces 400, 500, 600; Geist Mono 400, 500.

## Consequences

- The fonts module is a CSS file, `src/modules/fonts/index.css`, imported by `styles.css`.
- Family names are mapped once in `@theme inline`; a swap of hosting method leaves the names alone.
- Fraunces on `heading-1` and `heading-2` is applied by the page skeleton components, not by the text tokens, so the serif rule stays a decision of the page layer.
