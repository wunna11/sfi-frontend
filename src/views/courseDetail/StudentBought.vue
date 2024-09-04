<template>
  <div>
    <CardComponent :title="title" :src="src" :certificate="certificate" />
  </div>
</template>

<script setup lang="ts">
import CardComponent from '../../components/CardComponent.vue'

defineProps<{ src: string; title: string; certificate: string }>()
</script>
