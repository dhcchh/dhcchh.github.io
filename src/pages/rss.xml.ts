import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { siteConfig } from "../config";
import { getPublishedPosts } from "../lib/posts";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${siteConfig.name} — ${siteConfig.blog.title}`,
    description: siteConfig.blog.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
