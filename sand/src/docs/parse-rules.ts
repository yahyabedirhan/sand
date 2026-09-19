export type ParsedRule = {
  title: string;
  body: string;
};

export function parseRules(markdown: string): ParsedRule[] {
  const rules: ParsedRule[] = [];
  const sections = markdown.split(/^## /m).slice(1);

  for (const section of sections) {
    const [title, ...bodyLines] = section.trim().split("\n");
    const body = bodyLines.join(" ").trim();

    if (!title || !body) {
      throw new Error("Every rule needs a title and a sentence.");
    }

    rules.push({ title, body });
  }

  return rules;
}

export function ruleKey(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
