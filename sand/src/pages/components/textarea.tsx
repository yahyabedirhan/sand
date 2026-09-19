import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Textarea } from "sand/ui/textarea";

<Textarea placeholder="Add a note" />`;

export function TextareaPage() {
  return (
    <ComponentPage
      title="Textarea"
      lead="Collects longer, multi-line text."
      demo={
        <Label className="w-full max-w-sm flex-col items-start gap-xs">
          Note
          <Textarea placeholder="Add a note" />
        </Label>
      }
      code={code}
    />
  );
}
