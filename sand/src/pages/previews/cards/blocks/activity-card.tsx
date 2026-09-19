import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

const activity = [
  { day: "Mon", minutes: 24 },
  { day: "Tue", minutes: 38 },
  { day: "Wed", minutes: 31 },
  { day: "Thu", minutes: 52 },
  { day: "Fri", minutes: 44 },
  { day: "Sat", minutes: 63 },
  { day: "Sun", minutes: 48 },
] as const;

export function ActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise minutes</CardTitle>
        <CardDescription>Daily movement this week</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-md">
        <div
          className="flex h-32 items-end justify-between gap-xs"
          role="img"
          aria-label="Exercise minutes peak on Saturday"
        >
          {activity.map((entry) => (
            <div
              key={entry.day}
              className="flex h-full flex-1 flex-col items-center justify-end gap-xs"
            >
              <span
                className="w-full rounded-t-sm bg-chart-2"
                style={{ height: `${(entry.minutes / 70) * 100}%` }}
              />
              <span className="text-[0.625rem] text-muted-foreground">
                {entry.day}
              </span>
            </div>
          ))}
        </div>
        <Progress value={62}>
          <ProgressLabel>Weekly goal</ProgressLabel>
          <ProgressValue>{() => "62%"}</ProgressValue>
        </Progress>
      </CardContent>
    </Card>
  );
}
