import { ModulePage, type Module } from "@/pages/modules/module-page";

const module: Module = {
  name: "Charts",
  role: "Chart primitives behind the Chart component.",
  choice: "Recharts",
  dependents: "components/ui/chart.tsx only.",
  alternatives: "Visx, Nivo, a hand-rolled SVG layer.",
  swap: "src/modules/charts, together with components/ui/chart.tsx, which is written against the chart library's API.",
};

export function ChartsPage() {
  return <ModulePage module={module} />;
}
