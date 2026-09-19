import { Area, AreaChart } from "recharts";

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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const week = [
  { period: "Mon", price: 136 },
  { period: "Tue", price: 139 },
  { period: "Wed", price: 137 },
  { period: "Thu", price: 144 },
  { period: "Fri", price: 141 },
  { period: "Sat", price: 146 },
  { period: "Sun", price: 142 },
];

const month = [
  { period: "W1", price: 128 },
  { period: "W2", price: 134 },
  { period: "W3", price: 131 },
  { period: "W4", price: 142 },
];

const year = [
  { period: "Jan", price: 98 },
  { period: "Mar", price: 112 },
  { period: "May", price: 108 },
  { period: "Jul", price: 126 },
  { period: "Sep", price: 142 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ranges = [
  { value: "week", label: "1W", data: week },
  { value: "month", label: "1M", data: month },
  { value: "year", label: "1Y", data: year },
] as const;

export function MarketChart() {
  return (
    <Card>
      <Tabs defaultValue="week" className="gap-(--card-spacing)">
        <CardHeader>
          <CardTitle>North Fund</CardTitle>
          <CardDescription>Last close and range</CardDescription>
          <CardAction>
            <TabsList>
              {ranges.map((range) => (
                <TabsTrigger key={range.value} value={range.value}>
                  {range.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-md">
          <div className="flex items-baseline gap-sm">
            <div className="font-mono text-3xl font-medium tracking-tight tabular-nums">
              $142.18
            </div>
            <Badge variant="secondary">+1.4%</Badge>
          </div>
          {ranges.map((range) => (
            <TabsContent key={range.value} value={range.value}>
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-32 w-full"
              >
                <AreaChart data={range.data} accessibilityLayer>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Area
                    dataKey="price"
                    type="natural"
                    fill="var(--color-price)"
                    fillOpacity={0.3}
                    stroke="var(--color-price)"
                  />
                </AreaChart>
              </ChartContainer>
            </TabsContent>
          ))}
        </CardContent>
        <CardFooter className="justify-between border-t text-caption text-muted-foreground">
          <span>Market cap $4.2B</span>
          <span className="font-mono tabular-nums">Vol 1.8M</span>
        </CardFooter>
      </Tabs>
    </Card>
  );
}
