import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ComponentPage } from "@/docs/component-page";
import { IconFolder } from "@tabler/icons-react";

const code = `import { Button } from "sand/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "sand/ui/item";
import { IconFolder } from "@tabler/icons-react";

<Item variant="outline">
  <ItemMedia variant="icon">
    <IconFolder />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Dune Studio</ItemTitle>
    <ItemDescription>12 members, last edited today.</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost">Open</Button>
  </ItemActions>
</Item>`;

export function ItemPage() {
  return (
    <ComponentPage
      title="Item"
      lead="Lays out a title, description, and actions in a row."
      demo={
        <Item variant="outline" className="min-w-96 max-w-sm">
          <ItemMedia variant="icon">
            <IconFolder />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Dune Studio</ItemTitle>
            <ItemDescription>12 members, last edited today.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost">Open</Button>
          </ItemActions>
        </Item>
      }
      code={code}
    />
  );
}
