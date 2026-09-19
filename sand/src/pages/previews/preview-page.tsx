import type { ReactNode } from "react";

import { PreviewContainer } from "@/docs/preview-container";
import { PreviewSwitcher } from "@/pages/previews/preview-switcher";

// Shared chrome for every preview route: the in-page switcher and a
// full-width container with toolbar only.

export function PreviewPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-md px-md py-lg">
      <PreviewSwitcher />
      <PreviewContainer fullWidth padding="tight">
        {children}
      </PreviewContainer>
    </div>
  );
}
