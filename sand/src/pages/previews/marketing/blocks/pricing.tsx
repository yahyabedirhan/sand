import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Cycle = "monthly" | "yearly";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "For trying Dune on your own notes.",
    features: ["Three workspaces", "Basic search", "Seven-day history"],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Pro",
    monthly: 12,
    yearly: 10,
    description: "For daily writing and a longer trail.",
    features: [
      "Unlimited workspaces",
      "Full-text search",
      "History you can restore",
    ],
    cta: "Choose Pro",
    featured: true,
  },
  {
    name: "Team",
    monthly: 28,
    yearly: 24,
    description: "For groups who share drafts.",
    features: ["Shared drafts", "Roles and guests", "Priority support"],
    cta: "Start a team",
    featured: false,
  },
] as const;

export function MarketingPricing() {
  const [cycle, setCycle] = useState<Cycle>("yearly");

  return (
    <section className="flex flex-col gap-lg border-t px-lg py-xl">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-md text-center">
        <h2 className="w-full font-serif text-heading-2">
          Plans that stay out of the way
        </h2>
        <p className="w-full text-body text-muted-foreground">
          Yearly billing is two months less per year. Switch the toggle to
          compare.
        </p>
        <ToggleGroup
          variant="outline"
          spacing={0}
          value={[cycle]}
          onValueChange={(value) => {
            const next = value[0];
            if (next === "monthly" || next === "yearly") setCycle(next);
          }}
          aria-label="Billing period"
        >
          <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
          <ToggleGroupItem value="yearly">Yearly</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="grid gap-md lg:grid-cols-3">
        {plans.map((plan) => {
          const price = cycle === "yearly" ? plan.yearly : plan.monthly;

          return (
            <Card
              key={plan.name}
              className={plan.featured ? "bg-muted/40" : undefined}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-sm text-heading-3">
                  {plan.name}
                  {plan.featured ? (
                    <Badge variant="secondary">Most used</Badge>
                  ) : null}
                </CardTitle>
                <CardDescription className="text-body-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-md">
                <div>
                  <p className="font-mono text-3xl font-medium tracking-tight tabular-nums">
                    ${price}
                  </p>
                  <p className="text-caption text-muted-foreground">
                    {price === 0
                      ? "Free to start"
                      : cycle === "yearly"
                        ? "per month, billed yearly"
                        : "per month"}
                  </p>
                </div>
                <ul className="flex flex-col gap-xs">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-body-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
