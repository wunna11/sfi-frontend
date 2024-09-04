<template>
  <div
    class="bg-white-150 p-4 mt-8 rounded-lg cursor-pointer"
    :class="{
      'border border-primary': selected
    }"
    @click="onClick"
  >
    <div v-show="selected" class="grid justify-items-end">
      <img src="../assets/images/payment/select.png" alt="select" />
    </div>

    <div class="w-32">
      <img :src="src" :alt="name" />
      <p class="mt-4">{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  src: string
  onClick: () => void
  selected?: boolean
}>()
</script>
