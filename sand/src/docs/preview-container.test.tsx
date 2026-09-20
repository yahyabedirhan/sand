import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import { TooltipProvider } from "@/components/ui/tooltip";
import { PreviewContainer } from "@/docs/preview-container";
import { ThemeProvider } from "@/docs/theme";

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
