import { visit } from "unist-util-visit";

/**
 * Notion-style container directives for Markdown posts.
 *
 * Callouts:
 *   :::note[Optional title]
 *   body markdown (supports lists, code, math, ...)
 *   :::
 *
 * Also: `tip`, `warning`, `danger`.
 *
 * Collapsible toggle:
 *   :::toggle[Summary shown when collapsed]
 *   hidden markdown
 *   :::
 *
 * Requires `remark-directive` to run first (it parses the `:::` syntax).
 */

const CALLOUT_LABELS = {
  note: "Note",
  tip: "Tip",
  warning: "Warning",
  danger: "Danger",
};

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      const name = node.name;
      const isToggle = name === "toggle";
      if (!isToggle && !(name in CALLOUT_LABELS)) return;

      // Pull the directive label (`:::note[My title]`) out of the body if present.
      let labelChildren = null;
      const first = node.children[0];
      if (first?.type === "paragraph" && first.data?.directiveLabel) {
        labelChildren = first.children;
        node.children.shift();
      }

      node.data ??= {};

      if (isToggle) {
        node.data.hName = "details";
        node.data.hProperties = { className: ["md-toggle"] };
        node.children.unshift({
          type: "paragraph",
          data: { hName: "summary" },
          children: labelChildren ?? [{ type: "text", value: "Details" }],
        });
        return;
      }

      node.data.hName = "aside";
      node.data.hProperties = {
        className: ["callout", `callout-${name}`],
        role: "note",
      };
      node.children.unshift({
        type: "paragraph",
        data: { hName: "p", hProperties: { className: ["callout-title"] } },
        children: labelChildren ?? [
          { type: "text", value: CALLOUT_LABELS[name] },
        ],
      });
    });
  };
}
