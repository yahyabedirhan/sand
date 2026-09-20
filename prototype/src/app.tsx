import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router";

import { Button } from "sand/ui/button";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import {
  prototypes,
  prototypeTitle,
  variantName,
  type PrototypeEntry,
} from "./prototype";

export function App() {
  return (
    <BrowserRouter>
      <GalleryShell />
    </BrowserRouter>
  );
}

function GalleryShell() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-svh bg-background text-foreground md:grid md:grid-cols-[16rem_1fr]">
      <aside className="border-b bg-sidebar p-sm md:sticky md:top-0 md:h-svh md:border-r md:border-b-0">
        <Link to="/" className="block px-sm py-xs font-serif text-heading-3">
          Sand prototypes
        </Link>
        <p className="px-sm pb-md text-caption text-muted-foreground">
          Local design studies
        </p>
        <nav aria-label="Prototypes">
          <ul className="flex gap-xs overflow-x-auto md:flex-col">
            {prototypes.map((prototype) => {
              const href = `/prototypes/${prototype.slug}`;
              return (
                <li key={prototype.slug} className="shrink-0 md:shrink">
                  <Link
                    to={href}
                    className={`flex min-h-8 items-center justify-between gap-sm rounded-md px-sm text-body-sm hover:bg-sidebar-accent ${
                      pathname === href ? "bg-sidebar-accent font-medium" : ""
                    }`}
                  >
                    <span>{prototypeTitle(prototype)}</span>
                    {prototype.status && (
                      <span className="text-caption capitalize text-muted-foreground">
                        {prototype.status}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <main className="min-w-0 px-md py-xl lg:px-xl">
        <Routes>
          <Route index element={<GalleryIndex />} />
          <Route path="/prototypes/:slug" element={<PrototypePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function GalleryIndex() {
  return (
    <div className="mx-auto max-w-4xl">
      <header className="max-w-2xl">
        <h1 className="font-serif text-heading-1">Prototype gallery</h1>
        <p className="mt-sm text-body-lg text-muted-foreground">
          Persistent design alternatives built against Sand.
        </p>
      </header>
      <div className="mt-xl grid gap-md sm:grid-cols-2">
        {prototypes.map((prototype) => (
          <Link
            key={prototype.slug}
            to={`/prototypes/${prototype.slug}`}
            className="rounded-lg border bg-card p-lg text-card-foreground hover:bg-muted/50"
          >
            <div className="flex items-start justify-between gap-md">
              <h2 className="font-serif text-heading-3">
                {prototypeTitle(prototype)}
              </h2>
              {prototype.status && (
                <span className="rounded-full border px-xs py-0.5 text-caption capitalize text-muted-foreground">
                  {prototype.status}
                </span>
              )}
            </div>
            {prototype.description && (
              <p className="mt-sm text-body text-muted-foreground">
                {prototype.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PrototypePage() {
  const { slug } = useParams();
  const prototype = prototypes.find((entry) => entry.slug === slug);
  if (!prototype) return <Navigate to="/" replace />;
  return <PrototypeStudy prototype={prototype} />;
}

function PrototypeStudy({ prototype }: { prototype: PrototypeEntry }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("variant");
  const fallback =
    prototype.variants.find(({ key }) => key === prototype.selected) ??
    prototype.variants[0];
  const current =
    prototype.variants.find(({ key }) => key === requested) ?? fallback;

  const setVariant = (key: string) => {
    setSearchParams({ variant: key }, { replace: true });
  };

  const cycle = (direction: -1 | 1) => {
    const index = prototype.variants.findIndex(
      ({ key }) => key === current.key,
    );
    const next =
      prototype.variants[
        (index + direction + prototype.variants.length) %
          prototype.variants.length
      ];
    setVariant(next.key);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.matches("input, textarea, [contenteditable]")
      ) {
        return;
      }
      if (event.key === "ArrowLeft") cycle(-1);
      if (event.key === "ArrowRight") cycle(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const Variant = current.component;
  const selected = current.key === prototype.selected;

  return (
    <div className="mx-auto max-w-5xl pb-20">
      <header className="mb-xl max-w-2xl">
        <div className="flex items-center gap-sm text-caption capitalize text-muted-foreground">
          <span>{prototype.status ?? "prototype"}</span>
          {prototype.decidedAt && <span>{prototype.decidedAt}</span>}
        </div>
        <h1 className="mt-xs font-serif text-heading-1">
          {prototypeTitle(prototype)}
        </h1>
        {prototype.description && (
          <p className="mt-sm text-body-lg text-muted-foreground">
            {prototype.description}
          </p>
        )}
      </header>

      <Variant />

      {prototype.variants.length > 1 && (
        <div className="fixed bottom-md left-1/2 z-50 flex -translate-x-1/2 items-center gap-xs rounded-full border border-white/15 bg-neutral-950 p-xs text-white shadow-xl">
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white hover:bg-white/10 hover:text-white"
            onClick={() => cycle(-1)}
            aria-label="Previous variant"
          >
            <IconArrowLeft />
          </Button>
          <span className="flex min-w-40 items-center justify-center gap-xs text-body-sm">
            {selected && <IconCheck className="size-4" aria-label="Selected" />}
            {current.key} · {variantName(current)}
          </span>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white hover:bg-white/10 hover:text-white"
            onClick={() => cycle(1)}
            aria-label="Next variant"
          >
            <IconArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
}
