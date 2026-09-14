# Animation

Status: decided, 2026-09-14

## Context

Overlays and menus need enter and exit animation; the registry components use `animate-in` and `animate-out` utilities.

## Options

- `tw-animate-css`, which provides those utilities for Tailwind v4.
- A motion library such as Motion, with animation in JavaScript.

## Decision

`tw-animate-css`, matching the registry. Motion tokens (`--duration-*`, `--ease-*`) live in `styles.css` so a later library still reads the same values.

## Consequences

- The animation module is a CSS file, `src/modules/animation/index.css`.
- Reduced motion is handled globally in `styles.css` with a `prefers-reduced-motion` block that collapses durations. This is the non-negotiable rule from the spec.
- Swapping to a JavaScript motion library changes the class names inside components, not only the module.
