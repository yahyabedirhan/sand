import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/docs/theme";
import { MechanicPage, type Mechanic } from "@/pages/mechanics/mechanic-page";

const codeOnly: Mechanic = {
  name: "Vite",
  role: "The bundler and dev server.",
  owns: "Vite owns the build.",
  code: "plugins: [react()]",
  language: "typescript",
  sourcePath: "sand/vite.config.ts",
  parts: [],
  links: [],
  alternatives: [],
};

function renderMechanic(mechanic: Mechanic) {
  render(
    <ThemeProvider>
      <TooltipProvider>
        <MechanicPage mechanic={mechanic} />
      </TooltipProvider>
    </ThemeProvider>,
  );
}

test("renders code-only mechanics without an empty Preview pane", () => {
  renderMechanic(codeOnly);

  expect(
    screen.queryByRole("tab", { name: "Preview" }),
  ).not.toBeInTheDocument();
  expect(document.querySelector("code")).toHaveTextContent(
    "plugins: [react()]",
  );
  expect(screen.getByText("sand/vite.config.ts")).toBeInTheDocument();
});
