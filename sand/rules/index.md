# rules

Read the rule file for each Sand topic before using or changing that topic.
Each rule has a level-two heading for its title followed by at least one
sentence. Examples are optional. Put constraints that span topics in
[`system.md`](system.md).

- [system.md](system.md) - rules that span Sand topics
- [colors.md](colors.md) - pairing, stacking, and opacity
- [typography.md](typography.md) - typography roles and usage

## Keep pages in sync

After changing a rule file, run `pnpm dev` from the repository root and open
the matching docs page. Compare the page's Rules section with the markdown
file. Every title, sentence, and rule must appear in the same order, with no
extra rules on either side. Then run `pnpm check` and `pnpm build`.

TODO: Ticket 03 replaces this manual comparison with an automated sync check.
