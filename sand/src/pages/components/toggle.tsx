import { Toggle } from "@/components/ui/toggle";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Toggle } from "sand/ui/toggle";

<Toggle defaultPressed>Notifications</Toggle>`;

export function TogglePage() {
  return (
    <ComponentPage
      title="Toggle"
      lead="Presses a setting on or off."
      demo={<Toggle defaultPressed>Notifications</Toggle>}
      code={code}
    />
  );
}
