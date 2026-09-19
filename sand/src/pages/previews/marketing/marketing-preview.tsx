import { MarketingFeatures } from "@/pages/previews/marketing/blocks/features";
import { MarketingFooter } from "@/pages/previews/marketing/blocks/footer";
import { MarketingHero } from "@/pages/previews/marketing/blocks/hero";
import { MarketingPricing } from "@/pages/previews/marketing/blocks/pricing";
import { MarketingTestimonials } from "@/pages/previews/marketing/blocks/testimonials";
import { PreviewPage } from "@/pages/previews/preview-page";

export function MarketingPreviewPage() {
  return (
    <PreviewPage>
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        <MarketingHero />
        <MarketingFeatures />
        <MarketingPricing />
        <MarketingTestimonials />
        <MarketingFooter />
      </div>
    </PreviewPage>
  );
}
