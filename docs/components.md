# Extending the portfolio

The site uses Astro components and static HTML. There is no client framework or
router. Small client-side scripts handle theme selection, the intentionally
retained hero title typewriter effect, code copying and language tabs, the
article image lightbox, the footer year, and the initial mobile contents state. The hero title is present in server-rendered HTML, and typing is
skipped for reduced-motion preferences. Native `<details>` handles expandable
content.

## Content and presentation

- `src/config.ts`: identity, intro, socials, blog labels, experience, projects,
  accent color, and the default theme. Empty sections disappear.
- `src/content/blog/*.md`: articles. See the [authoring guide](../src/content/blog/_README.md).
- `src/pages/`: separate Home (`/`), Experience (`/experience`), Projects (`/projects`),
  and Blog (`/blog`) routes. Navigation uses ordinary links with a visible current-page
  state.
- `src/styles/global.css`: palette, typography, containers, and shared controls.
  Tailwind is imported here for its base reset and `sr-only`. Tailwind emits a
  utility for any matching word in the source, so don't name classes after
  utilities (`contents`, `hidden`, `table`, ...); `.container` overrides the
  utility's breakpoint max-widths on purpose.
- `src/styles/prose.css`: Markdown only, loaded by `ArticleContent`.

## Component boundaries

| Component | Responsibility / extension point |
| --- | --- |
| `BaseLayout` | Document, metadata, fonts, and theme resolution before paint |
| `SiteLayout` | Shared header, main landmark, skip link, and footer |
| `ui/Section` | Section heading and responsive layout; `heading="h1"` for page titles, default `h2`, content and `intro` slots |
| `ui/TagList` | Skills or topics; accepts `items` and an accessible `label` |
| `ui/SocialLinks` | Configured profile links, rendered once from a data map |
| `ExperienceItem` | One role with native expand/collapse; accepts `experience`, `expanded`, and `heading` |
| `ProjectCard` | One project, supporting details, technologies, and links |
| `blog/PostCard` | Reusable article preview on the writing index; `heading` is `h2` or `h3` |
| `blog/PostMeta` | Dates, reading time, and an explicit draft label |
| `blog/PostHeader` | Article title, summary, author, metadata, and tags |
| `blog/TableOfContents` | Links from Astro-generated heading slugs, never manually maintained |
| `blog/ArticleContent` | Markdown styles, syntax themes, math, code tabs, copy controls, and image lightbox |
| `blog/PostNavigation` | Adjacent articles, falling back to the writing index |

Presentational components take typed props; section components read configuration
and compose them. Keep page-specific styling in component `<style>` blocks.
Only promote a rule to global CSS when multiple components need it.

### Add a page

Create `src/pages/speaking.astro`, composing the shared layout and section:

```astro
---
import SiteLayout from "../layouts/SiteLayout.astro";
import Section from "../components/ui/Section.astro";
---
<SiteLayout title="Speaking">
  <div class="container">
    <Section id="speaking" eyebrow="Sharing what I learn" title="Talks." heading="h1" wide>
      <p>Page content goes here.</p>
    </Section>
  </div>
</SiteLayout>
```

`wide` places the heading above the content; the default is a split layout.
Add a `/speaking` link in `Header.astro` if it belongs in the main navigation.
Use one `h1` per page and the default `h2` for additional sections. Experience and
project components pass the corresponding heading level to their child cards.

### Extend an article layout

`BlogPostLayout` accepts the post, reading time, rendered headings, and optional
older/newer posts. Its default slot receives Markdown's `<Content />`.

- `header` replaces the standard article header.
- `aside` replaces the generated contents navigation.
- `after-content` inserts a component before the adjacent-post links.

For a custom Astro article route:

```astro
<BlogPostLayout post={post} minutes={minutes} headings={headings}>
  <Content />
  <RelatedProjects slot="after-content" />
</BlogPostLayout>
```

Ordinary posts only need Markdown. The top-level headings generate the contents
list; fewer than two sections hide it. Set `toc: false` to omit it explicitly.
The loader currently accepts `.md`, so raw Astro components do not belong inside
Markdown posts; compose them through a route/layout slot instead.

### Markdown extensions

`remark-callouts.mjs` handles note/tip/warning/danger and toggle directives;
`remark-code-tabs.mjs` marks `:::code-tabs` groups; `remark-figure-captions.mjs`
turns standalone images into captioned figures; `remark-inline-html-math.mjs`
renders `$...$` inside literal HTML. `rehype-raw` runs first among the rehype
plugins so literal HTML (imported posts) is processed like Markdown, including
heading ids for the contents list. `rehype-heading-math.mjs` gives headings that
contain math a clean id and contents label (Astro would otherwise read each
KaTeX expression three times). `rehype-content.mjs` supplies accessible task
labels, keyboard focus for scrollable blocks, and async image decoding at build
time; only images with `width` and `height` are lazy-loaded, so anchor jumps
don't land on shifting content. Add rendering transformations here rather than browser DOM scans.
Math and code use the existing KaTeX and Shiki pipeline.

## Validation

Run `npm run build` after changing templates or content. Preview with
`npm run preview`; this excludes drafts. `npm run dev` includes drafts in the
blog index and article routes, with a visible draft label. Navigation visibility and RSS always use published posts only.

Check the homepage, `/experience`, `/projects`, `/blog`, and an article at desktop and mobile widths in both
themes. The draft `/blog/example` exercises code, math, tables, callouts, toggles,
and task lists. Check keyboard navigation and disable JavaScript when changing
shared controls; content and disclosures should remain usable.

Prefer the production preview for browser audits. In development, Astro's toolbar
adds headings inside shadow roots, which Playwright's selectors also search.
Scope page-heading assertions to `#main-content h1` and exclude
`astro-dev-toolbar` from accessibility scans of the site.

Astro caches rendered Markdown by content. After editing a Markdown plugin,
restart the dev server and regenerate the affected content; an unchanged post
may otherwise keep its old rendering. A fresh build without `node_modules/.astro/data-store.json`
regenerates the content cache.
