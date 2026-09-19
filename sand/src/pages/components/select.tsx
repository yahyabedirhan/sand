import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ComponentPage } from "@/docs/component-page";

const plans = {
  starter: "Starter",
  pro: "Pro",
  team: "Team",
};

const code = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sand/ui/select";

const plans = { starter: "Starter", pro: "Pro" };

<Select defaultValue="pro" items={plans}>
  <SelectTrigger aria-label="Plan">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="starter">Starter</SelectItem>
    <SelectItem value="pro">Pro</SelectItem>
  </SelectContent>
</Select>`;

export function SelectPage() {
  return (
    <ComponentPage
      title="Select"
      lead="Chooses one option from a custom popover."
      demo={
        <Select defaultValue="pro" items={plans}>
          <SelectTrigger aria-label="Plan" className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="starter">Starter</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="team">Team</SelectItem>
          </SelectContent>
        </Select>
      }
      code={code}
    />
  );
}
