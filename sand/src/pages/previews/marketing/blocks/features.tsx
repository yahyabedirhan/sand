import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Search that remembers",
    body: "Find the note by a sentence inside it, not only by the title you gave it.",
  },
  {
    title: "Shared drafts",
    body: "Hand someone a page and they see the comments in the same place you left them.",
  },
  {
    title: "Keyboard first",
    body: "Move, split, and publish without reaching for the pointer unless you want to.",
  },
  {
    title: "History you can restore",
    body: "Every save is a version. Roll back a paragraph without undoing the rest.",
  },
  {
    title: "Calm notifications",
    body: "Mentions arrive. Routine edits do not. The inbox stays a short list.",
  },
  {
    title: "Works without a signal",
    body: "Write on the train. The thread catches up when the network does.",
  },
] as const;

export function MarketingFeatures() {
  return (
    <section className="flex flex-col gap-lg border-t px-lg py-xl">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-sm text-center">
        <h2 className="w-full font-serif text-heading-2">
          What stays with you
        </h2>
        <p className="w-full text-body text-muted-foreground">
          Six habits the workspace is built around, not a catalogue of extra
          modes.
        </p>
      </div>
      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle className="text-heading-3">{feature.title}</CardTitle>
              <CardDescription className="text-body-sm">
                {feature.body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
