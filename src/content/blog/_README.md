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
cover: /covers/post.png       # optional — social-card image in /public
---
```

The **Blog** nav link stays hidden until at least one non-draft post exists.

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
follow the light/dark theme and each block gets a copy button on hover.

See `example.md` in this folder for one of everything (it is a permanent draft).

## Preview

```bash
npm run dev      # drafts visible at /blog
npm run build && npm run preview   # production — drafts excluded
```
