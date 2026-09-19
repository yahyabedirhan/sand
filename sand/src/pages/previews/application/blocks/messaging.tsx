import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message";

const thread = [
  {
    sender: "avery",
    name: "Avery",
    initials: "AS",
    text: "The Harbor payout cleared. Want me to send the receipt?",
  },
  {
    sender: "you",
    name: "You",
    initials: "YP",
    text: "Yes, and flag the River Credit hold if it slips another day.",
  },
  {
    sender: "avery",
    name: "Avery",
    initials: "AS",
    text: "Receipt is in the ledger. I will ping you if River is still pending tomorrow.",
  },
] as const;

export function Messaging() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Avery Stone</CardTitle>
        <CardAction>
          <Badge variant="secondary">Online</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <MessageGroup>
          {thread.map((message) => {
            const you = message.sender === "you";

            return (
              <Message key={message.text} align={you ? "end" : "start"}>
                {you ? null : (
                  <MessageAvatar>
                    <Avatar size="sm">
                      <AvatarFallback>{message.initials}</AvatarFallback>
                    </Avatar>
                  </MessageAvatar>
                )}
                <MessageContent>
                  {you ? null : <MessageHeader>{message.name}</MessageHeader>}
                  <BubbleGroup>
                    <Bubble
                      variant={you ? "default" : "muted"}
                      align={you ? "end" : "start"}
                    >
                      <BubbleContent>{message.text}</BubbleContent>
                    </Bubble>
                  </BubbleGroup>
                </MessageContent>
              </Message>
            );
          })}
        </MessageGroup>
      </CardContent>
      <CardFooter className="gap-xs border-t">
        <Input aria-label="Message" placeholder="Write a reply" />
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
}
