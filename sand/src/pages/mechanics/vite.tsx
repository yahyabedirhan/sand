import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
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
  name: "Vite",
  role: "The bundler and dev server for this app.",
  owns: "Vite owns the dev server and the production build. The React plugin and the Tailwind Vite plugin run here. Path alias @ resolves to src. The docs site is this Vite app.",
  showcase: (
    <>
      <ShowcasePiece caption="Card">
        <Card>
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
            <CardDescription>Owned by Sofia Davis</CardDescription>
          </CardHeader>
        </Card>
      </ShowcasePiece>
      <ShowcasePiece caption="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dune</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcasePiece>
      <ShowcasePiece caption="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV-0421</TableCell>
              <TableCell>$48.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV-0397</TableCell>
              <TableCell>$48.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ShowcasePiece>
      <ShowcasePiece caption="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcasePiece>
      <ShowcasePiece caption="Badge">
        <div className="flex flex-wrap gap-xs">
          <Badge>Live</Badge>
          <Badge variant="secondary">Vite 8</Badge>
          <Badge variant="outline">HMR</Badge>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Skeleton">
        <div className="flex flex-col gap-sm">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </ShowcasePiece>
    </>
  ),
  code: `import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  plugins: [react(), tailwindcss()],
});`,
  parts: [
    { name: "Dev server", href: "https://vite.dev/guide/" },
    { name: "Build", href: "https://vite.dev/guide/build" },
    {
      name: "HMR",
      href: "https://vite.dev/guide/features#hot-module-replacement",
    },
    { name: "React plugin", href: "https://vite.dev/plugins/" },
    {
      name: "Tailwind plugin",
      href: "https://tailwindcss.com/docs/installation/using-vite",
    },
    {
      name: "Path alias",
      href: "https://vite.dev/config/shared-options#resolve-alias",
    },
    { name: "TypeScript", href: "https://vite.dev/guide/features#typescript" },
    { name: "CSS", href: "https://vite.dev/guide/features#css" },
    { name: "Static assets", href: "https://vite.dev/guide/assets" },
    { name: "Preview", href: "https://vite.dev/guide/static-deploy" },
    { name: "Rolldown", href: "https://vite.dev/guide/rolldown" },
    { name: "Config", href: "https://vite.dev/config/" },
  ],
  links: [
    { label: "Vite docs", href: "https://vite.dev" },
    { label: "Guide", href: "https://vite.dev/guide/" },
    { label: "Source on GitHub", href: "https://github.com/vitejs/vite" },
    { label: "Releases", href: "https://github.com/vitejs/vite/releases" },
  ],
  alternatives: [
    {
      name: "Webpack",
      comparison:
        "The older bundler most React apps grew up on. Heavier config, slower refresh. Vite is the template Sand started from.",
      href: "https://webpack.js.org",
      linkLabel: "webpack.js.org",
    },
    {
      name: "Parcel",
      comparison:
        "Zero-config bundling with a different plugin model. Would replace the Vite config and the Tailwind plugin wiring. Not used.",
      href: "https://parceljs.org",
      linkLabel: "parceljs.org",
    },
  ],
};

export function VitePage() {
  return <MechanicPage mechanic={mechanic} />;
}
