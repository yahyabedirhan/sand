# 02: Add a searchable icon gallery

**What to build:** Turn the Foundations Icons preview into an interactive gallery where visitors can browse the complete available icon catalog and search icons by name. Keep the existing guidance about icon sizing, pairing, and usage rules.

**Blocked by:** None (can start immediately).

**Status:** done

- [x] The Icons page presents the icon catalog as a clear gallery inside a preview container.
- [x] Every icon in the catalog is discoverable by its displayed name without requiring a manually synchronized list.
- [x] A labeled search field filters icons by name without case sensitivity.
- [x] Clearing the search restores the browsable catalog, and a query with no matches shows an explicit empty state.
- [x] Gallery items expose useful accessible names and remain usable on mobile and desktop.
- [x] The page remains responsive while browsing or searching the full catalog.
- [x] Automated coverage verifies matching, clearing, and the empty state.

## Seams

- `IconGallery` (`icons` catalog + labeled search field): matching, clearing, empty state, accessible item names.
- `tablerIconCatalog()`: Tabler `icons` map as the source of truth, not a hand list.
- `IconsPage`: preview-container gallery wired to that catalog, with sizes, pairing, and rules unchanged.
