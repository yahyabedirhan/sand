import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { PageHeader, Prose, Section } from "@/docs/page";
import { pagePath, pages, pagesIn, sections } from "@/docs/registry";

export function OverviewPage() {
  const done = pages.filter((page) => page.status === "done").length;
  return (
    <>
      <PageHeader
        title="Sand"
        lead="An example design system. Semantic tokens first, raw values for exceptions, one entry point per third-party library."
      />

      <Section title="Principles">
        <Prose>
          <p>
            Reach for the semantic layer. Colors, text styles, and spacing have
            named roles; the raw scales beneath them exist for exceptions and
            are documented as such.
          </p>
          <p>
            Every rule comes with a rendered example. A do/don't pair shows the
            rule holding and breaking, in both themes.
          </p>
          <p>
            Libraries are modules. Primitives, icons, charts, fonts, and
            animation each enter the system through one folder, and the linter
            keeps it that way.
          </p>
        </Prose>
      </Section>

      <Section title="Start here">
        <ol className="list-decimal flex flex-col gap-xs pl-lg text-body">
          <li>
            <Link className="underline" to="/foundations/colors">
              Colors
            </Link>
            , for the pairing rule that keeps text legible on every surface.
          </li>
          <li>
            <Link className="underline" to="/foundations/typography">
              Typography
            </Link>
            , for the text roles to use instead of sizes.
          </li>
          <li>
            <Link className="underline" to="/components/button">
              Button
            </Link>
            , the component most pages start from.
          </li>
        </ol>
      </Section>

      <Section title="Status">
        <p className="text-body-sm text-muted-foreground">
          {done} of {pages.length} pages written. The rest render a TODO stub.
        </p>
        {sections.map((section) => (
          <div key={section} className="flex flex-col gap-xs">
            <h3 className="text-heading-4">{section}</h3>
            <ul className="flex flex-wrap gap-xs">
              {pagesIn(section).map((page) => (
                <li key={pagePath(page)}>
                  <Badge
                    variant={page.status === "done" ? "default" : "outline"}
                    render={<Link to={pagePath(page)} />}
                  >
                    {page.title}
                    {page.status === "todo" && " · TODO"}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>
    </>
  );
}
