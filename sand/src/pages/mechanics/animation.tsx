import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Animation",
  role: "Enter and exit utilities used by overlays and menus.",
  choice: "tw-animate-css",
  dependents:
    "Components that open and close, such as dialog, sheet, popover, menus, tooltip, and toast.",
};

export function AnimationPage() {
  return <MechanicPage mechanic={mechanic} />;
}
