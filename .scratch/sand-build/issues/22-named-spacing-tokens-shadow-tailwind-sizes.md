# 22: Named spacing tokens shadow Tailwind sizes

**What to build:** Overlays and tooltips size correctly again. Sand's named spacing tokens (`--spacing-xs` through `--spacing-2xl`) are declared in the Tailwind theme namespace that also feeds the container-size utilities, so `max-w-xs` computes to 4px instead of 20rem. Dialog, Alert Dialog, Sheet, Toast, Empty, and the preview container's tooltip render as narrow strips. Move the named steps out of the `--spacing-*` namespace (for example a `--space-*` namespace with a matching utility, or explicit `--container-*` values restored), keep the `gap-md` style utilities the pages already use working, and state the outcome on the Spacing foundation notes so ticket 10 documents the final names.

**Blocked by:** 21 Docs page skeleton and preview container

**Status:** done

- [x] `max-w-xs` and the other container sizes compute to Tailwind's defaults
- [x] the named spacing utilities used across pages and components still work (grep for `-xs`, `-sm`, `-md`, `-lg`, `-xl`, `-2xl` spacing utilities and confirm nothing changed visually)
- [x] Dialog, Sheet, Toast, and the container tooltip render at their intended widths, checked in the browser
- [x] the decision and the final token names are recorded for ticket 10 (a comment in `styles.css` and a line on ticket 10)
- [x] `check` and `build` pass
