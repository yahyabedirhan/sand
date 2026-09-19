import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ComponentPage } from "@/docs/component-page";
import { InlineCode } from "@/docs/page";

const code = `import { useState } from "react";

import { Button } from "sand/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "sand/ui/command";

function CommandDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open command palette</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem>Colors</CommandItem>
              <CommandItem>Typography</CommandItem>
              <CommandItem>Button</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}`;

function CommandDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open command palette</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem>Colors</CommandItem>
              <CommandItem>Typography</CommandItem>
              <CommandItem>Button</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

export function CommandPage() {
  return (
    <ComponentPage
      title="Command"
      lead="Searches and runs commands from a palette."
      demo={<CommandDemo />}
      code={code}
      sections={[
        {
          id: "mechanic",
          title: "Mechanic",
          children: (
            <p className="text-body text-muted-foreground">
              Command uses the <InlineCode>cmdk</InlineCode> library for search,
              grouping, and keyboard movement.
            </p>
          ),
        },
      ]}
    />
  );
}
