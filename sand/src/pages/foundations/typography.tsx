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
import { PreviewContainer } from "@/docs/preview-container";
import typographyRulesMarkdown from "../../../rules/typography.md?raw";

type Role = {
  name: string;
  utility: string;
  use: string;
  serif?: boolean;
  mono?: boolean;
};

const roles: Role[] = [
  {
    name: "heading-1",
    utility: "text-heading-1",
    use: "Page title. One per page.",
    serif: true,
  },
  {
    name: "heading-2",
    utility: "text-heading-2",
    use: "Section title.",
    serif: true,
  },
  {
    name: "heading-3",
    utility: "text-heading-3",
    use: "Subsection title, card title.",
  },
  {
    name: "heading-4",
    utility: "text-heading-4",
    use: "Group label inside a section.",
  },
  {
    name: "body-lg",
    utility: "text-body-lg",
    use: "Lead paragraph under a page title.",
  },
  { name: "body", utility: "text-body", use: "Default reading text." },
  {
    name: "body-sm",
    utility: "text-body-sm",
    use: "Secondary text, table cells, form help.",
  },
  {
    name: "caption",
    utility: "text-caption",
    use: "Labels, timestamps, hints.",
  },
  {
    name: "code",
    utility: "text-code",
    mono: true,
    use: "Inline code, keyboard keys, tabular numbers.",
  },
];

const sample = "The quick brown fox jumps over the lazy dog";

type TypographyRule = {
  title: string;
  body: string;
};

type TypographyRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

function parseRules(markdown: string): TypographyRule[] {
  const rules: TypographyRule[] = [];
  const sections = markdown.split(/^## /m).slice(1);

  for (const section of sections) {
    const [title, ...bodyLines] = section.trim().split("\n");
    const body = bodyLines.join(" ").trim();

    if (!title || !body) {
      throw new Error("Every typography rule needs a title and a sentence.");
    }

    rules.push({ title, body });
  }

  return rules;
}

const typographyRules = parseRules(typographyRulesMarkdown);

function ruleKey(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const typographyRuleExamples: Record<string, TypographyRuleExamples> = {
  "use-a-role-not-a-size": {
    do: {
      note: "One class, and the heading matches every other heading-3 in the product.",
      example: <h3 className="text-heading-3">Order summary</h3>,
    },
    dont: {
      note: "Four classes that approximate a heading and drift from the others over time.",
      example: (
        <h3 className="text-xl font-semibold leading-tight tracking-tight">
          Order summary
        </h3>
      ),
    },
  },
  "keep-one-heading-1-per-page": {
    do: {
      note: "One title at the top; the section below it steps down.",
      example: (
        <div className="flex flex-col gap-xs">
          <p className="font-serif text-heading-1">Invoices</p>
          <p className="font-serif text-heading-2">Unpaid</p>
        </div>
      ),
    },
    dont: {
      note: "Two heading-1 titles compete and the page has no clear top.",
      example: (
        <div className="flex flex-col gap-xs">
          <p className="font-serif text-heading-1">Invoices</p>
          <p className="font-serif text-heading-1">Unpaid</p>
        </div>
      ),
    },
  },
  "do-not-shrink-body-text-below-body-sm-for-reading": {
    do: {
      note: "Secondary text is body-sm and still comfortable to read.",
      example: (
        <p className="text-body-sm">
          Refunds are issued to the original payment method within five business
          days.
        </p>
      ),
    },
    dont: {
      note: "A paragraph at caption size strains to read.",
      example: (
        <p className="text-caption">
          Refunds are issued to the original payment method within five business
          days.
        </p>
      ),
    },
  },
  "use-the-code-role-for-code-keys-and-numbers-that-align": {
    do: {
      note: "Every digit takes the same width, so the decimal points line up.",
      example: (
        <div className="flex flex-col font-mono text-code tabular-nums">
          <span>1,204.50</span>
          <span>987.00</span>
          <span>12.25</span>
        </div>
      ),
    },
    dont: {
      note: "Proportional digits wobble in a column.",
      example: (
        <div className="flex flex-col text-body">
          <span>1,204.50</span>
          <span>987.00</span>
          <span>12.25</span>
        </div>
      ),
    },
  },
};

function roleClass(role: Role) {
  return [role.utility, role.serif && "font-serif", role.mono && "font-mono"]
    .filter(Boolean)
    .join(" ");
}

export function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        lead="Pick a text role, not a size. Each role carries its size, line height, weight, and tracking in one utility; the raw text-* scale stays for exceptions."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left">
          <div className="flex flex-col divide-y">
            {roles.map((role) => (
              <div
                key={role.name}
                className="grid gap-sm py-md first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr]"
              >
                <span className="text-caption text-muted-foreground">
                  {role.name}
                </span>
                <p className={roleClass(role)}>{sample}</p>
              </div>
            ))}
          </div>
        </PreviewContainer>
      </Section>

      <Section id="roles" title="Roles">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role</TableHead>
              <TableHead>Utility</TableHead>
              <TableHead>Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.name}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>
                  <InlineCode>{role.utility}</InlineCode>
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {role.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          The serif face on <InlineCode>heading-1</InlineCode> and{" "}
          <InlineCode>heading-2</InlineCode> comes from the page layout, not
          from the role. See Fonts.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {typographyRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...typographyRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
