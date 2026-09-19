import type { ReactNode } from "react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader, Section } from "@/docs/page";
import { PreviewContainer } from "@/docs/preview-container";
import { pageCount, sectionPath, type SidebarSection } from "@/docs/registry";
import { SampleScreen } from "@/pages/overview/sample-screen";
import {
  IconArrowRight,
  IconComponents,
  IconLayoutGrid,
  IconPalette,
  IconSettings,
} from "@tabler/icons-react";

const layers = [
  {
    label: "Layer 1",
    title: "Design",
    text: "The raw material and the few rules that bind it. Independent of any library.",
    items: [
      "Colors",
      "Text roles",
      "Fonts",
      "Spacing",
      "Radius",
      "Shadow",
      "Motion",
      "Icons",
      "Rules",
    ],
    section: "Foundations",
    tone: "bg-secondary text-secondary-foreground",
  },
  {
    label: "Layer 2",
    title: "Mechanics",
    text: "How this repository realises the design. Documented, not swappable.",
    items: [
      "React",
      "Vite",
      "Tailwind",
      "shadcn",
      "Base UI",
      "Tabler",
      "Recharts",
      "fontsource",
      "tw-animate-css",
    ],
    section: "Mechanics",
    tone: "border bg-card text-card-foreground",
  },
] satisfies {
  label: string;
  title: string;
  text: string;
  items: string[];
  section: SidebarSection;
  tone: string;
}[];

const destinations: {
  section: SidebarSection;
  text: string;
  icon: ReactNode;
}[] = [
  {
    section: "Foundations",
    text: "Tokens rendered live, rules beside them.",
    icon: <IconPalette />,
  },
  {
    section: "Components",
    text: "A live demo first, then usage and rules.",
    icon: <IconComponents />,
  },
  {
    section: "Mechanics",
    text: "What Sand is built on, with links out.",
    icon: <IconSettings />,
  },
  {
    section: "Previews",
    text: "Whole screens, to see a change everywhere.",
    icon: <IconLayoutGrid />,
  },
];

function pageCountLabel(section: SidebarSection) {
  const count = pageCount(section);
  return `${count} ${count === 1 ? "page" : "pages"}`;
}

export function OverviewPage() {
  return (
    <>
      <PageHeader
        title="Sand"
        lead="A design system for the projects I build. This is what it looks like put together."
      />

      <div className="mb-xl">
        <PreviewContainer padding="tight">
          <SampleScreen />
        </PreviewContainer>
      </div>

      <div className="mb-xl grid gap-md md:grid-cols-2">
        {layers.map((layer) => {
          const path = sectionPath(layer.section);
          return (
            <div
              key={layer.title}
              className={`flex flex-col gap-md rounded-lg p-lg ${layer.tone}`}
            >
              <div className="flex flex-col gap-xs">
                <span className="text-caption text-muted-foreground">
                  {layer.label}
                </span>
                <h2 className="font-serif text-heading-2">{layer.title}</h2>
                <p className="text-body-sm">{layer.text}</p>
              </div>
              <ul className="flex flex-wrap gap-xs">
                {layer.items.map((item) => (
                  <li key={item}>
                    <Badge variant="outline">{item}</Badge>
                  </li>
                ))}
              </ul>
              {path && (
                <Link
                  to={path}
                  className="mt-auto inline-flex items-center gap-xs text-body-sm font-medium hover:underline"
                >
                  {layer.section}
                  <IconArrowRight className="size-3.5" />
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <Section id="where-to-go" title="Where to go">
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => {
            const path = sectionPath(destination.section);
            const card = (
              <Card className="h-full">
                <CardHeader>
                  <span className="text-muted-foreground [&_svg]:size-5">
                    {destination.icon}
                  </span>
                  <CardTitle>{destination.section}</CardTitle>
                  <CardDescription>{destination.text}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto text-caption text-muted-foreground">
                  {pageCountLabel(destination.section)}
                </CardContent>
              </Card>
            );
            return path ? (
              <Link key={destination.section} to={path} className="block">
                {card}
              </Link>
            ) : (
              <div key={destination.section}>{card}</div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
