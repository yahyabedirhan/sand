import { ModulePage, type Module } from "@/pages/modules/module-page";

const module: Module = {
  name: "Animation",
  role: "Enter and exit utilities used by overlays and menus.",
  choice: "tw-animate-css",
  dependents:
    "Components that open and close, such as dialog, sheet, popover, menus, tooltip, and toast.",
  alternatives: "A motion library such as Motion.",
  swap: "src/modules/animation/index.css, plus the animate-in and animate-out class names in components.",
};

export function AnimationPage() {
  return <ModulePage module={module} />;
}
