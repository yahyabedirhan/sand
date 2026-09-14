import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader, Prose } from "@/docs/page";

type Module = {
  name: string;
  role: string;
  choice: string;
  dependents: string;
  alternatives: string;
  swap: string;
};

const modules: Module[] = [
  {
    name: "Primitives",
    role: "Unstyled, accessible building blocks: dialogs, menus, selects, and the behavior behind them.",
    choice: "Base UI (@base-ui/react)",
    dependents:
      "Every component in components/ui that has behavior beyond markup.",
    alternatives: "Radix UI.",
    swap: "src/modules/primitives. Re-map each exported namespace to the new library; components alias them as XPrimitive and do not import the library.",
  },
  {
    name: "Icons",
    role: "The icon set and the Icon type. The module's export list is the allowed set.",
    choice: "Tabler Icons (@tabler/icons-react)",
    dependents:
      "Components with chevrons, checks, and close buttons; the docs shell; the Icons page.",
    alternatives: "Lucide.",
    swap: "src/modules/icons. Re-map each exported name to the new library's icon of the same meaning.",
  },
  {
    name: "Charts",
    role: "Chart primitives behind the Chart component.",
    choice: "Recharts",
    dependents: "components/ui/chart.tsx only.",
    alternatives: "Visx, Nivo, a hand-rolled SVG layer.",
    swap: "src/modules/charts, together with components/ui/chart.tsx, which is written against the chart library's API.",
  },
  {
    name: "Fonts",
    role: "Loads the three faces: Geist, Fraunces, Geist Mono.",
    choice: "Self-hosted through fontsource packages",
    dependents:
      "styles.css maps the family names to font-sans, font-serif, font-mono.",
    alternatives: "A hosted font link, manual self-hosting of the files.",
    swap: "src/modules/fonts/index.css. Change how the files are loaded; the family names stay.",
  },
  {
    name: "Animation",
    role: "Enter and exit utilities used by overlays and menus.",
    choice: "tw-animate-css",
    dependents:
      "Components that open and close: dialog, sheet, popover, menus, tooltip, toast.",
    alternatives: "A motion library such as Motion.",
    swap: "src/modules/animation/index.css, plus the animate-in and animate-out class names in components.",
  },
];

export function ModulesPage() {
  return (
    <>
      <PageHeader
        title="Modules"
        lead="What Sand is built from. Each library enters through one folder under src/modules; the linter rejects a direct import anywhere else."
      />
      <div className="flex flex-col gap-md">
        {modules.map((module) => (
          <Card key={module.name}>
            <CardHeader>
              <CardTitle>{module.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Prose>
                <dl className="grid grid-cols-[max-content_1fr] gap-x-md gap-y-xs text-body-sm">
                  <dt className="text-muted-foreground">Role</dt>
                  <dd>{module.role}</dd>
                  <dt className="text-muted-foreground">Current choice</dt>
                  <dd>{module.choice}</dd>
                  <dt className="text-muted-foreground">Depends on it</dt>
                  <dd>{module.dependents}</dd>
                  <dt className="text-muted-foreground">
                    Alternatives considered
                  </dt>
                  <dd>{module.alternatives}</dd>
                  <dt className="text-muted-foreground">How to swap</dt>
                  <dd>{module.swap}</dd>
                </dl>
              </Prose>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
