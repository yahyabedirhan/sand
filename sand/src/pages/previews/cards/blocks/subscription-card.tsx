import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SubscriptionCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upgrade your subscription</CardTitle>
        <CardDescription>
          Unlock every preview and keep your history.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup className="gap-sm">
          <Field>
            <FieldLabel>
              Name
              <Input placeholder="Avery Stone" />
            </FieldLabel>
          </Field>
          <Field>
            <FieldLabel>
              Email
              <Input type="email" placeholder="avery@example.com" />
            </FieldLabel>
          </Field>
          <Field>
            <FieldLabel>
              Card number
              <Input inputMode="numeric" placeholder="4242 4242 4242 4242" />
            </FieldLabel>
          </Field>
          <div className="grid grid-cols-2 gap-sm">
            <Button variant="outline">Starter</Button>
            <Button variant="secondary">Pro</Button>
          </div>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade plan</Button>
      </CardFooter>
    </Card>
  );
}
