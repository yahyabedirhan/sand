import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MechanicPage,
  ShowcasePiece,
  type Mechanic,
} from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Tailwind",
  role: "Utility classes over Sand's token variables.",
  owns: "Tailwind owns the utility classes on every component. Semantic tokens in styles.css become utilities through @theme inline. Dark mode is a class on the root. Spacing, radius, type, and color on the pages are Tailwind utilities over those tokens.",
  showcase: (
    <>
      <ShowcasePiece caption="Color roles">
        <div className="flex flex-wrap gap-xs">
          <span className="rounded-md bg-primary px-sm py-xs text-primary-foreground">
            primary
          </span>
          <span className="rounded-md bg-secondary px-sm py-xs text-secondary-foreground">
            secondary
          </span>
          <span className="rounded-md bg-muted px-sm py-xs text-muted-foreground">
            muted
          </span>
          <span className="rounded-md bg-destructive/10 px-sm py-xs text-destructive">
            destructive
          </span>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Spacing">
        <div className="flex items-end gap-sm">
          <div
            className="h-4 rounded-sm bg-primary"
            style={{ width: "var(--space-xs)" }}
            title="xs"
          />
          <div
            className="h-4 rounded-sm bg-primary"
            style={{ width: "var(--space-sm)" }}
            title="sm"
          />
          <div
            className="h-4 rounded-sm bg-primary"
            style={{ width: "var(--space-md)" }}
            title="md"
          />
          <div
            className="h-4 rounded-sm bg-primary"
            style={{ width: "var(--space-lg)" }}
            title="lg"
          />
          <div
            className="h-4 rounded-sm bg-primary"
            style={{ width: "var(--space-xl)" }}
            title="xl"
          />
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Radius">
        <div className="flex flex-wrap gap-sm">
          <div className="size-10 rounded-sm border bg-card" />
          <div className="size-10 rounded-md border bg-card" />
          <div className="size-10 rounded-lg border bg-card" />
          <div className="size-10 rounded-xl border bg-card" />
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Shadow">
        <div className="flex flex-wrap gap-md">
          <div className="size-10 rounded-md bg-card shadow-xs" />
          <div className="size-10 rounded-md bg-card shadow-sm" />
          <div className="size-10 rounded-md bg-card shadow-md" />
          <div className="size-10 rounded-md bg-card shadow-lg" />
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Type roles">
        <div className="flex flex-col gap-xs">
          <p className="font-serif text-heading-2">Section title</p>
          <p className="text-body">Body copy on the page.</p>
          <p className="text-caption text-muted-foreground">Caption, quiet.</p>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Dark class">
        <Card className="dark bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Dark scope</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-sm">
            <Button size="sm">Save</Button>
            <Button size="sm" variant="outline">
              Cancel
            </Button>
          </CardContent>
        </Card>
      </ShowcasePiece>
    </>
  ),
  code: `@import "tailwindcss";

@theme inline {
  --color-primary: var(--primary);
  --color-background: var(--background);
  --font-sans: "Geist", ui-sans-serif, system-ui, sans-serif;
}`,
  language: "css",
  parts: [
    { name: "@theme", href: "https://tailwindcss.com/docs/theme" },
    { name: "dark", href: "https://tailwindcss.com/docs/dark-mode" },
    { name: "colors", href: "https://tailwindcss.com/docs/colors" },
    { name: "spacing", href: "https://tailwindcss.com/docs/padding" },
    {
      name: "border-radius",
      href: "https://tailwindcss.com/docs/border-radius",
    },
    { name: "box-shadow", href: "https://tailwindcss.com/docs/box-shadow" },
    { name: "font-size", href: "https://tailwindcss.com/docs/font-size" },
    { name: "font-family", href: "https://tailwindcss.com/docs/font-family" },
    { name: "flex", href: "https://tailwindcss.com/docs/flex" },
    {
      name: "grid",
      href: "https://tailwindcss.com/docs/grid-template-columns",
    },
    {
      name: "Vite plugin",
      href: "https://tailwindcss.com/docs/installation/using-vite",
    },
    {
      name: "@import",
      href: "https://tailwindcss.com/docs/functions-and-directives",
    },
  ],
  links: [
    { label: "Tailwind docs", href: "https://tailwindcss.com/docs" },
    {
      label: "Theme",
      href: "https://tailwindcss.com/docs/theme",
    },
    {
      label: "Source on GitHub",
      href: "https://github.com/tailwindlabs/tailwindcss",
    },
    {
      label: "Releases",
      href: "https://github.com/tailwindlabs/tailwindcss/releases",
    },
  ],
  alternatives: [
    {
      name: "Plain CSS",
      comparison:
        "Custom properties and selectors, no utility layer. Tokens stay more visible. The maintainer chose Tailwind so the registry drops in unchanged.",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      linkLabel: "MDN CSS",
    },
    {
      name: "CSS Modules",
      comparison:
        "Local class names per file. Would replace every utility on the components with a module stylesheet. Not used.",
      href: "https://github.com/css-modules/css-modules",
      linkLabel: "css-modules",
    },
  ],
};

export function TailwindPage() {
  return <MechanicPage mechanic={mechanic} />;
}
