import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme, type Theme } from "@/docs/use-theme";
import { cn } from "cn";
import {
  IconCheck,
  IconCopy,
  IconLayoutRows,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { Highlight, type PrismTheme } from "prism-react-renderer";

// One container wraps every rendered example on the site. It is the visual
// line between documentation and example content: a card-colored box on the
// page background, with an optional tab strip of named panes and a toolbar
// that themes the container alone or shows both themes stacked.

export type PreviewPane =
  | { name: string; children: ReactNode }
  | { name: string; code: string; language?: string; sourcePath?: string };

type PaneOptions = {
  align?: "center" | "left";
  padding?: "default" | "tight" | "none";
  // Preview pages: content fills the box, no centering, no minimum height.
  fullWidth?: boolean;
};

type PreviewContainerProps = PaneOptions & {
  // The single pane, or the first pane named "Preview" when `code` is given.
  children?: ReactNode;
  // Shorthand for a Preview and a Code pane. Ignored when `panes` is given.
  // Omit `children` to render code only, with no empty Preview pane.
  code?: string;
  codeLanguage?: string;
  sourcePath?: string;
  // Named panes rendered as a tab strip. One pane renders no strip.
  panes?: [PreviewPane, ...PreviewPane[]];
  showThemeControls?: boolean;
};

export function PreviewContainer({
  children,
  code,
  codeLanguage = "tsx",
  sourcePath,
  panes: givenPanes,
  showThemeControls = true,
  ...options
}: PreviewContainerProps) {
  const panes: [PreviewPane, ...PreviewPane[]] =
    givenPanes ?? defaultPanes(children, code, codeLanguage, sourcePath);
  const { theme: pageTheme } = useTheme();
  // `null` follows the page; a value pins the rendered example to that theme.
  const [override, setOverride] = useState<Theme | null>(null);
  const [split, setSplit] = useState(false);
  const theme = override ?? pageTheme;
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <Tabs
      defaultValue={panes[0].name}
      className={cn(
        "gap-0 overflow-hidden rounded-lg border bg-card text-card-foreground",
        options.fullWidth && "w-full",
      )}
    >
      {panes.length > 1 || showThemeControls ? (
        <div className="flex items-center justify-between gap-sm border-b bg-muted/50 px-sm py-xs">
          {panes.length > 1 ? (
            <TabsList variant="line">
              {panes.map((pane) => (
                <TabsTrigger key={pane.name} value={pane.name}>
                  {pane.name}
                </TabsTrigger>
              ))}
            </TabsList>
          ) : (
            <span />
          )}
          {showThemeControls ? (
            <div className="flex items-center gap-xs">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => setOverride(next)}
                      aria-label={`Show the example in ${next}`}
                    />
                  }
                >
                  {next === "light" ? <IconSun /> : <IconMoon />}
                </TooltipTrigger>
                <TooltipContent>Show in {next}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle
                      size="sm"
                      pressed={split}
                      onPressedChange={setSplit}
                      aria-label="Show light and dark stacked"
                    />
                  }
                >
                  <IconLayoutRows />
                </TooltipTrigger>
                <TooltipContent>Show light and dark stacked</TooltipContent>
              </Tooltip>
            </div>
          ) : null}
        </div>
      ) : null}
      {panes.map((pane) => (
        <TabsContent key={pane.name} value={pane.name} className="text-body">
          {"code" in pane ? (
            <CodeBlock
              code={pane.code}
              language={pane.language ?? "tsx"}
              sourcePath={pane.sourcePath}
            />
          ) : (
            <PaneBody {...options} split={split} theme={theme}>
              {pane.children}
            </PaneBody>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}

function defaultPanes(
  children: ReactNode | undefined,
  code: string | undefined,
  codeLanguage: string,
  sourcePath: string | undefined,
): [PreviewPane, ...PreviewPane[]] {
  const preview: PreviewPane | undefined =
    children == null ? undefined : { name: "Preview", children };
  const codePane: PreviewPane | undefined =
    code === undefined
      ? undefined
      : { name: "Code", code, language: codeLanguage, sourcePath };
  if (preview && codePane) return [preview, codePane];
  if (codePane) return [codePane];
  return [preview ?? { name: "Preview", children }];
}

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefers(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return prefers;
}

function themeDuration(): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--duration-base")
    .trim();
  if (raw.endsWith("ms")) return Number.parseFloat(raw) / 1000;
  if (raw.endsWith("s")) return Number.parseFloat(raw);
  return 0.2;
}

function themeEase(kind: "enter" | "exit"): [number, number, number, number] {
  const fallback: [number, number, number, number] =
    kind === "enter" ? [0, 0, 0.2, 1] : [0.4, 0, 1, 1];
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(`--ease-${kind}`)
    .trim();
  const values = raw.match(/-?\d*\.?\d+/g)?.map(Number);
  if (values?.length === 4) {
    return [values[0], values[1], values[2], values[3]];
  }
  return fallback;
}

function PaneBody({
  align = "center",
  padding = "default",
  fullWidth = false,
  split,
  theme,
  children,
}: PaneOptions & { split: boolean; theme: Theme; children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  const [closing, setClosing] = useState(false);
  if (split && !closing) {
    setClosing(true);
  }
  const stacked = split || (!reducedMotion && closing);

  const inner = cn(
    padding === "none" ? null : padding === "tight" ? "p-md" : "p-xl",
    !fullWidth && "flex min-h-32 flex-col",
    !fullWidth && (align === "left" ? "items-stretch" : "items-center"),
    !fullWidth && "justify-center",
  );
  const other: Theme = theme === "dark" ? "light" : "dark";
  const themedPreview = (paneTheme: Theme, divider: boolean) => (
    <div
      className={cn(
        paneTheme,
        "w-full bg-card text-card-foreground",
        divider && "border-t",
        inner,
      )}
    >
      {children}
    </div>
  );
  const topPreview = themedPreview(theme, false);
  const bottomPreview = themedPreview(other, true);

  if (!stacked) {
    return (
      <div className={cn(theme, "bg-card text-card-foreground", inner)}>
        {children}
      </div>
    );
  }

  // Each preview carries its own theme class and renders as if the page were
  // that theme. The incoming bottom pane is clipped so height animation cannot
  // shift the docs layout sideways.
  return (
    <div className="flex flex-col">
      {topPreview}
      {reducedMotion ? (
        bottomPreview
      ) : (
        <AnimatePresence onExitComplete={() => setClosing(false)}>
          {split ? (
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: "auto",
                transition: {
                  duration: themeDuration(),
                  ease: themeEase("enter"),
                },
              }}
              exit={{
                height: 0,
                transition: {
                  duration: themeDuration(),
                  ease: themeEase("exit"),
                },
              }}
              className="w-full overflow-hidden"
            >
              {bottomPreview}
            </motion.div>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
}

const supportedLanguages = new Set([
  "css",
  "javascript",
  "json",
  "jsx",
  "tsx",
  "typescript",
]);

const languageNames: Record<string, string> = {
  css: "CSS",
  javascript: "JavaScript",
  json: "JSON",
  jsx: "JSX",
  tsx: "TSX",
  typescript: "TypeScript",
};

const sandCodeTheme: PrismTheme = {
  plain: { color: "#d8d2c6", backgroundColor: "#1c1a17" },
  styles: [
    {
      types: ["keyword", "important", "selector"],
      style: { color: "#c79272" },
    },
    {
      types: ["class-name", "function", "tag"],
      style: { color: "#d8a657" },
    },
    {
      types: ["string", "attr-value"],
      style: { color: "#a8b88a" },
    },
    {
      types: ["boolean", "builtin", "number"],
      style: { color: "#7da3b8" },
    },
    {
      types: ["attr-name", "property"],
      style: { color: "#b49ac5" },
    },
    {
      types: ["comment"],
      style: { color: "#7f786d", fontStyle: "italic" },
    },
  ],
};

function CodeBlock({
  code,
  language,
  sourcePath,
}: {
  code: string;
  language: string;
  sourcePath?: string;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);
  const supported = supportedLanguages.has(language);
  const label = languageNames[language] ?? language.toUpperCase();
  const lineCount = code.split("\n").length;

  useEffect(
    () => () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    },
    [],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 5_000);
    } catch {
      // Clipboard access can be denied without affecting the code preview.
    }
  };

  return (
    <div className="bg-[#1c1a17] text-[#d8d2c6]">
      {supported ? (
        <Highlight theme={sandCodeTheme} code={code} language={language}>
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className="overflow-x-auto p-md font-mono text-code leading-6">
              <code data-language={language}>
                {tokens.map((line, index) => (
                  <span key={index} {...getLineProps({ line })}>
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                    {index < tokens.length - 1 ? "\n" : null}
                  </span>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      ) : (
        <pre className="overflow-x-auto p-md font-mono text-code leading-6">
          <code data-language={language}>{code}</code>
        </pre>
      )}
      <div className="flex items-center justify-between border-t border-[#3c372f] bg-[#201e1a] px-sm py-xs">
        <div>
          <span className="font-mono text-caption text-[#d8a657]">{label}</span>
          {sourcePath ? (
            <span className="ml-sm font-mono text-caption text-[#aaa295]">
              {sourcePath}
            </span>
          ) : null}
          <span className="ml-sm text-caption text-[#7f786d]">
            {lineCount} {lineCount === 1 ? "line" : "lines"}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-[#aaa295] hover:bg-white/5 hover:text-[#eee9df]"
          onClick={copy}
          aria-label={copied ? "Copied" : "Copy code"}
        >
          {copied ? <IconCheck /> : <IconCopy />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </Button>
      </div>
    </div>
  );
}
