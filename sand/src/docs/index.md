# docs

The documentation shell, Sand's first consumer.

- [registry.ts](registry.ts) - the page list; drives routes, sidebar, the Overview section cards, and each page's layout (`docs`, `wide`, `full`)
- [shell.tsx](shell.tsx) - sidebar, header, and the layout switch per page
- [page.tsx](page.tsx) - page skeleton pieces: PageHeader, PageLayout (content column and the "On this page" rail), Section (registers itself in the rail), Prose, InlineCode, RuleList, Rule
- [preview-container.tsx](preview-container.tsx) - PreviewContainer, the box around every rendered example: named panes, Code pane, container-only theme toggle, light/dark split
- [theme.tsx](theme.tsx) - ThemeProvider, system default, local-storage persistence
- [use-theme.ts](use-theme.ts) - the theme context and hook
- [theme-toggle.tsx](theme-toggle.tsx) - the sidebar footer toggle
- [todo-page.tsx](todo-page.tsx) - stub for registry pages without a component
- [../pages/previews/](../pages/previews/) - full-width preview pages and their page-local blocks
