# sand-build

Implementation tickets for `.specs/00-sand-design-system.md`, written 2026-09-19 with `to-tickets`. One ticket per sub-agent session.

## How to use this table

- A ticket is takeable when every number in its Blocked by column has status `done`.
- Claim a ticket by setting its `**Status:**` line and this table's Status cell to `claimed`.
- Finish by ticking the criteria in the ticket file, setting both to `done`, and committing.
- Status values: `ready-for-agent`, `claimed`, `done`, `blocked-on-human` (needs the maintainer; say why in the ticket).
- The ticket file is the source of truth; this table is the index. Update both in the same edit.

## Tickets

| # | Ticket | Blocked by | Status |
|---|---|---|---|
| 00 | [Docs page prototypes](issues/00-docs-page-prototypes.md) | - | done |
| 01 | [Workspace restructure](issues/01-workspace-restructure.md) | - | done |
| 02 | [Rules as markdown](issues/02-rules-as-markdown.md) | 01, 21 | done |
| 03 | [Test runner and the two seams](issues/03-test-runner-and-the-two-seams.md) | 02 | ready-for-agent |
| 04 | [Previews section and the Cards preview](issues/04-previews-section-and-the-cards-preview.md) | 01, 21 | done |
| 05 | [Application preview](issues/05-application-preview.md) | 04 | ready-for-agent |
| 06 | [Marketing preview](issues/06-marketing-preview.md) | 04 | ready-for-agent |
| 07 | [Dashboard preview](issues/07-dashboard-preview.md) | 04 | ready-for-agent |
| 08 | [Colors page](issues/08-colors-page.md) | 02, 21 | done |
| 09 | [Fonts and Icons pages](issues/09-fonts-and-icons-pages.md) | 02, 21 | done |
| 10 | [Spacing, Radius, Shadow, Motion pages](issues/10-spacing-radius-shadow-motion-pages.md) | 02, 21 | ready-for-agent |
| 11 | [Component page pattern and form controls](issues/11-component-page-pattern-and-form-controls.md) | 01, 21 | done |
| 12 | [Overlay and menu component pages](issues/12-overlay-and-menu-component-pages.md) | 11, 22 | ready-for-agent |
| 13 | [Layout and navigation component pages](issues/13-layout-and-navigation-component-pages.md) | 11 | ready-for-agent |
| 14 | [Feedback and data component pages](issues/14-feedback-and-data-component-pages.md) | 11 | ready-for-agent |
| 15 | [Conversation component pages](issues/15-conversation-component-pages.md) | 11 | ready-for-agent |
| 16 | [Mechanics pages settled](issues/16-mechanics-pages-settled.md) | 01, 21 | ready-for-agent |
| 17 | [Example project and 0.0.1](issues/17-example-project-and-001.md) | 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16 | ready-for-agent |
| 18 | [Installation guide, update script, consumer AGENTS.md](issues/18-installation-guide-update-script-consumer-agentsmd.md) | 17 | ready-for-agent |
| 19 | [Outside consumer test and 0.1.0](issues/19-outside-consumer-test-and-010.md) | 18 | ready-for-agent |
| 20 | [README with visuals and Overview refresh](issues/20-readme-with-visuals-and-overview-refresh.md) | 17, 21 | ready-for-agent |
| 21 | [Docs page skeleton and preview container](issues/21-docs-page-skeleton-and-preview-container.md) | 01 | done |
| 22 | [Named spacing tokens shadow Tailwind sizes](issues/22-named-spacing-tokens-shadow-tailwind-sizes.md) | 21 | done |

- [issues/](issues/) - one file per ticket
- [page-format.md](page-format.md) - the agreed docs page format every page ticket follows
- [prototypes/](prototypes/) - throwaway prototype behind the format, variant A is the reference
