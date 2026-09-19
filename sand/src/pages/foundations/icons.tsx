import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
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
import iconsRulesMarkdown from "../../../rules/icons.md?raw";
import {
  IconAlertOctagon,
  IconAlertTriangle,
  IconArrowDown,
  IconArrowRight,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCircleCheck,
  IconColumns2,
  IconComponents,
  IconDots,
  IconInfoCircle,
  IconLayoutGrid,
  IconLayoutSidebar,
  IconLoader,
  IconMinus,
  IconMoon,
  IconPalette,
  IconSearch,
  IconSelector,
  IconSettings,
  IconSun,
  IconX,
} from "@tabler/icons-react";

type IconEntry = {
  name: string;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

// TODO: keep these lists in sync when a component or the docs shell adds a glyph.
const componentIcons: IconEntry[] = [
  { name: "AlertOctagon", Icon: IconAlertOctagon },
  { name: "AlertTriangle", Icon: IconAlertTriangle },
  { name: "ArrowDown", Icon: IconArrowDown },
  { name: "Check", Icon: IconCheck },
  { name: "ChevronDown", Icon: IconChevronDown },
  { name: "ChevronLeft", Icon: IconChevronLeft },
  { name: "ChevronRight", Icon: IconChevronRight },
  { name: "ChevronUp", Icon: IconChevronUp },
  { name: "CircleCheck", Icon: IconCircleCheck },
  { name: "Dots", Icon: IconDots },
  { name: "InfoCircle", Icon: IconInfoCircle },
  { name: "LayoutSidebar", Icon: IconLayoutSidebar },
  { name: "Loader", Icon: IconLoader },
  { name: "Minus", Icon: IconMinus },
  { name: "Search", Icon: IconSearch },
  { name: "Selector", Icon: IconSelector },
  { name: "X", Icon: IconX },
];

const docsShellIcons: IconEntry[] = [
  { name: "Columns2", Icon: IconColumns2 },
  { name: "Moon", Icon: IconMoon },
  { name: "Sun", Icon: IconSun },
];

const overviewIcons: IconEntry[] = [
  { name: "ArrowRight", Icon: IconArrowRight },
  { name: "Components", Icon: IconComponents },
  { name: "LayoutGrid", Icon: IconLayoutGrid },
  { name: "Palette", Icon: IconPalette },
  { name: "Settings", Icon: IconSettings },
];

type SizeStep = {
  name: string;
  utility: string;
  use: string;
};

const sizes: SizeStep[] = [
  {
    name: "2.5",
    utility: "size-2.5",
    use: "Extra-small buttons.",
  },
  {
    name: "3",
    utility: "size-3",
    use: "Small buttons and keyboard key glyphs.",
  },
  {
    name: "3.5",
    utility: "size-3.5",
    use: "Default buttons and compact controls.",
  },
  {
    name: "4",
    utility: "size-4",
    use: "The fallback when a parent does not set a size. Large buttons and empty states.",
  },
  {
    name: "5",
    utility: "size-5",
    use: "Section cards on Overview.",
  },
];

type IconRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

const iconsRules = parseRules(iconsRulesMarkdown);

const iconsRuleExamples: Record<string, IconRuleExamples> = {
  "size-the-icon-with-its-control": {
    do: {
      note: "The icon matches the default button size.",
      example: (
        <Button>
          <IconSearch />
          Search
        </Button>
      ),
    },
    dont: {
      note: "A size-8 icon overflows a compact control.",
      example: (
        <Button size="sm">
          <IconSearch className="size-8" />
          Search
        </Button>
      ),
    },
  },
  "pair-an-icon-with-text-on-the-same-line": {
    do: {
      note: "The check sits at the body size, on the same line as the label.",
      example: (
        <span className="inline-flex items-center gap-xs text-body">
          <IconCheck aria-hidden className="size-4" />
          Saved
        </span>
      ),
    },
    dont: {
      note: "An oversized icon next to caption text pulls the line apart.",
      example: (
        <span className="inline-flex items-center gap-xs text-caption">
          <IconCheck aria-hidden className="size-8" />
          Saved
        </span>
      ),
    },
  },
};

function IconGrid({ icons }: { icons: IconEntry[] }) {
  return (
    <ul className="grid grid-cols-2 gap-sm sm:grid-cols-4">
      {icons.map(({ name, Icon }) => (
        <li
          key={name}
          className="flex flex-col items-center gap-xs rounded-md px-sm py-md"
        >
          <Icon aria-hidden className="size-6" />
          <span className="text-caption text-muted-foreground">{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function IconsPage() {
  return (
    <>
      <PageHeader
        title="Icons"
        lead="The Tabler glyphs Sand uses today, sized to the control they sit in and paired with text on the same line."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left">
          <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <p className="text-caption font-medium text-muted-foreground">
                Components
              </p>
              <IconGrid icons={componentIcons} />
            </div>
            <div className="flex flex-col gap-sm">
              <p className="text-caption font-medium text-muted-foreground">
                Docs shell
              </p>
              <IconGrid icons={docsShellIcons} />
            </div>
            <div className="flex flex-col gap-sm">
              <p className="text-caption font-medium text-muted-foreground">
                Overview
              </p>
              <IconGrid icons={overviewIcons} />
            </div>
          </div>
        </PreviewContainer>
      </Section>

      <Section id="sizes" title="Sizes">
        <PreviewContainer align="left">
          <div className="flex flex-wrap items-end gap-lg">
            {sizes.map((size) => (
              <div
                key={size.name}
                className="flex flex-col items-center gap-xs"
              >
                <IconCheck aria-hidden className={size.utility} />
                <span className="text-caption text-muted-foreground">
                  {size.utility}
                </span>
              </div>
            ))}
          </div>
        </PreviewContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Size</TableHead>
              <TableHead>Utility</TableHead>
              <TableHead>Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sizes.map((size) => (
              <TableRow key={size.name}>
                <TableCell className="font-medium">{size.name}</TableCell>
                <TableCell>
                  <InlineCode>{size.utility}</InlineCode>
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {size.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section id="pairing" title="Pairing">
        <PreviewContainer align="left">
          <div className="flex flex-col gap-md">
            <Button className="w-fit">
              <IconSearch />
              Search
            </Button>
            <span className="inline-flex items-center gap-xs text-body">
              <IconCheck aria-hidden className="size-4" />
              Saved just now
            </span>
            <span className="inline-flex items-center gap-xs text-caption text-muted-foreground">
              <IconInfoCircle aria-hidden className="size-3.5" />
              Refunds arrive within five business days.
            </span>
          </div>
        </PreviewContainer>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {iconsRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...iconsRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
