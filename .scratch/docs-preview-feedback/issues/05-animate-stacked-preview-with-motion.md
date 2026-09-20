# 05: Animate stacked theme comparison with Motion

**What to build:** Opening and closing the stacked light and dark preview comparison should animate smoothly with Motion (`motion.div`). Add Motion to the project for this interaction. Honor Sand's reduced-motion rule so the comparison still toggles instantly when the visitor prefers reduced motion.

**Blocked by:** 04: Keep stacked theme comparison from shifting the docs layout.

**Status:** ready-for-agent

- [ ] Enabling stacked comparison reveals the second theme with a Motion height animation rather than an instant snap.
- [ ] Disabling stacked comparison animates closed the same way.
- [ ] The animation uses Motion's `motion.div` (or equivalent Motion primitive), not a one-off CSS hack for this control.
- [ ] Reduced motion skips or collapses the animation while still toggling the stacked view.
- [ ] Layout remains as stable as ticket 04. The animation must not reintroduce a sideways jump.
- [ ] Automated coverage verifies stacked comparison still works and respects reduced motion.
