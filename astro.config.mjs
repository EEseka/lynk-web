// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lynk.com.ng',
  integrations: [
    sitemap({
      // /open only exists to hand hangout links to the app, so it has nothing for search engines
      filter: (page) => !page.endsWith('/open/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
