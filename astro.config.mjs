import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  site: 'https://dominik-babic.github.io',
  base: '/',
  
  integrations: [
    mdx()
  ],

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});