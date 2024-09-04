<template>
  <div class="flex flex-col space-y-8">
    <div v-for="item in outlines" :key="item.id" class="bg-white-150">
      <div
        class="flex justify-between bg-gray-150 p-4 rounded-lg"
        :class="{
          'bg-gray-600 text-white-50': item.disabled === true
        }"
      >
        <h1 class="text-black-100 text-lg font-bold">{{ item.unit }}: {{ item.title }}</h1>
        <div
          @click="!item.disabled && clickArrow(item.id)"
          :class="['cursor-pointer', { 'cursor-not-allowed': item.disabled }]"
        >
          <PhCaretUp v-if="activeModuleId === item.id" :size="24" />

          <PhLock v-else-if="item.disabled === true" :size="24" weight="fill" />

          <PhCaretDown v-else size="24" />
        </div>
      </div>

      <div v-if="activeModuleId === item.id">
        <div class="mt-3 p-4">
          <p class="font-semibold text-base">Videos :</p>

          <div class="flex flex-col space-y-8">
            <div v-for="(video, index) in item.video" :key="index" class="flex mt-5 space-x-4">
              <img src="../../assets/images/play.png" alt="Play" />
              <p>{{ video.title }}</p>
            </div>
          </div>
        </div>

        <div class="mt-3 p-4">
          <p class="font-semibold text-base">Notes :</p>

          <div class="flex flex-col space-y-8">
            <div class="flex mt-5 space-x-4">
              <img src="../../assets/images/note.png" alt="Play" />
              <p>HR Strategy</p>
            </div>
          </div>
        </div>

        <div class="mt-3 p-4">
          <p class="font-semibold text-base">Quiz :</p>

          <div class="flex flex-col space-y-8">
            <div class="flex mt-5 space-x-4">
              <img src="../../assets/images/question.png" alt="Play" />
              <p>HR Strategy of Human Resources Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PhCaretUp, PhLock, PhCaretDown } from '@phosphor-icons/vue'

const activeModuleId = ref<number | null>(1)

const clickArrow = (id: number) => {
  if (activeModuleId.value === id) {
    activeModuleId.value = null
  } else {
    activeModuleId.value = id // Show details for the clicked id
  }
}
const outlines = ref([
  {
    id: 1,
    unit: 'Unit 1',
    title: 'Introduction to Human Resource Management',
    disabled: false,
    video: [
      {
        title: 'HR Strategy (Part-1)',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ]
  },

  {
    id: 2,
    unit: 'Unit 2',
    title: 'HR Strategy',
    disabled: true,
    video: [
      {
        title: 'HR Strategy (Part-1)',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ]
  },

  {
    id: 3,
    unit: 'Unit 3',
    title: 'HR Policy',
    disabled: true,
    video: [
      {
        title: 'HR Strategy (Part-1)',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ]
  },

  {
    id: 4,
    unit: 'Unit 4',
    title: 'HR Planning and Job Analysis',
    disabled: true,
    video: [
      {
        title: 'HR Strategy (Part-1)',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ]
  },

  {
    id: 5,
    unit: 'Unit 5',
    title: 'Acquiring Talent & Skill',
    disabled: true,
    video: [
      {
        title: 'HR Strategy (Part-1)',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ]
  },

  {
    id: 6,
    unit: 'Unit 6',
    title: 'Selection Process',
    disabled: true,
    video: [
      {
        title: 'HR Strategy (Part-1)',
        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ]
  }
])
</script>
