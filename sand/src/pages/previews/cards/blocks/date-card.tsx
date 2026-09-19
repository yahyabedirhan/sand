import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const selectedDate = new Date(2026, 8, 19);

export function DateCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a review</CardTitle>
        <CardDescription>Select a day for the next check-in</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          defaultMonth={selectedDate}
          selected={selectedDate}
          className="bg-transparent p-0"
        />
      </CardContent>
    </Card>
  );
}
