# Charts

Status: decided, 2026-09-14

## Context

The registry's Chart component wraps a chart library.

## Options

- Recharts, which the shadcn chart component targets. Inherited from a previous project.
- Visx, Nivo, or a hand-rolled SVG layer.

## Decision

Recharts, inherited. `chart.tsx` uses the library's own API surface and imports Recharts directly.

## Consequences

- A swap changes `components/ui/chart.tsx` together with every Recharts import in the docs.
