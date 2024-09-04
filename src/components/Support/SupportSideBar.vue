<template>
  <div class="flex flex-col space-y-4">
    <div class="mb-1">
      <h2 class="font-semibold text-black-100">
        <div class="flex">
          <PhWrench :size="30" class="mx-2" />
          Support
        </div>
      </h2>
    </div>
    <hr class="w-full border-gray-800" />
    <nav>
      <ul class="space-y-4">
        <li v-for="tab in tabs" :key="tab.name">
          <a
            href="#"
            @click.prevent="selectTab(tab.name)"
            :class="[
              'py-2 px-4 rounded flex items-center',
              selectedTab === tab.name ? 'text-primary' : 'text-gray-50'
            ]"
          >
            {{ tab.label }}
            <PhArrowRight
              v-if="selectedTab === tab.name"
              :size="20"
              class="mx-2 my-1 text-primary"
            />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import { PhWrench, PhArrowRight } from '@phosphor-icons/vue'

defineProps<{
  selectedTab: string
}>()

const emit = defineEmits<{
  (e: 'tab-selected', tab: string): void
}>()

const tabs = [
  { name: 'PrivacyPolicy', label: 'Privacy Policy' },
  { name: 'FAQ', label: 'FAQ' },
  { name: 'TnC', label: 'T&C' },
  { name: 'PaymentInfo', label: 'Payment Info' },
  { name: 'ContactUs', label: 'Contact Us' },
  { name: 'CSR', label: 'CSR' }
]

function selectTab(tab: string): void {
  emit('tab-selected', tab)
}
</script>
