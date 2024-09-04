<template>
  <div class="flex justify-between">
    <div>
      <h1 class="text-2xl font-semibold text-black-100">
        SFU Certificate in Human Resource Management
      </h1>
      <p class="text-2xl font-semibold text-primary mt-3">88,500 MMK</p>
    </div>

    <div>
      <ButtonComponent title="Add to Cart" :primary="true" customClass="py-2 px-4" icon="true">
        <PhShoppingCart :size="20" weight="fill" class="inline" />
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhShoppingCart } from '@phosphor-icons/vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
</script>
