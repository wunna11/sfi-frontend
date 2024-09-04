<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavBar from '../components/layout/NavBar.vue'
import FooterView from '../components/layout/FooterView.vue'
import CartTabBar from '../views/cart/CartTabBar.vue'

const route = useRoute()
const currentPath = route.path
</script>

<template>
  <NavBar />
  <div v-show="currentPath === '/cart'">
    <CartTabBar />
  </div>
  <div class="container mx-auto my-10">
    <RouterView />
  </div>
  <FooterView />
</template>
