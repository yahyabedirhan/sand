import { useLayoutEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
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
import {
  tablerIconCatalog,
  type IconEntry,
} from "@/pages/foundations/icon-catalog";
import iconsRulesMarkdown from "../../../rules/icons.md?raw";
import { IconCheck, IconInfoCircle, IconSearch } from "@tabler/icons-react";

const catalog = tablerIconCatalog();
const rowHeight = 100;

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

function columnCount(width: number) {
  if (width >= 700) return 5;
  if (width >= 640) return 4;
  return 2;
}

function IconGrid({ icons }: { icons: IconEntry[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewport, setViewport] = useState({ width: 640, height: 384 });

  useLayoutEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;
    const measure = () => {
      setViewport({
        width: node.clientWidth || 640,
        height: node.clientHeight || 384,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const columns = columnCount(viewport.width);
  const rows = Math.ceil(icons.length / columns);
  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - 2);
  const visibleRows = Math.ceil(viewport.height / rowHeight) + 4;
  const endRow = Math.min(rows, startRow + visibleRows);
  const visible = icons.slice(startRow * columns, endRow * columns);

  return (
    <div
      ref={scrollerRef}
      className="max-h-[min(36rem,70vh)] overflow-y-auto overscroll-contain"
      onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
    >
      <div className="relative" style={{ height: rows * rowHeight }}>
        <ul
          className="absolute right-0 left-0 grid gap-sm"
          style={{
            top: startRow * rowHeight,
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {visible.map(({ name, Icon }) => (
            <li
              key={name}
              aria-label={name}
              className="flex min-h-11 flex-col items-center gap-xs rounded-md px-sm py-md"
            >
              <Icon aria-hidden className="size-6" />
              <span className="text-center text-caption text-muted-foreground">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function IconGallery({ icons }: { icons: IconEntry[] }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (needle === "") return icons;
    return icons.filter((entry) => entry.name.toLowerCase().includes(needle));
  }, [icons, query]);

  return (
    <div className="flex w-full min-w-0 flex-col gap-md">
      <InputGroup>
        <InputGroupAddon>
          <IconSearch aria-hidden className="size-3.5 shrink-0 opacity-50" />
        </InputGroupAddon>
        <InputGroupInput
          id="icon-catalog-search"
          type="search"
          placeholder="Search icons"
          aria-label="Search icons"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
      </InputGroup>
      {matches.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No icons match</EmptyTitle>
            <EmptyDescription>
              Try a different name, or clear the search to browse the catalog.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <IconGrid icons={matches} />
      )}
    </div>
  );
}

export function IconsPage() {
  return (
    <>
      <PageHeader
        title="Icons"
        lead="Browse the Tabler glyphs available to Sand, sized to the control they sit in and paired with text on the same line."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left" padding="tight">
          <IconGallery icons={catalog} />
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
