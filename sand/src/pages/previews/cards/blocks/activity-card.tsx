import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
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
];

const chartConfig = {
  minutes: {
    label: "Minutes",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise minutes</CardTitle>
        <CardDescription>Daily movement this week</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-md">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-32 w-full"
        >
          <BarChart data={activity} accessibilityLayer>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="minutes" fill="var(--color-minutes)" radius={4} />
          </BarChart>
        </ChartContainer>
        <Progress value={62}>
          <ProgressLabel>Weekly goal</ProgressLabel>
          <ProgressValue>{() => "62%"}</ProgressValue>
        </Progress>
      </CardContent>
    </Card>
  );
}
