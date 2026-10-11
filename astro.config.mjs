// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://thevinh0207.github.io",
  base: "/Thevinh0207-2.github.io",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});