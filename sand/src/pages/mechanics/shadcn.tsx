import { IconInfoCircle } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MechanicPage,
  ShowcasePiece,
  type Mechanic,
  type MechanicPart,
} from "@/pages/mechanics/mechanic-page";

const plans = {
  starter: "Starter",
  pro: "Pro",
  team: "Team",
};

function shadcnPart(name: string, slug: string): MechanicPart {
  return { name, href: `https://ui.shadcn.com/docs/components/${slug}` };
}

const mechanic: Mechanic = {
  name: "shadcn",
  role: "The registry and conventions the UI files follow.",
  owns: "The shadcn registry is the source of the files under components/ui. Each file follows the registry's composition, a primitive underneath and tokens on the class names. components.json records the base-mira style, Tabler icons, and the aliases. Sand restyles the result.",
  showcase: (
    <>
      <ShowcasePiece caption="Button">
        <div className="flex flex-wrap gap-sm">
          <Button>Publish</Button>
          <Button variant="outline">Save draft</Button>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Input">
        <Label className="flex-col items-start">
          Email address
          <Input type="email" placeholder="you@example.com" />
        </Label>
      </ShowcasePiece>
      <ShowcasePiece caption="Select">
        <Select defaultValue="pro" items={plans}>
          <SelectTrigger aria-label="Plan" className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="starter">Starter</SelectItem>
            <SelectItem value="pro">Pro</SelectItem>
            <SelectItem value="team">Team</SelectItem>
          </SelectContent>
        </Select>
      </ShowcasePiece>
      <ShowcasePiece caption="Dialog">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            Rename workspace
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rename workspace</DialogTitle>
              <DialogDescription>
                This name is shown to everyone in the workspace.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Cancel
              </DialogClose>
              <DialogClose render={<Button />}>Save</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcasePiece>
      <ShowcasePiece caption="Card">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade your plan</CardTitle>
            <CardDescription>Unlock previews on the Pro plan.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button size="sm">Upgrade</Button>
          </CardFooter>
        </Card>
      </ShowcasePiece>
      <ShowcasePiece caption="Alert, Avatar, Badge">
        <div className="flex flex-col gap-sm">
          <div className="flex items-center gap-sm">
            <Avatar>
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <Badge variant="secondary">Owner</Badge>
          </div>
          <Alert>
            <IconInfoCircle />
            <AlertTitle>Workspace upgraded</AlertTitle>
            <AlertDescription>
              New members can join with the invite link.
            </AlertDescription>
          </Alert>
        </div>
      </ShowcasePiece>
    </>
  ),
  code: `{
  "style": "base-mira",
  "rsc": false,
  "tsx": true,
  "iconLibrary": "tabler",
  "aliases": {
    "ui": "@/components/ui"
  }
}`,
  language: "json",
  parts: [
    shadcnPart("Accordion", "accordion"),
    shadcnPart("Alert", "alert"),
    shadcnPart("Alert Dialog", "alert-dialog"),
    shadcnPart("Avatar", "avatar"),
    shadcnPart("Badge", "badge"),
    shadcnPart("Button", "button"),
    shadcnPart("Calendar", "calendar"),
    shadcnPart("Card", "card"),
    shadcnPart("Chart", "chart"),
    shadcnPart("Checkbox", "checkbox"),
    shadcnPart("Combobox", "combobox"),
    shadcnPart("Command", "command"),
    shadcnPart("Dialog", "dialog"),
    shadcnPart("Dropdown Menu", "dropdown-menu"),
    shadcnPart("Field", "field"),
    shadcnPart("Input", "input"),
    shadcnPart("Popover", "popover"),
    shadcnPart("Select", "select"),
    shadcnPart("Sheet", "sheet"),
    shadcnPart("Sidebar", "sidebar"),
    shadcnPart("Table", "table"),
    shadcnPart("Tabs", "tabs"),
    shadcnPart("Tooltip", "tooltip"),
  ],
  links: [
    { label: "shadcn/ui", href: "https://ui.shadcn.com" },
    {
      label: "Components",
      href: "https://ui.shadcn.com/docs/components",
    },
    { label: "Source on GitHub", href: "https://github.com/shadcn-ui/ui" },
    {
      label: "Changelog",
      href: "https://ui.shadcn.com/docs/changelog",
    },
  ],
  alternatives: [
    {
      name: "Hand-rolled components",
      comparison:
        "Write every file without a registry. Full control, no add flow, and no shared composition. Sand starts from the registry and restyles it.",
      href: "https://base-ui.com/react/components",
      linkLabel: "Base UI components",
    },
    {
      name: "Radix Themes",
      comparison:
        "A styled kit on Radix primitives. Would replace both the registry files and Sand's token mapping. Not used.",
      href: "https://www.radix-ui.com/themes/docs/overview/getting-started",
      linkLabel: "Radix Themes",
    },
  ],
};

export function ShadcnPage() {
  return <MechanicPage mechanic={mechanic} />;
}
