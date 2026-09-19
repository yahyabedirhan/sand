import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Checkbox } from "sand/ui/checkbox";
import { Label } from "sand/ui/label";

<Label>
  <Checkbox defaultChecked />
  Email me a receipt
</Label>`;

export function CheckboxPage() {
  return (
    <ComponentPage
      title="Checkbox"
      lead="Toggles one independent choice."
      demo={
        <Label>
          <Checkbox defaultChecked />
          Email me a receipt
        </Label>
      }
      code={code}
    />
  );
}
