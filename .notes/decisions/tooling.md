# Tooling

Status: decided, 2026-09-14

## Context

One React app that is both the design system and its documentation. The choice of styling model and linter shapes how tokens are exposed to consumers and how the module boundary is enforced.

## Options

- Styling: plain CSS with custom properties, or Tailwind v4 with the shadcn variable mapping.
- Linter: ESLint with the usual plugin stack, or Oxlint.

## Decision

- Tailwind v4 through the Vite plugin. This was the user's call against a recommendation for plain CSS (which keeps tokens more visible); it matches the shadcn default, so the registry drops in unchanged. Not to be relitigated.
- Oxlint. The user wants to explore it. Oxlint 1.83 ships `eslint/no-restricted-imports`, which is the one rule the module boundary needs, so no second linter.
- pnpm, Prettier with defaults, TypeScript strict. No test runner until something is worth locking down; the registry and the lint boundary are the first candidates.

## Consequences

- The consumer surface is utility classes; the CSS variables in `styles.css` are the token layer beneath. Every semantic token must be mapped in `@theme inline` to become a utility.
- Vite 8's `react-ts` template now scaffolds Oxlint by default, so the config is a small edit rather than a setup.
- Custom Oxlint plugins are a later curiosity, not v1.
- `pnpm-workspace.yaml` exists only for pnpm's minimum-release-age exclusions on Oxlint's binaries.
