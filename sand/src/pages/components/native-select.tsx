import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  NativeSelect,
  NativeSelectOption,
} from "sand/ui/native-select";

<NativeSelect aria-label="Timezone" defaultValue="utc">
  <NativeSelectOption value="utc">UTC</NativeSelectOption>
  <NativeSelectOption value="cet">Central European Time</NativeSelectOption>
</NativeSelect>`;

export function NativeSelectPage() {
  return (
    <ComponentPage
      title="Native Select"
      lead="Chooses one option with the browser's native control."
      demo={
        <NativeSelect aria-label="Timezone" defaultValue="utc">
          <NativeSelectOption value="utc">UTC</NativeSelectOption>
          <NativeSelectOption value="cet">
            Central European Time
          </NativeSelectOption>
          <NativeSelectOption value="est">Eastern Time</NativeSelectOption>
        </NativeSelect>
      }
      code={code}
    />
  );
}
