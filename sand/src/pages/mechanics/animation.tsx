import { useState } from "react";

import { Button } from "@/components/ui/button";
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
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
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
import { Toaster, toast } from "@/components/ui/toast";
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

function MotionBox({
  caption,
  className,
}: {
  caption: string;
  className: string;
}) {
  const [key, setKey] = useState(0);
  return (
    <ShowcasePiece caption={caption}>
      <div
        key={key}
        className={`rounded-md border bg-secondary px-md py-sm text-body-sm ${className}`}
      >
        {caption}
      </div>
      <Button size="sm" variant="ghost" onClick={() => setKey((n) => n + 1)}>
        Replay
      </Button>
    </ShowcasePiece>
  );
}

function animatePart(name: string): MechanicPart {
  return {
    name,
    href: "https://github.com/Wombosvideo/tw-animate-css",
  };
}

const mechanic: Mechanic = {
  name: "Animation",
  role: "tw-animate-css supplies the enter and exit utilities overlays use.",
  owns: "tw-animate-css owns the animate-in and animate-out utilities on dialogs, sheets, menus, popovers, tooltips, and toasts. Duration and easing tokens live in styles.css, so a later library would still read the same values. Reduced motion is collapsed globally.",
  showcase: (
    <>
      <MotionBox
        caption="Fade in"
        className="animate-in fade-in duration-base"
      />
      <MotionBox
        caption="Zoom in"
        className="animate-in zoom-in-95 duration-base"
      />
      <MotionBox
        caption="Slide from top"
        className="animate-in slide-in-from-top-4 duration-base"
      />
      <ShowcasePiece caption="Dialog">
        <Dialog>
          <DialogTrigger render={<Button />}>Rename workspace</DialogTrigger>
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
      <ShowcasePiece caption="Sheet, Popover, Tooltip">
        <div className="flex flex-wrap gap-sm">
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Filters
            </SheetTrigger>
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
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Copy
            </TooltipTrigger>
            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Toast">
        <Toaster>
          <Button
            variant="secondary"
            onClick={() =>
              toast.add({
                title: "Draft saved",
                description: "Stored on this device.",
              })
            }
          >
            Show toast
          </Button>
        </Toaster>
      </ShowcasePiece>
    </>
  ),
  code: `// Overlays compose enter and exit from tw-animate-css
className="data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"`,
  parts: [
    animatePart("animate-in"),
    animatePart("animate-out"),
    animatePart("fade-in-0"),
    animatePart("fade-out-0"),
    animatePart("zoom-in-95"),
    animatePart("zoom-out-95"),
    animatePart("slide-in-from-top-2"),
    animatePart("slide-in-from-bottom-2"),
    animatePart("slide-in-from-left-2"),
    animatePart("slide-in-from-right-2"),
    animatePart("duration-base"),
    animatePart("ease-enter"),
  ],
  links: [
    {
      label: "tw-animate-css",
      href: "https://github.com/Wombosvideo/tw-animate-css",
    },
    {
      label: "npm",
      href: "https://www.npmjs.com/package/tw-animate-css",
    },
    {
      label: "Tailwind animations",
      href: "https://tailwindcss.com/docs/animation",
    },
    {
      label: "Releases",
      href: "https://github.com/Wombosvideo/tw-animate-css/releases",
    },
  ],
  alternatives: [
    {
      name: "Motion",
      comparison:
        "A JavaScript motion library. Animation would live in components instead of class names. A swap would retouch every overlay.",
      href: "https://motion.dev",
      linkLabel: "motion.dev",
    },
    {
      name: "CSS transitions only",
      comparison:
        "No enter and exit keyframes, just transition on opacity and transform. The registry already ships animate-in utilities, so Sand matches that.",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions",
      linkLabel: "MDN transitions",
    },
  ],
};

export function AnimationPage() {
  return <MechanicPage mechanic={mechanic} />;
}
