import { render, screen, within } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";

import { App } from "@/app";
import {
  pageLayout,
  pagePath,
  pages,
  pagesIn,
  sections,
} from "@/docs/registry";

// The seven conversation pages still without a component. They are the
// fixtures for the TODO stub until those pages are written.
const conversationTodos = [
  "attachment",
  "bubble",
  "direction",
  "marker",
  "message",
  "message-scroller",
  "questionnaire",
] as const;

function visit(path: string) {
  window.history.replaceState({}, "", path);
  return render(<App />);
}

afterEach(() => {
  window.history.replaceState({}, "", "/");
});

function sidebar() {
  const node = document.querySelector<HTMLElement>('[data-slot="sidebar"]');
  if (!node) throw new Error("sidebar not rendered");
  return node;
}

function contentMain() {
  return document.querySelector("main.max-w-5xl, main.w-full:not([data-slot])");
}

test("sidebar lists every section and page in order", () => {
  visit("/");
  const nav = sidebar();
  const labels = [
    ...nav.querySelectorAll("[data-slot=sidebar-group-label]"),
  ].map((el) => el.textContent);
  expect(labels).toEqual([...sections]);

  for (const section of sections) {
    const group = [...nav.querySelectorAll("[data-slot=sidebar-group]")].find(
      (node) =>
        node.querySelector("[data-slot=sidebar-group-label]")?.textContent ===
        section,
    );
    if (!(group instanceof HTMLElement)) {
      throw new Error(`missing sidebar group ${section}`);
    }
    const titles = within(group)
      .getAllByRole("link")
      .map((link) => link.textContent);
    expect(titles, section).toEqual(pagesIn(section).map((page) => page.title));
  }
});

test("each registered page renders under its route", () => {
  for (const page of pages) {
    const path = pagePath(page);
    const { unmount } = visit(path);
    try {
      const link = [
        ...sidebar().querySelectorAll("[data-slot=sidebar-menu-button]"),
      ].find((anchor) => anchor.getAttribute("href") === path);
      expect(link, path).toBeTruthy();
      expect(link, path).toHaveTextContent(page.title);
      if (page.component && pageLayout(page) !== "full") {
        const inset = document.querySelector("[data-slot=sidebar-inset]");
        if (!(inset instanceof HTMLElement)) {
          throw new Error(`missing inset at ${path}`);
        }
        expect(
          within(inset).getByRole("heading", { level: 1 }),
          path,
        ).toBeInTheDocument();
      }
    } finally {
      unmount();
    }
  }
});

test("a page without a component renders the TODO stub", () => {
  for (const slug of conversationTodos) {
    const page = pages.find((entry) => entry.slug === slug);
    if (!page) throw new Error(`missing registry page ${slug}`);
    expect(page.component, slug).toBeUndefined();
    const { unmount } = visit(`/components/${slug}`);
    try {
      expect(
        screen.getByRole("heading", { name: page.title }),
      ).toBeInTheDocument();
      expect(
        screen.getByText("TODO: this page is not written yet."),
      ).toBeInTheDocument();
    } finally {
      unmount();
    }
  }
});

test("preview pages render outside the standard layout", () => {
  const { unmount: unmountDocs } = visit("/foundations/typography");
  try {
    expect(contentMain()?.className).toContain("max-w-5xl");
    expect(
      screen.getByRole("navigation", { name: "On this page" }),
    ).toBeInTheDocument();
  } finally {
    unmountDocs();
  }

  for (const page of pagesIn("Previews")) {
    const { unmount } = visit(pagePath(page));
    try {
      expect(contentMain()?.className).not.toContain("max-w-5xl");
      expect(
        screen.queryByRole("navigation", { name: "On this page" }),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("navigation", { name: "Previews" }),
      ).toBeInTheDocument();
    } finally {
      unmount();
    }
  }
});
