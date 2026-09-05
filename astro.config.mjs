// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://abdullahhendy.github.io',
  base: '/abdullahs-portfolio',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});