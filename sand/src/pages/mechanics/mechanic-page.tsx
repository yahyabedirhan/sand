import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PageHeader, Section } from "@/docs/page";
import { PreviewContainer } from "@/docs/preview-container";

export type MechanicPart = {
  name: string;
  href: string;
};

export type MechanicLink = {
  label: string;
  href: string;
};

export type MechanicAlternative = {
  name: string;
  comparison: string;
  href: string;
  linkLabel: string;
};

export type Mechanic = {
  name: string;
  role: string;
  owns: string;
  showcase: ReactNode;
  code: string;
  language?: string;
  parts: MechanicPart[];
  links: MechanicLink[];
  alternatives: MechanicAlternative[];
};

const visiblePartCount = 8;

// Shared layout for the mechanic pages. A mechanic is something Sand is built
// on, documented so maintainers and consumers can see the dependencies, not
// presented as swappable.
export function MechanicPage({ mechanic }: { mechanic: Mechanic }) {
  return (
    <>
      <PageHeader title={mechanic.name} lead={mechanic.role} />
      <Section id="owns" title="What it owns">
        <p className="text-body">{mechanic.owns}</p>
      </Section>
      <Section id="preview" title="Preview">
        <PreviewContainer
          code={mechanic.code}
          codeLanguage={mechanic.language}
          align="left"
        >
          <div className="grid w-full gap-lg sm:grid-cols-2 lg:grid-cols-3">
            {mechanic.showcase}
          </div>
        </PreviewContainer>
        <PartsRow parts={mechanic.parts} />
      </Section>
      <Section id="links" title="Links">
        <ul className="flex flex-wrap gap-md">
          {mechanic.links.map((link) => (
            <li key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="alternatives" title="Alternatives considered">
        <div className="grid gap-md sm:grid-cols-2">
          {mechanic.alternatives.map((alternative) => (
            <Card key={alternative.name}>
              <CardHeader>
                <CardTitle>{alternative.name}</CardTitle>
                <CardDescription>{alternative.comparison}</CardDescription>
              </CardHeader>
              <CardContent>
                <ExternalLink href={alternative.href}>
                  {alternative.linkLabel}
                </ExternalLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

export function ShowcasePiece({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="flex min-w-0 flex-col gap-xs">
      <figcaption className="text-caption text-muted-foreground">
        {caption}
      </figcaption>
      <div className="flex min-h-24 flex-col justify-center gap-sm">
        {children}
      </div>
    </figure>
  );
}

function PartsRow({ parts }: { parts: MechanicPart[] }) {
  const hidden = Math.max(0, parts.length - visiblePartCount);
  return (
    <Collapsible className="flex flex-col gap-sm">
      <div className="flex flex-wrap items-center gap-xs">
        {parts.slice(0, visiblePartCount).map((part) => (
          <Badge key={part.name} variant="secondary">
            {part.name}
          </Badge>
        ))}
        {hidden > 0 && (
          <CollapsibleTrigger className="inline-flex h-5 items-center rounded-full border border-border bg-input/20 px-2 text-[0.625rem] font-medium hover:bg-muted">
            + {hidden} more
          </CollapsibleTrigger>
        )}
      </div>
      <CollapsibleContent>
        <ul className="grid grid-cols-2 gap-x-md gap-y-xs rounded-md border bg-card p-md sm:grid-cols-3 md:grid-cols-4">
          {parts.map((part) => (
            <li key={part.name} className="min-w-0">
              <ExternalLink href={part.href}>{part.name}</ExternalLink>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-body-sm underline underline-offset-[3px] hover:text-foreground"
    >
      {children}
    </a>
  );
}
