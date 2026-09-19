import { Link, useLocation } from "react-router";

import { buttonVariants } from "@/components/ui/button";
import { pagePath, pagesIn } from "@/docs/registry";

export function PreviewSwitcher() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Previews" className="flex flex-wrap gap-xs">
      {pagesIn("Previews").map((page) => {
        const path = pagePath(page);
        const active = pathname === path;

        return (
          <Link
            key={path}
            to={path}
            aria-current={active ? "page" : undefined}
            className={buttonVariants({
              variant: active ? "default" : "outline",
              size: "sm",
            })}
          >
            {page.title}
          </Link>
        );
      })}
    </nav>
  );
}
