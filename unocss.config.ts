import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-base': 'bg-$c-bg',
    'bg-card': 'bg-$c-bg-card',
    'text-base': 'text-$c-text',
    'text-secondary': 'text-$c-text-secondary',
    'border-base': 'border border-$c-border',
  },
  presets: [
    presetUno(),
    presetAttributify,
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'var(--c-primary)',
        active: 'var(--c-primary-active)',
      },
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
