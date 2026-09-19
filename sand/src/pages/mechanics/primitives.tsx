import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MechanicPage,
  ShowcasePiece,
  type Mechanic,
  type MechanicPart,
} from "@/pages/mechanics/mechanic-page";

const plans = {
  starter: "Starter",
  pro: "Pro plan",
  team: "Team",
};

function basePart(name: string, slug: string): MechanicPart {
  return { name, href: `https://base-ui.com/react/components/${slug}` };
}

const mechanic: Mechanic = {
  name: "Primitives",
  role: "Base UI owns the behavior of Sand's interactive components.",
  owns: "Base UI owns behavior, not looks. Focus management, keyboard navigation, open and close state, ARIA wiring, and portal positioning. Sand styles the result with its tokens. Every component in Sand with behavior beyond markup is a Base UI part underneath.",
  showcase: (
    <>
      <ShowcasePiece caption="Dialog">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Delete project?</CardTitle>
            <CardDescription>This cannot be undone.</CardDescription>
          </CardHeader>
          <CardFooter className="justify-end gap-sm">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </CardFooter>
        </Card>
      </ShowcasePiece>
      <ShowcasePiece caption="Select">
        <Select defaultValue="pro" items={plans}>
          <SelectTrigger aria-label="Plan">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="starter">Starter</SelectItem>
            <SelectItem value="pro">Pro plan</SelectItem>
            <SelectItem value="team">Team</SelectItem>
          </SelectContent>
        </Select>
      </ShowcasePiece>
      <ShowcasePiece caption="Menu">
        <Card size="sm" className="w-40 py-xs">
          <div className="flex flex-col px-xs">
            <span className="rounded-md px-sm py-xs text-body-sm">Rename</span>
            <span className="rounded-md px-sm py-xs text-body-sm">
              Duplicate
            </span>
            <Separator className="my-xs" />
            <span className="rounded-md px-sm py-xs text-body-sm text-destructive">
              Delete
            </span>
          </div>
        </Card>
      </ShowcasePiece>
      <ShowcasePiece caption="Input, Button">
        <Input type="email" placeholder="Email address" />
        <Button>Subscribe</Button>
      </ShowcasePiece>
      <ShowcasePiece caption="Switch, Checkbox, Radio">
        <Label>
          <Switch defaultChecked />
          Notifications
        </Label>
        <Label>
          <Checkbox defaultChecked />
          Remember me
        </Label>
        <RadioGroup defaultValue="monthly" aria-label="Billing cycle">
          <Label>
            <RadioGroupItem value="monthly" />
            Monthly
          </Label>
        </RadioGroup>
      </ShowcasePiece>
      <ShowcasePiece caption="Tabs, Slider, Tooltip">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
        </Tabs>
        <Slider defaultValue={[40]} aria-label="Volume" />
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" size="sm" />}>
            Saved 2 min ago
          </TooltipTrigger>
          <TooltipContent>Draft stored on this device</TooltipContent>
        </Tooltip>
      </ShowcasePiece>
    </>
  ),
  code: `import { Dialog } from "@base-ui/react/dialog";

// sand/ui/dialog.tsx wraps it and applies the tokens
<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Backdrop />
    <Dialog.Popup>Delete project?</Dialog.Popup>
  </Dialog.Portal>
</Dialog>`,
  parts: [
    basePart("Accordion", "accordion"),
    basePart("Alert Dialog", "alert-dialog"),
    basePart("Avatar", "avatar"),
    basePart("Button", "button"),
    basePart("Checkbox", "checkbox"),
    basePart("Collapsible", "collapsible"),
    basePart("Combobox", "combobox"),
    basePart("Context Menu", "context-menu"),
    basePart("Dialog", "dialog"),
    {
      name: "Direction Provider",
      href: "https://base-ui.com/react/utils/direction-provider",
    },
    basePart("Drawer", "drawer"),
    basePart("Input", "input"),
    basePart("Menu", "menu"),
    basePart("Menubar", "menubar"),
    basePart("Navigation Menu", "navigation-menu"),
    basePart("Popover", "popover"),
    basePart("Preview Card", "preview-card"),
    basePart("Progress", "progress"),
    basePart("Radio", "radio"),
    basePart("Radio Group", "radio-group"),
    basePart("Scroll Area", "scroll-area"),
    basePart("Select", "select"),
    basePart("Separator", "separator"),
    basePart("Slider", "slider"),
    basePart("Switch", "switch"),
    basePart("Tabs", "tabs"),
    basePart("Toast", "toast"),
    basePart("Toggle", "toggle"),
    basePart("Toggle Group", "toggle-group"),
    basePart("Tooltip", "tooltip"),
    { name: "useRender", href: "https://base-ui.com/react/utils/use-render" },
    {
      name: "mergeProps",
      href: "https://base-ui.com/react/utils/merge-props",
    },
  ],
  links: [
    {
      label: "Base UI docs",
      href: "https://base-ui.com/react/overview/quick-start",
    },
    {
      label: "Dialog reference",
      href: "https://base-ui.com/react/components/dialog",
    },
    { label: "Source on GitHub", href: "https://github.com/mui/base-ui" },
    {
      label: "Releases",
      href: "https://base-ui.com/react/overview/releases",
    },
  ],
  alternatives: [
    {
      name: "Radix UI",
      comparison:
        "The other headless library shadcn supports. Same idea, older API, wider ecosystem. Sand uses Base UI for the render prop model.",
      href: "https://www.radix-ui.com/primitives",
      linkLabel: "radix-ui.com",
    },
    {
      name: "React Aria",
      comparison:
        "Adobe's hooks and components. Stronger on internationalisation, heavier to style. Not used.",
      href: "https://react-spectrum.adobe.com/react-aria/",
      linkLabel: "react-aria",
    },
  ],
};

export function PrimitivesPage() {
  return <MechanicPage mechanic={mechanic} />;
}
