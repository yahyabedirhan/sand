import { Skeleton } from "@/components/ui/skeleton";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Skeleton } from "sand/ui/skeleton";

<div>
  <Skeleton className="h-4 w-2/3" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
</div>`;

export function SkeletonPage() {
  return (
    <ComponentPage
      title="Skeleton"
      lead="Holds space while content loads."
      demo={
        <div className="flex w-full min-w-96 max-w-sm flex-col gap-sm">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      }
      code={code}
    />
  );
}
