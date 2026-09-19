import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const mechanic: Mechanic = {
  name: "Fonts",
  role: "Loads the three faces, Geist, Fraunces, and Geist Mono.",
  choice: "Self-hosted through fontsource packages",
  dependents:
    "styles.css maps the family names to font-sans, font-serif, font-mono.",
};

export function FontsPage() {
  return <MechanicPage mechanic={mechanic} />;
}
