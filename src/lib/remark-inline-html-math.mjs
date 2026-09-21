import katex from "katex";
import { visit } from "unist-util-visit";

// Imported posts contain inline TeX inside literal HTML, which remark-math
// intentionally skips. A mathematical expression cannot begin with a number
// or whitespace, so amounts such as "$10,000" remain ordinary text while
// `$x$`, `$x^2$`, and `$\\frac{a}{b}$` render through KaTeX.
const INLINE_MATH = /\$(?![\s\d])([^$\r\n]*?\S)\$/g;

export default function remarkInlineHtmlMath() {
  return (tree) => {
    visit(tree, "html", (node) => {
      node.value = node.value.replace(INLINE_MATH, (_source, tex) =>
        katex.renderToString(tex, { throwOnError: false }),
      );
    });
  };
}
