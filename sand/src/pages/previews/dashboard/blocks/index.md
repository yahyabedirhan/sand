# dashboard blocks

Self-contained Dashboard preview blocks. Each file owns its sample data and
imports only Sand components. The nested sidebar stays in document flow
(`collapsible="none"`) so it does not overlay the docs shell.

- [app-sidebar.tsx](app-sidebar.tsx) - workspace nav, hidden below `md`
- [site-header.tsx](site-header.tsx) - overview title, search, new project
- [overview-stats.tsx](overview-stats.tsx) - four KPI cards in a responsive row
- [studio-activity-chart.tsx](studio-activity-chart.tsx) - stacked studio and client hours
- [projects-table.tsx](projects-table.tsx) - active projects with status and hours
