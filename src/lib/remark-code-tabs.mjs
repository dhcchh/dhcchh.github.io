import { visit } from "unist-util-visit";

const text = (node) =>
  node.type === "text"
    ? node.value
    : (node.children ?? []).map(text).join("");

/**
 * Turns a group of fenced code blocks into progressively enhanced language tabs.
 *
 * :::code-tabs[Python | TypeScript]
 * ```python
 * # ...
 * ```
 * ```typescript
 * // ...
 * ```
 * :::
 */
export default function remarkCodeTabs() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      if (node.name !== "code-tabs") return;

      const first = node.children[0];
      const labels =
        first?.type === "paragraph" && first.data?.directiveLabel
          ? text(first).split("|").map((label) => label.trim())
          : [];

      if (labels.length) node.children.shift();

      const codeBlocks = node.children.filter((child) => child.type === "code");
      if (codeBlocks.length < 2) return;

      node.data ??= {};
      node.data.hName = "section";
      node.data.hProperties = {
        className: ["code-tabs"],
        dataCodeTabs: "",
        dataCodeTabLabels: JSON.stringify(labels),
        ariaLabel: "Code examples",
      };
    });
  };
}
