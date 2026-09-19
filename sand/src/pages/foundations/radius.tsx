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
import radiusRulesMarkdown from "../../../rules/radius.md?raw";

type Step = {
  name: string;
  token: string;
  utility: string;
  use: string;
};

const steps: Step[] = [
  {
    name: "sm",
    token: "--radius-sm",
    utility: "rounded-sm",
    use: "Tight corners, chips",
  },
  {
    name: "md",
    token: "--radius-md",
    utility: "rounded-md",
    use: "Controls. The default on buttons.",
  },
  {
    name: "lg",
    token: "--radius-lg",
    utility: "rounded-lg",
    use: "Cards and the preview container. The large radius.",
  },
  {
    name: "xl",
    token: "--radius-xl",
    utility: "rounded-xl",
    use: "Large surfaces",
  },
];

const radiusRules = parseRules(radiusRulesMarkdown);

type RadiusRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

const radiusRuleExamples: Record<string, RadiusRuleExamples> = {
  "use-a-named-radius": {
    do: {
      note: "rounded-lg, the large radius used by cards.",
      example: (
        <div className="rounded-lg border bg-muted px-md py-sm">Invoice</div>
      ),
    },
    dont: {
      note: "A pixel radius that sits off the scale.",
      example: (
        <div className="rounded-[11px] border bg-muted px-md py-sm">
          Invoice
        </div>
      ),
    },
  },
};

function RadiusSwatch({ step }: { step: Step }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState("");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setSize(getComputedStyle(el).borderTopLeftRadius);
  }, [step.token]);

  return (
    <div className="flex min-w-0 flex-col gap-sm">
      <div
        ref={ref}
        className="aspect-square w-full border bg-muted"
        style={{ borderRadius: `var(${step.token})` }}
      />
      <div className="min-w-0">
        <div className="truncate font-mono text-caption">{step.name}</div>
        <div className="truncate font-mono text-caption text-muted-foreground">
          {size}
        </div>
      </div>
    </div>
  );
}

function TokenValue({ token }: { token: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState("");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setSize(getComputedStyle(el).borderTopLeftRadius);
  }, [token]);

  return (
    <span className="inline-flex items-center gap-xs">
      <span
        ref={ref}
        aria-hidden
        className="inline-block size-4 shrink-0 border bg-muted"
        style={{ borderRadius: `var(${token})` }}
      />
      <span className="font-mono text-caption">{size}</span>
    </span>
  );
}

export function RadiusPage() {
  return (
    <>
      <PageHeader
        title="Radius"
        lead="Four steps around a single base. rounded-lg is the large radius. The others are offsets from it."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left">
          <div className="grid w-full grid-cols-2 gap-md sm:grid-cols-4">
            {steps.map((step) => (
              <RadiusSwatch key={step.name} step={step} />
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
                  <TokenValue token={step.token} />
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {step.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          <InlineCode>--radius-lg</InlineCode> is{" "}
          <InlineCode>var(--radius)</InlineCode>. The other steps offset that
          base. The scale is inherited and provisional.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {radiusRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...radiusRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
