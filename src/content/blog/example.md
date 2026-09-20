---
title: "Formatting reference"
description: "Every block this blog can render. Kept as a draft so it never ships — copy from it when writing a real post."
pubDate: 2026-01-01
draft: true
tags: ["meta", "reference"]
---

This post is a **living reference**. It stays `draft: true`, so it shows up in
`npm run dev` but never in a production build. Copy the bits you need.

## Text

Regular paragraph text with **bold**, *italic*, `inline code`, and a
[link to the homepage](/). Line breaks fold into one paragraph unless you leave a
blank line.

> A blockquote. Useful for pulling out a quote or an aside that is not quite a
> callout.

## Lists

- Unordered item
- Another item
  - Nested item
  - Nested item
- Back to the top level

1. Ordered item
2. Ordered item

Task list:

- [x] Done
- [ ] Not done

## Callouts

:::note
The default callout. Supports **markdown**, `code`, and lists inside.
:::

:::tip[Custom title]
Pass a title in square brackets right after the directive name.
:::

:::warning
Amber. Use for gotchas.
:::

:::danger
Red. Use for "this will break things".
:::

## Toggle

:::toggle[Show the deployment command]
Toggles are collapsed by default and can hold any block, including code:

```bash
tar --exclude .git -czf - . | ssh box 'tar -xzf - -C /opt/app'
```
:::

## Code

```python
def transform(rows):
    total = sum(r.amount for r in rows)
    return {"count": len(rows), "total": total}
```

Syntax highlighting follows the site theme (light and dark), with a visible copy button.

## Math

Long equations scroll horizontally. Focus the block to scroll with the keyboard.

Inline: the estimator is unbiased when $\mathbb{E}[\hat\theta] = \theta$.

Block:

$$
\text{PR-AUC} = \int_0^1 p(r)\,dr
\qquad
\hat{y} = \sigma\!\left(\sum_{i} w_i x_i + b\right)
$$

## Table

| Stage     | Tool      | Runtime |
| --------- | --------- | ------- |
| Ingest    | Airflow   | 12 min  |
| Transform | dbt       | 1.5 h   |
| Serve     | Snowflake | —       |

## Image

![Site favicon](/favicon.svg)
