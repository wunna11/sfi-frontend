<template>
  <div
    class="backdrop-blur bg-white-50/60 relative sticky top-0 flex flex-wrap items-center justify-between py-4 border-b border-gray-300 z-50"
  >
    <div class="container flex items-center justify-between mx-auto">
      <img src="../../assets/images/logo.png" alt="Logo" class="h-14 w-fit" />
      <div
        class="relative flex items-center justify-between w-full px-4 space-x-2 lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          v-for="item in menuItems"
          :key="item.href"
          :to="item.href"
          :href="item.href"
          class="inline-block p-2 mr-4 text-sm font-semibold leading-relaxed uppercase text-primary whitespace-nowrap"
          :class="currentPath == item.href ? 'border-b-2 border-primary' : ''"
        >
          {{ item.label }}
        </router-link>
      </div>
      <div v-bind:class="{ hidden: !showMenu, flex: showMenu }" class="items-center lg:flex">
        <ul class="flex flex-col ml-auto space-x-4 list-none lg:flex-row">
          <li class="nav-item">
            <ButtonComponent title="Login" :secondary="true" :onClick="handleLoginClick" />
          </li>
          <li class="nav-item">
            <ButtonComponent title="Register" :primary="true" :onClick="handleRegisterClick" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ButtonComponent from '../form/ButtonComponent.vue'

const route = useRoute()
const router = useRouter()
const showMenu = ref(false)
const currentPath = computed(() => (route.path === '/' ? '/' : route.path))

const menuItems = ref([
  { label: 'Home', href: '/' },
  { label: 'Cart', href: '/cart' },
  { label: 'My Courses', href: '/my-courses' },
  { label: 'About Us', href: '/about' },
  { label: 'Get App', href: '/get-app' }
])

function handleLoginClick() {
  router.push({ path: '/login' })
}

function handleRegisterClick() {
  console.log('Register button clicked')
}
</script>
