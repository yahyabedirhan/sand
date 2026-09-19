import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ComponentPage } from "@/docs/component-page";

const code = `import { AspectRatio } from "sand/ui/aspect-ratio";

<AspectRatio ratio={16 / 9}>
  <span>16 / 9</span>
</AspectRatio>`;

export function AspectRatioPage() {
  return (
    <ComponentPage
      title="Aspect Ratio"
      lead="Keeps a box at a fixed ratio as it resizes."
      demo={
        <AspectRatio
          ratio={16 / 9}
          className="w-full min-w-96 max-w-sm overflow-hidden rounded-md bg-muted"
        >
          <span className="flex size-full items-center justify-center text-caption text-muted-foreground">
            16 / 9
          </span>
        </AspectRatio>
      }
      code={code}
    />
  );
}
