<script setup lang="ts">
/**
 * Barras de faixa (mínimo–máximo), boas para estimativas.
 * <RangeBars unit="h" :items="[{ label: 'Testes', min: 8, max: 16, color: 'bg-amber-400' }]" />
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  items: { label: string, min: number, max: number, text?: string, color?: string }[]
  unit?: string
  scale?: number
}>(), { unit: 'h' })

const top = computed(() => props.scale ?? Math.max(...props.items.map(i => i.max)))
const pct = (v: number) => `${(v / top.value) * 100}%`
</script>

<template>
  <div class="flex flex-col gap-3">
    <div v-for="(it, i) in items" :key="i" class="grid grid-cols-[17rem_1fr_6rem] items-center gap-4">
      <div class="text-sm text-right">
        {{ it.label }}
      </div>
      <div class="relative h-3 rounded-full bg-white/6">
        <div
          class="absolute top-0 h-3 rounded-full"
          :class="it.color ?? 'bg-sky-400'"
          :style="{ left: pct(it.min), width: `max(0.75rem, ${pct(it.max - it.min)})` }"
        />
      </div>
      <div class="text-sm font-mono muted whitespace-nowrap">
        {{ it.text ?? `${it.min}–${it.max} ${unit}` }}
      </div>
    </div>
  </div>
</template>
