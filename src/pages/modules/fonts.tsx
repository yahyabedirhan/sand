import { ModulePage, type Module } from "@/pages/modules/module-page";

const module: Module = {
  name: "Fonts",
  role: "Loads the three faces, Geist, Fraunces, and Geist Mono.",
  choice: "Self-hosted through fontsource packages",
  dependents:
    "styles.css maps the family names to font-sans, font-serif, font-mono.",
  alternatives: "A hosted font link, manual self-hosting of the files.",
  swap: "src/modules/fonts/index.css. Change how the files are loaded; the family names stay.",
};

export function FontsPage() {
  return <ModulePage module={module} />;
}
