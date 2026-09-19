import type { ReactElement } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
} from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  MechanicPage,
  ShowcasePiece,
  type Mechanic,
  type MechanicPart,
} from "@/pages/mechanics/mechanic-page";

const months = [
  { month: "Jan", visits: 186, saves: 80 },
  { month: "Feb", visits: 305, saves: 200 },
  { month: "Mar", visits: 237, saves: 120 },
  { month: "Apr", visits: 273, saves: 190 },
];

const shares = [
  { name: "Studio", value: 62, fill: "var(--chart-1)" },
  { name: "Client", value: 38, fill: "var(--chart-2)" },
];

const chartConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
  saves: { label: "Saves", color: "var(--chart-2)" },
} satisfies ChartConfig;

function rechartsPart(name: string, slug: string): MechanicPart {
  return { name, href: `https://recharts.github.io/en-US/api/${slug}` };
}

function MiniChart({ children }: { children: ReactElement }) {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-28 w-full"
      initialDimension={{ width: 180, height: 112 }}
    >
      {children}
    </ChartContainer>
  );
}

const mechanic: Mechanic = {
  name: "Charts",
  role: "Recharts draws the series behind Sand's Chart wrapper.",
  owns: "Recharts owns the SVG series, axes, and tooltips. Sand's Chart component maps chart color tokens onto that API. Only the Chart component and the previews that use it depend on this.",
  showcase: (
    <>
      <ShowcasePiece caption="Bar">
        <MiniChart>
          <BarChart data={months} accessibilityLayer>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
          </BarChart>
        </MiniChart>
      </ShowcasePiece>
      <ShowcasePiece caption="Line">
        <MiniChart>
          <LineChart data={months} accessibilityLayer>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <Line
              dataKey="visits"
              type="natural"
              stroke="var(--color-visits)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </MiniChart>
      </ShowcasePiece>
      <ShowcasePiece caption="Area">
        <MiniChart>
          <AreaChart data={months} accessibilityLayer>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <Area
              dataKey="visits"
              type="natural"
              fill="var(--color-visits)"
              fillOpacity={0.3}
              stroke="var(--color-visits)"
            />
          </AreaChart>
        </MiniChart>
      </ShowcasePiece>
      <ShowcasePiece caption="Pie">
        <MiniChart>
          <PieChart>
            <Pie
              data={shares}
              dataKey="value"
              nameKey="name"
              innerRadius={28}
              outerRadius={48}
            />
          </PieChart>
        </MiniChart>
      </ShowcasePiece>
      <ShowcasePiece caption="Tooltip">
        <MiniChart>
          <BarChart data={months} accessibilityLayer>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
          </BarChart>
        </MiniChart>
      </ShowcasePiece>
      <ShowcasePiece caption="Legend and grid">
        <MiniChart>
          <BarChart data={months} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
            <Bar dataKey="saves" fill="var(--color-saves)" radius={4} />
          </BarChart>
        </MiniChart>
      </ShowcasePiece>
    </>
  ),
  code: `import { Bar, BarChart, XAxis } from "recharts";
import { ChartContainer } from "sand/ui/chart";

<ChartContainer config={chartConfig} className="h-48 w-full">
  <BarChart data={chartData} accessibilityLayer>
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <Bar dataKey="visits" fill="var(--color-visits)" radius={4} />
  </BarChart>
</ChartContainer>`,
  parts: [
    rechartsPart("Area", "Area"),
    rechartsPart("AreaChart", "AreaChart"),
    rechartsPart("Bar", "Bar"),
    rechartsPart("BarChart", "BarChart"),
    rechartsPart("CartesianGrid", "CartesianGrid"),
    rechartsPart("Legend", "Legend"),
    rechartsPart("Line", "Line"),
    rechartsPart("LineChart", "LineChart"),
    rechartsPart("Pie", "Pie"),
    rechartsPart("PieChart", "PieChart"),
    rechartsPart("ResponsiveContainer", "ResponsiveContainer"),
    rechartsPart("Tooltip", "Tooltip"),
    rechartsPart("XAxis", "XAxis"),
    rechartsPart("YAxis", "YAxis"),
  ],
  links: [
    { label: "Recharts docs", href: "https://recharts.github.io/en-US/" },
    {
      label: "BarChart reference",
      href: "https://recharts.github.io/en-US/api/BarChart",
    },
    { label: "Source on GitHub", href: "https://github.com/recharts/recharts" },
    {
      label: "Releases",
      href: "https://github.com/recharts/recharts/releases",
    },
  ],
  alternatives: [
    {
      name: "Visx",
      comparison:
        "Low-level SVG primitives from Airbnb. More control, more wiring. Sand stays with Recharts because the shadcn Chart wrapper already targets it.",
      href: "https://airbnb.io/visx",
      linkLabel: "airbnb.io/visx",
    },
    {
      name: "Nivo",
      comparison:
        "Opinionated React charts with lots of defaults. Heavier, and would replace the Chart wrapper rather than sit under it. Not used.",
      href: "https://nivo.rocks",
      linkLabel: "nivo.rocks",
    },
  ],
};

export function ChartsPage() {
  return <MechanicPage mechanic={mechanic} />;
}
