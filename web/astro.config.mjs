import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://orion-os.dev',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
