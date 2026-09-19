import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "sand/ui/tooltip";

<Tooltip>
  <TooltipTrigger render={<Button variant="outline" />}>
    Copy
  </TooltipTrigger>
  <TooltipContent>Copy to clipboard</TooltipContent>
</Tooltip>`;

function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Copy
      </TooltipTrigger>
      <TooltipContent>Copy to clipboard</TooltipContent>
    </Tooltip>
  );
}

export function TooltipPage() {
  return (
    <ComponentPage
      title="Tooltip"
      lead="Labels a control on hover or focus."
      demo={<TooltipDemo />}
      code={code}
    />
  );
}
