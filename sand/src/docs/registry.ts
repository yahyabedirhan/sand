import type { ComponentType } from "react";

import { TypographyPage } from "@/pages/foundations/typography";
import { AnimationPage } from "@/pages/mechanics/animation";
import { ChartsPage } from "@/pages/mechanics/charts";
import { FontsPage } from "@/pages/mechanics/fonts";
import { IconsPage } from "@/pages/mechanics/icons";
import { PrimitivesPage } from "@/pages/mechanics/primitives";
import { OverviewPage } from "@/pages/overview/overview";
import { CardsPreviewPage } from "@/pages/previews/cards/cards-preview";
import { PreviewPlaceholderPage } from "@/pages/previews/preview-placeholder";

// One registry drives the sidebar, the routes, and the Overview section
// cards. Adding a page is one entry here. A page without a component is a
// TODO and renders the TODO stub until it is written.

// Sidebar groups, in sidebar order.
export const sections = [
  "Overview",
  "Foundations",
  "Components",
  "Mechanics",
  "Previews",
] as const;
export type SidebarSection = (typeof sections)[number];

export type PageStatus = "done" | "todo";

// How the shell frames a page. `docs` is the content column with the rail of
// section links; `wide` is the column without the rail; `full` is the bare
// outlet for preview pages, which take the area their content needs.
export type PageLayout = "docs" | "wide" | "full";

// A page is written when it has a component; the status is derived from that.
export type Page = {
  section: SidebarSection;
  slug: string;
  title: string;
  component?: ComponentType;
  layout?: PageLayout;
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
  section: SidebarSection,
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
    layout: "wide",
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
  {
    section: "Mechanics",
    slug: "primitives",
    title: "Primitives",
    component: PrimitivesPage,
  },
  { section: "Mechanics", slug: "icons", title: "Icons", component: IconsPage },
  {
    section: "Mechanics",
    slug: "charts",
    title: "Charts",
    component: ChartsPage,
  },
  { section: "Mechanics", slug: "fonts", title: "Fonts", component: FontsPage },
  {
    section: "Mechanics",
    slug: "animation",
    title: "Animation",
    component: AnimationPage,
  },
  {
    section: "Previews",
    slug: "cards",
    title: "Cards",
    component: CardsPreviewPage,
    layout: "full",
  },
  {
    section: "Previews",
    slug: "application",
    title: "Application",
    component: PreviewPlaceholderPage,
    layout: "full",
  },
  {
    section: "Previews",
    slug: "marketing",
    title: "Marketing",
    component: PreviewPlaceholderPage,
    layout: "full",
  },
  {
    section: "Previews",
    slug: "dashboard",
    title: "Dashboard",
    component: PreviewPlaceholderPage,
    layout: "full",
  },
];

export function pageLayout(page: Page): PageLayout {
  return page.layout ?? "docs";
}

export function pagePath(page: Page) {
  const section = page.section.toLowerCase();
  return page.slug === "" ? "/" : `/${section}/${page.slug}`;
}

export function pagesIn(section: SidebarSection) {
  return pages.filter((page) => page.section === section);
}

export function pageCount(section: SidebarSection) {
  return pagesIn(section).length;
}

// The first page of a group is where a link to the group points; an empty
// group has nowhere to point yet.
export function sectionPath(section: SidebarSection) {
  const first = pagesIn(section)[0];
  return first ? pagePath(first) : null;
}

export function pageAt(pathname: string) {
  return pages.find((page) => pagePath(page) === pathname);
}
