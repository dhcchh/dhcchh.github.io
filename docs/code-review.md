# Redesign code review

Scope: Home, About, Experience, Projects, shared layout/navigation/theme, writing index, and article
rendering. Existing experience/project prose is retained. The article's heading
levels were normalized without changing its prose.

## Fixed findings

| Finding | Change |
| --- | --- |
| Tailwind v4 was not loading the JavaScript theme configuration, so custom color utilities were absent from the CSS | Explicit `@config` in `global.css`; color tokens now resolve |
| Theme code ignored `theme.defaultTheme`, initialized redundantly, and assumed local storage was always available | Resolve once before paint; one small toggle script; guarded storage and system-theme handling |
| Hero title animation | The typewriter effect is intentionally retained; the full title is present in server-rendered HTML and typing is skipped for reduced-motion preferences |
| Repeated SVG social links, section scaffolding, tag markup, and article metadata | Shared components with typed props and slots |
| Blog prose CSS shipped globally and fonts requested many unused weights | Prose is imported only by article content; reduced font weight requests |
| Global transition rules overrode component-specific transitions | Removed universal transitions; explicit reduced-motion support |
| Mobile navigation omitted homepage section links | All main links remain visible in a wrapping header |
| SPY repository URL lacked a scheme and resolved within the portfolio | Corrected to an absolute GitHub URL |
| Date-only post metadata depended on the build machine's timezone | Dates display in UTC |
| `getPublishedPosts` also returned drafts, making its public-surface behavior misleading | Explicit `getPosts({ includeDrafts })`; navigation and RSS opt out of drafts |
| Code-copy controls appeared only on hover and scrolled with long code | Visible toolbar outside the scrollable code block; keyboard access and copy feedback |
| Markdown task checkboxes had no accessible labels | Labels generated at build time |
| All social metadata used the website type | Article routes now use `og:type=article` |

## Architecture decisions

- Retain Astro's static build, Tailwind, Shiki, and the existing Markdown plugins.
  No new project dependencies or client framework were added.
- Use native disclosures for experience, project details, and coursework. Full
  descriptions remain available without JavaScript.
- Use separate static routes for the main tabs; Home contains the introduction,
  and About contains the bio, education, and credentials.
- Render shared site chrome once through `SiteLayout`; article layouts compose
  small components and expose named slots for additions.
- Keep math rendering supported on article pages; it is not loaded by the
  homepage or writing index.
- Keep original image files; Markdown images load lazily and decode asynchronously.

See [the component guide](components.md) for extension examples and checks.

## Validation performed

- Production Astro build passed; draft routes are excluded.
- Astro type checking: zero errors, warnings, or hints.
- Chromium review at 320, 390, 768, and 1440px: no page overflow.
- Light/dark theme rendering, saved preferences, system theme changes, and
  blocked local storage checked.
- Keyboard-operated disclosures, mobile contents links and anchor positioning,
  exact clipboard contents, local route links, RSS draft exclusion, and image
  loading checked.
- Homepage and article content remain usable with JavaScript disabled.
- Automated WCAG A/AA and best-practice scans covered the public pages and
  the development formatting reference. Dark code comments now use Shiki's
  high-contrast theme; math, code, and tables have keyboard-focusable scrolling.

Browser checks used temporary Playwright/axe tooling outside the repository.
They do not constitute a manual screen-reader audit.

### Separate-page navigation verification (September 20, 2026)

- Home, About, Experience, Projects, and Writing each load directly and expose
  exactly one main heading. Home contains only the introduction; education and
  credentials remain on About.
- Active navigation handles trailing slashes and keeps Writing selected within
  article routes. Hero links, browser back, reload, mobile navigation, and
  navigation with JavaScript disabled passed.
- All five pages passed automated accessibility scans in both themes. At 320,
  390, 768, and 1440px, page content and navigation stay within the viewport.
- The earlier extra-heading assertion counted Astro's development toolbar. The
  production HTML was correct; browser checks now target the main content.
- The production build and Astro type check passed with no errors or warnings.
