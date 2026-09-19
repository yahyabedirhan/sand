# Charts

Status: decided, 2026-09-14

## Context

The registry's Chart component wraps a chart library.

## Options

- Recharts, which the shadcn chart component targets. Inherited from a previous project.
- Visx, Nivo, or a hand-rolled SVG layer.

## Decision

Recharts, inherited. The module is `export * from "recharts"` because `chart.tsx` uses the library's own API surface.

## Consequences

- A swap changes `src/modules/charts` and `components/ui/chart.tsx` together. This is the one module where "one folder" is not literally true; the Modules page says so.
