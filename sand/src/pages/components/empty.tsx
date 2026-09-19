import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ComponentPage } from "@/docs/component-page";
import { IconInbox } from "@tabler/icons-react";

const code = `import { Button } from "sand/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "sand/ui/empty";
import { IconInbox } from "@tabler/icons-react";

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <IconInbox />
    </EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>Create a project to get started.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>New project</Button>
  </EmptyContent>
</Empty>`;

export function EmptyPage() {
  return (
    <ComponentPage
      title="Empty"
      lead="Explains a missing or empty result."
      demo={
        <Empty className="min-w-96 max-w-sm border">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <IconInbox />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
              Create a project to get started.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>New project</Button>
          </EmptyContent>
        </Empty>
      }
      code={code}
    />
  );
}
