import { readFileSync } from "node:fs";
import { imageSize } from "image-size";
import { visit } from "unist-util-visit";

const PUBLIC_DIR = new URL("../../public/", import.meta.url);

/** Intrinsic size of an image served from /public, if it can be read. */
const publicImageSize = (src) => {
  if (typeof src !== "string" || !/^\/(?!\/)/.test(src)) return undefined;
  try {
    return imageSize(readFileSync(new URL(src.slice(1), PUBLIC_DIR)));
  } catch {
    return undefined;
  }
};

const textContent = (node) =>
  node.type === "text"
    ? node.value
    : (node.children ?? []).map(textContent).join("");

/** Apply Markdown defaults at build time, including when JavaScript is off. */
export default function rehypeContent() {
  return (tree) => {
    visit(tree, "element", (node, _index, parent) => {
      const classes = node.properties.className ?? [];
      if (
        ["pre", "table"].includes(node.tagName) ||
        classes.includes("katex-display")
      ) {
        node.properties.tabIndex ??= 0;
      }
      if (
        node.tagName === "input" &&
        node.properties.type === "checkbox" &&
        parent
      ) {
        node.properties.ariaLabel ??= textContent(parent).trim() || "Task";
      }
      if (node.tagName === "img") {
        if (node.properties.width == null && node.properties.height == null) {
          const size = publicImageSize(node.properties.src);
          node.properties.width = size?.width;
          node.properties.height = size?.height;
        }
        // A lazy image with no reserved size loads after an anchor jump (such
        // as a contents link) and pushes the target out of view.
        if (node.properties.width && node.properties.height) {
          node.properties.loading ??= "lazy";
        }
        node.properties.decoding ??= "async";
      }
    });
  };
}
