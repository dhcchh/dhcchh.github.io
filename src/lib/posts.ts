import { getCollection, type CollectionEntry } from "astro:content";
import type { MarkdownHeading } from "astro";

export type Post = CollectionEntry<"blog">;

/**
 * Newest first. Blog previews include drafts in development; public surfaces
 * such as navigation and RSS explicitly opt out.
 */
export async function getPosts({
  includeDrafts = import.meta.env.DEV,
}: { includeDrafts?: boolean } = {}): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => {
    return includeDrafts || !data.draft;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

/** Top-level article sections; also supports older posts starting at h3. */
export function getOutline(headings: MarkdownHeading[]): MarkdownHeading[] {
  const sections = headings.filter((heading) => heading.depth > 1);
  const depth = Math.min(...sections.map((heading) => heading.depth));
  return sections.filter((heading) => heading.depth === depth);
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
  timeZone: "UTC",
});

export function formatDate(date: Date): string {
  return DATE_FMT.format(date);
}
