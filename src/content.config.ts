import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // the "!" pattern skips helper files like _README.md
  loader: glob({ pattern: ["**/*.md", "!**/_*"], base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    toc: z.boolean().default(true),
  }),
});

export const collections = { blog };
