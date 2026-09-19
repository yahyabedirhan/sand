import { Badge } from "@/components/ui/badge";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Badge } from "sand/ui/badge";

<Badge>Published</Badge>
<Badge variant="secondary">Draft</Badge>`;

export function BadgePage() {
  return (
    <ComponentPage
      title="Badge"
      lead="Labels a status or category."
      demo={
        <div className="flex flex-wrap items-center gap-sm">
          <Badge>Published</Badge>
          <Badge variant="secondary">Draft</Badge>
        </div>
      }
      code={code}
    />
  );
}
