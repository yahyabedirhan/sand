import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const instruments = [
  { symbol: "NORTH", name: "North Fund", price: "$142.18", change: "+1.4%" },
  { symbol: "RIVER", name: "River Credit", price: "$88.40", change: "-0.6%" },
  { symbol: "QUILL", name: "Quill Notes", price: "$24.05", change: "+3.1%" },
  { symbol: "LUMEN", name: "Lumen Pay", price: "$61.72", change: "+0.2%" },
] as const;

export function Ticker() {
  return (
    <div className="grid grid-cols-2 gap-md @3xl:grid-cols-4">
      {instruments.map((instrument) => {
        const down = instrument.change.startsWith("-");

        return (
          <Card key={instrument.symbol} size="sm">
            <CardHeader>
              <CardTitle className="font-mono">{instrument.symbol}</CardTitle>
              <CardDescription>{instrument.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-baseline justify-between gap-sm">
              <div className="font-mono text-lg font-medium tracking-tight tabular-nums">
                {instrument.price}
              </div>
              <Badge variant={down ? "destructive" : "secondary"}>
                {instrument.change}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
