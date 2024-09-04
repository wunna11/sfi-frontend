<template>
  <div class="flex flex-col space-y-4">
    <nav>
      <ul class="space-y-4">
        <li v-for="tab in tabs" :key="tab.name">
          <a
            href="#"
            @click.prevent="selectTab(tab.name)"
            :class="[
              ' py-2 px-4 rounded flex items-center',
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
import { ref } from 'vue'
import { PhArrowRight } from '@phosphor-icons/vue'
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'tab-selected', tab: string): void
}>()

const tabs = [
  { name: 'PInfo', label: 'Personal Information' },
  { name: 'StudentCard', label: 'Student Card' }
]

const selectedTab = ref<string>('PInfo')

function selectTab(tab: string): void {
  selectedTab.value = tab
  emit('tab-selected', tab)
}
</script>
