import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const publishedOn = new Date(2026, 8, 19);

const code = `import { useState } from "react";
import { Calendar } from "sand/ui/calendar";

const publishedOn = new Date(2026, 8, 19);

function CalendarDemo() {
  const [date, setDate] = useState(publishedOn);
  return (
    <Calendar
      mode="single"
      required
      selected={date}
      onSelect={setDate}
      defaultMonth={publishedOn}
    />
  );
}`;

function CalendarDemo() {
  const [date, setDate] = useState(publishedOn);
  return (
    <Calendar
      mode="single"
      required
      selected={date}
      onSelect={setDate}
      defaultMonth={publishedOn}
    />
  );
}

export function CalendarPage() {
  return (
    <ComponentPage
      title="Calendar"
      lead="Picks a date from a month grid."
      demo={<CalendarDemo />}
      code={code}
      sections={[
        {
          id: "mechanic",
          title: "Mechanic",
          children: (
            <p className="text-body text-muted-foreground">
              Calendar uses the <InlineCode>react-day-picker</InlineCode>{" "}
              library for date selection and month navigation.
            </p>
          ),
        },
      ]}
    />
  );
}
