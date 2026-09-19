import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const quotes = [
  {
    name: "Maya Chen",
    role: "Editor",
    initials: "MC",
    text: "I can hand a draft to someone and they see the comments in the same place. We stopped bouncing between three tools.",
  },
  {
    name: "Jordan Hale",
    role: "Researcher",
    initials: "JH",
    text: "Search finds the note I wrote last winter, not just the title. That is the whole product for me.",
  },
  {
    name: "Priya Shah",
    role: "Lead",
    initials: "PS",
    text: "The keyboard shortcuts match how we already write. Nobody needed a training session.",
  },
] as const;

export function MarketingTestimonials() {
  return (
    <section className="flex flex-col gap-lg border-t px-lg py-xl">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-sm text-center">
        <h2 className="w-full font-serif text-heading-2">
          Teams who write here
        </h2>
        <p className="w-full text-body text-muted-foreground">
          People who write in Dune every week, in their own words.
        </p>
      </div>
      <div className="grid gap-md lg:grid-cols-3">
        {quotes.map((quote) => (
          <Card key={quote.name}>
            <CardHeader className="flex flex-row items-center gap-sm">
              <Avatar size="sm">
                <AvatarFallback>{quote.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-heading-4">{quote.name}</p>
                <p className="text-caption text-muted-foreground">
                  {quote.role}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-body-sm">{quote.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
