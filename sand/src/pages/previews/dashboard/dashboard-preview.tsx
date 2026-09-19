import { AppSidebar } from "@/pages/previews/dashboard/blocks/app-sidebar";
import { OverviewStats } from "@/pages/previews/dashboard/blocks/overview-stats";
import { ProjectsTable } from "@/pages/previews/dashboard/blocks/projects-table";
import { SiteHeader } from "@/pages/previews/dashboard/blocks/site-header";
import { StudioActivityChart } from "@/pages/previews/dashboard/blocks/studio-activity-chart";
import { PreviewPage } from "@/pages/previews/preview-page";

export function DashboardPreviewPage() {
  return (
    <PreviewPage>
      <div className="flex w-full min-w-0 overflow-x-auto rounded-lg border bg-background text-foreground">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <SiteHeader />
          <div className="flex flex-col gap-md p-md">
            <OverviewStats />
            <StudioActivityChart />
            <ProjectsTable />
          </div>
        </div>
      </div>
    </PreviewPage>
  );
}
