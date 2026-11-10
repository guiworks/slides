// @ts-expect-error - a config do Slidev não exporta tipos
import config from '@slidev/client/uno.config'
import { mergeConfigs, presetIcons } from 'unocss'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      // Card com efeito vidro (mesma linguagem visual do BaizeAI/talks)
      'glass': 'border-2 border-solid border-white/8 bg-white/5 backdrop-blur-sm rounded-xl',
      'glass-header': 'flex items-center gap-2 bg-white/8 px-4 py-2',
      'muted': 'opacity-70',    },
    safelist: [
      ...Array.from({ length: 20 }, (_, i) => `delay-${(i + 1) * 100}`),
      'animate-pulse',
    ],
    presets: [
      presetIcons({
        prefix: 'i-',
        warn: true,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
    ],
  },
])
