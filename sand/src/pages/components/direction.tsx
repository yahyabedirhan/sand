import { DirectionProvider, useDirection } from "@/components/ui/direction";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import { DirectionProvider, useDirection } from "sand/ui/direction";

function DirectionLabel() {
  const direction = useDirection();
  return <span>{direction}</span>;
}

<DirectionProvider direction="ltr">
  <div dir="ltr">
    <p>Left to right</p>
    <p>
      Direction is <DirectionLabel />.
    </p>
  </div>
</DirectionProvider>
<DirectionProvider direction="rtl">
  <div dir="rtl">
    <p>Right to left</p>
    <p>
      Direction is <DirectionLabel />.
    </p>
  </div>
</DirectionProvider>`;

function DirectionLabel() {
  const direction = useDirection();
  return <span>{direction}</span>;
}

function DirectionDemo() {
  return (
    <div className="grid w-full max-w-lg gap-md sm:grid-cols-2">
      <DirectionProvider direction="ltr">
        <div dir="ltr" className="rounded-lg border p-md text-start">
          <p className="text-body-sm font-medium">Left to right</p>
          <p className="text-body-sm text-muted-foreground">
            Direction is <DirectionLabel />.
          </p>
        </div>
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <div dir="rtl" className="rounded-lg border p-md text-start">
          <p className="text-body-sm font-medium">Right to left</p>
          <p className="text-body-sm text-muted-foreground">
            Direction is <DirectionLabel />.
          </p>
        </div>
      </DirectionProvider>
    </div>
  );
}

export function DirectionPage() {
  return (
    <ComponentPage
      title="Direction"
      lead="Sets left-to-right or right-to-left reading direction."
      demo={<DirectionDemo />}
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Match <InlineCode>DirectionProvider</InlineCode> with a{" "}
              <InlineCode>dir</InlineCode> of <InlineCode>ltr</InlineCode> or{" "}
              <InlineCode>rtl</InlineCode> on the subtree so native layout
              follows <InlineCode>useDirection</InlineCode>.
            </p>
          ),
        },
      ]}
    />
  );
}
