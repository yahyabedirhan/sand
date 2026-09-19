import type { ComponentType } from "react";

import { ColorsPage } from "@/pages/foundations/colors";
import { FontsPage } from "@/pages/foundations/fonts";
import { IconsPage } from "@/pages/foundations/icons";
import { TypographyPage } from "@/pages/foundations/typography";
import { AccordionPage } from "@/pages/components/accordion";
import { AlertPage } from "@/pages/components/alert";
import { AspectRatioPage } from "@/pages/components/aspect-ratio";
import { AvatarPage } from "@/pages/components/avatar";
import { BadgePage } from "@/pages/components/badge";
import { BreadcrumbPage } from "@/pages/components/breadcrumb";
import { ButtonPage } from "@/pages/components/button";
import { ButtonGroupPage } from "@/pages/components/button-group";
import { CalendarPage } from "@/pages/components/calendar";
import { CardPage } from "@/pages/components/card";
import { CarouselPage } from "@/pages/components/carousel";
import { ChartPage } from "@/pages/components/chart";
import { CheckboxPage } from "@/pages/components/checkbox";
import { CollapsiblePage } from "@/pages/components/collapsible";
import { EmptyPage } from "@/pages/components/empty";
import { FieldPage } from "@/pages/components/field";
import { InputPage } from "@/pages/components/input";
import { InputGroupPage } from "@/pages/components/input-group";
import { InputOTPPage } from "@/pages/components/input-otp";
import { ItemPage } from "@/pages/components/item";
import { KbdPage } from "@/pages/components/kbd";
import { LabelPage } from "@/pages/components/label";
import { NativeSelectPage } from "@/pages/components/native-select";
import { PaginationPage } from "@/pages/components/pagination";
import { ProgressPage } from "@/pages/components/progress";
import { RadioGroupPage } from "@/pages/components/radio-group";
import { ResizablePage } from "@/pages/components/resizable";
import { ScrollAreaPage } from "@/pages/components/scroll-area";
import { SelectPage } from "@/pages/components/select";
import { SeparatorPage } from "@/pages/components/separator";
import { SidebarPage } from "@/pages/components/sidebar";
import { SkeletonPage } from "@/pages/components/skeleton";
import { SliderPage } from "@/pages/components/slider";
import { SpinnerPage } from "@/pages/components/spinner";
import { SwitchPage } from "@/pages/components/switch";
import { TablePage } from "@/pages/components/table";
import { TabsPage } from "@/pages/components/tabs";
import { TextareaPage } from "@/pages/components/textarea";
import { ToastPage } from "@/pages/components/toast";
import { TogglePage } from "@/pages/components/toggle";
import { ToggleGroupPage } from "@/pages/components/toggle-group";
import { AnimationPage } from "@/pages/mechanics/animation";
import { ChartsPage } from "@/pages/mechanics/charts";
import { FontsPage as FontsMechanicPage } from "@/pages/mechanics/fonts";
import { IconsPage as IconsMechanicPage } from "@/pages/mechanics/icons";
import { PrimitivesPage } from "@/pages/mechanics/primitives";
import { OverviewPage } from "@/pages/overview/overview";
import { ApplicationPreviewPage } from "@/pages/previews/application/application-preview";
import { CardsPreviewPage } from "@/pages/previews/cards/cards-preview";
import { MarketingPreviewPage } from "@/pages/previews/marketing/marketing-preview";
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
] as const;
type ComponentSlug = (typeof componentSlugs)[number];

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

const writtenComponentPages: Partial<Record<ComponentSlug, ComponentType>> = {
  accordion: AccordionPage,
  alert: AlertPage,
  "aspect-ratio": AspectRatioPage,
  avatar: AvatarPage,
  badge: BadgePage,
  breadcrumb: BreadcrumbPage,
  button: ButtonPage,
  "button-group": ButtonGroupPage,
  calendar: CalendarPage,
  card: CardPage,
  carousel: CarouselPage,
  chart: ChartPage,
  checkbox: CheckboxPage,
  collapsible: CollapsiblePage,
  empty: EmptyPage,
  field: FieldPage,
  input: InputPage,
  "input-group": InputGroupPage,
  "input-otp": InputOTPPage,
  item: ItemPage,
  kbd: KbdPage,
  label: LabelPage,
  "native-select": NativeSelectPage,
  pagination: PaginationPage,
  progress: ProgressPage,
  "radio-group": RadioGroupPage,
  resizable: ResizablePage,
  "scroll-area": ScrollAreaPage,
  select: SelectPage,
  separator: SeparatorPage,
  sidebar: SidebarPage,
  skeleton: SkeletonPage,
  slider: SliderPage,
  spinner: SpinnerPage,
  switch: SwitchPage,
  table: TablePage,
  tabs: TabsPage,
  textarea: TextareaPage,
  toast: ToastPage,
  toggle: TogglePage,
  "toggle-group": ToggleGroupPage,
};

function componentPage(slug: ComponentSlug): Page {
  const page = todo("Components", slug);
  const component = writtenComponentPages[slug];
  return component ? { ...page, component } : page;
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
  {
    section: "Foundations",
    slug: "colors",
    title: "Colors",
    component: ColorsPage,
  },
  {
    section: "Foundations",
    slug: "typography",
    title: "Typography",
    component: TypographyPage,
  },
  {
    section: "Foundations",
    slug: "fonts",
    title: "Fonts",
    component: FontsPage,
  },
  todo("Foundations", "spacing"),
  todo("Foundations", "radius"),
  todo("Foundations", "shadow"),
  todo("Foundations", "motion"),
  {
    section: "Foundations",
    slug: "icons",
    title: "Icons",
    component: IconsPage,
  },
  ...componentSlugs.map(componentPage),
  {
    section: "Mechanics",
    slug: "primitives",
    title: "Primitives",
    component: PrimitivesPage,
  },
  {
    section: "Mechanics",
    slug: "icons",
    title: "Icons",
    component: IconsMechanicPage,
  },
  {
    section: "Mechanics",
    slug: "charts",
    title: "Charts",
    component: ChartsPage,
  },
  {
    section: "Mechanics",
    slug: "fonts",
    title: "Fonts",
    component: FontsMechanicPage,
  },
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
    component: ApplicationPreviewPage,
    layout: "full",
  },
  {
    section: "Previews",
    slug: "marketing",
    title: "Marketing",
    component: MarketingPreviewPage,
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
