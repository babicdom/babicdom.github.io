import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://babicdom.github.io',
  base: '/',

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});