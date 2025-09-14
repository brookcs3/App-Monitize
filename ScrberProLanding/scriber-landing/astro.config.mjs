// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0'
    }
  }
});