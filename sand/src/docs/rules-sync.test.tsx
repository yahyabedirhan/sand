import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { App } from "@/app";
import { parseRules } from "@/docs/parse-rules";
import { pageAt, pagePath } from "@/docs/registry";

const catalogFiles = new Set(["index.md", "system.md"]);

const topicMarkdown = import.meta.glob("../../rules/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function topicFiles() {
  return Object.entries(topicMarkdown)
    .map(([file, markdown]) => {
      const name = file.split("/").pop() ?? file;
      return { name, markdown };
    })
    .filter(({ name }) => !catalogFiles.has(name))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function visit(pathName: string) {
  window.history.replaceState({}, "", pathName);
  return render(<App />);
}

function titlesOnPage() {
  const section = document.getElementById("rules");
  if (!section) return [];
  return [...section.querySelectorAll("li")].map((item) => {
    const text = item.textContent ?? "";
    const dot = text.indexOf(".");
    return (dot === -1 ? text : text.slice(0, dot)).trim();
  });
}

test("every rule title in a topic file appears on that topic's page, and vice versa", () => {
  const files = topicFiles();
  expect(files.length).toBeGreaterThan(0);

  for (const { name, markdown } of files) {
    const slug = name.replace(/\.md$/, "");
    const route = `/foundations/${slug}`;
    const page = pageAt(route);
    if (!page) throw new Error(`missing page for ${name}`);
    expect(pagePath(page), name).toBe(route);

    const fileTitles = parseRules(markdown).map((rule) => rule.title);

    const { unmount } = visit(route);
    try {
      expect(
        screen.getByRole("heading", { level: 2, name: "Rules" }),
        name,
      ).toBeInTheDocument();
      expect(titlesOnPage(), name).toEqual(fileTitles);
    } finally {
      unmount();
    }
  }
});
