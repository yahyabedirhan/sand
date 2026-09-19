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
import fontsRulesMarkdown from "../../../rules/fonts.md?raw";

type Face = {
  family: string;
  utility: string;
  use: string;
};

const faces: Face[] = [
  {
    family: "Geist",
    utility: "font-sans",
    use: "UI and body text. The default face.",
  },
  {
    family: "Fraunces",
    utility: "font-serif",
    use: "heading-1 and heading-2 only. Never inside a component.",
  },
  {
    family: "Geist Mono",
    utility: "font-mono",
    use: "Inline code, keyboard keys, and tabular numbers.",
  },
];

const sample = "The quick brown fox jumps over the lazy dog";

type FontRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

const fontsRules = parseRules(fontsRulesMarkdown);

const fontsRuleExamples: Record<string, FontRuleExamples> = {
  "keep-serif-on-the-top-two-titles-only": {
    do: {
      note: "The page title and the section title take Fraunces. Body copy stays Geist.",
      example: (
        <div className="flex flex-col gap-xs">
          <p className="font-serif text-heading-1">Invoices</p>
          <p className="font-serif text-heading-2">Unpaid</p>
          <p className="text-body">Refunds arrive within five business days.</p>
        </div>
      ),
    },
    dont: {
      note: "Serif on a body paragraph, or on a heading-3 inside a card, breaks the rule.",
      example: (
        <div className="flex flex-col gap-xs">
          <p className="font-serif text-heading-3">Unpaid</p>
          <p className="font-serif text-body">
            Refunds arrive within five business days.
          </p>
        </div>
      ),
    },
  },
  "use-mono-for-code-keys-and-numbers-that-align": {
    do: {
      note: "Code, a key, and a column of figures all share Geist Mono.",
      example: (
        <div className="flex flex-col gap-xs">
          <code>pnpm check</code>
          <kbd className="w-fit">⌘K</kbd>
          <div className="flex flex-col font-mono text-code tabular-nums">
            <span>1,204.50</span>
            <span>987.00</span>
          </div>
        </div>
      ),
    },
    dont: {
      note: "A heading or a sentence of UI copy in mono is the wrong face.",
      example: (
        <div className="flex flex-col gap-xs">
          <p className="font-mono text-heading-3">Invoices</p>
          <p className="font-mono text-body">
            Refunds arrive within five business days.
          </p>
        </div>
      ),
    },
  },
};

export function FontsPage() {
  return (
    <>
      <PageHeader
        title="Fonts"
        lead="Three faces, each legal in a different place. Geist is the UI and body face, Fraunces is for the top two titles, and Geist Mono is for code, keys, and numbers that line up."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left">
          <div className="flex flex-col divide-y">
            {faces.map((face) => (
              <div
                key={face.utility}
                className="grid gap-sm py-md first:pt-0 last:pb-0 sm:grid-cols-[8rem_1fr]"
              >
                <span className="text-caption text-muted-foreground">
                  {face.family}
                </span>
                <p className={`${face.utility} text-body-lg`}>{sample}</p>
              </div>
            ))}
          </div>
        </PreviewContainer>
      </Section>

      <Section id="roles" title="Roles">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Face</TableHead>
              <TableHead>Utility</TableHead>
              <TableHead>Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faces.map((face) => (
              <TableRow key={face.utility}>
                <TableCell className="font-medium">{face.family}</TableCell>
                <TableCell>
                  <InlineCode>{face.utility}</InlineCode>
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {face.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          The page layout applies Fraunces to <InlineCode>heading-1</InlineCode>{" "}
          and <InlineCode>heading-2</InlineCode>. Text roles do not set the
          face.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {fontsRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...fontsRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
