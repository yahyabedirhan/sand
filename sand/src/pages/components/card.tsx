import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Button } from "sand/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "sand/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Workspace</CardTitle>
    <CardDescription>Shared with 12 members.</CardDescription>
  </CardHeader>
  <CardContent>Plan renews on 1 October.</CardContent>
  <CardFooter>
    <Button variant="outline">Manage</Button>
  </CardFooter>
</Card>`;

export function CardPage() {
  return (
    <ComponentPage
      title="Card"
      lead="Groups related content in a contained surface."
      demo={
        <Card className="w-full min-w-96 max-w-sm">
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
            <CardDescription>Shared with 12 members.</CardDescription>
          </CardHeader>
          <CardContent>Plan renews on 1 October.</CardContent>
          <CardFooter>
            <Button variant="outline">Manage</Button>
          </CardFooter>
        </Card>
      }
      code={code}
    />
  );
}
