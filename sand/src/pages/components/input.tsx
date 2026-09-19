import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Input } from "sand/ui/input";
import { Label } from "sand/ui/label";

<Label>
  Email address
  <Input type="email" placeholder="you@example.com" />
</Label>`;

export function InputPage() {
  return (
    <ComponentPage
      title="Input"
      lead="Collects a single line of text."
      demo={
        <Label className="w-full max-w-sm flex-col items-start gap-xs">
          Email address
          <Input type="email" placeholder="you@example.com" />
        </Label>
      }
      code={code}
    />
  );
}
