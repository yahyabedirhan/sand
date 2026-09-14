import type { ReactNode } from "react";

// Shared skeleton pieces so every page reads the same way.

export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="mb-xl flex flex-col gap-sm">
      <h1 className="font-serif text-heading-1">{title}</h1>
      <p className="text-body-lg text-muted-foreground">{lead}</p>
    </header>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-xl flex flex-col gap-md">
      <h2 className="text-heading-2">{title}</h2>
      {children}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-sm text-body">{children}</div>;
}

// A rule as a pair of rendered examples. Every rule on a foundation or
// component page uses this so the rule is concrete, not prose.
export function DoDont({
  rule,
  doExample,
  dontExample,
  doText,
  dontText,
}: {
  rule: string;
  doExample: ReactNode;
  dontExample: ReactNode;
  doText: string;
  dontText: string;
}) {
  return (
    <div className="flex flex-col gap-sm">
      <h3 className="text-heading-4">{rule}</h3>
      <div className="grid gap-md sm:grid-cols-2">
        <Example label="Do" tone="do" text={doText}>
          {doExample}
        </Example>
        <Example label="Don't" tone="dont" text={dontText}>
          {dontExample}
        </Example>
      </div>
    </div>
  );
}

function Example({
  label,
  tone,
  text,
  children,
}: {
  label: string;
  tone: "do" | "dont";
  text: string;
  children: ReactNode;
}) {
  return (
    <figure className="flex flex-col gap-xs">
      <div className="rounded-lg border bg-card p-md text-card-foreground">
        {children}
      </div>
      <figcaption className="text-body-sm text-muted-foreground">
        <span
          className={
            tone === "do"
              ? "font-medium text-foreground"
              : "font-medium text-destructive"
          }
        >
          {label}.
        </span>{" "}
        {text}
      </figcaption>
    </figure>
  );
}
