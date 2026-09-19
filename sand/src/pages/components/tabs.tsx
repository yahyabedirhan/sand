import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentPage } from "@/docs/component-page";

const code = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "sand/ui/tabs";

<Tabs defaultValue="general">
  <TabsList>
    <TabsTrigger value="general">General</TabsTrigger>
    <TabsTrigger value="members">Members</TabsTrigger>
  </TabsList>
  <TabsContent value="general">
    Workspace name, plan, and billing.
  </TabsContent>
  <TabsContent value="members">Invite people to this workspace.</TabsContent>
</Tabs>`;

export function TabsPage() {
  return (
    <ComponentPage
      title="Tabs"
      lead="Switches between related views in one place."
      demo={
        <Tabs defaultValue="general" className="w-full min-w-96 max-w-sm">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            Workspace name, plan, and billing.
          </TabsContent>
          <TabsContent value="members">
            Invite people to this workspace.
          </TabsContent>
        </Tabs>
      }
      code={code}
    />
  );
}
