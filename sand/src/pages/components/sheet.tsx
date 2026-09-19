import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "sand/ui/sheet";

<Sheet>
  <SheetTrigger render={<Button />}>Open filters</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>
        Narrow the list by status and owner.
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <SheetClose render={<Button />}>Apply</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`;

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>Open filters</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Narrow the list by status and owner.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button />}>Apply</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetPage() {
  return (
    <ComponentPage
      title="Sheet"
      lead="Slides a panel in from the edge of the screen."
      demo={<SheetDemo />}
      code={code}
    />
  );
}
