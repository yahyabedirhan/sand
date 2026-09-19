import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ComponentPage } from "@/docs/component-page";

const code = `import { ToggleGroup, ToggleGroupItem } from "sand/ui/toggle-group";

<ToggleGroup defaultValue={["list"]} aria-label="View">
  <ToggleGroupItem value="list">List</ToggleGroupItem>
  <ToggleGroupItem value="board">Board</ToggleGroupItem>
</ToggleGroup>`;

export function ToggleGroupPage() {
  return (
    <ComponentPage
      title="Toggle Group"
      lead="Chooses from a compact set of options."
      demo={
        <ToggleGroup defaultValue={["list"]} aria-label="View">
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="board">Board</ToggleGroupItem>
        </ToggleGroup>
      }
      code={code}
    />
  );
}
