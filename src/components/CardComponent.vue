<template>
  <div
    class="bg-white-50 border border-gray-800 rounded-xl flex flex-col justify-center space-y-2 p-4"
  >
    <img :src="src" alt="img" />

    <p class="text-black-100 font-semibold text-lg">{{ title }}</p>
    <div class="flex space-x-2">
      <PhCertificate :size="18" class="text-primary" />
      <p class="text-primary text-sm">{{ certificate }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCertificate } from '@phosphor-icons/vue'

defineProps<{ src: string; title: string; certificate: string }>()
</script>
