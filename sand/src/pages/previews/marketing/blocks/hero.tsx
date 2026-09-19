import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const links = ["Product", "Pricing", "Guide"] as const;

export function MarketingHero() {
  return (
    <section className="flex flex-col gap-xl px-lg py-xl">
      <div className="flex flex-wrap items-center justify-between gap-sm">
        <span className="text-body font-medium">Dune</span>
        <div className="flex flex-wrap items-center gap-xs">
          {links.map((label) => (
            <Button key={label} variant="ghost" size="sm">
              {label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-xs">
          <Button variant="outline" size="sm">
            Sign in
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-md py-xl text-center">
        <Badge variant="secondary">Public preview</Badge>
        <h1 className="w-full font-serif text-heading-1">
          A workspace that stays readable
        </h1>
        <p className="w-full text-body-lg text-muted-foreground">
          Dune keeps notes, drafts, and comments together so the next person can
          pick up the thread.
        </p>
        <div className="flex flex-wrap justify-center gap-sm">
          <Button size="lg">Start free</Button>
          <Button size="lg" variant="outline">
            See a workspace
          </Button>
        </div>
      </div>
    </section>
  );
}
