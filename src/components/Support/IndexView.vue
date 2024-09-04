<template>
  <div class="flex min-h-screen">
    <!-- Sidebar Component -->
    <Sidebar
      :selectedTab="currentTab"
      @tab-selected="handleTabSelect"
      class="w-1/6 h-full p-6 border border-gray-800 rounded-lg"
    />

    <!-- Content Area -->
    <div class="w-5/6 p-8 mx-10 border border-gray-800 rounded-lg">
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from './SupportSideBar.vue'
import PrivacyPolicyContent from './PrivacyPolicyContent.vue'
import FAQContent from './FAQContent.vue'
import TnCContent from './TCContent.vue'
import PaymentInfoContent from './PaymentInfoContent.vue'
import ContactUsContent from './ContactUsContent.vue'
import CSRContent from './CSRContent.vue'

const route = useRoute()
const router = useRouter()
const currentTab = ref<string>((route.params.tab as string) || 'PrivacyPolicy')

const currentTabComponent = computed(() => {
  return {
    PrivacyPolicy: PrivacyPolicyContent,
    FAQ: FAQContent,
    TnC: TnCContent,
    PaymentInfo: PaymentInfoContent,
    ContactUs: ContactUsContent,
    CSR: CSRContent
  }[currentTab.value]
})

function handleTabSelect(tab: string) {
  currentTab.value = tab
  router.push({ name: 'support-tab', params: { tab } })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Watch for route changes to update the tab and scroll to top
watch(
  () => route.params.tab,
  (newTab) => {
    if (typeof newTab === 'string') {
      currentTab.value = newTab
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  { immediate: true }
)

onMounted(() => {
  // Ensure the page scrolls to top on initial mount
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>
