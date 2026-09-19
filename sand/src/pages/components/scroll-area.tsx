import { ScrollArea } from "@/components/ui/scroll-area";
import { ComponentPage } from "@/docs/component-page";

const folders = [
  "Inbox",
  "Drafts",
  "Sent",
  "Archive",
  "Spam",
  "Trash",
  "Later",
  "Starred",
  "Projects",
  "Personal",
  "Receipts",
  "Travel",
];

const code = `import { ScrollArea } from "sand/ui/scroll-area";

const folders = [
  "Inbox",
  "Drafts",
  "Sent",
  "Archive",
  "Spam",
  "Trash",
  "Later",
  "Starred",
  "Projects",
  "Personal",
  "Receipts",
  "Travel",
];

<ScrollArea>
  <div>
    {folders.map((folder) => (
      <div key={folder}>{folder}</div>
    ))}
  </div>
</ScrollArea>`;

function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-40 w-48 rounded-md border">
      <div className="flex flex-col gap-xs p-sm text-body-sm">
        {folders.map((folder) => (
          <div key={folder}>{folder}</div>
        ))}
      </div>
    </ScrollArea>
  );
}

export function ScrollAreaPage() {
  return (
    <ComponentPage
      title="Scroll Area"
      lead="Scrolls overflowing content inside a fixed region."
      demo={<ScrollAreaDemo />}
      code={code}
    />
  );
}
