import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "sand/ui/progress";

<Progress value={64}>
  <ProgressLabel>Uploading</ProgressLabel>
  <ProgressValue />
</Progress>`;

export function ProgressPage() {
  return (
    <ComponentPage
      title="Progress"
      lead="Shows how far a task has gone."
      demo={
        <Progress value={64} className="w-full max-w-sm">
          <ProgressLabel>Uploading</ProgressLabel>
          <ProgressValue />
        </Progress>
      }
      code={code}
    />
  );
}
