import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MechanicPage,
  type Mechanic,
  type MechanicPart,
} from "@/pages/mechanics/mechanic-page";

const demonstrations = [
  { name: "Fade in", className: "animate-in fade-in" },
  { name: "Zoom in", className: "animate-in zoom-in-95" },
  { name: "Slide from top", className: "animate-in slide-in-from-top-2" },
  { name: "Slide from bottom", className: "animate-in slide-in-from-bottom-2" },
  { name: "Slide from left", className: "animate-in slide-in-from-left-2" },
  { name: "Slide from right", className: "animate-in slide-in-from-right-2" },
  { name: "Fade out", className: "animate-out fade-out fill-mode-forwards" },
  { name: "Zoom out", className: "animate-out zoom-out-95 fill-mode-forwards" },
];

function MotionRow({ name, className }: { name: string; className: string }) {
  const [play, setPlay] = useState(0);
  return (
    <TableRow>
      <TableCell className="w-[13rem] font-medium">{name}</TableCell>
      <TableCell>
        <div
          key={play}
          role="img"
          aria-label={`${name} animation`}
          className={`h-10 w-24 rounded-md border bg-secondary ${className}`}
          style={{ animationDuration: "1s" }}
        />
      </TableCell>
      <TableCell className="w-[7rem] text-right">
        <Button
          size="sm"
          variant="ghost"
          aria-label={`Replay ${name}`}
          onClick={() => setPlay((n) => n + 1)}
        >
          Replay
        </Button>
      </TableCell>
    </TableRow>
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
    <div className="col-span-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Animation</TableHead>
            <TableHead>Preview</TableHead>
            <TableHead>
              <span className="sr-only">Replay</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {demonstrations.map((demonstration) => (
            <MotionRow key={demonstration.name} {...demonstration} />
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  code: `className="data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"`,
  language: "jsx",
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
