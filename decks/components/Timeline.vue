<script setup lang="ts">
/**
 * Linha do tempo / fluxo horizontal numerado.
 * <Timeline :items="[{ icon: 'i-carbon:search', title: 'Descoberta', desc: 'Jan' }, ...]" />
 */
defineProps<{
  items: { icon?: string, title: string, desc?: string, color?: string }[]
}>()
</script>

<template>
  <div class="relative grid gap-4" :style="{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }">
    <div class="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <div v-for="(it, i) in items" :key="i" class="relative flex flex-col items-center text-center gap-2">
      <div class="w-12 h-12 rounded-full border-2 border-solid border-white/10 bg-[#0b1020] flex items-center justify-center">
        <div :class="[it.icon ?? 'i-carbon:dot-mark', it.color ?? 'text-brand']" class="text-xl" />
      </div>
      <div class="text-xs opacity-50 font-mono">
        {{ String(i + 1).padStart(2, '0') }}
      </div>
      <div class="font-semibold text-sm">
        {{ it.title }}
      </div>
      <div v-if="it.desc" class="text-xs muted leading-snug">
        {{ it.desc }}
      </div>
    </div>
  </div>
</template>
