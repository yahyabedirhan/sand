import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Switch } from "sand/ui/switch";

<Switch defaultChecked aria-label="Weekly digest" />`;

export function SwitchPage() {
  return (
    <ComponentPage
      title="Switch"
      lead="Turns a setting on or off."
      demo={
        <Label>
          <Switch defaultChecked />
          Weekly digest
        </Label>
      }
      code={code}
    />
  );
}
