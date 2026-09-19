import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
} from "@/components/ui/attachment";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentTitle,
} from "sand/ui/attachment";

<Attachment>
  <AttachmentContent>
    <AttachmentTitle>brief.pdf</AttachmentTitle>
    <AttachmentDescription>240 KB</AttachmentDescription>
  </AttachmentContent>
</Attachment>`;

export function AttachmentPage() {
  return (
    <ComponentPage
      title="Attachment"
      lead="Shows a file attached to a message."
      demo={
        <Attachment>
          <AttachmentContent>
            <AttachmentTitle>brief.pdf</AttachmentTitle>
            <AttachmentDescription>240 KB</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      }
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Keep the filename in <InlineCode>AttachmentTitle</InlineCode>.
              When the chip is a control, give{" "}
              <InlineCode>AttachmentTrigger</InlineCode> a name with{" "}
              <InlineCode>aria-label</InlineCode>.
            </p>
          ),
        },
      ]}
    />
  );
}
