import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import { ButtonGroup } from "sand/ui/button-group";

<ButtonGroup>
  <Button variant="outline">Edit</Button>
  <Button variant="outline">Share</Button>
</ButtonGroup>`;

export function ButtonGroupPage() {
  return (
    <ComponentPage
      title="Button Group"
      lead="Joins related actions into one control."
      demo={
        <ButtonGroup>
          <Button variant="outline">Edit</Button>
          <Button variant="outline">Share</Button>
        </ButtonGroup>
      }
      code={code}
    />
  );
}
