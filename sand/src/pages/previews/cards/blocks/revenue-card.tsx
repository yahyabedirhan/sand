import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const revenue = [38, 52, 43, 66, 58, 82, 74, 91, 78, 96];

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
        <div
          className="flex h-20 items-end gap-xs"
          role="img"
          aria-label="Revenue rises across ten periods"
        >
          {revenue.map((value, index) => (
            <span
              key={`${value}-${index}`}
              className="min-h-px flex-1 rounded-t-sm bg-chart-1"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
