import { Spinner } from "@/components/ui/spinner";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Spinner } from "sand/ui/spinner";

<Spinner />`;

export function SpinnerPage() {
  return (
    <ComponentPage
      title="Spinner"
      lead="Marks an in-progress wait."
      demo={<Spinner />}
      code={code}
    />
  );
}
