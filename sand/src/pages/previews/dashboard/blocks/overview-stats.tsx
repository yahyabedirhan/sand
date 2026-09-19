import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  {
    title: "Total revenue",
    value: "$48,231",
    change: "+12.4%",
    hint: "Ahead of last September",
  },
  {
    title: "New members",
    value: "128",
    change: "+8.1%",
    hint: "Invites accepted this month",
  },
  {
    title: "Active projects",
    value: "24",
    change: "-2.4%",
    hint: "Two archives this week",
  },
  {
    title: "Hours logged",
    value: "1,842",
    change: "+6.3%",
    hint: "Across every workspace",
  },
] as const;

export function OverviewStats() {
  return (
    <div className="grid gap-md sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} size="sm">
          <CardHeader>
            <CardTitle>{stat.title}</CardTitle>
            <CardDescription>September to date</CardDescription>
            <CardAction>
              <Badge variant="secondary">{stat.change}</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-2xl font-medium tracking-tight tabular-nums">
              {stat.value}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-caption text-muted-foreground">{stat.hint}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
