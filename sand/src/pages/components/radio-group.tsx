import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Label } from "sand/ui/label";
import { RadioGroup, RadioGroupItem } from "sand/ui/radio-group";

<RadioGroup defaultValue="monthly" aria-label="Billing cycle">
  <Label>
    <RadioGroupItem value="monthly" />
    Monthly
  </Label>
  <Label>
    <RadioGroupItem value="yearly" />
    Yearly
  </Label>
</RadioGroup>`;

export function RadioGroupPage() {
  return (
    <ComponentPage
      title="Radio Group"
      lead="Chooses one option from a set."
      demo={
        <RadioGroup
          defaultValue="monthly"
          aria-label="Billing cycle"
          className="w-auto"
        >
          <Label>
            <RadioGroupItem value="monthly" />
            Monthly
          </Label>
          <Label>
            <RadioGroupItem value="yearly" />
            Yearly
          </Label>
        </RadioGroup>
      }
      code={code}
    />
  );
}
