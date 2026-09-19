import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InlineCode } from "@/docs/page";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MechanicPage,
  ShowcasePiece,
  type Mechanic,
} from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Fonts",
  role: "fontsource self-hosts Geist, Fraunces, and Geist Mono.",
  owns: "fontsource loads the three faces. styles.css imports the weight files and maps the family names onto font-sans, font-serif, and font-mono. The type roles and the page skeleton pick which face to use. Geist is UI and body, Fraunces is the top two titles, Geist Mono is code, keys, and tabular numbers.",
  showcase: (
    <>
      <ShowcasePiece caption="Geist, body">
        <p className="font-sans text-body">
          Refunds arrive within five business days.
        </p>
        <p className="font-sans text-body-sm text-muted-foreground">
          The default face for UI and copy.
        </p>
      </ShowcasePiece>
      <ShowcasePiece caption="Geist, UI">
        <div className="flex flex-wrap items-center gap-sm">
          <Button>Publish</Button>
          <Button variant="ghost">Save draft</Button>
          <Badge variant="outline">Pro</Badge>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Fraunces, heading-1">
        <p className="font-serif text-heading-1">Invoices</p>
      </ShowcasePiece>
      <ShowcasePiece caption="Fraunces, heading-2">
        <p className="font-serif text-heading-2">Unpaid</p>
      </ShowcasePiece>
      <ShowcasePiece caption="Geist Mono, code">
        <p className="text-body">
          Import <InlineCode>Button</InlineCode> from{" "}
          <InlineCode>sand/ui/button</InlineCode>.
        </p>
      </ShowcasePiece>
      <ShowcasePiece caption="Geist Mono, keys and figures">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono">INV-0421</TableCell>
              <TableCell className="font-mono">$48.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono">INV-0397</TableCell>
              <TableCell className="font-mono">$48.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ShowcasePiece>
    </>
  ),
  code: `@import "@fontsource/geist/400.css";
@import "@fontsource/geist/500.css";
@import "@fontsource/geist/600.css";
@import "@fontsource/fraunces/400.css";
@import "@fontsource/fraunces/500.css";
@import "@fontsource/fraunces/600.css";
@import "@fontsource/geist-mono/400.css";
@import "@fontsource/geist-mono/500.css";`,
  parts: [
    { name: "Geist 400", href: "https://fontsource.org/fonts/geist" },
    { name: "Geist 500", href: "https://fontsource.org/fonts/geist" },
    { name: "Geist 600", href: "https://fontsource.org/fonts/geist" },
    { name: "Fraunces 400", href: "https://fontsource.org/fonts/fraunces" },
    { name: "Fraunces 500", href: "https://fontsource.org/fonts/fraunces" },
    { name: "Fraunces 600", href: "https://fontsource.org/fonts/fraunces" },
    {
      name: "Geist Mono 400",
      href: "https://fontsource.org/fonts/geist-mono",
    },
    {
      name: "Geist Mono 500",
      href: "https://fontsource.org/fonts/geist-mono",
    },
    { name: "font-sans", href: "https://fontsource.org/fonts/geist" },
    { name: "font-serif", href: "https://fontsource.org/fonts/fraunces" },
    { name: "font-mono", href: "https://fontsource.org/fonts/geist-mono" },
    { name: "fontsource", href: "https://fontsource.org" },
  ],
  links: [
    { label: "fontsource", href: "https://fontsource.org" },
    { label: "Geist", href: "https://fontsource.org/fonts/geist" },
    { label: "Fraunces", href: "https://fontsource.org/fonts/fraunces" },
    {
      label: "Geist Mono",
      href: "https://fontsource.org/fonts/geist-mono",
    },
  ],
  alternatives: [
    {
      name: "A hosted font link",
      comparison:
        "A stylesheet from a font host. Fewer files in the repo, a runtime network dependency, and a privacy leak. Sand self-hosts instead.",
      href: "https://fonts.google.com",
      linkLabel: "fonts.google.com",
    },
    {
      name: "Manual self-hosting",
      comparison:
        "Checking font files into the repo by hand. Same result, more upkeep. fontsource already packages the files and the CSS.",
      href: "https://fontsource.org/docs/getting-started/migrate",
      linkLabel: "fontsource migrate guide",
    },
  ],
};

export function FontsPage() {
  return <MechanicPage mechanic={mechanic} />;
}
