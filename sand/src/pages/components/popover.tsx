import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "sand/ui/popover";

<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>
    Share
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Share this page</PopoverTitle>
      <PopoverDescription>
        Anyone with the link can view it.
      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`;

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Share
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Share this page</PopoverTitle>
          <PopoverDescription>
            Anyone with the link can view it.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

export function PopoverPage() {
  return (
    <ComponentPage
      title="Popover"
      lead="Shows extra content next to a trigger."
      demo={<PopoverDemo />}
      code={code}
    />
  );
}
