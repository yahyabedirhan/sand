import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "sand/ui/hover-card";

<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>
    @sand
  </HoverCardTrigger>
  <HoverCardContent>
    Sand is a design system. Hover or focus the trigger to preview it.
  </HoverCardContent>
</HoverCard>`;

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>
        @sand
      </HoverCardTrigger>
      <HoverCardContent>
        Sand is a design system. Hover or focus the trigger to preview it.
      </HoverCardContent>
    </HoverCard>
  );
}

export function HoverCardPage() {
  return (
    <ComponentPage
      title="Hover Card"
      lead="Previews a target when the pointer or focus lands on it."
      demo={<HoverCardDemo />}
      code={code}
    />
  );
}
