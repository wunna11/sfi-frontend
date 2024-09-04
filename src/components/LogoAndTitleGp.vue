<template>
  <div class="flex flex-col space-y-8 items-center justify-center">
    <img src="../assets/images/logo.png" alt="Logo" class="w-fit h-12" />

    <p class="text-black-100 text-xl font-semibold">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
