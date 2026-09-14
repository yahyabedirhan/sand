import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader, Prose } from "@/docs/page";

export type Module = {
  name: string;
  role: string;
  choice: string;
  dependents: string;
  alternatives: string;
  swap: string;
};

// Shared layout for the module pages. Each library enters Sand through one
// folder under src/modules; the linter rejects a direct import anywhere else.
export function ModulePage({ module }: { module: Module }) {
  return (
    <>
      <PageHeader title={module.name} lead={module.role} />
      <Card>
        <CardHeader>
          <CardTitle>{module.choice}</CardTitle>
        </CardHeader>
        <CardContent>
          <Prose>
            <dl className="grid grid-cols-[max-content_1fr] gap-x-md gap-y-xs text-body-sm">
              <dt className="text-muted-foreground">Depends on it</dt>
              <dd>{module.dependents}</dd>
              <dt className="text-muted-foreground">Alternatives considered</dt>
              <dd>{module.alternatives}</dd>
              <dt className="text-muted-foreground">How to swap</dt>
              <dd>{module.swap}</dd>
            </dl>
          </Prose>
        </CardContent>
      </Card>
    </>
  );
}
