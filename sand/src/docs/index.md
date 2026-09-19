# docs

The documentation shell, Sand's first consumer.

- [registry.ts](registry.ts) - the page list; drives routes, sidebar, and the Overview status
- [shell.tsx](shell.tsx) - sidebar, header, and content layout
- [page.tsx](page.tsx) - page skeleton pieces: PageHeader, Section, Prose, InlineCode, DoDont
- [theme.tsx](theme.tsx) - ThemeProvider, system default, local-storage persistence
- [use-theme.ts](use-theme.ts) - the theme context and hook
- [theme-toggle.tsx](theme-toggle.tsx) - the sidebar footer toggle
- [todo-page.tsx](todo-page.tsx) - stub for registry pages without a component
