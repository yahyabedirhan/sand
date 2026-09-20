import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { expect, test } from "vitest";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/docs/theme";
import { FontsPage } from "@/pages/mechanics/fonts";
import { ReactPage } from "@/pages/mechanics/react";
import { ShadcnPage } from "@/pages/mechanics/shadcn";
import { VitePage } from "@/pages/mechanics/vite";

function renderPage(page: ReactNode) {
  render(
    <ThemeProvider>
      <TooltipProvider>{page}</TooltipProvider>
    </ThemeProvider>,
  );
}

test("fonts page shows wiring and usage code without a type showcase", () => {
  renderPage(<FontsPage />);

  expect(
    screen.queryByRole("tab", { name: "Preview" }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: "Publish" }),
  ).not.toBeInTheDocument();
  const code = document.querySelector("code");
  expect(code).toHaveTextContent('@import "@fontsource/geist/400.css"');
  expect(code).toHaveTextContent('--font-sans: "Geist"');
  expect(code).toHaveTextContent("font-sans");
  expect(screen.getByText("sand/src/styles.css")).toBeInTheDocument();
});

test("react page shows representative component code without a showcase", () => {
  renderPage(<ReactPage />);

  expect(
    screen.queryByRole("tab", { name: "Preview" }),
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Weekly digest")).not.toBeInTheDocument();
  expect(document.querySelector("code")).toHaveTextContent("useState");
});

test("vite page shows build config without a showcase", () => {
  renderPage(<VitePage />);

  expect(
    screen.queryByRole("tab", { name: "Preview" }),
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Workspace")).not.toBeInTheDocument();
  const code = document.querySelector("code");
  expect(code).toHaveTextContent("@vitejs/plugin-react");
  expect(code).toHaveTextContent("alias");
  expect(screen.getByText("sand/vite.config.ts")).toBeInTheDocument();
});

test("shadcn code pane identifies the configuration path", () => {
  renderPage(<ShadcnPage />);

  expect(screen.getByRole("tab", { name: "Preview" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Code" }));
  expect(screen.getByText("sand/components.json")).toBeInTheDocument();
  expect(document.querySelector("code")).toHaveTextContent("base-mira");
});
