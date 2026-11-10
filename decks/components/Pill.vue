<script setup lang="ts">
/**
 * Etiqueta pequena: <Pill icon="i-carbon:checkmark" color="text-emerald-300">Concluído</Pill>
 */
defineProps<{
  icon?: string
  color?: string
}>()
</script>

<template>
  <span class="inline-flex items-center gap-1 rounded-full border border-solid border-white/10 bg-white/5 px-2.5 py-0.5 text-xs" :class="color">
    <span v-if="icon" :class="icon" />
    <slot />
  </span>
</template>
