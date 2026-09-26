import GithubSlugger from "github-slugger";
import { SKIP, visit } from "unist-util-visit";

/**
 * KaTeX output carries each expression three times (MathML, its TeX annotation,
 * and the visible HTML), and Astro builds heading ids and contents-list text
 * from all of it, so `$g(t)$` became "g(t)g(t)g(t)". For headings with math,
 * set the id and a label from each expression's TeX, read once. Labels are
 * keyed by id in `remarkPluginFrontmatter.headingLabels`; the post route swaps
 * them in. Runs after rehype-katex.
 */
export default function rehypeHeadingMath() {
  return (tree, file) => {
    const slugger = new GithubSlugger();
    const headingLabels = {};

    visit(tree, "element", (heading) => {
      if (!/^h[1-6]$/.test(heading.tagName) || heading.properties.id) return;
      let hasMath = false;
      let label = "";
      visit(heading, (node) => {
        if (node.type === "text") label += node.value;
        if (!node.properties?.className?.includes("katex")) return;
        visit(node, { tagName: "annotation" }, (annotation) => {
          label += annotation.children.map((child) => child.value).join("");
        });
        hasMath = true;
        return SKIP;
      });
      if (!hasMath) return;
      heading.properties.id = slugger.slug(label.trim()).replace(/-$/, "");
      headingLabels[heading.properties.id] = label.trim();
      return SKIP;
    });

    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.headingLabels = headingLabels;
  };
}
