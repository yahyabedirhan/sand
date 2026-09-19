import type { CSSProperties } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// The Overview sample: a workspace settings screen built only from Sand
// components, with hard-coded data. It should read as a piece of a
// production app, not a component list.

const nav = [
  { label: "Workspace", active: true },
  { label: "Members", count: 12 },
  { label: "Billing" },
  { label: "Integrations" },
  { label: "Security" },
];

const plans = [
  { value: "free", label: "Free" },
  { value: "pro-monthly", label: "Pro, monthly" },
  { value: "pro-yearly", label: "Pro, yearly" },
];

const invoices = [
  { id: "INV-0421", date: "Sep 1", amount: "$48.00" },
  { id: "INV-0397", date: "Aug 1", amount: "$48.00" },
];

export function SampleScreen() {
  return (
    <div className="flex w-full overflow-hidden rounded-lg border bg-background text-foreground">
      <SidebarProvider
        className="min-h-0 w-auto shrink-0"
        style={{ "--sidebar-width": "10rem" } as CSSProperties}
      >
        <Sidebar collapsible="none" className="border-r">
          <SidebarHeader>
            <span className="px-sm py-xs text-heading-4">Dune</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {nav.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton isActive={item.active}>
                        {item.label}
                      </SidebarMenuButton>
                      {item.count !== undefined && (
                        <SidebarMenuBadge>{item.count}</SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <span className="px-sm text-caption text-muted-foreground">
              v0.0.1
            </span>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>

      <div className="flex min-w-0 flex-1 flex-col gap-md p-md">
        <header className="flex items-center gap-sm">
          <Avatar size="sm">
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="text-heading-4">Workspace settings</h3>
            <p className="text-caption text-muted-foreground">
              Owned by Sofia Davis
            </p>
          </div>
          <Button variant="ghost">Discard</Button>
          <Button>Save changes</Button>
        </header>

        <Tabs defaultValue="general">
          <TabsList variant="line">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="domains">Domains</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
        </Tabs>

        <FieldGroup className="grid gap-md sm:grid-cols-2">
          <Field>
            <FieldLabel>Workspace name</FieldLabel>
            <Input defaultValue="Dune Studio" />
          </Field>
          <Field>
            <FieldLabel>Plan</FieldLabel>
            <Select items={plans} defaultValue="pro-monthly">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {plans.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>

        <FieldGroup className="gap-sm">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel>Allow members to invite</FieldLabel>
              <FieldDescription>
                Anyone in the workspace can send invites.
              </FieldDescription>
            </FieldContent>
            <Switch defaultChecked />
          </Field>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel>Weekly digest</FieldLabel>
              <FieldDescription>
                A summary every Monday morning.
              </FieldDescription>
            </FieldContent>
            <Switch />
          </Field>
        </FieldGroup>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-mono">{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell className="font-mono tabular-nums">
                  {invoice.amount}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">Paid</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
