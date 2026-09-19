import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "sand/ui/drawer";

<Drawer>
  <DrawerTrigger render={<Button />}>Open details</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Invoice details</DrawerTitle>
      <DrawerDescription>
        Review the line items before you send.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose render={<Button />}>Done</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`;

function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button />}>Open details</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Invoice details</DrawerTitle>
          <DrawerDescription>
            Review the line items before you send.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose render={<Button />}>Done</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function DrawerPage() {
  return (
    <ComponentPage
      title="Drawer"
      lead="Pulls a panel over the page for extra content."
      demo={<DrawerDemo />}
      code={code}
    />
  );
}
