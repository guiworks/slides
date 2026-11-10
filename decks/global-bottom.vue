<script setup lang="ts">
/**
 * Fundo "glow": polígonos borrados que se reorganizam a cada slide.
 * Ideia original de @antfu / @pi0 / @Atinux, usada também em BaizeAI/talks.
 *
 * Opções (frontmatter do slide; se ausente, vale a do cabeçalho do deck):
 * - glow: 'full' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top-left' ... | 'none'
 * - glowOpacity: número de 0 a 1 (padrão 0.4)
 * - glowHue: rotação de matiz em graus (padrão 0)
 * - glowSeed: semente para a distribuição ficar estável
 * - glowColors: [cor1, cor2, cor3] — só no cabeçalho do deck, para usar a cor da marca
 * - brand: { accent: '#hex', gradient: ['#a', '#b', '#c'] } — só no cabeçalho; muda text-brand e .gradient-text
 */
import { useNav } from '@slidev/client'
import seedrandom from 'seedrandom'
import { computed, ref, watch, watchEffect } from 'vue'

type Range = [number, number]

const { currentSlideRoute, slides } = useNav()

const deckFm = computed<Record<string, any>>(() => (slides.value[0]?.meta?.slide as any)?.frontmatter ?? {})
const slideFm = computed<Record<string, any>>(() => (currentSlideRoute.value?.meta?.slide as any)?.frontmatter ?? {})
function opt<T>(key: string, fallback: T): T {
  return (slideFm.value[key] ?? deckFm.value[key] ?? fallback) as T
}

const area = computed(() => String(opt('glow', 'full')))
const enabled = computed(() => area.value !== 'none' && area.value !== 'false')
const opacity = computed(() => Number(opt('glowOpacity', 0.4)))
const hue = computed(() => Number(opt('glowHue', 0)))
const seed = computed(() => String(opt('glowSeed', 'default')))
const colors = computed<string[]>(() => {
  const c = deckFm.value.glowColors
  return Array.isArray(c) && c.length >= 3 ? c : ['#1d4ed8', '#4f46e5', '#06b6d4']
})

// Aplica as cores de marca do cabeçalho como variáveis CSS globais
watchEffect(() => {
  const brand = deckFm.value.brand ?? {}
  const root = document.documentElement.style
  const set = (name: string, value?: string) => value ? root.setProperty(name, value) : root.removeProperty(name)
  set('--brand-accent', brand.accent)
  const g: string[] = Array.isArray(brand.gradient) ? brand.gradient : []
  set('--brand-grad-1', g[0])
  set('--brand-grad-2', g[1])
  set('--brand-grad-3', g[2])
})

function limitsFor(spec: string) {
  let x: Range = [0, 1]
  let y: Range = [0, 1]
  const cut = (a: Range, b: Range): Range => [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
  for (const part of spec.split('-')) {
    if (part === 'top') y = cut(y, [0, 0.6])
    if (part === 'bottom') y = cut(y, [0.4, 1])
    if (part === 'left') x = cut(x, [0, 0.6])
    if (part === 'right') x = cut(x, [0.4, 1])
    if (part === 'center') {
      x = cut(x, [0.25, 0.75])
      y = cut(y, [0.25, 0.75])
    }
  }
  return { x, y }
}

function usePoly(count: number, salt: string) {
  function generate(): Range[] {
    const { x, y } = limitsFor(area.value)
    const rng = seedrandom(`${seed.value}-${currentSlideRoute.value?.no ?? 0}-${salt}`)
    const between = ([a, b]: Range) => a + rng() * (b - a)
    const overflow = (v: number) => {
      const out = v * 1.6 - 0.3
      return rng() < 0.3 ? out + (rng() - 0.5) * 0.3 : out
    }
    return Array.from({ length: count }, () => [overflow(between(x)), overflow(between(y))] as Range)
  }

  const points = ref<Range[]>(generate())

  // Move cada ponto para o novo ponto mais próximo: a transição fica fluida
  function jump() {
    const next = new Set(generate())
    points.value = points.value.map(([ox, oy]) => {
      let best: Range | undefined
      let bestD = Number.POSITIVE_INFINITY
      for (const p of next) {
        const d = (p[0] - ox) ** 2 + (p[1] - oy) ** 2
        if (d < bestD) {
          bestD = d
          best = p
        }
      }
      next.delete(best!)
      return best!
    })
  }

  watch([currentSlideRoute, area, seed], jump)
  return computed(() => points.value.map(([px, py]) => `${px * 100}% ${py * 100}%`).join(', '))
}

const poly1 = usePoly(10, 'a')
const poly2 = usePoly(6, 'b')
const poly3 = usePoly(3, 'c')
</script>

<template>
  <div
    v-if="enabled"
    class="glow-bg transform-gpu overflow-hidden pointer-events-none"
    :style="{ filter: `blur(70px) hue-rotate(${hue}deg)` }"
    aria-hidden="true"
  >
    <div class="glow-clip" :style="{ 'clip-path': `polygon(${poly1})`, 'opacity': opacity, 'background': `linear-gradient(to right, ${colors[0]}, ${colors[1]})` }" />
    <div class="glow-clip" :style="{ 'clip-path': `polygon(${poly2})`, 'opacity': opacity, 'background': `linear-gradient(to left, ${colors[0]}, ${colors[1]})` }" />
    <div class="glow-clip" :style="{ 'clip-path': `polygon(${poly3})`, 'opacity': 0.2, 'background': `linear-gradient(to top, ${colors[2]}, #ffffff)` }" />
  </div>
</template>

<style scoped>
.glow-bg,
.glow-clip {
  transition: all 2.5s ease;
}

.glow-bg {
  position: absolute;
  inset: 0;
  z-index: -10;
}

.glow-clip {
  position: absolute;
  inset: 0;
  aspect-ratio: 16 / 9;
}
</style>
