import { ModulePage, type Module } from "@/pages/modules/module-page";

const module: Module = {
  name: "Icons",
  role: "The icon set and the Icon type. The module's export list is the allowed set.",
  choice: "Tabler Icons (@tabler/icons-react)",
  dependents:
    "Components with chevrons, checks, and close buttons; the docs shell; the Icons page.",
  alternatives: "Lucide.",
  swap: "src/modules/icons. Re-map each exported name to the new library's icon of the same meaning.",
};

export function IconsPage() {
  return <ModulePage module={module} />;
}
