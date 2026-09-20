import type { ReactNode } from "react";

import { PageHeader, Section } from "@/docs/page";
import { PreviewContainer } from "@/docs/preview-container";

export type ComponentPageSection = {
  id: string;
  title: string;
  children: ReactNode;
};

type ComponentPageProps = {
  title: string;
  lead: string;
  demo: ReactNode;
  code: string;
  codeLanguage?: string;
  sections?: readonly ComponentPageSection[];
};

// Component pages share one required shape: a header followed immediately by
// a live demo. Everything after the demo is opt-in page content.
export function ComponentPage({
  title,
  lead,
  demo,
  code,
  codeLanguage,
  sections = [],
}: ComponentPageProps) {
  return (
    <>
      <PageHeader title={title} lead={lead} />
      <Section id="demo" title="Demo">
        <PreviewContainer code={code} codeLanguage={codeLanguage}>
          {demo}
        </PreviewContainer>
      </Section>
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {section.children}
        </Section>
      ))}
    </>
  );
}
