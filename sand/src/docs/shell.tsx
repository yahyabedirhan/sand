import { Link, Outlet, useLocation } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PageLayout } from "@/docs/page";
import {
  pageAt,
  pageLayout,
  pagePath,
  pagesIn,
  pageStatus,
  sections,
} from "@/docs/registry";
import { ThemeToggle } from "@/docs/theme-toggle";

// The docs shell is Sand's first consumer: sidebar, layout, and toggle are
// built from Sand components and tokens only.
export function Shell() {
  const { pathname } = useLocation();
  const page = pageAt(pathname);
  const layout = page ? pageLayout(page) : "docs";
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link to="/" className="px-sm py-xs font-serif text-heading-3">
            Sand
          </Link>
        </SidebarHeader>
        <SidebarContent>
          {sections.map((section) => (
            <SidebarGroup key={section}>
              <SidebarGroupLabel>{section}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {pagesIn(section).map((page) => {
                    const path = pagePath(page);
                    return (
                      <SidebarMenuItem key={path}>
                        <SidebarMenuButton
                          isActive={pathname === path}
                          render={<Link to={path} />}
                        >
                          {page.title}
                        </SidebarMenuButton>
                        {pageStatus(page) === "todo" && (
                          <SidebarMenuBadge>TODO</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <ThemeToggle />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-sm border-b px-md">
          <SidebarTrigger />
        </header>
        {layout === "full" ? (
          <main className="w-full">
            <Outlet />
          </main>
        ) : (
          <main className="mx-auto w-full max-w-5xl px-md py-xl">
            {layout === "docs" ? (
              <PageLayout>
                <Outlet />
              </PageLayout>
            ) : (
              <Outlet />
            )}
          </main>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
