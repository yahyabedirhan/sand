import { ModulePage, type Module } from "@/pages/modules/module-page";

const module: Module = {
  name: "Primitives",
  role: "Unstyled, accessible building blocks such as dialogs, menus, and selects, and the behavior behind them.",
  choice: "Base UI (@base-ui/react)",
  dependents:
    "Every component in components/ui that has behavior beyond markup.",
  alternatives: "Radix UI.",
  swap: "src/modules/primitives. Re-map each exported namespace to the new library; components alias them as XPrimitive and do not import the library.",
};

export function PrimitivesPage() {
  return <ModulePage module={module} />;
}
