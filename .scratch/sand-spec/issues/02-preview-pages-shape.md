# 02 - The shape of Sand's preview pages

Type: grilling
Status: resolved
Blocked by: 01

## Question

Given the tweakcn findings, which preview pages does Sand have in v1, what
does each compose, where do they sit in the docs site (sidebar section, route
shape), and what is the rule for when a component must appear in a preview?
Also decide whether a preview is a docs page like the others in the registry or
a distinct kind of page.

## Answer

Resolved 2026-09-19 by grilling.

- v1 has four previews, built in this order: cards, application, marketing,
  dashboard. Modelled on tweakcn's, not copied; the point is example blocks
  and small example apps to look at the system through. Mail, typography, and
  color previews are not in v1.
- Previews are maintainer tooling for iterating on the aesthetic, not a
  consumer surface.
- Sidebar: a Previews section, last. Switching between previews can be
  sidebar entries or a switcher inside the page; implementation detail.
- Layout: docs pages (foundations, components) share one standard content
  layout to encourage consistency. Previews are exempt from it and get an
  area wide and tall enough for their content. No fixed minimum width is
  mandated.
- A block is a self-contained piece of a preview with sample data, built from
  Sand components. Blocks live under their preview and are not offered to
  consumers. A reusable block layer is a later idea, not v1.
- No coverage rule. Start with previews similar to tweakcn's, expand later.
- Standing principle for the whole project, recorded on the map: start with
  something workable and structure every part (previews, components, colors,
  rules, blocks) so it can be expanded quickly later.

Terms Preview and Block added to `CONTEXT.md`.
