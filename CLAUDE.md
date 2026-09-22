# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Experience, Education, Header, Footer)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Writing Math in Blog Posts

- Math must be written as KaTeX, using `$...$` for inline and `$$...$$` for block. The markdown pipeline runs `remark-math` + `rehype-katex` (see `astro.config.mjs`), plus a custom `remarkInlineHtmlMath` plugin (`src/lib/remark-inline-html-math.mjs`) that also renders `$...$` found inside raw HTML nodes (posts imported from Medium/elsewhere often contain literal `<p>` HTML rather than pure markdown).
- Never use Unicode super/subscript characters (e.g. `H₀`, `x²`, `Cₜ`, `eˣ`) or raw Greek letters (`α`, `μ`, `σ`, `δ`) as a stand-in for math. The site's IBM Plex Mono web font does not cover the Unicode super/subscript block or Greek block, so those characters silently fall back to the browser's default system font and look visually mismatched. Always write `$H_0$`, `$x^2$`, `$C_t$`, `$e^x$`, `$\alpha$`, `$\mu$`, etc. instead.

## Images in Blog Posts

- A standalone image (`![alt text](src)` on its own line) is automatically wrapped into a `<figure>` with a visible `<figcaption>` built from its alt text, via the custom `remarkFigureCaptions` plugin (`src/lib/remark-figure-captions.mjs`). Always write a real, descriptive alt text for standalone images — it becomes the caption shown under the image, not just accessibility metadata. Leave alt text empty only for a genuinely decorative image that shouldn't get a caption.
- Every image inside `[data-article-content]` (i.e. every blog post image) is click-to-enlarge via a lightbox built in `src/components/blog/ArticleContent.astro`. This is automatic and needs no per-image markup; it also picks up a figure's `<figcaption>` text to show under the enlarged image.

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, description, accentColor
- Social links: email, linkedin, twitter, github (all optional)
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, skills}
- experience: array of {company, title, dateRange, bullets}
- education: array of {school, degree, dateRange, achievements}