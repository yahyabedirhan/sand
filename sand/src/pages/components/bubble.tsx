import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import { Bubble, BubbleContent, BubbleGroup } from "sand/ui/bubble";

<BubbleGroup>
  <Bubble>
    <BubbleContent>Can you share the latest brief?</BubbleContent>
  </Bubble>
  <Bubble align="end" variant="muted">
    <BubbleContent>It is in the files tab.</BubbleContent>
  </Bubble>
</BubbleGroup>`;

export function BubblePage() {
  return (
    <ComponentPage
      title="Bubble"
      lead="Wraps a single utterance in a conversation."
      demo={
        <BubbleGroup className="w-full max-w-sm">
          <Bubble>
            <BubbleContent>Can you share the latest brief?</BubbleContent>
          </Bubble>
          <Bubble align="end" variant="muted">
            <BubbleContent>It is in the files tab.</BubbleContent>
          </Bubble>
        </BubbleGroup>
      }
      code={code}
      sections={[
        {
          id: "accessibility",
          title: "Accessibility",
          children: (
            <p className="text-body text-muted-foreground">
              Put the speaker on the trailing edge with{" "}
              <InlineCode>{'align="end"'}</InlineCode>. The text inside{" "}
              <InlineCode>BubbleContent</InlineCode> is the accessible name of
              the utterance.
            </p>
          ),
        },
      ]}
    />
  );
}
