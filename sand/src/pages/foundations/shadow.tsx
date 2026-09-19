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
import shadowRulesMarkdown from "../../../rules/shadow.md?raw";

type Step = {
  name: string;
  token: string;
  utility: string;
  use: string;
};

const steps: Step[] = [
  {
    name: "2xs",
    token: "--shadow-2xs",
    utility: "shadow-2xs",
    use: "Hairline lift",
  },
  {
    name: "xs",
    token: "--shadow-xs",
    utility: "shadow-xs",
    use: "Barely-there lift",
  },
  {
    name: "sm",
    token: "--shadow-sm",
    utility: "shadow-sm",
    use: "Small lift on a quiet surface",
  },
  {
    name: "shadow",
    token: "--shadow",
    utility: "shadow",
    use: "Default lift",
  },
  {
    name: "md",
    token: "--shadow-md",
    utility: "shadow-md",
    use: "Raised cards and menus",
  },
  {
    name: "lg",
    token: "--shadow-lg",
    utility: "shadow-lg",
    use: "Overlays that sit above the page",
  },
  {
    name: "xl",
    token: "--shadow-xl",
    utility: "shadow-xl",
    use: "Large overlays",
  },
  {
    name: "2xl",
    token: "--shadow-2xl",
    utility: "shadow-2xl",
    use: "The strongest lift",
  },
];

const shadowRules = parseRules(shadowRulesMarkdown);

type ShadowRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

const shadowRuleExamples: Record<string, ShadowRuleExamples> = {
  "use-a-named-shadow": {
    do: {
      note: "shadow-md, a named step that tracks the theme in light and dark.",
      example: (
        <div className="rounded-lg bg-card p-md text-card-foreground shadow-md">
          Invoice
        </div>
      ),
    },
    dont: {
      note: "A one-off shadow that will not follow the theme.",
      example: (
        <div
          className="rounded-lg bg-card p-md text-card-foreground"
          style={{ boxShadow: "0 7px 14px rgb(0 0 0 / 0.2)" }}
        >
          Invoice
        </div>
      ),
    },
  },
};

function ShadowSwatch({ step }: { step: Step }) {
  return (
    <div
      className="rounded-lg bg-card p-md text-card-foreground"
      style={{ boxShadow: `var(${step.token})` }}
    >
      <div className="truncate font-mono text-caption">{step.name}</div>
    </div>
  );
}

function TokenGrid() {
  return (
    <div className="grid grid-cols-2 gap-xl sm:grid-cols-4">
      {steps.map((step) => (
        <ShadowSwatch key={step.name} step={step} />
      ))}
    </div>
  );
}

function ThemePanel({ theme }: { theme: "light" | "dark" }) {
  return (
    <div
      className={`${theme} bg-background p-2xl text-foreground ${theme === "dark" ? "border-t" : ""}`}
    >
      <TokenGrid />
    </div>
  );
}

export function ShadowPage() {
  return (
    <>
      <PageHeader
        title="Shadow"
        lead="Inherited lift steps. Same names as Tailwind, with Sand's values. Light and dark differ."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left" padding="none">
          <div className="w-full">
            <ThemePanel theme="light" />
            <ThemePanel theme="dark" />
          </div>
        </PreviewContainer>
      </Section>

      <Section id="scale" title="Scale">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Utility</TableHead>
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
                <TableCell className="whitespace-normal text-muted-foreground">
                  {step.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          The values are the inherited tweakcn shadows, marked provisional. Some
          neighbouring steps share a value today. Reach for the name, not the
          raw box-shadow.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {shadowRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...shadowRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
