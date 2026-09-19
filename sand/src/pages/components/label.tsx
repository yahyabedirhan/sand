import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Input } from "sand/ui/input";
import { Label } from "sand/ui/label";

<Label>
  Workspace name
  <Input defaultValue="Dune Studio" />
</Label>`;

export function LabelPage() {
  return (
    <ComponentPage
      title="Label"
      lead="Names a form control."
      demo={
        <Label className="w-full max-w-sm flex-col items-start gap-xs">
          Workspace name
          <Input defaultValue="Dune Studio" />
        </Label>
      }
      code={code}
    />
  );
}
