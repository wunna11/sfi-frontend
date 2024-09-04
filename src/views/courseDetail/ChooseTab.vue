<template>
  <div class="flex space-x-8">
    <p
      class="py-3 cursor-pointer"
      :class="{ 'border-b-2 border-primary': selected === 'courseOutline' }"
      @click="onClickCourse"
    >
      Course Outlines
    </p>
    <p
      class="py-3 cursor-pointer"
      :class="{ 'border-b-2 border-primary': selected === 'teacherProfile' }"
      @click="onClickProfile"
    >
      Teacher Profiles
    </p>
    <p
      class="py-3 cursor-pointer"
      :class="{ 'border-b-2 border-primary': selected === 'studentBought' }"
      @click="onClickBought"
    >
      Student Also Bought
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onClickCourse: () => void
  onClickProfile: () => void
  onClickBought: () => void
  selected: 'courseOutline' | 'teacherProfile' | 'studentBought'
}>()
</script>
