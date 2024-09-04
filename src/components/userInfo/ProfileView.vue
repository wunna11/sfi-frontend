<template>
  <div class="grid grid-cols-10">
    <div class="col-span-2">
      <div class="flex flex-col min-h-screen gap-4">
        <div class="p-6 rounded-lg border-gray-800 border h-[349px] w-[300px]">
          <div class="flex justify-center">
            <img
              :src="ProfileImage"
              alt="Profile Picture"
              class="w-24 h-24 rounded-full bg-pastel"
            />
          </div>
          <div class="mt-5 text-center">
            <h2 class="text-xl font-semibold mb-[10px] text-black-100">Thet Naing Htun</h2>
            <p class="text-base font-normal text-gray-50">Backend Developer</p>
          </div>
          <div class="mt-5 text-center">
            <button class="px-4 py-2 text-white-50 bg-primary rounded-[32px]">
              Change Profile Picture
            </button>
          </div>
        </div>

        <ProfileSidebar
          @tab-selected="currentTab = $event"
          class="h-full w-[300px] p-6 border border-gray-800 rounded-lg"
        />
      </div>
    </div>
    <div class="col-span-7 p-8 mx-10 border border-gray-800 rounded-lg">
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileSidebar from './ProfileSideBar.vue'
import ProfileImage from '../../assets/images/profile.png'
import { computed, ref } from 'vue'
import PersonalInformation from './PersonalInformation.vue'
import StudentCard from './StudentCard.vue'

const currentTab = ref('PInfo')
const currentTabComponent = computed(() => {
  return {
    PInfo: PersonalInformation,
    StudentCard: StudentCard
  }[currentTab.value]
})
</script>
