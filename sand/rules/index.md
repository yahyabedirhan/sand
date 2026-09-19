# rules

Read the rule file for each Sand topic before using or changing that topic.
Each rule has a level-two heading for its title followed by at least one
sentence. Examples are optional. Put constraints that span topics in
[`system.md`](system.md).

- [system.md](system.md) - rules that span Sand topics
- [colors.md](colors.md) - pairing, stacking, and opacity
- [typography.md](typography.md) - typography roles and usage
- [fonts.md](fonts.md) - which face is legal where
- [spacing.md](spacing.md) - named steps over the numeric scale
- [radius.md](radius.md) - named radius steps
- [shadow.md](shadow.md) - named shadow steps
- [motion.md](motion.md) - reduced motion and motion tokens
- [icons.md](icons.md) - icon size and text pairing

## Keep pages in sync

After changing a rule file or a topic page, run `pnpm check` from the
repository root. The rules sync test fails when a rule title in a topic's
rule file is missing from that topic's page, or a title on the page is
missing from the file.
