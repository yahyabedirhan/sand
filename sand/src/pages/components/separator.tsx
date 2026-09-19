import { Separator } from "@/components/ui/separator";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Separator } from "sand/ui/separator";

<div>
  <p>Account</p>
  <Separator />
  <p>Billing</p>
</div>`;

export function SeparatorPage() {
  return (
    <ComponentPage
      title="Separator"
      lead="Draws a line between content."
      demo={
        <div className="flex w-full min-w-96 max-w-sm flex-col gap-sm text-body-sm">
          <p>Account</p>
          <Separator />
          <p>Billing</p>
        </div>
      }
      code={code}
    />
  );
}
