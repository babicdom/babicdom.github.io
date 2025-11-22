import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  site: 'https://babicdom.github.io',
  integrations: [tailwind()],
  base: '/',
  build: {
    assets: 'assets'
  }
});