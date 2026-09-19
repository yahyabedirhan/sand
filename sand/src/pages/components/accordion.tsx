import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "sand/ui/accordion";

<Accordion defaultValue={["billing"]}>
  <AccordionItem value="billing">
    <AccordionTrigger>Billing</AccordionTrigger>
    <AccordionContent>
      Invoices are sent on the first of each month.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="members">
    <AccordionTrigger>Members</AccordionTrigger>
    <AccordionContent>
      Anyone with a workspace invite can join.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

function AccordionDemo() {
  return (
    <Accordion defaultValue={["billing"]} className="min-w-96 max-w-sm">
      <AccordionItem value="billing">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>
          Invoices are sent on the first of each month.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="members">
        <AccordionTrigger>Members</AccordionTrigger>
        <AccordionContent>
          Anyone with a workspace invite can join.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function AccordionPage() {
  return (
    <ComponentPage
      title="Accordion"
      lead="Reveals one section of content at a time."
      demo={<AccordionDemo />}
      code={code}
    />
  );
}
