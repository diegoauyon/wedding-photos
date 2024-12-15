import { defineConfig } from 'astro/config'
import { FontaineTransform } from 'fontaine'
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://fotos.diegoygaby.com',
  output: 'static',
  outDir: 'dist',
  adapter: vercel(), 
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['Arial'],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
})
