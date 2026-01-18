/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens that map to CSS custom properties
        background: 'rgb(var(--color-background))',
        surface: 'rgb(var(--color-surface))',
        decoration: 'rgb(var(--color-decoration))',
        border: 'rgb(var(--color-border))',
        'text-primary': 'rgb(var(--color-text-primary))',
        'text-secondary': 'rgb(var(--color-text-secondary))',
        'text-muted': 'rgb(var(--color-text-muted))',
        'text-inverse': 'rgb(var(--color-text-inverse))',

        // Keep accent color available
        accent: 'var(--accent-color)',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      transitionProperty: {
        theme: 'color, background-color, border-color, fill',
      },
      transitionDuration: {
        theme: '300ms',
      },
      transitionTimingFunction: {
        theme: 'ease',
      },
    },
  },
  plugins: [],
}