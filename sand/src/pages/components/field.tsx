import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  Field,
  FieldDescription,
  FieldLabel,
} from "sand/ui/field";
import { Input } from "sand/ui/input";

<Field>
  <FieldLabel>
    Workspace name
    <Input defaultValue="Dune Studio" />
  </FieldLabel>
  <FieldDescription>Shown to everyone in the workspace.</FieldDescription>
</Field>`;

export function FieldPage() {
  return (
    <ComponentPage
      title="Field"
      lead="Groups a control with its label, description, and errors."
      demo={
        <Field className="max-w-sm">
          <FieldLabel className="flex-col items-start">
            Workspace name
            <Input defaultValue="Dune Studio" />
          </FieldLabel>
          <FieldDescription>
            Shown to everyone in the workspace.
          </FieldDescription>
        </Field>
      }
      code={code}
    />
  );
}
