import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "sand/ui/message-scroller";

<MessageScrollerProvider>
  <MessageScroller className="h-64 w-full max-w-sm">
    <MessageScrollerViewport aria-label="Thread">
      <MessageScrollerContent>
        <MessageScrollerItem>
          Morning standup notes are in the thread.
        </MessageScrollerItem>
        <MessageScrollerItem>
          The brief is in the files tab.
        </MessageScrollerItem>
        <MessageScrollerItem scrollAnchor>
          Latest reply just now.
        </MessageScrollerItem>
      </MessageScrollerContent>
    </MessageScrollerViewport>
    <MessageScrollerButton />
  </MessageScroller>
</MessageScrollerProvider>`;

export function MessageScrollerPage() {
  return (
    <ComponentPage
      title="Message Scroller"
      lead="Keeps a conversation list scrolled to the latest message."
      demo={
        <MessageScrollerProvider>
          <MessageScroller className="h-64 w-full max-w-sm">
            <MessageScrollerViewport aria-label="Thread">
              <MessageScrollerContent>
                <MessageScrollerItem>
                  Morning standup notes are in the thread.
                </MessageScrollerItem>
                <MessageScrollerItem>
                  The brief is in the files tab.
                </MessageScrollerItem>
                <MessageScrollerItem scrollAnchor>
                  Latest reply just now.
                </MessageScrollerItem>
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      }
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Label the viewport with <InlineCode>aria-label</InlineCode>. Mark
              the latest item with <InlineCode>scrollAnchor</InlineCode> so the
              scroller lands on new content.
            </p>
          ),
        },
      ]}
    />
  );
}
