import { PreviewPage } from "@/pages/previews/preview-page";

// TODO: tickets 06 and 07 replace this page with their own preview
// components and blocks. Until then the route still carries preview chrome.

export function PreviewPlaceholderPage() {
  return (
    <PreviewPage>
      <div className="flex min-h-48 items-center">
        <p className="text-muted-foreground">
          TODO: this preview is not written yet.
        </p>
      </div>
    </PreviewPage>
  );
}
