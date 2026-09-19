import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader, Prose } from "@/docs/page";

export type Mechanic = {
  name: string;
  role: string;
  choice: string;
  dependents: string;
};

// Shared layout for the mechanic pages. A mechanic is something Sand is built
// on, documented so maintainers and consumers can see the dependencies, not
// presented as swappable.
export function MechanicPage({ mechanic }: { mechanic: Mechanic }) {
  return (
    <>
      <PageHeader title={mechanic.name} lead={mechanic.role} />
      <Card>
        <CardHeader>
          <CardTitle>{mechanic.choice}</CardTitle>
        </CardHeader>
        <CardContent>
          <Prose>
            <dl className="grid grid-cols-[max-content_1fr] gap-x-md gap-y-xs text-body-sm">
              <dt className="text-muted-foreground">Depends on it</dt>
              <dd>{mechanic.dependents}</dd>
            </dl>
          </Prose>
        </CardContent>
      </Card>
    </>
  );
}
