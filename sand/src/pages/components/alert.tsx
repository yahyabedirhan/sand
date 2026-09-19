import { IconInfoCircle } from "@tabler/icons-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentPage } from "@/docs/component-page";

const code = `import { IconInfoCircle } from "@tabler/icons-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "sand/ui/alert";

<Alert>
  <IconInfoCircle />
  <AlertTitle>Workspace upgraded</AlertTitle>
  <AlertDescription>
    New members can join with the invite link.
  </AlertDescription>
</Alert>`;

export function AlertPage() {
  return (
    <ComponentPage
      title="Alert"
      lead="Surfaces a short, persistent message."
      demo={
        <Alert className="max-w-sm">
          <IconInfoCircle />
          <AlertTitle>Workspace upgraded</AlertTitle>
          <AlertDescription>
            New members can join with the invite link.
          </AlertDescription>
        </Alert>
      }
      code={code}
    />
  );
}
