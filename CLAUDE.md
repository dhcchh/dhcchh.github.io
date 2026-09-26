# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio and blog built with Astro and Tailwind CSS v4. Site content lives in a single configuration file; blog posts are Markdown files in a content collection.

## Tech Stack

- **Astro**: Static site generator (multi-page, no client framework)
- **Tailwind CSS v4**: Loaded through the @tailwindcss/vite plugin, used for its base reset and `sr-only`; components are styled with scoped `<style>` blocks
- **TypeScript**: For type-safe configuration
- **KaTeX + Shiki**: Math and syntax highlighting in blog posts
- **Icons**: Small hand-written inline SVGs (no icon library)

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all site content centralized in `src/config.ts`:

- **Pages** (`src/pages/`): Separate routes for Home (`/`, the `Hero`), Experience (`/experience`), Projects (`/projects`), the blog index (`/blog`), blog posts (`/blog/[...slug]`), and the RSS feed
- **Layouts** (`src/layouts/`): `BaseLayout` (document head, theme resolution), `SiteLayout` (header, main, footer), `BlogPostLayout` (article header, contents list, navigation)
- **Components** (`src/components/`): Page sections (Hero, Experience, Projects, Header, Footer), `ui/` building blocks (Section, TagList, SocialLinks), and `blog/` article components
- **Configuration** (`src/config.ts`): Single source of truth for site content and customization
- **Blog** (`src/content/blog/*.md`): Posts; see `src/content/blog/_README.md` for frontmatter and supported blocks, and `docs/components.md` for extension points

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin; there is no `tailwind.config.js`
- Tailwind generates a utility for any matching word it finds in the source, and those utilities apply to any element with that class name. Avoid naming your own classes after Tailwind utilities (`contents`, `hidden`, `table`, `block`, `flex`, ...). `global.css` deliberately overrides the `.container` utility's max-widths
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- Typography: system sans-serif body text, Georgia for `.display` headings, and IBM Plex Mono (loaded from Google Fonts) for labels, tags, dates, and code
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Style with the component's scoped `<style>` block using the CSS custom properties in `src/styles/global.css`; only promote a rule to global CSS when several components need it
3. Maintain the existing typography (display serif headings, monospace labels)
4. Draw new icons as small inline SVGs matching the existing stroke style

## Writing Math in Blog Posts

- Math must be written as KaTeX, using `$...$` for inline and `$$...$$` for block. The markdown pipeline runs `remark-math` + `rehype-katex` (see `astro.config.mjs`), plus a custom `remarkInlineHtmlMath` plugin (`src/lib/remark-inline-html-math.mjs`) that also renders `$...$` found inside raw HTML nodes (posts imported from Medium/elsewhere often contain literal `<p>` HTML rather than pure markdown).
- Never use Unicode super/subscript characters (e.g. `H₀`, `x²`, `Cₜ`, `eˣ`) or raw Greek letters (`α`, `μ`, `σ`, `δ`) as a stand-in for math. They render in whichever system font happens to have the glyph (IBM Plex Mono covers neither the super/subscript block nor Greek), so they look mismatched next to KaTeX-rendered math. Always write `$H_0$`, `$x^2$`, `$C_t$`, `$e^x$`, `$\alpha$`, `$\mu$`, etc. instead.

## Images in Blog Posts

- A standalone image (`![alt text](src)` on its own line) is automatically wrapped into a `<figure>` with a visible `<figcaption>` built from its alt text, via the custom `remarkFigureCaptions` plugin (`src/lib/remark-figure-captions.mjs`). Always write a real, descriptive alt text for standalone images — it becomes the caption shown under the image, not just accessibility metadata. Leave alt text empty only for a genuinely decorative image that shouldn't get a caption.
- Every image inside `[data-article-content]` (i.e. every blog post image) is click-to-enlarge via a lightbox built in `src/components/blog/ArticleContent.astro`. This is automatic and needs no per-image markup; it also picks up a figure's `<figcaption>` text to show under the enlarged image.

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, description, accentColor
- intro: {paragraphs, learningIntro, learningTopics, closing} for the homepage (paragraphs may contain HTML links)
- theme: {enableDarkMode, defaultTheme}
- social: email, linkedin, github (all optional)
- blog: {title, navLabel, description} for the blog index, nav link, and RSS feed
- experience: array of {company, title, dateRange, bullets, skills}; titles containing "intern" are grouped under Internships
- projects: array of {name, dateRange, description, github, articles: {title, link}[], skills}