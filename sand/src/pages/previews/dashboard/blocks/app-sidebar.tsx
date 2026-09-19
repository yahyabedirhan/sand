import type { CSSProperties } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  IconFolder,
  IconLayoutDashboard,
  IconReceipt,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

// Nested SidebarProvider with collapsible="none" keeps this nav in document
// flow. A collapsible sidebar would use fixed positioning and overlay the
// docs shell.

const nav = [
  { label: "Overview", icon: IconLayoutDashboard, active: true },
  { label: "Projects", icon: IconFolder },
  { label: "Members", icon: IconUsers },
  { label: "Billing", icon: IconReceipt },
  { label: "Settings", icon: IconSettings },
];

export function AppSidebar() {
  return (
    <SidebarProvider
      className="hidden min-h-0 w-auto shrink-0 md:flex"
      style={{ "--sidebar-width": "12rem" } as CSSProperties}
    >
      <Sidebar collapsible="none" className="border-r">
        <SidebarHeader>
          <span className="px-sm py-xs text-heading-4">Dune</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {nav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active}>
                        <Icon />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-sm px-sm py-xs">
            <Avatar size="sm">
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium">Sofia Davis</p>
              <p className="truncate text-caption text-muted-foreground">
                Owner
              </p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
