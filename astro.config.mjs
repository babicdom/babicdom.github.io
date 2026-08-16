import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://dominik-babic.github.io',
  base: '/',

  redirects: {
    '/about': '/about/tech',
    '/blog': '/blog/tech',
  },

  integrations: [
    mdx(),
    sitemap()
  ],

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
