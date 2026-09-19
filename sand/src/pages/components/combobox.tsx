import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { ComponentPage } from "@/docs/component-page";

const plans = ["Starter", "Pro", "Team"];

const code = `import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "sand/ui/combobox";

const plans = ["Starter", "Pro", "Team"];

<Combobox items={plans} defaultValue="Pro">
  <ComboboxInput placeholder="Choose a plan" aria-label="Plan" className="w-48" />
  <ComboboxContent>
    <ComboboxEmpty>No plans found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`;

function ComboboxDemo() {
  return (
    <Combobox items={plans} defaultValue="Pro">
      <ComboboxInput
        placeholder="Choose a plan"
        aria-label="Plan"
        className="w-48"
      />
      <ComboboxContent>
        <ComboboxEmpty>No plans found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export function ComboboxPage() {
  return (
    <ComponentPage
      title="Combobox"
      lead="Chooses one option from a filterable list."
      demo={<ComboboxDemo />}
      code={code}
    />
  );
}
