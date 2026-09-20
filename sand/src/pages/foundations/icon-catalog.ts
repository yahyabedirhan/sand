import type { ComponentType } from "react";
import { icons } from "@tabler/icons-react";

export type IconEntry = {
  name: string;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export function tablerIconCatalog(): IconEntry[] {
  return Object.entries(icons).map(([exportName, Icon]) => ({
    name: exportName.startsWith("Icon") ? exportName.slice(4) : exportName,
    Icon: Icon as IconEntry["Icon"],
  }));
}
