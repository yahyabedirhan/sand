import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Charts",
  role: "Chart primitives behind the Chart component.",
  choice: "Recharts",
  dependents: "components/ui/chart.tsx only.",
};

export function ChartsPage() {
  return <MechanicPage mechanic={mechanic} />;
}
