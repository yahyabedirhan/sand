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
