# 10: Spacing, Radius, Shadow, Motion pages

**What to build:** Four foundation pages render their scales live (the named spacing steps over the numeric scale, the radius steps, the shadow steps, the duration and easing tokens with a reduced-motion demonstration) with a short rule file each where a rule exists.

Follow `.scratch/sand-build/page-format.md` for the page layout, the preview container, and the rules block; open the prototype there if anything is unclear.

Ticket 22 may rename the named spacing tokens; read its answer before writing the Spacing page.

Ticket 22 settled the names as `--space-xs` `--space-sm` `--space-md` `--space-lg` `--space-xl` `--space-2xl`. Matching utilities keep `gap-md` and the other named spacing classes. They do not live under `--spacing-*`.

**Blocked by:** 02 Rules as markdown, 21 Docs page skeleton and preview container

**Status:** done

- [x] each page renders its tokens from the real theme values, not hard-coded copies
- [x] Motion page demonstrates enter and exit and respects reduced motion
- [x] rule files exist for any page that has a rule; the sync check passes
- [x] all four registered as written
