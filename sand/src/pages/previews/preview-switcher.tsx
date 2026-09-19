import { Link, useLocation } from "react-router";

import { Button } from "@/components/ui/button";
import { pagePath, pagesIn } from "@/docs/registry";

export function PreviewSwitcher() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Previews" className="flex flex-wrap gap-xs">
      {pagesIn("Previews").map((page) => {
        const path = pagePath(page);
        const active = pathname === path;

        return (
          <Button
            key={path}
            variant={active ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            nativeButton={false}
            render={<Link to={path} />}
            aria-current={active ? "page" : undefined}
          >
            {page.title}
          </Button>
        );
      })}
    </nav>
  );
}
