import { useLocation } from "react-router";

import { pagePath, pages } from "@/docs/registry";

// Stub rendered for every registry page that has no component yet.
export function TodoPage() {
  const { pathname } = useLocation();
  const page = pages.find((entry) => pagePath(entry) === pathname);
  return (
    <div className="flex flex-col gap-sm">
      <h1 className="font-serif text-heading-1">{page?.title ?? "Page"}</h1>
      <p className="text-body text-muted-foreground">
        TODO: this page is not written yet.
      </p>
    </div>
  );
}
