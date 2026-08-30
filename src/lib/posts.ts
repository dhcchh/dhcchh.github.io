import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/**
 * All blog posts worth showing, newest first.
 * Drafts are included while developing (`npm run dev`) and dropped from
 * production builds, so the blog stays empty until a post is ready.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

/** Rough reading time in minutes from raw Markdown body. */
export function readingTime(body: string | undefined): number {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function formatDate(date: Date): string {
  return DATE_FMT.format(date);
}
