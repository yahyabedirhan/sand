import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
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
import motionRulesMarkdown from "../../../rules/motion.md?raw";

type Token = {
  name: string;
  token: string;
  utility: string;
  use: string;
  kind: "duration" | "easing";
};

const tokens: Token[] = [
  {
    name: "fast",
    token: "--duration-fast",
    utility: "duration-fast",
    use: "Micro-interactions",
    kind: "duration",
  },
  {
    name: "base",
    token: "--duration-base",
    utility: "duration-base",
    use: "Enter, exit, and most motion",
    kind: "duration",
  },
  {
    name: "slow",
    token: "--duration-slow",
    utility: "duration-slow",
    use: "Large moves",
    kind: "duration",
  },
  {
    name: "standard",
    token: "--ease-standard",
    utility: "ease-standard",
    use: "Ongoing motion",
    kind: "easing",
  },
  {
    name: "enter",
    token: "--ease-enter",
    utility: "ease-enter",
    use: "Arriving",
    kind: "easing",
  },
  {
    name: "exit",
    token: "--ease-exit",
    utility: "ease-exit",
    use: "Leaving",
    kind: "easing",
  },
];

const durations = tokens.filter((token) => token.kind === "duration");

const motionRules = parseRules(motionRulesMarkdown);

type MotionRuleExamples = {
  do: RuleExample;
  dont: RuleExample;
};

const motionRuleExamples: Record<string, MotionRuleExamples> = {
  "respect-reduced-motion": {
    do: {
      note: "Enter and exit collapse to instant when the system asks.",
      example: (
        <div className="rounded-md border bg-card px-md py-sm text-card-foreground">
          Saved
        </div>
      ),
    },
    dont: {
      note: "A looping motion that ignores the preference.",
      example: (
        <div className="w-fit animate-bounce rounded-md border bg-card px-md py-sm text-card-foreground">
          Saved
        </div>
      ),
    },
  },
  "use-the-motion-tokens": {
    do: {
      note: "duration-base with ease-enter, so arrival matches every other overlay.",
      example: (
        <div
          className="rounded-md border bg-card px-md py-sm text-card-foreground"
          style={{
            transitionDuration: "var(--duration-base)",
            transitionTimingFunction: "var(--ease-enter)",
          }}
        >
          Dialog
        </div>
      ),
    },
    dont: {
      note: "A one-off time and curve that will not track the theme.",
      example: (
        <div
          className="rounded-md border bg-card px-md py-sm text-card-foreground"
          style={{
            transitionDuration: "187ms",
            transitionTimingFunction: "ease-in-out",
          }}
        >
          Dialog
        </div>
      ),
    },
  },
};

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefers(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return prefers;
}

function TokenValue({ token }: { token: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState("");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    setValue(getComputedStyle(el).getPropertyValue(token).trim());
  }, [token]);

  return (
    <span ref={ref} className="font-mono text-caption">
      {value}
    </span>
  );
}

function DurationBars({
  playing,
  reduced,
}: {
  playing: boolean;
  reduced: boolean;
}) {
  return (
    <div className="flex w-full flex-col gap-md">
      {durations.map((token) => (
        <div key={token.name} className="flex flex-col gap-xs">
          <div className="flex items-center justify-between gap-sm">
            <span className="font-mono text-caption">{token.name}</span>
            <TokenValue token={token.token} />
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full origin-left rounded-full bg-primary"
              style={{
                transform: playing ? "scaleX(1)" : "scaleX(0)",
                transitionProperty: "transform",
                transitionDuration: reduced ? "0.01ms" : `var(${token.token})`,
                transitionTimingFunction: "var(--ease-standard)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function EnterExit({ open, reduced }: { open: boolean; reduced: boolean }) {
  return (
    <div className="relative min-h-24 w-full">
      <div
        className="rounded-lg border bg-card p-md text-card-foreground"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(0.5rem)",
          pointerEvents: open ? "auto" : "none",
          transitionProperty: "opacity, transform",
          transitionDuration: reduced ? "0.01ms" : "var(--duration-base)",
          transitionTimingFunction: open
            ? "var(--ease-enter)"
            : "var(--ease-exit)",
        }}
      >
        <p className="text-heading-4">Saved</p>
        <p className="text-body-sm text-muted-foreground">
          Enter uses ease-enter. Exit uses ease-exit.
        </p>
      </div>
    </div>
  );
}

export function MotionPage() {
  const osReduced = usePrefersReducedMotion();
  const [previewReduced, setPreviewReduced] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(true);
  const reduced = osReduced || previewReduced;

  function playDurations() {
    setPlaying(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setPlaying(true));
    });
  }

  return (
    <>
      <PageHeader
        title="Motion"
        lead="Duration and easing tokens, enter and exit, reduced motion as a rule. tw-animate-css supplies the utilities. The times and curves are Sand's."
      />

      <Section id="tokens" title="Tokens">
        <PreviewContainer align="left">
          <div className="flex w-full flex-col gap-lg">
            <div className="flex flex-wrap items-center gap-sm">
              <Button size="sm" onClick={playDurations}>
                Play durations
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setOpen(!open)}
              >
                {open ? "Play exit" : "Play enter"}
              </Button>
            </div>
            <DurationBars playing={playing} reduced={reduced} />
            <EnterExit open={open} reduced={reduced} />
            {osReduced ? (
              <p className="text-body-sm text-muted-foreground">
                Your system prefers reduced motion. Enter and exit are already
                instant.
              </p>
            ) : (
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldLabel>Preview reduced motion</FieldLabel>
                  <FieldDescription>
                    Collapses this demo the same way the theme does when the
                    system asks.
                  </FieldDescription>
                </FieldContent>
                <Switch
                  checked={previewReduced}
                  onCheckedChange={setPreviewReduced}
                  aria-label="Preview reduced motion"
                />
              </Field>
            )}
          </div>
        </PreviewContainer>
      </Section>

      <Section id="scale" title="Scale">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Utility</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Use</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map((token) => (
              <TableRow key={token.token}>
                <TableCell>
                  <InlineCode>{token.token}</InlineCode>
                </TableCell>
                <TableCell>
                  <InlineCode>{token.utility}</InlineCode>
                </TableCell>
                <TableCell>
                  <TokenValue token={token.token} />
                </TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {token.use}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-body-sm text-muted-foreground">
          Overlays and menus enter and exit through tw-animate-css. A{" "}
          <InlineCode>prefers-reduced-motion</InlineCode> rule in the theme
          collapses every animation and transition duration.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <RuleList>
          {motionRules.map((rule) => (
            <Rule
              key={rule.title}
              {...rule}
              {...motionRuleExamples[ruleKey(rule.title)]}
            />
          ))}
        </RuleList>
      </Section>
    </>
  );
}
