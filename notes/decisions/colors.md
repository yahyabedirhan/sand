# Colors

Status: decided, 2026-09-14

## Context

Sand is named after its palette. The spec limits the token set to the standard shadcn semantic variables and exposes no raw palette to consumers.

## Options

- The "warm sand" oklch palette from a previous project (a tweakcn theme), light and dark sets.
- A palette designed from scratch in oklch.

## Decision

The warm sand palette, copied with two changes. The app-specific palette layered on top of it in the previous project is left out, and `--primary-foreground` stays dark rather than tweakcn's white because the tan primary needs dark text to stay legible.

## Consequences

- No raw palette layer. A consumer who needs a color outside the semantic set has no sanctioned way to get one; that is deliberate and stated on the Colors page.
- Chart colors and the sidebar set are part of the semantic layer and documented as such.
- oklch is a concept note to write; the values were inherited, not derived.
