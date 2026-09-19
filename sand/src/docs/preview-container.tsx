import { useState, type ReactNode } from "react";

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
import { IconColumns2, IconMoon, IconSun } from "@tabler/icons-react";

// One container wraps every rendered example on the site. It is the visual
// line between documentation and example content: a card-colored box on the
// page background, with an optional tab strip of named panes and a toolbar
// that themes the container alone or shows both themes side by side.

export type PreviewPane =
  { name: string; children: ReactNode } | { name: string; code: string };

type PaneOptions = {
  align?: "center" | "left";
  padding?: "default" | "tight";
  // Preview pages: content fills the box, no centering, no minimum height.
  fullWidth?: boolean;
};

type PreviewContainerProps = PaneOptions & {
  // The single pane, or the first pane named "Preview" when `code` is given.
  children?: ReactNode;
  // Shorthand for a Preview and a Code pane. Ignored when `panes` is given.
  code?: string;
  // Named panes rendered as a tab strip. One pane renders no strip.
  panes?: [PreviewPane, ...PreviewPane[]];
};

export function PreviewContainer({
  children,
  code,
  panes: givenPanes,
  ...options
}: PreviewContainerProps) {
  const panes: [PreviewPane, ...PreviewPane[]] = givenPanes ?? [
    { name: "Preview", children },
    ...(code === undefined ? [] : [{ name: "Code", code }]),
  ];
  const { theme: pageTheme } = useTheme();
  // `null` follows the page; a value pins the container to that theme.
  const [override, setOverride] = useState<Theme | null>(null);
  const [split, setSplit] = useState(false);
  const theme = override ?? pageTheme;
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <Tabs
      defaultValue={panes[0].name}
      className={cn(
        // Split halves scope themselves; the root then follows the page so
        // neither half sits inside the opposite scope.
        split ? null : theme,
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
            <CodeBlock code={pane.code} />
          ) : (
            <PaneBody {...options} split={split}>
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
  children,
}: PaneOptions & { split: boolean; children: ReactNode }) {
  const inner = cn(
    padding === "tight" ? "p-md" : "p-xl",
    !fullWidth && "flex min-h-32 flex-col",
    !fullWidth && (align === "left" ? "items-stretch" : "items-center"),
    !fullWidth && "justify-center",
  );
  if (!split) return <div className={inner}>{children}</div>;
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

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto bg-muted p-md font-mono text-code text-foreground">
      <code>{code}</code>
    </pre>
  );
}
