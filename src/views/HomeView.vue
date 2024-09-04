<template>
  <main>
    <div class="mb-24">
      <img :src="slider_1" alt="slider_1" />
    </div>

    <div class="grid max-w-full grid-cols-4 gap-4 mx-auto mb-6 md:grid-cols-4">
      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>
      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>

      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>

      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>

      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>

      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>
      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>
      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>
      <div class="overflow-hidden border border-gray-300 shadow-lg rounded-2xl">
        <img class="w-auto p-[14px] rounded-[20px]" :src="course_1" alt="Sunset in the mountains" />
        <div class="p-[14px]">
          <div class="text-lg font-semibold mb-[10px]">General Psychology</div>
          <p class="flex items-start space-x-2">
            <PhCertificate class="text-blue-100" :size="18" />
            <span class="leading-tight">
              <p class="text-sm font-normal text-blue-100">SFUx Certificate</p>
            </span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { PhCertificate } from '@phosphor-icons/vue'
import slider_1 from '../assets/images/slider/slider1.png'
import course_1 from '../assets/images/slider/course.png'
</script>
