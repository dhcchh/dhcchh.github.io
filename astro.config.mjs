// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import rehypeKatex from "rehype-katex";
import remarkCallouts from "./src/lib/remark-callouts.mjs";
import rehypeContent from "./src/lib/rehype-content.mjs";
import remarkInlineHtmlMath from "./src/lib/remark-inline-html-math.mjs";
import remarkCodeTabs from "./src/lib/remark-code-tabs.mjs";
import remarkFigureCaptions from "./src/lib/remark-figure-captions.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://dhcchh.github.io",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkInlineHtmlMath,
      remarkDirective,
      remarkCodeTabs,
      remarkCallouts,
      remarkFigureCaptions,
    ],
    rehypePlugins: [rehypeKatex, rehypeContent],
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-high-contrast" },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
