import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [
    UnoCSS(),
    sitemap(),
  ],
})
