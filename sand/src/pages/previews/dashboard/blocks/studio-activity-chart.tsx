import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const activity = [
  { week: "Jun 8", studio: 186, client: 92 },
  { week: "Jun 15", studio: 214, client: 108 },
  { week: "Jun 22", studio: 198, client: 121 },
  { week: "Jun 29", studio: 242, client: 134 },
  { week: "Jul 6", studio: 231, client: 128 },
  { week: "Jul 13", studio: 268, client: 151 },
  { week: "Jul 20", studio: 255, client: 147 },
  { week: "Jul 27", studio: 291, client: 162 },
  { week: "Aug 3", studio: 274, client: 158 },
  { week: "Aug 10", studio: 312, client: 176 },
  { week: "Aug 17", studio: 298, client: 169 },
  { week: "Aug 24", studio: 334, client: 188 },
];

const chartConfig = {
  studio: {
    label: "Studio",
    color: "var(--chart-1)",
  },
  client: {
    label: "Client",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function StudioActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Studio activity</CardTitle>
        <CardDescription>Hours logged in the last twelve weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-56 w-full"
        >
          <AreaChart data={activity} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="studio"
              type="natural"
              fill="var(--color-studio)"
              fillOpacity={0.3}
              stroke="var(--color-studio)"
              stackId="activity"
            />
            <Area
              dataKey="client"
              type="natural"
              fill="var(--color-client)"
              fillOpacity={0.3}
              stroke="var(--color-client)"
              stackId="activity"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
