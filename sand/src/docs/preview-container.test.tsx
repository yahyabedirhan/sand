/// <reference types="node" />
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import { TooltipProvider } from "@/components/ui/tooltip";
import { PreviewContainer } from "@/docs/preview-container";
import { ThemeProvider } from "@/docs/theme";
import { ThemeContext, type Theme } from "@/docs/use-theme";

function renderPreview(pageTheme: Theme) {
  render(
    <ThemeContext.Provider value={{ theme: pageTheme, setTheme: vi.fn() }}>
      <TooltipProvider>
        <PreviewContainer>
          <span>Example content</span>
        </PreviewContainer>
      </TooltipProvider>
    </ThemeContext.Provider>,
  );

  const content = screen.getByText("Example content");
  const body = content.parentElement;
  const chrome = body?.parentElement?.parentElement;

  expect(body).not.toBeNull();
  expect(chrome).not.toBeNull();

  return { body: body!, chrome: chrome! };
}

function renderCode(code: string, codeLanguage?: string) {
  render(
    <ThemeProvider>
      <TooltipProvider>
        <PreviewContainer code={code} codeLanguage={codeLanguage}>
          Preview
        </PreviewContainer>
      </TooltipProvider>
    </ThemeProvider>,
  );
  fireEvent.click(screen.getByRole("tab", { name: "Code" }));
  return document.querySelector("code");
}

test("renders code without a Preview pane when children are omitted", () => {
  render(
    <ThemeProvider>
      <TooltipProvider>
        <PreviewContainer code="const sand = true;" />
      </TooltipProvider>
    </ThemeProvider>,
  );

  expect(
    screen.queryByRole("tab", { name: "Preview" }),
  ).not.toBeInTheDocument();
  expect(screen.queryByRole("tab", { name: "Code" })).not.toBeInTheDocument();
  expect(document.querySelector("code")).toHaveTextContent(
    "const sand = true;",
  );
});

test("shows the source path of displayed code", () => {
  render(
    <ThemeProvider>
      <TooltipProvider>
        <PreviewContainer
          code='{ "style": "base-mira" }'
          codeLanguage="json"
          sourcePath="sand/components.json"
        />
      </TooltipProvider>
    </ThemeProvider>,
  );

  expect(screen.getByText("sand/components.json")).toBeInTheDocument();
});

test("highlights code as TSX by default", () => {
  const code = renderCode("const label = <span>Sand</span>;");

  expect(code).toHaveAttribute("data-language", "tsx");
  expect(code).toHaveTextContent("const label = <span>Sand</span>;");
  expect(code?.querySelector(".token")).toBeInTheDocument();
  expect(screen.getByText("TSX")).toBeInTheDocument();
});

test("renders unsupported languages as formatted plaintext", () => {
  const code = renderCode("plain <source>", "custom");

  expect(code).toHaveAttribute("data-language", "custom");
  expect(code).toHaveTextContent("plain <source>");
  expect(code?.querySelector(".token")).not.toBeInTheDocument();
  expect(screen.getByText("CUSTOM")).toBeInTheDocument();
});

test("confirms a copy for five seconds", async () => {
  vi.useFakeTimers();
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
  renderCode("const sand = true;");

  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));
  });
  expect(writeText).toHaveBeenCalledWith("const sand = true;");
  expect(screen.getByRole("button", { name: "Copied" })).toBeInTheDocument();

  act(() => vi.advanceTimersByTime(5_000));
  expect(screen.getByRole("button", { name: "Copy code" })).toBeInTheDocument();
  vi.useRealTimers();
});

test("describes the stacked theme comparison", async () => {
  renderPreview("light");
  const comparison = screen.getByRole("button", {
    name: "Show light and dark stacked",
  });

  fireEvent.focus(comparison);

  expect(
    await screen.findByText("Show light and dark stacked"),
  ).toHaveAttribute("data-slot", "tooltip-content");
});

test.each(["light", "dark"] satisfies Theme[])(
  "keeps %s page chrome while changing the example theme",
  (pageTheme) => {
    const { body, chrome } = renderPreview(pageTheme);
    const otherTheme = pageTheme === "light" ? "dark" : "light";

    expect(chrome).not.toHaveClass("light");
    expect(chrome).not.toHaveClass("dark");
    expect(body).toHaveClass(pageTheme);
    expect(screen.getAllByText("Example content")).toHaveLength(1);
    expect(body.parentElement).not.toHaveClass("flex-col");

    fireEvent.click(
      screen.getByRole("button", { name: `Show the example in ${otherTheme}` }),
    );

    expect(chrome).not.toHaveClass("light");
    expect(chrome).not.toHaveClass("dark");
    expect(body).toHaveClass(otherTheme);

    fireEvent.click(
      screen.getByRole("button", { name: "Show light and dark stacked" }),
    );

    expect(chrome).not.toHaveClass("light");
    expect(chrome).not.toHaveClass("dark");
    const [lightContent, darkContent] = screen.getAllByText("Example content");
    const lightPreview = lightContent.parentElement;
    const darkPreview = darkContent.parentElement;

    expect(lightPreview?.parentElement).toHaveClass("flex", "flex-col");
    expect(lightPreview).toHaveClass("light", "w-full");
    expect(darkPreview).toHaveClass("dark", "w-full", "border-t");
    expect(darkPreview).not.toHaveClass("border-l");

    fireEvent.click(
      screen.getByRole("button", { name: "Show light and dark stacked" }),
    );

    const restored = screen.getByText("Example content").parentElement;
    expect(screen.getAllByText("Example content")).toHaveLength(1);
    expect(restored).toHaveClass(otherTheme);
    expect(restored?.parentElement).not.toHaveClass("flex-col");
    expect(document.documentElement).not.toHaveClass("overflow-hidden");
    expect(document.body).not.toHaveClass("overflow-hidden");
  },
);

test("the document stylesheet reserves a stable scrollbar gutter", () => {
  const css = readFileSync(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../styles.css"),
    "utf8",
  );
  const htmlRule = css.match(/\bhtml \{([^}]+)\}/)?.[1] ?? "";
  const bodyRule = css.match(/\bbody \{([^}]+)\}/)?.[1] ?? "";

  expect(htmlRule).toContain("overflow-y-scroll");
  expect(htmlRule).toContain("scrollbar-gutter-stable");
  expect(bodyRule).toContain("scrollbar-gutter-stable");
});
