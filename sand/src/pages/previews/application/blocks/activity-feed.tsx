import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const events = [
  {
    id: "evt-1",
    name: "Avery Stone",
    initials: "AS",
    time: "12m",
    kind: "task",
    title: "Marked payout review as done",
    detail: "North Fund · Invoice 1842",
  },
  {
    id: "evt-2",
    name: "Jordan Hale",
    initials: "JH",
    time: "1h",
    kind: "meeting",
    title: "Scheduled a ledger walkthrough",
    detail: "Tomorrow at 10:00",
  },
  {
    id: "evt-3",
    name: "Riley Chen",
    initials: "RC",
    time: "3h",
    kind: "task",
    title: "Asked for a second look",
    detail: "River Credit transfer is still on hold",
  },
  {
    id: "evt-4",
    name: "Sam Ortiz",
    initials: "SO",
    time: "Yesterday",
    kind: "meeting",
    title: "Posted notes from the standup",
    detail: "Lumen Pay failed payout, retry Friday",
  },
] as const;

const filters = ["all", "task", "meeting"] as const;

function EventList({ kind }: { kind: (typeof filters)[number] }) {
  const rows =
    kind === "all" ? events : events.filter((event) => event.kind === kind);

  return (
    <ItemGroup className="gap-0">
      {rows.map((event) => (
        <Item key={event.id} size="sm">
          <ItemMedia>
            <Avatar size="sm">
              <AvatarFallback>{event.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              {event.name}
              <span className="font-normal text-muted-foreground">
                {event.time}
              </span>
            </ItemTitle>
            <ItemDescription>{event.title}</ItemDescription>
            <p className="rounded-md bg-muted px-sm py-xs text-caption text-muted-foreground">
              {event.detail}
            </p>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}

export function ActivityFeed() {
  return (
    <Card>
      <Tabs defaultValue="all" className="gap-(--card-spacing)">
        <CardHeader>
          <CardTitle>Activity</CardTitle>
          <CardDescription>What the workspace did today</CardDescription>
          <CardAction>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="task">Tasks</TabsTrigger>
              <TabsTrigger value="meeting">Meetings</TabsTrigger>
            </TabsList>
          </CardAction>
        </CardHeader>
        <CardContent>
          {filters.map((kind) => (
            <TabsContent key={kind} value={kind}>
              <EventList kind={kind} />
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
    </Card>
  );
}
