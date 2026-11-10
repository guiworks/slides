<script setup lang="ts">
/**
 * Card de vidro com cabeçalho opcional.
 * <Card icon="i-carbon:warning-alt" color="text-amber-300" title="Risco">texto</Card>
 */
defineProps<{
  icon?: string
  title?: string
  color?: string
}>()
</script>

<template>
  <div class="glass h-full overflow-hidden">
    <div v-if="title || icon" class="glass-header">
      <div v-if="icon" :class="[icon, color ?? 'text-brand']" class="text-lg shrink-0" />
      <div class="font-semibold">
        {{ title }}
      </div>
    </div>
    <div class="px-4 py-3 text-sm leading-relaxed">
      <slot />
    </div>
  </div>
</template>
