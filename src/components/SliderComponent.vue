<template>
  <div class="container p-4 mx-auto">
    <h3 class="mb-6 text-2xl font-semibold text-center text-primary">SOCIAL IMPACT</h3>
    <div class="flex items-center justify-center">
      <button @click="prevSlide" class="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="flex items-center justify-center w-full overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionDuration: transitionDuration + 'ms'
          }"
        >
          <div v-for="(slide, index) in extendedSlides" :key="index" class="flex-none w-full">
            <h4 class="mb-2 text-center text-md">{{ slide.title }}</h4>
            <div class="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
              <img :src="slide.image" alt="Slide Image" class="h-56 w-80 md:w-1/2" />
              <div class="text-left md:pl-6">
                <blockquote class="mb-8 text-lg italic text-primary">
                  “{{ slide.quote }}”
                </blockquote>
                <p class="mb-8 text-sm">{{ slide.description }}</p>
                <p class="mt-2 text-sm font-semibold">{{ slide.author }};</p>
                <p class="text-sm">{{ slide.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="nextSlide" class="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'

const slides = ref([
  {
    image: '/src/assets/images/Rectangle.png',
    title: 'Pizza ipsum dolor meat lovers buffalo. Tossed beef steak green meat melted.',
    quote: 'Slider 1',
    description:
      'Pizza ipsum dolor meat lovers buffalo. Tossed beef steak green meat melted.Hand pizza tomato red mushrooms personal broccoli. Bell meat garlic string platter Chicago ham wing.',
    author: 'Christopher',
    position: 'University of computer studies'
  },
  {
    image: '/src/assets/images/Rectangle.png',
    title: 'Pizza ipsum dolor meat lovers buffalo. Tossed beef steak green meat melted.',
    quote: 'Slider 2',
    description:
      'Pizza ipsum dolor meat lovers buffalo. Tossed beef steak green meat melted.Hand pizza tomato red mushrooms personal broccoli. Bell meat garlic string platter Chicago ham wing.',
    author: 'Christopher',
    position: 'University of computer studies'
  },
  {
    image: '/src/assets/images/Rectangle.png',
    title: 'Pizza ipsum dolor meat lovers buffalo. Tossed beef steak green meat melted.',
    quote: 'Slider 3',
    description:
      'Pizza ipsum dolor meat lovers buffalo. Tossed beef steak green meat melted.Hand pizza tomato red mushrooms personal broccoli. Bell meat garlic string platter Chicago ham wing.',
    author: 'Christopher',
    position: 'University of computer studies'
  }
])

const currentIndex = ref(1)
const transitionDuration = ref(500)

const extendedSlides = computed(() => {
  return [
    slides.value[slides.value.length - 1], // Clone last slide to the beginning
    ...slides.value, // Original slides
    slides.value[0] // Clone first slide to the end
  ]
})

const prevSlide = () => {
  currentIndex.value--
  if (currentIndex.value < 0) {
    currentIndex.value = slides.value.length - 1
    setTimeout(() => {
      transitionDuration.value = 0
      currentIndex.value = slides.value.length
    }, 500)
  } else {
    transitionDuration.value = 500
  }
}

const nextSlide = () => {
  currentIndex.value++
  if (currentIndex.value > slides.value.length) {
    setTimeout(() => {
      transitionDuration.value = 0
      currentIndex.value = 1
    }, 500)
  } else {
    transitionDuration.value = 500
  }
}

// Auto-slide logic
const autoSlide = () => {
  nextSlide()
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
let slideInterval: any

onMounted(() => {
  slideInterval = setInterval(autoSlide, 3000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})

watch(currentIndex, (newIndex) => {
  if (newIndex === 0 || newIndex === slides.value.length + 1) {
    setTimeout(() => {
      transitionDuration.value = 0 // Remove transition for instant move
      if (newIndex === 0) {
        currentIndex.value = slides.value.length
      } else if (newIndex === slides.value.length + 1) {
        currentIndex.value = 1
      }
    }, 500)
  }
})
</script>
