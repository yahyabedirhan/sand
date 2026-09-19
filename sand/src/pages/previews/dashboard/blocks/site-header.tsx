import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteHeader() {
  return (
    <header className="flex items-center gap-sm border-b px-md py-sm">
      <div className="min-w-0 flex-1">
        <h3 className="text-heading-4">Overview</h3>
        <p className="text-caption text-muted-foreground">
          Studio activity for September
        </p>
      </div>
      <Input
        type="search"
        placeholder="Search projects"
        className="hidden max-w-48 sm:block"
        aria-label="Search projects"
      />
      <Button>New project</Button>
    </header>
  );
}
