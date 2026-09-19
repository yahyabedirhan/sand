import { Area, AreaChart } from "recharts";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
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

const revenue = [
  { period: "1", amount: 38 },
  { period: "2", amount: 52 },
  { period: "3", amount: 43 },
  { period: "4", amount: 66 },
  { period: "5", amount: 58 },
  { period: "6", amount: 82 },
  { period: "7", amount: 74 },
  { period: "8", amount: 91 },
  { period: "9", amount: 78 },
  { period: "10", amount: 96 },
];

const chartConfig = {
  amount: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function RevenueCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total revenue</CardTitle>
        <CardDescription>September to date</CardDescription>
        <CardAction>
          <Badge variant="secondary">+18.2%</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-md">
        <div>
          <div className="font-mono text-3xl font-medium tracking-tight tabular-nums">
            $15,231
          </div>
          <p className="text-caption text-muted-foreground">
            $2,349 more than last month
          </p>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-20 w-full"
        >
          <AreaChart data={revenue} accessibilityLayer>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              dataKey="amount"
              type="natural"
              fill="var(--color-amount)"
              fillOpacity={0.3}
              stroke="var(--color-amount)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
