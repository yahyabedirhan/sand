import { Button } from "@/components/ui/button";
import { Toaster, toast } from "@/components/ui/toast";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import { Toaster, toast } from "sand/ui/toast";

<Toaster>
  <Button
    onClick={() =>
      toast.add({
        title: "Draft saved",
        description: "Stored on this device.",
      })
    }
  >
    Show toast
  </Button>
</Toaster>`;

function ToastDemo() {
  return (
    <Toaster>
      <Button
        onClick={() =>
          toast.add({
            title: "Draft saved",
            description: "Stored on this device.",
          })
        }
      >
        Show toast
      </Button>
    </Toaster>
  );
}

export function ToastPage() {
  return (
    <ComponentPage
      title="Toast"
      lead="Delivers a brief, timed notice."
      demo={<ToastDemo />}
      code={code}
    />
  );
}
