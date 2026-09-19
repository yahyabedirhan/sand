import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IconCheck, IconChevronRight } from "@tabler/icons-react";

// Shared skeleton pieces so every page reads the same way. A page is a
// PageHeader followed by Sections; the layout around it comes from the shell.

export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="mb-xl flex flex-col gap-sm">
      <h1 className="font-serif text-heading-1">{title}</h1>
      <p className="text-body-lg text-muted-foreground">{lead}</p>
    </header>
  );
}

// Sections announce themselves to the layout, which lists them in the rail.
// Nothing keeps a second list of a page's sections.
type SectionEntry = { id: string; title: string };

const SectionsContext = createContext<{
  register: (entry: SectionEntry) => () => void;
} | null>(null);

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const sections = useContext(SectionsContext);
  useEffect(() => sections?.register({ id, title }), [sections, id, title]);
  return (
    <section id={id} className="mb-xl flex scroll-mt-lg flex-col gap-md">
      <h2 className="font-serif text-heading-2">{title}</h2>
      {children}
    </section>
  );
}

// The standard page layout: a content column and a sticky rail holding only
// the page's section links. Preview pages skip this through the registry.
export function PageLayout({ children }: { children: ReactNode }) {
  // Entries follow mount order, which is document order for sections that
  // mount together with the page.
  // TODO: sort by DOM position if a page ever remounts sections.
  const [entries, setEntries] = useState<SectionEntry[]>([]);
  const [context] = useState(() => ({
    register(entry: SectionEntry) {
      setEntries((current) => [...current, entry]);
      return () =>
        setEntries((current) => current.filter((item) => item !== entry));
    },
  }));
  return (
    <SectionsContext.Provider value={context}>
      <div className="mx-auto grid w-full max-w-5xl gap-2xl lg:grid-cols-[minmax(0,1fr)_11rem]">
        <div className="min-w-0">{children}</div>
        <aside className="hidden lg:block">
          {entries.length > 0 && (
            <nav
              aria-label="On this page"
              className="sticky top-xl flex flex-col gap-sm"
            >
              <p className="text-caption font-medium text-muted-foreground">
                On this page
              </p>
              <ul className="flex flex-col gap-xs">
                {entries.map((entry) => (
                  <li key={entry.id}>
                    <a
                      href={`#${entry.id}`}
                      className="text-body-sm text-muted-foreground hover:text-foreground"
                    >
                      {entry.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>
      </div>
    </SectionsContext.Provider>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-sm text-body">{children}</div>;
}

export function InlineCode({ children }: { children: ReactNode }) {
  return <code className="font-mono text-code">{children}</code>;
}

// Rules render as a checklist. A rule is a title and one sentence; a do/don't
// pair behind an Example disclosure is optional. The page never shows where
// the rule file lives.
export type RuleExample = { example: ReactNode; note?: string };

export function RuleList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-col gap-md">{children}</ul>;
}

export function Rule({
  title,
  body,
  do: good,
  dont: bad,
}: {
  title: string;
  body: string;
  do?: RuleExample;
  dont?: RuleExample;
}) {
  return (
    <li className="flex gap-sm">
      <IconCheck
        aria-hidden
        className="mt-1 size-4 shrink-0 text-muted-foreground"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-sm">
        <p className="text-body">
          <span className="font-medium">{title}.</span>{" "}
          <span className="text-muted-foreground">{body}</span>
        </p>
        {good && bad && (
          <Collapsible className="rounded-md border">
            <CollapsibleTrigger className="group/example flex w-full items-center gap-xs px-md py-sm text-left text-body-sm">
              <IconChevronRight
                aria-hidden
                className="size-3.5 text-muted-foreground transition-transform group-data-[panel-open]/example:rotate-90"
              />
              Example
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-md border-t p-md sm:grid-cols-2">
              <Example label="Do" tone="do" note={good.note}>
                {good.example}
              </Example>
              <Example label="Don't" tone="dont" note={bad.note}>
                {bad.example}
              </Example>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </li>
  );
}

function Example({
  label,
  tone,
  note,
  children,
}: {
  label: string;
  tone: "do" | "dont";
  note?: string;
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
        </span>
        {note && <> {note}</>}
      </figcaption>
    </figure>
  );
}
