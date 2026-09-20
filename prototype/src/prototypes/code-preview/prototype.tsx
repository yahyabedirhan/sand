import { useState } from "react";

import { Button } from "sand/ui/button";
import { IconCheck, IconCode, IconCopy } from "@tabler/icons-react";
import { definePrototype } from "../../prototype";

const source = `import { Button } from "sand/ui/button";

type PublishActionProps = {
  draft?: boolean;
};

export function PublishAction({ draft = false }: PublishActionProps) {
  return (
    <Button variant={draft ? "ghost" : "default"}>
      {draft ? "Save draft" : "Publish"}
    </Button>
  );
}`;

export const prototype = definePrototype({
  title: "Code preview controls",
  description:
    "Three ways to frame dark, syntax-highlighted source and its controls.",
  status: "decided",
  selected: "C",
  decidedAt: "2026-09-20",
  variants: [
    { key: "A", name: "Workbench bar", component: WorkbenchBar },
    { key: "B", name: "Language rail", component: LanguageRail },
    { key: "C", name: "Quiet footer", component: QuietFooter },
  ],
});

function WorkbenchBar() {
  return (
    <Frame>
      <figure className="overflow-hidden rounded-lg border border-[#3c372f] bg-[#1c1a17] shadow-sm">
        <figcaption className="flex items-center justify-between border-b border-[#3c372f] bg-[#25221d] px-sm py-xs">
          <div className="flex items-center gap-xs text-[#aaa295]">
            <IconCode className="size-4" />
            <span className="font-mono text-caption uppercase tracking-wider">
              TSX
            </span>
          </div>
          <CopyButton treatment="icon" />
        </figcaption>
        <HighlightedSource />
      </figure>
    </Frame>
  );
}

function LanguageRail() {
  return (
    <Frame>
      <figure className="grid overflow-hidden rounded-lg border border-[#3c372f] bg-[#1c1a17] shadow-sm sm:grid-cols-[4.5rem_1fr]">
        <figcaption className="flex items-center justify-between border-b border-[#3c372f] bg-[#25221d] px-sm py-xs sm:flex-col sm:justify-start sm:gap-md sm:border-r sm:border-b-0 sm:py-md">
          <span className="rounded-full border border-[#5b5347] px-xs py-0.5 font-mono text-caption text-[#d8a657]">
            TSX
          </span>
          <CopyButton treatment="icon" />
        </figcaption>
        <HighlightedSource />
      </figure>
    </Frame>
  );
}

function QuietFooter() {
  return (
    <Frame>
      <figure className="overflow-hidden rounded-lg border border-[#3c372f] bg-[#1c1a17] shadow-sm">
        <HighlightedSource />
        <figcaption className="flex items-center justify-between border-t border-[#3c372f] bg-[#201e1a] px-sm py-xs">
          <div>
            <span className="font-mono text-caption text-[#d8a657]">TSX</span>
            <span className="ml-sm text-caption text-[#7f786d]">13 lines</span>
          </div>
          <CopyButton treatment="label" />
        </figcaption>
      </figure>
    </Frame>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-3xl">{children}</div>;
}

function CopyButton({ treatment }: { treatment: "icon" | "label" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(source);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 5_000);
  };

  return (
    <Button
      variant="ghost"
      size={treatment === "icon" ? "icon-sm" : "sm"}
      className="text-[#aaa295] hover:bg-white/5 hover:text-[#eee9df]"
      onClick={copy}
      aria-label={copied ? "Copied" : "Copy code"}
    >
      {copied ? <IconCheck /> : <IconCopy />}
      {treatment === "label" && <span>{copied ? "Copied" : "Copy"}</span>}
    </Button>
  );
}

function HighlightedSource() {
  return (
    <pre className="overflow-x-auto p-md font-mono text-code leading-6 text-[#d8d2c6]">
      <code>
        <span className="text-[#c79272]">import</span>
        {` { `}
        <span className="text-[#d8a657]">Button</span>
        {` } `}
        <span className="text-[#c79272]">from</span>
        {` `}
        <span className="text-[#a8b88a]">&quot;sand/ui/button&quot;</span>
        {`;\n\n`}
        <span className="text-[#c79272]">type</span>
        {` `}
        <span className="text-[#d8a657]">PublishActionProps</span>
        {` = {\n  draft`}
        <span className="text-[#7da3b8]">?</span>
        {`: `}
        <span className="text-[#7da3b8]">boolean</span>
        {`;\n};\n\n`}
        <span className="text-[#c79272]">export function</span>
        {` `}
        <span className="text-[#d8a657]">PublishAction</span>
        {`({ draft = `}
        <span className="text-[#7da3b8]">false</span>
        {` }: `}
        <span className="text-[#d8a657]">PublishActionProps</span>
        {`) {\n  `}
        <span className="text-[#c79272]">return</span>
        {` (\n    `}
        <span className="text-[#d8a657]">&lt;Button</span>
        {` `}
        <span className="text-[#b49ac5]">variant</span>
        {`={draft ? `}
        <span className="text-[#a8b88a]">&quot;ghost&quot;</span>
        {` : `}
        <span className="text-[#a8b88a]">&quot;default&quot;</span>
        {`}`}
        <span className="text-[#d8a657]">&gt;</span>
        {`\n      {draft ? `}
        <span className="text-[#a8b88a]">&quot;Save draft&quot;</span>
        {` : `}
        <span className="text-[#a8b88a]">&quot;Publish&quot;</span>
        {`}\n    `}
        <span className="text-[#d8a657]">&lt;/Button&gt;</span>
        {`\n  );\n}`}
      </code>
    </pre>
  );
}
