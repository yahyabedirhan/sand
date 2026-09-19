import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Primitives",
  role: "Unstyled, accessible building blocks such as dialogs, menus, and selects, and the behavior behind them.",
  choice: "Base UI (@base-ui/react)",
  dependents:
    "Every component in components/ui that has behavior beyond markup.",
};

export function PrimitivesPage() {
  return <MechanicPage mechanic={mechanic} />;
}
