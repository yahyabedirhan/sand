import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Message, MessageContent, MessageGroup } from "@/components/ui/message";

const messages = [
  { sender: "support", text: "Hi, how can I help you today?" },
  { sender: "visitor", text: "I changed phones and cannot sign in." },
  {
    sender: "support",
    text: "I can help. Do you still have access to your email?",
  },
] as const;

export function ChatCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support chat</CardTitle>
        <CardDescription>Usually replies in a few minutes</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-md">
        <MessageGroup>
          {messages.map((message) => {
            const visitor = message.sender === "visitor";

            return (
              <Message key={message.text} align={visitor ? "end" : "start"}>
                <MessageContent>
                  <BubbleGroup>
                    <Bubble
                      variant={visitor ? "default" : "muted"}
                      align={visitor ? "end" : "start"}
                    >
                      <BubbleContent>{message.text}</BubbleContent>
                    </Bubble>
                  </BubbleGroup>
                </MessageContent>
              </Message>
            );
          })}
        </MessageGroup>
        <div className="flex gap-xs">
          <Input aria-label="Message" placeholder="Type your message" />
          <Button>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}
