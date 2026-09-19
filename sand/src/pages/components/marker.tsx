import { Marker, MarkerContent } from "@/components/ui/marker";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import { Marker, MarkerContent } from "sand/ui/marker";

<Marker variant="separator">
  <MarkerContent>Today</MarkerContent>
</Marker>
<Marker>
  <MarkerContent>Dana joined the thread</MarkerContent>
</Marker>`;

export function MarkerPage() {
  return (
    <ComponentPage
      title="Marker"
      lead="Marks a point in a conversation, such as a day or an unread line."
      demo={
        <div className="flex w-full max-w-sm flex-col gap-sm">
          <Marker variant="separator">
            <MarkerContent>Today</MarkerContent>
          </Marker>
          <Marker>
            <MarkerContent>Dana joined the thread</MarkerContent>
          </Marker>
        </div>
      }
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Put the marker text in <InlineCode>MarkerContent</InlineCode> so
              it stays readable when the separator lines are decorative.
            </p>
          ),
        },
      ]}
    />
  );
}
