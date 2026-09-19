import { useLayoutEffect, useRef, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  InlineCode,
  PageHeader,
  Rule,
  RuleList,
  Section,
  type RuleExample,
} from "@/docs/page";
import { parseRules, ruleKey } from "@/docs/parse-rules";
import { PreviewContainer } from "@/docs/preview-container";
import spacingRulesMarkdown from "../../../rules/spacing.md?raw";

type Step = {
  name: string;
  token: string;
  utility: string;
  use: string;
};

const steps: Step[] = [
  {
    name: "xs",
    token: "--space-xs",
    utility: "gap-xs",
    use: "Tight clusters, icon-to-label gaps",
  },
  {
    name: "sm",
    token: "--space-sm",
    utility: "gap-sm",
    use: "Related items inside a control",
  },
  {
    name: "md",
    token: "--space-md",
    utility: "gap-md",
    use: "Default inner padding and gaps",
  },
  {
    name: "lg",
    token: "--space-lg",
    utility: "gap-lg",
    use: "Section padding inside a card",
  },
  {
    name: "xl",
    token: "--space-xl",
    utility: "gap-xl",
    use: "Page section spacing",
  },
  {
    name: "2xl",
    token: "--space-2xl",
    utility: "gap-2xl",
    use: "Layout gaps between large blocks",
  },
];

const spacingRules = parseRules(spacingRulesMarkdown);

type SpacingRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

const spacingRuleExamples: Record<string, SpacingRuleExamples> = {
  "prefer-a-named-step": {
    do: {
      note: "Named steps on padding and gap, so the cluster matches the rest of Sand.",
      example: (
        <div className="flex gap-md rounded-md border p-lg">
          <div className="size-8 rounded-sm bg-muted" />
          <div className="size-8 rounded-sm bg-muted" />
          <div className="size-8 rounded-sm bg-muted" />
        </div>
      ),
    },
    dont: {
      note: "One-off pixel values that drift from the scale.",
      example: (
        <div className="flex gap-[13px] rounded-md border p-[21px]">
          <div className="size-8 rounded-sm bg-muted" />
          <div className="size-8 rounded-sm bg-muted" />
          <div className="size-8 rounded-sm bg-muted" />
        </div>
      ),
    },
  },
};

function StepBar({ step }: { step: Step }) {
  return (
    <div className="grid items-center gap-sm sm:grid-cols-[4.5rem_minmax(0,1fr)]">
      <span className="font-mono text-caption">{step.name}</span>
      <div
        className="h-6 rounded-sm bg-primary"
        style={{ width: `var(${step.token})` }}
      />
    </div>
  );
}

function TokenValue({
  token,
  kind,
}: {
  token: string;
  kind: "size" | "numeric";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState("");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const styles = getComputedStyle(el);
    const declared = styles.getPropertyValue(token).trim();
    if (kind === "size") {
      setValue(declared);
      return;
    }
    const probe = document.createElement("div");
    probe.style.width = `var(${token})`;
    probe.style.height = "0";
    el.appendChild(probe);
    const px = parseFloat(getComputedStyle(probe).width);
    probe.style.width = "var(--spacing)";
    const unitPx = parseFloat(getComputedStyle(probe).width);
    el.removeChild(probe);
    if (unitPx > 0) setValue(String(Math.round(px / unitPx)));
  }, [kind, token]);

  return (
    <span ref={ref} className="font-mono text-caption">
      {value}
    </span>
  );
}

export function SpacingPage() {
  return (
    <>
      <PageHeader
        title="Spacing"
        lead="Named steps over the numeric scale. Reach for gap-md and p-xl. The raw numbers stay for exceptions."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left">
          <div className="flex w-full flex-col gap-md">
            {steps.map((step) => (
              <StepBar key={step.name} step={step} />
            ))}
          </div>
        </PreviewContainer>
      </Section>

      <Section id="scale" title="Scale">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Utility</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Numeric</TableHead>
              <TableHead>Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {steps.map((step) => (
              <TableRow key={step.name}>
                <TableCell>
                  <InlineCode>{step.token}</InlineCode>
                </TableCell>
                <TableCell>
                  <InlineCode>{step.utility}</InlineCode>
                </TableCell>
                <TableCell>
                  <TokenValue token={step.token} kind="size" />
                </TableCell>
                <TableCell>
                  <TokenValue token={step.token} kind="numeric" />
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {step.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          Named steps live in <InlineCode>--space-*</InlineCode>, not{" "}
          <InlineCode>--spacing-*</InlineCode>. Matching utilities keep{" "}
          <InlineCode>gap-md</InlineCode> and the other named classes. The
          numeric column is the Tailwind spacing key that resolves to the same
          size, such as <InlineCode>p-4</InlineCode> for{" "}
          <InlineCode>md</InlineCode>.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {spacingRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...spacingRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
