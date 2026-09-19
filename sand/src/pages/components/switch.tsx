import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Label } from "sand/ui/label";
import { Switch } from "sand/ui/switch";

<Label>
  <Switch defaultChecked />
  Weekly digest
</Label>`;

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
