import type { ComponentType } from "react";

export type PrototypeStatus = "exploring" | "decided" | "superseded";

export type PrototypeVariant = {
  key: string;
  name?: string;
  component: ComponentType;
};

export type PrototypeDefinition = {
  title?: string;
  description?: string;
  status?: PrototypeStatus;
  selected?: string;
  decidedAt?: string;
  variants: readonly PrototypeVariant[];
};

type PrototypeModule = { prototype: PrototypeDefinition };

const modules = import.meta.glob<PrototypeModule>(
  "./prototypes/*/prototype.tsx",
  { eager: true },
);

const statusOrder: Record<PrototypeStatus, number> = {
  exploring: 0,
  decided: 1,
  superseded: 2,
};

export const prototypes = Object.entries(modules)
  .map(([path, module]) => ({
    slug: path.split("/").at(-2)!,
    ...module.prototype,
  }))
  .sort((a, b) => {
    const status =
      statusOrder[a.status ?? "exploring"] -
      statusOrder[b.status ?? "exploring"];
    if (status !== 0) return status;
    return (b.decidedAt ?? "").localeCompare(a.decidedAt ?? "");
  });

export type PrototypeEntry = (typeof prototypes)[number];

export function definePrototype<const T extends PrototypeDefinition>(
  definition: T,
) {
  return definition;
}

export function prototypeTitle(prototype: PrototypeEntry) {
  return prototype.title ?? humanize(prototype.slug);
}

export function variantName(variant: PrototypeVariant) {
  return variant.name ?? variant.key;
}

function humanize(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
