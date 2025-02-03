import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [tailwind()],
  redirects:{
    '/home': '/',
    '/resume': '/resume.pdf',
    '/link': 'https://links.rasio.dev',
    '/link/*':  'https://links.rasio.dev/:splat',
    '/links': 'https://links.rasio.dev',
    '/links/*':  'https://links.rasio.dev/:splat'
  }
});