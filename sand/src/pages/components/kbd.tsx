import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Kbd, KbdGroup } from "sand/ui/kbd";

<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`;

export function KbdPage() {
  return (
    <ComponentPage
      title="Kbd"
      lead="Shows a keyboard key or shortcut."
      demo={
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      }
      code={code}
    />
  );
}
