import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Guide", "Status", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Journal", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms"],
  },
] as const;

export function MarketingFooter() {
  return (
    <section className="flex flex-col gap-lg border-t px-lg py-xl">
      <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-sm">
            <p className="text-heading-4">{column.title}</p>
            <div className="flex flex-col items-start gap-xs">
              {column.links.map((label) => (
                <Button
                  key={label}
                  variant="link"
                  size="sm"
                  className="h-auto px-0"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Separator />
      <p className="text-caption text-muted-foreground">
        © 2026 Dune. Sample copy for the Marketing preview.
      </p>
    </section>
  );
}
