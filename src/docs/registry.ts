import type { ComponentType } from "react";

import { ModulesPage } from "@/pages/overview/modules";
import { TypographyPage } from "@/pages/foundations/typography";
import { OverviewPage } from "@/pages/overview/overview";

// One registry drives the sidebar, the routes, and the Overview status list.
// Adding a page is one entry here. A page without a component is a TODO and
// renders the TODO stub until it is written.

export const sections = [
  "Overview",
  "Foundations",
  "Components",
  "Guidelines",
] as const;
export type Section = (typeof sections)[number];

export type PageStatus = "done" | "todo";

// A page is written when it has a component; the status is derived from that.
export type Page = {
  section: Section;
  slug: string;
  title: string;
  component?: ComponentType;
};

const componentSlugs = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "attachment",
  "avatar",
  "badge",
  "breadcrumb",
  "bubble",
  "button",
  "button-group",
  "calendar",
  "card",
  "carousel",
  "chart",
  "checkbox",
  "collapsible",
  "combobox",
  "command",
  "context-menu",
  "dialog",
  "direction",
  "drawer",
  "dropdown-menu",
  "empty",
  "field",
  "hover-card",
  "input",
  "input-group",
  "input-otp",
  "item",
  "kbd",
  "label",
  "marker",
  "menubar",
  "message",
  "message-scroller",
  "native-select",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "questionnaire",
  "radio-group",
  "resizable",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "sidebar",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
];

const titleOverrides: Record<string, string> = {
  "input-otp": "Input OTP",
  kbd: "Kbd",
};

function titleFromSlug(slug: string) {
  return (
    titleOverrides[slug] ??
    slug
      .split("-")
      .map((word) => word[0]!.toUpperCase() + word.slice(1))
      .join(" ")
  );
}

function todo(
  section: Section,
  slug: string,
  title = titleFromSlug(slug),
): Page {
  return { section, slug, title };
}

export function pageStatus(page: Page): PageStatus {
  return page.component ? "done" : "todo";
}

export const pages: Page[] = [
  {
    section: "Overview",
    slug: "",
    title: "Overview",
    component: OverviewPage,
  },
  {
    section: "Overview",
    slug: "modules",
    title: "Modules",
    component: ModulesPage,
  },
  todo("Foundations", "colors"),
  {
    section: "Foundations",
    slug: "typography",
    title: "Typography",
    component: TypographyPage,
  },
  todo("Foundations", "fonts"),
  todo("Foundations", "spacing"),
  todo("Foundations", "radius"),
  todo("Foundations", "shadow"),
  todo("Foundations", "motion"),
  todo("Foundations", "icons"),
  ...componentSlugs.map((slug) => todo("Components", slug)),
  todo("Guidelines", "color-pairing"),
  todo("Guidelines", "opacity"),
];

export function pagePath(page: Page) {
  const section = page.section.toLowerCase();
  return page.slug === "" ? "/" : `/${section}/${page.slug}`;
}

export function pagesIn(section: Section) {
  return pages.filter((page) => page.section === section);
}
