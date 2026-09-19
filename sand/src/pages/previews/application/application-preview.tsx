import { ActivityFeed } from "@/pages/previews/application/blocks/activity-feed";
import { MarketChart } from "@/pages/previews/application/blocks/market-chart";
import { Messaging } from "@/pages/previews/application/blocks/messaging";
import { Ticker } from "@/pages/previews/application/blocks/ticker";
import { Transactions } from "@/pages/previews/application/blocks/transactions";
import { PreviewPage } from "@/pages/previews/preview-page";

export function ApplicationPreviewPage() {
  return (
    <PreviewPage>
      <div className="@container w-full">
        <div className="flex flex-col gap-md">
          <Ticker />
          <div className="grid gap-md @3xl:grid-cols-2">
            <MarketChart />
            <Transactions />
            <ActivityFeed />
            <Messaging />
          </div>
        </div>
      </div>
    </PreviewPage>
  );
}
