import { DoDont, PageHeader, Prose, Section } from "@/docs/page";

type Role = {
  name: string;
  utility: string;
  use: string;
  serif?: boolean;
};

const roles: Role[] = [
  {
    name: "heading-1",
    utility: "text-heading-1",
    use: "Page title. One per page.",
    serif: true,
  },
  {
    name: "heading-2",
    utility: "text-heading-2",
    use: "Section title.",
    serif: true,
  },
  {
    name: "heading-3",
    utility: "text-heading-3",
    use: "Subsection title, card title.",
  },
  {
    name: "heading-4",
    utility: "text-heading-4",
    use: "Group label inside a section.",
  },
  {
    name: "body-lg",
    utility: "text-body-lg",
    use: "Lead paragraph under a page title.",
  },
  { name: "body", utility: "text-body", use: "Default reading text." },
  {
    name: "body-sm",
    utility: "text-body-sm",
    use: "Secondary text, table cells, form help.",
  },
  {
    name: "caption",
    utility: "text-caption",
    use: "Labels, timestamps, hints.",
  },
  {
    name: "code",
    utility: "text-code font-mono",
    use: "Inline code, keyboard keys, tabular numbers.",
  },
];

const sample = "The quick brown fox jumps over the lazy dog";

export function TypographyPage() {
  return (
    <>
      <PageHeader
        title="Typography"
        lead="Pick a text role, not a size. Each role carries its size, line height, weight, and tracking in one utility."
      />

      <Section title="What it is">
        <Prose>
          <p>
            Text in Sand has two layers. The semantic layer is a short list of
            roles, from <code className="font-mono text-code">heading-1</code>{" "}
            down to <code className="font-mono text-code">caption</code>, each a
            single utility class. The raw layer is the numeric size scale (
            <code className="font-mono text-code">text-xs</code> through{" "}
            <code className="font-mono text-code">text-4xl</code>) and the
            separate weight, leading, and tracking utilities.
          </p>
          <p>
            Reach for a role. The raw scale is for exceptions only: a number
            that has to be larger than any heading, a one-off label that fits
            none of the roles. When you use it, you are outside the system and
            should be able to say why.
          </p>
        </Prose>
      </Section>

      <Section title="The tokens">
        <div className="flex flex-col divide-y">
          {roles.map((role) => (
            <div
              key={role.name}
              className="grid gap-sm py-md sm:grid-cols-[10rem_1fr]"
            >
              <div className="flex flex-col gap-xs">
                <code className="font-mono text-code">{role.utility}</code>
                <span className="text-caption text-muted-foreground">
                  {role.use}
                </span>
              </div>
              <p
                className={`${role.utility} ${role.serif ? "font-serif" : ""}`}
              >
                {sample}
              </p>
            </div>
          ))}
        </div>
        <p className="text-body-sm text-muted-foreground">
          The serif face on{" "}
          <code className="font-mono text-code">heading-1</code> and{" "}
          <code className="font-mono text-code">heading-2</code> comes from the
          page layout, not from the role. See Fonts.
        </p>
      </Section>

      <Section title="Rules">
        <DoDont
          rule="Use a role, not a size"
          doText="One class, and the heading matches every other heading-3 in the product."
          dontText="Four classes that approximate a heading and drift from the others over time."
          doExample={<h3 className="text-heading-3">Order summary</h3>}
          dontExample={
            <h3 className="text-xl font-semibold leading-tight tracking-tight">
              Order summary
            </h3>
          }
        />
        <DoDont
          rule="Keep one heading-1 per page"
          doText="The page title is heading-1; sections step down to heading-2."
          dontText="Two heading-1 titles compete and the page has no clear top."
          doExample={
            <div className="flex flex-col gap-xs">
              <p className="font-serif text-heading-1">Invoices</p>
              <p className="font-serif text-heading-2">Unpaid</p>
            </div>
          }
          dontExample={
            <div className="flex flex-col gap-xs">
              <p className="font-serif text-heading-1">Invoices</p>
              <p className="font-serif text-heading-1">Unpaid</p>
            </div>
          }
        />
        <DoDont
          rule="Do not shrink body text below body-sm for reading"
          doText="Secondary text is body-sm and still comfortable to read."
          dontText="Caption is for labels and hints, not for a paragraph."
          doExample={
            <p className="text-body-sm">
              Refunds are issued to the original payment method within five
              business days.
            </p>
          }
          dontExample={
            <p className="text-caption">
              Refunds are issued to the original payment method within five
              business days.
            </p>
          }
        />
        <DoDont
          rule="Use the code role for code, keys, and numbers that align"
          doText="Mono with tabular figures keeps the columns straight."
          dontText="Proportional digits wobble in a column."
          doExample={
            <div className="flex flex-col font-mono text-code tabular-nums">
              <span>1,204.50</span>
              <span>987.00</span>
              <span>12.25</span>
            </div>
          }
          dontExample={
            <div className="flex flex-col text-body">
              <span>1,204.50</span>
              <span>987.00</span>
              <span>12.25</span>
            </div>
          }
        />
      </Section>

      <Section title="Examples">
        <div className="flex flex-col gap-sm rounded-lg border bg-card p-lg text-card-foreground">
          <p className="text-caption text-muted-foreground">Settings</p>
          <h2 className="font-serif text-heading-2">Notifications</h2>
          <p className="text-body">
            Choose how you want to be told about activity on your account.
          </p>
          <h3 className="text-heading-3">Email</h3>
          <p className="text-body-sm text-muted-foreground">
            Sent to <code className="font-mono text-code">you@example.com</code>
            . Change it in Profile.
          </p>
        </div>
      </Section>
    </>
  );
}
