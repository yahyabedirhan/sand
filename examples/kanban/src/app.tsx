import { useState } from "react";

import { Badge } from "sand/ui/badge";
import { Button } from "sand/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "sand/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "sand/ui/dropdown-menu";

type ColumnId = "backlog" | "in-progress" | "done";

type Priority = "low" | "medium" | "high";

type Task = {
  id: string;
  title: string;
  detail: string;
  priority: Priority;
  column: ColumnId;
};

const columns: { id: ColumnId; title: string }[] = [
  { id: "backlog", title: "Backlog" },
  { id: "in-progress", title: "In progress" },
  { id: "done", title: "Done" },
];

const seed: Task[] = [
  {
    id: "harbor",
    title: "Harbor type specimen",
    detail: "Set Fraunces at display sizes against Geist for UI copy.",
    priority: "high",
    column: "in-progress",
  },
  {
    id: "atlas",
    title: "Atlas wayfinding",
    detail: "Map the gallery routes before the September open.",
    priority: "medium",
    column: "backlog",
  },
  {
    id: "dune",
    title: "Dune archive",
    detail: "Sort the field notes into the shared library.",
    priority: "low",
    column: "backlog",
  },
  {
    id: "north",
    title: "North gallery labels",
    detail: "Write wall labels for the three new rooms.",
    priority: "medium",
    column: "in-progress",
  },
  {
    id: "field",
    title: "Field notes site",
    detail: "Publish the summer diary pages.",
    priority: "low",
    column: "done",
  },
];

const priorityLabel: Record<Priority, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const priorityVariant: Record<Priority, "outline" | "secondary" | "default"> = {
  low: "outline",
  medium: "secondary",
  high: "default",
};

export function App() {
  const [tasks, setTasks] = useState(seed);

  function moveTask(id: string, column: ColumnId) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, column } : task)),
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex flex-col gap-sm px-lg py-xl">
        <h1 className="font-serif text-heading-1">Studio board</h1>
        <p className="text-body-sm text-muted-foreground">
          A few briefs in flight. Move a card when its column changes.
        </p>
      </header>
      <main className="grid flex-1 grid-cols-1 gap-md px-lg pb-xl md:grid-cols-3">
        {columns.map((column) => {
          const columnTasks = tasks.filter((task) => task.column === column.id);
          return (
            <section key={column.id} className="flex flex-col gap-sm">
              <div className="flex items-baseline justify-between gap-sm">
                <h2 className="text-heading-4">{column.title}</h2>
                <p className="text-caption text-muted-foreground">
                  {columnTasks.length}
                </p>
              </div>
              {columnTasks.length === 0 ? (
                <p className="text-caption text-muted-foreground">No cards</p>
              ) : (
                columnTasks.map((task) => (
                  <Card key={task.id}>
                    <CardHeader>
                      <CardTitle>{task.title}</CardTitle>
                      <CardDescription>
                        <Badge variant={priorityVariant[task.priority]}>
                          {priorityLabel[task.priority]}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body-sm">{task.detail}</p>
                    </CardContent>
                    <CardFooter>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={<Button variant="outline" />}
                        >
                          Move
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {columns
                            .filter((target) => target.id !== task.column)
                            .map((target) => (
                              <DropdownMenuItem
                                key={target.id}
                                onClick={() => moveTask(task.id, target.id)}
                              >
                                {target.title}
                              </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardFooter>
                  </Card>
                ))
              )}
            </section>
          );
        })}
      </main>
    </div>
  );
}
