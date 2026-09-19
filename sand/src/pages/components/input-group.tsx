import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "sand/ui/input-group";

<InputGroup>
  <InputGroupAddon>
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput aria-label="Project domain" placeholder="example.com" />
</InputGroup>`;

export function InputGroupPage() {
  return (
    <ComponentPage
      title="Input Group"
      lead="Composes an input with inline text and actions."
      demo={
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            aria-label="Project domain"
            placeholder="example.com"
          />
        </InputGroup>
      }
      code={code}
    />
  );
}
