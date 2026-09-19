import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Icons",
  role: "The icon library behind every icon in Sand.",
  choice: "Tabler Icons (@tabler/icons-react)",
  dependents:
    "Components with chevrons, checks, and close buttons; the docs shell; the Icons page.",
};

export function IconsPage() {
  return <MechanicPage mechanic={mechanic} />;
}
