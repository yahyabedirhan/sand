import { PreviewContainer } from "@/docs/preview-container";
import { ActivityCard } from "@/pages/previews/cards/blocks/activity-card";
import { ChatCard } from "@/pages/previews/cards/blocks/chat-card";
import { DateCard } from "@/pages/previews/cards/blocks/date-card";
import { InvoicesCard } from "@/pages/previews/cards/blocks/invoices-card";
import { RevenueCard } from "@/pages/previews/cards/blocks/revenue-card";
import { SubscriptionCard } from "@/pages/previews/cards/blocks/subscription-card";
import { PreviewSwitcher } from "@/pages/previews/preview-switcher";

const blocks = [
  { key: "revenue", Component: RevenueCard },
  { key: "subscription", Component: SubscriptionCard },
  { key: "chat", Component: ChatCard },
  { key: "invoices", Component: InvoicesCard },
  { key: "activity", Component: ActivityCard },
  { key: "date", Component: DateCard },
];

export function CardsPreviewPage() {
  return (
    <div className="flex w-full flex-col gap-md px-md py-lg">
      <PreviewSwitcher />
      <PreviewContainer fullWidth padding="tight">
        <div className="w-full columns-[18rem] gap-md">
          {blocks.map(({ key, Component }) => (
            <div key={key} className="mb-md break-inside-avoid">
              <Component />
            </div>
          ))}
        </div>
      </PreviewContainer>
    </div>
  );
}
