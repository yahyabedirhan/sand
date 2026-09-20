import { useEffect, useRef, useState, type ReactNode } from "react";

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
  IconColumns2,
  IconCopy,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { Highlight, type PrismTheme } from "prism-react-renderer";

// One container wraps every rendered example on the site. It is the visual
// line between documentation and example content: a card-colored box on the
// page background, with an optional tab strip of named panes and a toolbar
// that themes the container alone or shows both themes side by side.

export type PreviewPane =
  | { name: string; children: ReactNode }
  | { name: string; code: string; language?: string };

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
  code?: string;
  codeLanguage?: string;
  // Named panes rendered as a tab strip. One pane renders no strip.
  panes?: [PreviewPane, ...PreviewPane[]];
};

export function PreviewContainer({
  children,
  code,
  codeLanguage = "tsx",
  panes: givenPanes,
  ...options
}: PreviewContainerProps) {
  const panes: [PreviewPane, ...PreviewPane[]] = givenPanes ?? [
    { name: "Preview", children },
    ...(code === undefined
      ? []
      : [{ name: "Code", code, language: codeLanguage }]),
  ];
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
        <div className="flex items-center gap-xs">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setOverride(next)}
                  disabled={split}
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
                  aria-label="Show light and dark side by side"
                />
              }
            >
              <IconColumns2 />
            </TooltipTrigger>
            <TooltipContent>Light and dark side by side</TooltipContent>
          </Tooltip>
        </div>
      </div>
      {panes.map((pane) => (
        <TabsContent key={pane.name} value={pane.name} className="text-body">
          {"code" in pane ? (
            <CodeBlock code={pane.code} language={pane.language ?? "tsx"} />
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

function PaneBody({
  align = "center",
  padding = "default",
  fullWidth = false,
  split,
  theme,
  children,
}: PaneOptions & { split: boolean; theme: Theme; children: ReactNode }) {
  const inner = cn(
    padding === "none" ? null : padding === "tight" ? "p-md" : "p-xl",
    !fullWidth && "flex min-h-32 flex-col",
    !fullWidth && (align === "left" ? "items-stretch" : "items-center"),
    !fullWidth && "justify-center",
  );
  if (!split)
    return (
      <div className={cn(theme, "bg-card text-card-foreground", inner)}>
        {children}
      </div>
    );
  // Each half carries its own theme class and renders as if the page were
  // that theme.
  return (
    <div className="grid grid-cols-2">
      <div className={cn("light bg-card text-card-foreground", inner)}>
        {children}
      </div>
      <div className={cn("dark border-l bg-card text-card-foreground", inner)}>
        {children}
      </div>
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

function CodeBlock({ code, language }: { code: string; language: string }) {
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
