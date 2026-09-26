# Personal Portfolio Website

My personal portfolio website built with Astro and Tailwind CSS. This site showcases my skills, experience, and projects in a clean, professional design.

## Template Credit

This website is built using the excellent [DevPortfolio Template](https://github.com/RyanFitzgerald/devportfolio) created by [Ryan Fitzgerald](https://github.com/RyanFitzgerald). The original template was completely rebuilt from the ground up and designed to be easily customizable through a single configuration file.

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Base styles; components use scoped CSS
- **[KaTeX](https://katex.org/)** and **[Shiki](https://shiki.style/)** - Math and code highlighting in blog posts
- **TypeScript** - For type-safe configuration

## Updating the Template

### Configuration

The template is designed to be easily customizable through the `src/config.ts` file. This single file controls:

- **Personal Information**: Name, title, description, homepage intro
- **Accent Color**: Primary color theme (changing this will change the accent color site wide)
- **Theme**: Dark mode toggle and default theme
- **Social Links**: Email, LinkedIn, GitHub (all optional)
- **Blog**: Blog index title, nav label, and RSS description
- **Experience**: Work history with bullet points and skills
- **Projects**: Project showcase with descriptions and links

## Component architecture

Home, Experience, Projects, and Blog are separate pages. They share
`SiteLayout`, navigation with an active tab, theme controls, and footer.
Reusable sections, cards, tags, and article components live in `src/components`.
Content stays in `src/config.ts` and `src/content/blog/*.md`.

- [Component guide and extension examples](docs/components.md)
- [Redesign code review](docs/code-review.md)
- [Writing posts](src/content/blog/_README.md)

## Local Development

To run this project locally:

```bash
npm install
npm run dev
```

Build with `npm run build`; preview the production output with `npm run preview`.
