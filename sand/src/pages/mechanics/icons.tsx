import type { ComponentType } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  MechanicPage,
  ShowcasePiece,
  type Mechanic,
  type MechanicPart,
} from "@/pages/mechanics/mechanic-page";
import {
  IconAlertTriangle,
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconColumns2,
  IconDots,
  IconInbox,
  IconInfoCircle,
  IconLoader,
  IconMoon,
  IconSearch,
  IconSun,
  IconX,
} from "@tabler/icons-react";

type IconEntry = {
  name: string;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

function tablerPart(name: string): MechanicPart {
  const slug = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  return { name, href: `https://tabler.io/icons/${slug}` };
}

function IconRow({ entries }: { entries: IconEntry[] }) {
  return (
    <div className="flex flex-wrap items-center gap-sm">
      {entries.map(({ name, Icon }) => (
        <span
          key={name}
          className="flex size-8 items-center justify-center rounded-md border bg-card"
          title={name}
        >
          <Icon aria-hidden className="size-4" />
        </span>
      ))}
    </div>
  );
}

const mechanic: Mechanic = {
  name: "Icons",
  role: "Tabler draws every glyph Sand uses.",
  owns: "Tabler supplies the glyphs. Components import named icons from the library. The Icons foundation page lists the set in use. Chevrons, checks, close buttons, alerts, and the docs shell all stand on this library.",
  showcase: (
    <>
      <ShowcasePiece caption="Chevrons">
        <IconRow
          entries={[
            { name: "ChevronDown", Icon: IconChevronDown },
            { name: "ChevronUp", Icon: IconChevronUp },
            { name: "ChevronLeft", Icon: IconChevronLeft },
            { name: "ChevronRight", Icon: IconChevronRight },
          ]}
        />
      </ShowcasePiece>
      <ShowcasePiece caption="Status">
        <Alert>
          <IconInfoCircle />
          <AlertTitle>Invite sent</AlertTitle>
          <AlertDescription>
            The member can join from the link.
          </AlertDescription>
        </Alert>
      </ShowcasePiece>
      <ShowcasePiece caption="Actions">
        <div className="flex flex-wrap gap-sm">
          <Button size="icon" variant="outline" aria-label="Search">
            <IconSearch />
          </Button>
          <Button size="icon" variant="outline" aria-label="More">
            <IconDots />
          </Button>
          <Button size="icon" variant="outline" aria-label="Close">
            <IconX />
          </Button>
          <Button size="icon" variant="outline" aria-label="Done">
            <IconCheck />
          </Button>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Theme">
        <div className="flex gap-sm">
          <Button size="icon" variant="outline" aria-label="Light">
            <IconSun />
          </Button>
          <Button size="icon" variant="outline" aria-label="Dark">
            <IconMoon />
          </Button>
          <Button size="icon" variant="outline" aria-label="Split">
            <IconColumns2 />
          </Button>
        </div>
      </ShowcasePiece>
      <ShowcasePiece caption="Empty">
        <Empty className="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <IconInbox />
            </EmptyMedia>
            <EmptyTitle>No messages</EmptyTitle>
            <EmptyDescription>New threads show up here.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ShowcasePiece>
      <ShowcasePiece caption="Badges and links">
        <div className="flex flex-wrap items-center gap-sm">
          <Badge variant="outline">
            <IconAlertTriangle />
            Delayed
          </Badge>
          <span className="inline-flex items-center gap-xs text-body-sm font-medium">
            Foundations
            <IconArrowRight className="size-3.5" />
          </span>
          <IconLoader className="size-4 animate-spin" />
        </div>
      </ShowcasePiece>
    </>
  ),
  code: `import { IconCheck, IconX } from "@tabler/icons-react";
import { Button } from "sand/ui/button";

<Button size="icon" aria-label="Done">
  <IconCheck />
</Button>`,
  parts: [
    "AlertOctagon",
    "AlertTriangle",
    "ArrowDown",
    "ArrowRight",
    "Check",
    "ChevronDown",
    "ChevronLeft",
    "ChevronRight",
    "ChevronUp",
    "CircleCheck",
    "Columns2",
    "Components",
    "Dots",
    "Folder",
    "Inbox",
    "InfoCircle",
    "LayoutGrid",
    "LayoutSidebar",
    "Loader",
    "Minus",
    "Moon",
    "Palette",
    "Search",
    "Selector",
    "Settings",
    "Sun",
    "X",
  ].map(tablerPart),
  links: [
    { label: "Tabler Icons", href: "https://tabler.io/icons" },
    {
      label: "React package",
      href: "https://tabler.io/docs/icons/react",
    },
    {
      label: "Source on GitHub",
      href: "https://github.com/tabler/tabler-icons",
    },
    {
      label: "Releases",
      href: "https://github.com/tabler/tabler-icons/releases",
    },
  ],
  alternatives: [
    {
      name: "Lucide",
      comparison:
        "The shadcn default. Similar outline set, different names. Sand uses Tabler because that is what a previous project already drew.",
      href: "https://lucide.dev",
      linkLabel: "lucide.dev",
    },
    {
      name: "Phosphor",
      comparison:
        "A denser set with weight variants. Would need a new naming map and new optical sizes. Not used.",
      href: "https://phosphoricons.com",
      linkLabel: "phosphoricons.com",
    },
  ],
};

export function IconsPage() {
  return <MechanicPage mechanic={mechanic} />;
}
