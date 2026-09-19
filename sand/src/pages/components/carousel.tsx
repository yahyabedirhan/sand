import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "sand/ui/carousel";

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-body font-medium">
        Brief
      </div>
    </CarouselItem>
    <CarouselItem>
      <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-body font-medium">
        Mood
      </div>
    </CarouselItem>
    <CarouselItem>
      <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-body font-medium">
        Notes
      </div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="left-2" />
  <CarouselNext className="right-2" />
</Carousel>`;

export function CarouselPage() {
  return (
    <ComponentPage
      title="Carousel"
      lead="Pages through a sequence of slides."
      demo={
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-body font-medium">
                Brief
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-body font-medium">
                Mood
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted text-body font-medium">
                Notes
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      }
      code={code}
      sections={[
        {
          id: "mechanic",
          title: "Mechanic",
          children: (
            <p className="text-body text-muted-foreground">
              Carousel uses the <InlineCode>embla-carousel-react</InlineCode>{" "}
              library for slide scrolling and keyboard arrows.
            </p>
          ),
        },
      ]}
    />
  );
}
