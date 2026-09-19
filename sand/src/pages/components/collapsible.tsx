import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "sand/ui/collapsible";

<Collapsible defaultOpen>
  <CollapsibleTrigger render={<Button variant="ghost" />}>
    Shipping details
  </CollapsibleTrigger>
  <CollapsibleContent>
    Arrives in 3 to 5 days. Signature required.
  </CollapsibleContent>
</Collapsible>`;

export function CollapsiblePage() {
  return (
    <ComponentPage
      title="Collapsible"
      lead="Shows and hides a block of content."
      demo={
        <Collapsible
          defaultOpen
          className="flex w-full min-w-96 max-w-sm flex-col gap-sm"
        >
          <CollapsibleTrigger render={<Button variant="ghost" />}>
            Shipping details
          </CollapsibleTrigger>
          <CollapsibleContent className="text-body-sm text-muted-foreground">
            Arrives in 3 to 5 days. Signature required.
          </CollapsibleContent>
        </Collapsible>
      }
      code={code}
    />
  );
}
