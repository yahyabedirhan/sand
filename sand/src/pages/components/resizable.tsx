import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "sand/ui/resizable";

<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize="60">Editor</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize="40">Preview</ResizablePanel>
</ResizablePanelGroup>`;

function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-40 min-w-96 max-w-md rounded-md border"
    >
      <ResizablePanel
        defaultSize="60"
        className="flex items-center justify-center p-sm text-body-sm"
      >
        Editor
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize="40"
        className="flex items-center justify-center p-sm text-body-sm"
      >
        Preview
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function ResizablePage() {
  return (
    <ComponentPage
      title="Resizable"
      lead="Splits space into panels the reader can drag."
      demo={<ResizableDemo />}
      code={code}
      sections={[
        {
          id: "mechanic",
          title: "Mechanic",
          children: (
            <p className="text-body text-muted-foreground">
              Resizable uses the <InlineCode>react-resizable-panels</InlineCode>{" "}
              library for its panel layout and drag handles.
            </p>
          ),
        },
      ]}
    />
  );
}
