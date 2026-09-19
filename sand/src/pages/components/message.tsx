import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "sand/ui/message";

<Message>
  <MessageContent>
    <MessageHeader>Dana</MessageHeader>
    <p>The brief is in the files tab.</p>
    <MessageFooter>Just now</MessageFooter>
  </MessageContent>
</Message>
<Message align="end">
  <MessageContent>
    <MessageHeader>You</MessageHeader>
    <p>Thanks, opening it now.</p>
    <MessageFooter>Just now</MessageFooter>
  </MessageContent>
</Message>`;

export function MessagePage() {
  return (
    <ComponentPage
      title="Message"
      lead="Lays out one speaker's header, body, and footer."
      demo={
        <div className="flex w-full max-w-sm flex-col gap-sm">
          <Message>
            <MessageContent>
              <MessageHeader>Dana</MessageHeader>
              <p>The brief is in the files tab.</p>
              <MessageFooter>Just now</MessageFooter>
            </MessageContent>
          </Message>
          <Message align="end">
            <MessageContent>
              <MessageHeader>You</MessageHeader>
              <p>Thanks, opening it now.</p>
              <MessageFooter>Just now</MessageFooter>
            </MessageContent>
          </Message>
        </div>
      }
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Name the speaker in <InlineCode>MessageHeader</InlineCode>. Use{" "}
              <InlineCode>{'align="end"'}</InlineCode> for the local speaker so
              the row flips without reordering the DOM.
            </p>
          ),
        },
      ]}
    />
  );
}
