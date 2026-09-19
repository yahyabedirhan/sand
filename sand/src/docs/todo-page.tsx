import { useLocation } from "react-router";

import { PageHeader } from "@/docs/page";
import { pageAt } from "@/docs/registry";

// Stub rendered for every registry page that has no component yet.
export function TodoPage() {
  const { pathname } = useLocation();
  const page = pageAt(pathname);
  return (
    <PageHeader
      title={page?.title ?? "Page"}
      lead="TODO: this page is not written yet."
    />
  );
}
