# Writing posts

One Markdown file per post in this folder. The filename (minus `.md`) is the URL
slug: `distributed-joins.md` → `/blog/distributed-joins`.

Files starting with `_` (like this one) are ignored by the loader.

## Frontmatter

```yaml
---
title: "Post title"            # required
description: "One-line summary" # required — used on the index, meta tags, RSS
pubDate: 2026-03-14            # required — YYYY-MM-DD
updatedDate: 2026-04-01       # optional
draft: true                   # optional — hidden in production, shown in `npm run dev`
tags: ["spark", "iceberg"]    # optional
toc: true                    # optional — automatic contents navigation; false hides it
cover: /covers/post.png       # optional — social-card image in /public
---
```

The **Writing** nav link stays hidden until at least one non-draft post exists.
Navigation visibility and RSS always exclude drafts. The development blog index labels them.

Start sections with `##` and use `###` for subsections. The contents list is
generated from the top-level sections and omitted for posts with fewer than two.
See [the component guide](../../../docs/components.md) for layout extension slots.

## Blocks beyond standard Markdown

Callouts (`note`, `tip`, `warning`, `danger`):

```md
:::note[Optional title]
body markdown
:::
```

Collapsible toggle:

```md
:::toggle[Summary text]
hidden markdown, including code blocks
:::
```

Math (KaTeX): inline `$…$`, block `$$…$$`.

Code: standard fenced blocks with a language, e.g. ` ```python `. Syntax colors
follow the light/dark theme. Each block gets a visible copy button; without
JavaScript, code remains selectable and horizontally scrollable.

See `example.md` in this folder for one of everything (it is a permanent draft).

## Preview

```bash
npm run dev      # drafts visible at /blog
npm run build && npm run preview   # production — drafts excluded
```
