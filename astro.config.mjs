// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://thevinh0207.github.io",
  base: "/astro-portfolio/",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});