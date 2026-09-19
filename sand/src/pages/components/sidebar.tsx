import type { CSSProperties } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "sand/ui/sidebar";

<SidebarProvider>
  <Sidebar collapsible="none">
    <SidebarHeader>Dune</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>Projects</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Settings</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`;

function SidebarDemo() {
  return (
    <div className="flex h-48 min-w-96 overflow-hidden rounded-lg border bg-background text-foreground">
      <SidebarProvider
        className="h-full w-auto shrink-0"
        style={
          {
            "--sidebar-width": "10rem",
            minHeight: 0,
          } as CSSProperties
        }
      >
        <Sidebar collapsible="none" className="border-r">
          <SidebarHeader>
            <span className="px-sm py-xs text-heading-4">Dune</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Projects</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
      <div className="flex min-h-40 min-w-0 flex-1 items-center justify-center p-md text-body-sm text-muted-foreground">
        Main content
      </div>
    </div>
  );
}

export function SidebarPage() {
  return (
    <ComponentPage
      title="Sidebar"
      lead="Holds navigation beside a page's main content."
      demo={<SidebarDemo />}
      code={code}
    />
  );
}
