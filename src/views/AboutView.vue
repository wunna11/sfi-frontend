<template>
  <div class="container my-5">
    <div class="text-black-100">
      SFIx is an online learning application founded in Myanmar on March 26, 2020. SFIx (Strategy
      First Extension) Ltd. is a subsidiary of Strategy First Education Group Ltd., which was
      established to offer an expansive range of educational programs. Our mission is to facilitate
      inclusive education and essential knowledge for the development of Myanmar nationwide. We are
      dedicated to making education accessible and affordable for all, ensuring our courses are not
      only of high quality but also practical and beneficial in the workplace. We strive to empower
      individuals and contribute to the country's growth through our commitment to excellent service
      and continuous innovation.
    </div>

    <img src="/src/assets/images/Rectangle.png" alt="About" class="my-10" />

    <!-- Vision & Mission Section -->
    <div class="grid grid-cols-2 gap-4 mb-10">
      <div
        class="p-10 text-center text-white rounded-xl bg-gradient-to-t from-primary to-secondary"
      >
        <div class="flex justify-center mb-4">
          <img src="/src/assets/images/vision.png" alt="About" class="w-20 h-20" />
        </div>
        <h3 class="text-xl font-semibold text-white-50">OUR VISION</h3>
        <p class="mt-4 text-white-50">
          “To be the catalyst of knowledge, empowerment, and growth in Myanmar, driving sustainable
          development through inclusive, accessible, and innovative education.”
        </p>
      </div>

      <div
        class="p-10 text-center text-white rounded-xl bg-gradient-to-t from-primary to-secondary"
      >
        <div class="flex justify-center mb-4">
          <img src="/src/assets/images/mission.png" alt="About" class="w-20 h-20" />
        </div>
        <h3 class="text-xl font-semibold text-white-50">OUR MISSION</h3>
        <p class="mt-4 text-white-50">
          “Inclusive Education for Personal and National Development.”
        </p>
      </div>
    </div>

    <!-- Our People Section -->
    <div class="container mx-auto text-center">
      <h3 class="mb-6 text-2xl font-semibold text-primary">OUR PEOPLE</h3>

      <div class="flex justify-center my-10">
        <div v-for="(person, index) in firstRowPeople" :key="index" class="mx-4 text-center">
          <img :src="person.image" :alt="person.name" class="mx-auto mb-2 rounded-full h-28 w-28" />
          <p class="text-sm font-medium">{{ person.name }}</p>
        </div>
      </div>

      <div class="flex justify-center mb-10">
        <div v-for="(person, index) in secondRowPeople" :key="index" class="text-center mx-7">
          <img :src="person.image" :alt="person.name" class="mx-auto mb-2 rounded-full h-28 w-28" />
          <p class="text-sm font-medium">{{ person.name }}</p>
        </div>
      </div>

      <div class="flex justify-center">
        <div v-for="(person, index) in thirdRowPeople" :key="index" class="text-center mx-7">
          <img :src="person.image" :alt="person.name" class="mx-auto mb-2 rounded-full h-28 w-28" />
          <p class="text-sm font-medium">{{ person.name }}</p>
        </div>
      </div>
    </div>

    <!-- Our Partnership Section -->
    <div class="container py-5 my-20 rounded-md bg-white-150">
      <h3 class="text-2xl font-semibold text-center text-primary">OUR PARTNERSHIP</h3>
      <div class="flex justify-center gap-8 my-8">
        <img src="/src/assets/images/partnership/aia.png" alt="AIA" class="h-20 rounded-lg w-52" />
        <img
          src="/src/assets/images/partnership/mcrb.png"
          alt="MCRB"
          class="h-20 rounded-lg w-52"
        />
        <img
          src="/src/assets/images/partnership/yryea.png"
          alt="YRYEA"
          class="h-20 rounded-lg w-52"
        />
        <img src="/src/assets/images/partnership/yse.png" alt="YSE" class="h-20 rounded-lg w-52" />
      </div>
    </div>

    <!-- Social Impact Section -->
    <SliderComponent />

    <!-- More About SFIx Section -->
    <div class="container p-4 mx-auto my-14">
      <h3 class="mb-8 text-2xl font-semibold text-center text-primary">MORE ABOUT SFIX</h3>
      <div class="flex justify-center space-x-20">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center justify-between p-6 rounded-lg shadow-md w-96 bg-gray-150 text-black-100"
        >
          <span class="text-lg">{{ item.title }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SliderComponent from '../components/SliderComponent.vue';

const firstRowPeople = ref([
  { name: 'U Aung Chit Khin', image: '/src/assets/images/our-people/ack.png' },
  { name: 'U Aung Kyaw Htay', image: '/src/assets/images/our-people/akh.png' },
  { name: 'U Wai Yan Paing Zaw', image: '/src/assets/images/our-people/wypz.png' }
])

const secondRowPeople = ref([
  { name: 'Kaung Htet Kyaw', image: '/src/assets/images/our-people/khk.png' },
  { name: 'Yoon Phoo Swe', image: '/src/assets/images/our-people/yps.png' },
  { name: 'Zin Mar Aye', image: '/src/assets/images/our-people/zma.png' },
  { name: 'Shun Lae Oo', image: '/src/assets/images/our-people/slo.png' },
  { name: 'Thet Naing Htun', image: '/src/assets/images/our-people/tnh.png' }
])

const thirdRowPeople = ref([
  { name: 'Phyo Yadanar Kyaw', image: '/src/assets/images/our-people/pyk.png' },
  { name: 'Su Mon Hlaing', image: '/src/assets/images/our-people/smh.png' },
  { name: 'Shine Aung Khant', image: '/src/assets/images/our-people/boy.png' },
  { name: 'Ei Kay Zin', image: '/src/assets/images/our-people/ekz.png' },
  { name: 'Wunna', image: '/src/assets/images/our-people/boy.png' },
  { name: 'Saw Thiha Soe', image: '/src/assets/images/our-people/boy.png' }
])

const items = ref([
  { title: 'How to get started' },
  { title: 'SFIx Job' },
  { title: 'Read articles on SFIx' }
])
</script>
