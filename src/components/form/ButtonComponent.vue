<template>
  <button
    class="w-auto px-4 py-2 rounded-lg"
    :class="[
      {
        'bg-primary text-white-50': primary,
        'bg-white-50 text-black-100 border border-text-black-100': secondary,
        'bg-gray-600 text-white-50': isDisabled
      },
      customClass
    ]"
    :type="submit ? 'submit' : 'button'"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot v-if="icon"></slot>
    {{ title }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  submit?: boolean
  onClick?: any
  isDisabled?: boolean
  primary?: boolean
  secondary?: boolean
  customClass?: string
  icon?: any
}>()
</script>
