// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
import rehypeKatex from "rehype-katex";
import remarkCallouts from "./src/lib/remark-callouts.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://dhcchh.github.io",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkCallouts],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
