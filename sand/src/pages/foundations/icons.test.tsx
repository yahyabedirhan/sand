import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/docs/theme";
import { tablerIconCatalog } from "@/pages/foundations/icon-catalog";
import { IconGallery, IconsPage } from "@/pages/foundations/icons";

const catalog = [
  {
    name: "Search",
    Icon: () => <svg />,
  },
  {
    name: "AlertOctagon",
    Icon: () => <svg />,
  },
  {
    name: "Inbox",
    Icon: () => <svg />,
  },
];

function renderGallery() {
  return render(
    <ThemeProvider>
      <TooltipProvider>
        <IconGallery icons={catalog} />
      </TooltipProvider>
    </ThemeProvider>,
  );
}

test("gallery lists every catalog icon by name", () => {
  renderGallery();

  expect(screen.getByRole("listitem", { name: "Search" })).toBeInTheDocument();
  expect(
    screen.getByRole("listitem", { name: "AlertOctagon" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: "Inbox" })).toBeInTheDocument();
});

test("search filters icons by name without case sensitivity", () => {
  renderGallery();

  fireEvent.change(screen.getByRole("searchbox", { name: "Search icons" }), {
    target: { value: "octa" },
  });

  expect(
    screen.getByRole("listitem", { name: "AlertOctagon" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("listitem", { name: "Search" }),
  ).not.toBeInTheDocument();
  expect(
    screen.queryByRole("listitem", { name: "Inbox" }),
  ).not.toBeInTheDocument();
});

test("clearing search restores the catalog", () => {
  renderGallery();
  const search = screen.getByRole("searchbox", { name: "Search icons" });

  fireEvent.change(search, { target: { value: "inbox" } });
  expect(
    screen.queryByRole("listitem", { name: "Search" }),
  ).not.toBeInTheDocument();

  fireEvent.change(search, { target: { value: "" } });

  expect(screen.getByRole("listitem", { name: "Search" })).toBeInTheDocument();
  expect(
    screen.getByRole("listitem", { name: "AlertOctagon" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: "Inbox" })).toBeInTheDocument();
});

test("a query with no matches shows an empty state", () => {
  renderGallery();

  fireEvent.change(screen.getByRole("searchbox", { name: "Search icons" }), {
    target: { value: "not-an-icon" },
  });

  expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  expect(screen.getByText("No icons match")).toBeInTheDocument();
});

test("catalog lists Tabler glyphs without a hand-maintained set", () => {
  const names = tablerIconCatalog().map((entry) => entry.name);

  expect(names).toContain("Inbox");
  expect(names).toContain("Search");
  expect(names).toContain("AlertOctagon");
  expect(names.length).toBeGreaterThan(5000);
});

test("Icons page gallery searches the Tabler catalog", () => {
  render(
    <ThemeProvider>
      <TooltipProvider>
        <IconsPage />
      </TooltipProvider>
    </ThemeProvider>,
  );

  fireEvent.change(screen.getByRole("searchbox", { name: "Search icons" }), {
    target: { value: "Inbox" },
  });

  expect(screen.getByRole("listitem", { name: "Inbox" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Sizes" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Pairing" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Rules" })).toBeInTheDocument();
});
