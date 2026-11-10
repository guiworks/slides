<script setup lang="ts">
/**
 * Indicador (KPI) com valor grande, rótulo e variação.
 * <Stat value="R$ 1,2 mi" label="Receita" icon="i-carbon:currency-dollar" trend="+18% vs Q2" />
 * Variações começando com "-" ficam vermelhas; use :good="true" quando cair é bom (ex.: custo).
 * note="..." mostra um texto neutro (sem seta), ex.: "faixa de 24 a 70 h".
 */
import { computed } from 'vue'

// good: undefined por padrão — sem isso o Vue converte a prop booleana ausente em false
const props = withDefaults(defineProps<{
  value: string | number
  label: string
  icon?: string
  color?: string
  trend?: string
  good?: boolean
  note?: string
}>(), { good: undefined })

const down = computed(() => /^[-−]/.test(props.trend ?? ''))
const positive = computed(() => props.good ?? !down.value)
</script>

<template>
  <div class="glass h-full px-5 py-4 flex flex-col gap-1">
    <div class="flex items-center gap-2 text-sm muted">
      <div v-if="icon" :class="[icon, color ?? 'text-brand']" class="text-base" />
      {{ label }}
    </div>
    <div class="text-3xl font-bold tracking-tight whitespace-nowrap">
      {{ value }}
    </div>
    <div v-if="trend" class="text-xs font-medium flex items-center gap-1" :class="positive ? 'text-emerald-400' : 'text-rose-400'">
      <div :class="down ? 'i-carbon:arrow-down-right' : 'i-carbon:arrow-up-right'" />
      {{ trend }}
    </div>
    <div v-if="note" class="text-xs muted">
      {{ note }}
    </div>
  </div>
</template>
