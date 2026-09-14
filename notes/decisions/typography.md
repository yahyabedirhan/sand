# Typography

Status: decided, 2026-09-14

## Context

Consumers should pick a text role, not a pixel size. The spec asks for semantic text tokens (`heading-1`, `body`, `caption`, and so on) defined in the theme as real utilities, on top of the standard size scale, and for this note to compare the models before stating the pick. Past work used fixed handpicked sizes behind semantic names; ratio-based scales were unfamiliar, so the comparison teaches as it goes.

Tailwind v4 makes any `--text-<name>` variable in `@theme` a `text-<name>` utility, and lets the same token carry line height, letter spacing, and weight through `--text-<name>--line-height` and friends. So a semantic token is not a class alias; it is a first-class size with its own metrics.

## Options

### 1. Raw scale only

Consumers use `text-sm`, `text-base`, `text-lg`, `text-2xl` directly, with `font-semibold` and `leading-tight` added by hand each time.

- For: nothing to define; every Tailwind user already knows it.
- Against: the same heading gets built five slightly different ways. There is no place to say "this is what a page title looks like", so consistency depends on people copying the right example. Changing the title size means grepping for `text-2xl` and guessing which ones are titles.

### 2. Fixed handpicked sizes behind semantic names

Each role gets a size chosen by eye, plus its own line height, tracking, and weight, exposed as `text-heading-1` and so on. The raw scale stays available.

- For: every role reads well because someone looked at it. Roles carry their metrics, so `text-heading-1` is one class rather than four. Familiar from previous work.
- Against: the sizes have no formula behind them, so adding a role in between two existing ones is a judgment call. Nothing stops a consumer from reaching past the roles to `text-2xl`.

### 3. Ratio-based (modular) scale

Pick a base size and a ratio, and every step is the previous one multiplied by the ratio. With base 16px and ratio 1.25 (a "major third"): 16, 20, 25, 31.25, 39.06. Roles are then assigned to steps: `body` is step 0, `heading-3` is step 1, `heading-1` is step 3.

How it works: the ratio is the only design decision; the sizes fall out. Smaller ratios (1.125, 1.2) suit dense product UI where headings sit close to body text; larger ratios (1.333, 1.5) suit editorial pages with big display titles. Some systems use two ratios, one below the base for captions and one above for headings.

- For: sizes relate to each other by a rule, which shows in the rhythm of a page. Adding a step is arithmetic. Easy to regenerate for a different feel by changing one number.
- Against: the arithmetic produces sizes nobody would pick by hand (25px, 31.25px), and they still need rounding and a line height chosen per step, at which point the formula is a starting point rather than the truth. A single ratio rarely serves both a 12px caption and a 40px title; the small end gets too small or the large end too large. For a system with four heading levels and three body sizes, the formula saves little.

### 4. Semantic tokens only, raw scale hidden

Same as option 2, but the numeric `text-*` scale is removed from the theme so consumers cannot reach for it.

- For: the two-layer rule becomes enforced, not advisory.
- Against: removing `--text-*` from the theme breaks every registry component, which use `text-sm` and `text-xs` throughout. Exceptions do exist (a stat number, a hero title) and need a sanctioned escape. Hiding the scale trades a rule for a wall.

## Decision

Option 2, fixed handpicked sizes behind semantic roles, with the raw scale kept and documented as the exception layer. This is the spec's stated intent, and the comparison holds it up: a ratio scale gives the most for systems with many steps, and Sand has few. The ratio idea still informs the pick: the chosen sizes step by roughly 1.25 to 1.3 through the headings so the rhythm reads as intended, without committing to a formula that would then need rounding anyway.

The roles, as defined in `styles.css`:

| Role        | Size     | Line height | Weight | Tracking | Default element |
| ----------- | -------- | ----------- | ------ | -------- | --------------- |
| `heading-1` | 2.25rem  | 1.15        | 600    | tight    | `h1`            |
| `heading-2` | 1.75rem  | 1.2         | 600    | tight    | `h2`            |
| `heading-3` | 1.25rem  | 1.3         | 600    | normal   | `h3`            |
| `heading-4` | 1rem     | 1.4         | 600    | normal   | `h4`            |
| `body-lg`   | 1.125rem | 1.6         | 400    | normal   | lead paragraph  |
| `body`      | 1rem     | 1.6         | 400    | normal   | `p`             |
| `body-sm`   | 0.875rem | 1.5         | 400    | normal   | secondary text  |
| `caption`   | 0.75rem  | 1.4         | 400    | normal   | labels, hints   |
| `code`      | 0.875rem | 1.5         | 400    | normal   | `code`, `kbd`   |

Face is not part of the role. `heading-1` and `heading-2` take Fraunces through the page skeleton (`font-serif`) because the serif rule belongs to the page layer; the same role inside a component stays sans.

HTML elements map to roles as defaults through the page skeleton components, not through a global element stylesheet, so a registry component's own `text-sm` is never overridden by a base rule.

## Consequences

- Consumers write `text-body`, `text-heading-2`; they get size, line height, weight, and tracking in one class.
- The raw `text-*` scale stays for exceptions and inside registry components. The Typography page says which is which.
- Adding a role means adding a `--text-<name>` block in `@theme inline` and a row on the Typography page. The registry is not touched.
- The weights in the roles are the reason the fonts module loads 400, 500, and 600 and nothing heavier.
- TODO: the sizes were chosen by eye against the docs site alone. Revisit once a denser layout (a table-heavy page, the Sidebar component page) exists.
