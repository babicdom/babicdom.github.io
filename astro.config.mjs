import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://babicdom.github.io',
  integrations: [tailwind()],
  base: '/',

  build: {
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()]
  }
});