import { Button } from "@/components/ui/button";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";
import { PreviewContainer } from "@/docs/preview-container";

const demoCode = `import { Button } from "sand/ui/button";

<Button>Publish</Button>
<Button variant="ghost">Save draft</Button>`;

const variantsCode = `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button disabled>Disabled</Button>

<Button size="xs">Extra small</Button>
<Button size="sm">Small</Button>
<Button>Default</Button>
<Button size="lg">Large</Button>`;

function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-sm">
      <Button>Publish</Button>
      <Button variant="ghost">Save draft</Button>
    </div>
  );
}

function VariantSet() {
  return (
    <div className="flex flex-wrap items-center gap-sm">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      lead="Triggers an action."
      demo={<ButtonDemo />}
      code={demoCode}
      sections={[
        {
          id: "variants",
          title: "Variants",
          children: (
            <PreviewContainer
              panes={[
                { name: "Variants", children: <VariantSet /> },
                {
                  name: "Sizes",
                  children: (
                    <div className="flex flex-wrap items-center gap-sm">
                      <Button size="xs">Extra small</Button>
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  ),
                },
                { name: "Code", code: variantsCode },
              ]}
            />
          ),
        },
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Use visible action text whenever space allows. Give every
              icon-only button an accessible name with{" "}
              <InlineCode>aria-label</InlineCode>.
            </p>
          ),
        },
      ]}
    />
  );
}
