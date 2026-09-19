import { Bar, BarChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { ComponentPage } from "@/docs/component-page";

const chartData = [
  { month: "Jan", visits: 186, saves: 80 },
  { month: "Feb", visits: 305, saves: 200 },
  { month: "Mar", visits: 237, saves: 120 },
  { month: "Apr", visits: 273, saves: 190 },
];

const chartConfig = {
  visits: {
    label: "Visits",
    color: "var(--chart-1)",
  },
  saves: {
    label: "Saves",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const code = `import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "sand/ui/chart";

const chartData = [
  { month: "Jan", visits: 186, saves: 80 },
  { month: "Feb", visits: 305, saves: 200 },
  { month: "Mar", visits: 237, saves: 120 },
  { month: "Apr", visits: 273, saves: 190 },
];

const chartConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
  saves: { label: "Saves", color: "var(--chart-2)" },
};

<ChartContainer config={chartConfig} className="h-48 w-full">
  <BarChart data={chartData} accessibilityLayer>
    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
    <Bar dataKey="saves" fill="var(--color-saves)" radius={4} />
  </BarChart>
</ChartContainer>`;

function ChartDemo() {
  return (
    <ChartContainer config={chartConfig} className="h-48 w-full max-w-lg">
      <BarChart data={chartData} accessibilityLayer>
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
        <Bar dataKey="saves" fill="var(--color-saves)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

export function ChartPage() {
  return (
    <ComponentPage
      title="Chart"
      lead="Plots a data series."
      demo={<ChartDemo />}
      code={code}
    />
  );
}
