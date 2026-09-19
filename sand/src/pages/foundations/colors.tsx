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
import { PreviewContainer } from "@/docs/preview-container";
import colorsRulesMarkdown from "../../../rules/colors.md?raw";

type ColorToken = {
  name: string;
  // Token used for the Aa sample. A paired surface uses its foreground.
  sample: string;
  // Dedicated foreground token, when one exists. Shown in the Roles table.
  pair?: string;
  use: string;
  // Listed as a Token-column row. Pair-only tokens appear in Foreground.
  inTable?: boolean;
};

// Every semantic color token. Values come from the theme at render time.
const colors: ColorToken[] = [
  {
    name: "background",
    sample: "foreground",
    pair: "foreground",
    use: "Page canvas and default text",
    inTable: true,
  },
  { name: "foreground", sample: "background", use: "Default text" },
  {
    name: "card",
    sample: "card-foreground",
    pair: "card-foreground",
    use: "Raised surface on the page",
    inTable: true,
  },
  { name: "card-foreground", sample: "card", use: "Text on a card" },
  {
    name: "popover",
    sample: "popover-foreground",
    pair: "popover-foreground",
    use: "Floating surface above cards",
    inTable: true,
  },
  { name: "popover-foreground", sample: "popover", use: "Text on a popover" },
  {
    name: "primary",
    sample: "primary-foreground",
    pair: "primary-foreground",
    use: "The one action that matters",
    inTable: true,
  },
  { name: "primary-foreground", sample: "primary", use: "Text on primary" },
  {
    name: "secondary",
    sample: "secondary-foreground",
    pair: "secondary-foreground",
    use: "Supporting actions",
    inTable: true,
  },
  {
    name: "secondary-foreground",
    sample: "secondary",
    use: "Text on secondary",
  },
  {
    name: "muted",
    sample: "muted-foreground",
    pair: "muted-foreground",
    use: "Quiet backgrounds, secondary text",
    inTable: true,
  },
  { name: "muted-foreground", sample: "muted", use: "Secondary text" },
  {
    name: "accent",
    sample: "accent-foreground",
    pair: "accent-foreground",
    use: "Hover and selected states",
    inTable: true,
  },
  { name: "accent-foreground", sample: "accent", use: "Text on accent" },
  {
    name: "destructive",
    sample: "destructive-foreground",
    pair: "destructive-foreground",
    use: "Irreversible actions",
    inTable: true,
  },
  {
    name: "destructive-foreground",
    sample: "destructive",
    use: "Text on destructive",
  },
  {
    name: "border",
    sample: "foreground",
    use: "Lines",
    inTable: true,
  },
  {
    name: "input",
    sample: "foreground",
    use: "Field edges",
    inTable: true,
  },
  {
    name: "ring",
    sample: "foreground",
    use: "Focus ring",
    inTable: true,
  },
  {
    name: "chart-1",
    sample: "foreground",
    use: "First data series",
    inTable: true,
  },
  {
    name: "chart-2",
    sample: "background",
    use: "Second data series",
    inTable: true,
  },
  {
    name: "chart-3",
    sample: "foreground",
    use: "Third data series",
    inTable: true,
  },
  {
    name: "chart-4",
    sample: "foreground",
    use: "Fourth data series",
    inTable: true,
  },
  {
    name: "chart-5",
    sample: "background",
    use: "Fifth data series",
    inTable: true,
  },
  {
    name: "sidebar",
    sample: "sidebar-foreground",
    pair: "sidebar-foreground",
    use: "Navigation surface",
    inTable: true,
  },
  {
    name: "sidebar-foreground",
    sample: "sidebar",
    use: "Text on the sidebar",
  },
  {
    name: "sidebar-primary",
    sample: "sidebar-primary-foreground",
    pair: "sidebar-primary-foreground",
    use: "The active item",
    inTable: true,
  },
  {
    name: "sidebar-primary-foreground",
    sample: "sidebar-primary",
    use: "Text on sidebar-primary",
  },
  {
    name: "sidebar-accent",
    sample: "sidebar-accent-foreground",
    pair: "sidebar-accent-foreground",
    use: "Hover and selected nav items",
    inTable: true,
  },
  {
    name: "sidebar-accent-foreground",
    sample: "sidebar-accent",
    use: "Text on sidebar-accent",
  },
  {
    name: "sidebar-border",
    sample: "foreground",
    use: "Navigation edges",
    inTable: true,
  },
  {
    name: "sidebar-ring",
    sample: "foreground",
    use: "Navigation focus ring",
    inTable: true,
  },
];

const roleRows = colors.filter((token) => token.inTable);

type ColorRule = {
  title: string;
  body: string;
};

type ColorRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

function parseRules(markdown: string): ColorRule[] {
  const rules: ColorRule[] = [];
  const sections = markdown.split(/^## /m).slice(1);

  for (const section of sections) {
    const [title, ...bodyLines] = section.trim().split("\n");
    const body = bodyLines.join(" ").trim();

    if (!title || !body) {
      throw new Error("Every colors rule needs a title and a sentence.");
    }

    rules.push({ title, body });
  }

  return rules;
}

const colorRules = parseRules(colorsRulesMarkdown);

function ruleKey(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const colorRuleExamples: Record<string, ColorRuleExamples> = {
  "pair-a-surface-with-its-foreground": {
    do: {
      note: "primary with primary-foreground.",
      example: (
        <div className="rounded-md bg-primary px-md py-sm text-primary-foreground">
          Save changes
        </div>
      ),
    },
    dont: {
      note: "a foreground from another role.",
      example: (
        <div className="rounded-md bg-primary px-md py-sm text-muted-foreground">
          Save changes
        </div>
      ),
    },
  },
};

let hexCanvas: HTMLCanvasElement | undefined;
let hexCtx: CanvasRenderingContext2D | null | undefined;

function cssColorToHex(color: string): string {
  if (!color) return "";
  if (!hexCanvas) {
    hexCanvas = document.createElement("canvas");
    hexCanvas.width = 1;
    hexCanvas.height = 1;
    hexCtx = hexCanvas.getContext("2d");
  }
  if (!hexCtx) return "";
  hexCtx.clearRect(0, 0, 1, 1);
  hexCtx.fillStyle = "#000000";
  hexCtx.fillStyle = color;
  hexCtx.fillRect(0, 0, 1, 1);
  const [r, g, b] = hexCtx.getImageData(0, 0, 1, 1).data;
  return `#${[r, g, b].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}

function TokenSwatch({ name, sample }: Pick<ColorToken, "name" | "sample">) {
  const ref = useRef<HTMLDivElement>(null);
  const [hex, setHex] = useState("");
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setHex(cssColorToHex(getComputedStyle(el).backgroundColor));
  }, [name]);

  function copyHex() {
    if (!hex) return;
    void navigator.clipboard.writeText(hex).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 800);
    });
  }

  return (
    <div className="flex min-w-0 flex-col gap-xs">
      <div
        ref={ref}
        className="flex aspect-[1/0.9] min-w-0 flex-col justify-between rounded-md border p-sm"
        style={{
          backgroundColor: `var(--${name})`,
          color: `var(--${sample})`,
        }}
      >
        <span className="text-body-sm font-medium leading-none">Aa</span>
        <button
          type="button"
          className="self-start font-mono text-caption underline decoration-dotted underline-offset-2 opacity-80"
          onClick={copyHex}
          disabled={!hex}
          aria-label={hex ? `Copy ${hex}` : `Copy hex for ${name}`}
        >
          {copied ? "copied" : hex || "#"}
        </button>
      </div>
      <div className="truncate font-mono text-caption">{name}</div>
    </div>
  );
}

function TokenGrid() {
  return (
    <div className="grid grid-cols-2 gap-sm sm:grid-cols-3 lg:grid-cols-6">
      {colors.map((token) => (
        <TokenSwatch key={token.name} name={token.name} sample={token.sample} />
      ))}
    </div>
  );
}

function ThemePanel({ theme }: { theme: "light" | "dark" }) {
  return (
    <div
      className={`${theme} bg-background p-md text-foreground ${theme === "dark" ? "border-t" : ""}`}
    >
      <TokenGrid />
    </div>
  );
}

function Swatch({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      className="inline-block size-4 shrink-0 rounded-sm border"
      style={{ backgroundColor: `var(--${name})` }}
    />
  );
}

export function ColorsPage() {
  return (
    <>
      <PageHeader
        title="Colors"
        lead="Semantic tokens only. Pick a role and its foreground comes with it. Sand does not expose a raw palette."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left" padding="none">
          <div className="w-full">
            <ThemePanel theme="light" />
            <ThemePanel theme="dark" />
          </div>
        </PreviewContainer>
      </Section>

      <Section id="roles" title="Roles">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Foreground</TableHead>
              <TableHead>Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roleRows.map((token) => (
              <TableRow key={token.name}>
                <TableCell>
                  <span className="inline-flex items-center gap-xs">
                    <Swatch name={token.name} />
                    <InlineCode>{token.name}</InlineCode>
                  </span>
                </TableCell>
                <TableCell>
                  {token.pair ? (
                    <span className="inline-flex items-center gap-xs">
                      <Swatch name={token.pair} />
                      <InlineCode>{token.pair}</InlineCode>
                    </span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {token.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          chart-1 through chart-5 are the data series, in order. The sidebar
          tokens are the navigation surface and its states. Both sets are
          semantic. There is no raw palette behind them.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {colorRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...colorRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
