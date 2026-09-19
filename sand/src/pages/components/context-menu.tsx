import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "sand/ui/context-menu";

<ContextMenu>
  <ContextMenuTrigger
    tabIndex={0}
    className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-muted-foreground"
  >
    Right-click or press Shift+F10
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Open</ContextMenuItem>
    <ContextMenuItem>Rename</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`;

function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        tabIndex={0}
        className="flex h-32 w-72 items-center justify-center rounded-lg border border-dashed text-muted-foreground"
      >
        Right-click or press Shift+F10
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export function ContextMenuPage() {
  return (
    <ComponentPage
      title="Context Menu"
      lead="Opens a list of actions from a right-click or keyboard shortcut."
      demo={<ContextMenuDemo />}
      code={code}
    />
  );
}
