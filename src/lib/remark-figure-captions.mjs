import { visit } from "unist-util-visit";

/**
 * Wrap a standalone Markdown image (a paragraph containing only an image)
 * in a <figure>, using its alt text as a visible <figcaption>.
 *
 * `![caption text](src)` on its own line becomes:
 *   <figure><img alt="caption text" src="..." /><figcaption>caption text</figcaption></figure>
 *
 * Images with no alt text, or embedded inline alongside other content,
 * are left as plain <img> — this only applies to full-width figures.
 */
export default function remarkFigureCaptions() {
  return (tree) => {
    visit(tree, "paragraph", (node) => {
      if (node.children.length !== 1) return;
      const image = node.children[0];
      if (image.type !== "image" || !image.alt) return;

      node.data ??= {};
      node.data.hName = "figure";
      node.children = [
        image,
        {
          type: "paragraph",
          data: { hName: "figcaption" },
          children: [{ type: "text", value: image.alt }],
        },
      ];
    });
  };
}
