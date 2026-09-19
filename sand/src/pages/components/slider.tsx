import { Slider } from "@/components/ui/slider";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Slider } from "sand/ui/slider";

<Slider defaultValue={[40]} aria-label="Volume" />`;

export function SliderPage() {
  return (
    <ComponentPage
      title="Slider"
      lead="Chooses a value or range along a track."
      demo={
        <Slider defaultValue={[40]} aria-label="Volume" className="max-w-sm" />
      }
      code={code}
    />
  );
}
