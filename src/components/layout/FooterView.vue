<template>
  <footer class="bg-blue-200 px-[165px] text-white-50 py-[75px]">
    <div class="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3">
      <!-- Locate Us -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold">LOCATE US:</h3>
        <p class="flex items-start space-x-2">
          <PhMapPinLine :size="18" />
          <span class="leading-tight">
            No-9A, Baho Road, Sanchaung Township,<br />
            Yangon
          </span>
        </p>
        <p class="flex items-start space-x-2">
          <PhCalendarCheck :size="18" />
          <span class="leading-tight">Monday - Sunday (09:00 AM - 19:00 PM)</span>
        </p>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold">QUICK LINK:</h3>
        <ul class="space-y-2">
          <li><a href="/about" class="hover:text-gray-300">About Us</a></li>
          <li><a href="/support/PrivacyPolicy" class="hover:text-gray-300">Privacy Policy</a></li>
          <li><a href="/support/FAQ" class="hover:text-gray-300">FAQ</a></li>
          <li><a href="/support/TnC" class="hover:text-gray-300">Terms & Conditions</a></li>
        </ul>
      </div>

      <!-- Contact Us -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold">CONTACT US:</h3>

        <p class="flex items-start space-x-2">
          <PhPhoneCall :size="18" />
          <span class="leading-tight">
            +95 9400088051, +95 9400088052<br />
            +95 9400088053, +95 9400088054
          </span>
        </p>
        <p class="flex items-start space-x-2">
          <PhEnvelopeSimple :size="18" />
          <span class="leading-tight"> info@sfux.strategyfirst.edu.mm </span>
        </p>
        <div class="flex space-x-4">
          <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link">
            <img :src="icon.imgSrc" :alt="icon.alt" class="w-[45px] h-[45px]" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { PhCalendarCheck, PhPhoneCall, PhEnvelopeSimple, PhMapPinLine } from '@phosphor-icons/vue'
import { ref } from 'vue'
import FB from '@/assets/images/FB.png'
import IG from '@/assets/images/IG.png'
import LinkedIn from '@/assets/images/LinkedIn.png'
import Tiktok from '@/assets/images/Tiktok.png'
import Telegram from '@/assets/images/Telegram.png'
import Youtube from '@/assets/images/Youtube.png'

const socialIcons = ref([
  { imgSrc: FB, alt: 'Facebook', link: '#' },
  { imgSrc: IG, alt: 'Instagram', link: '#' },
  { imgSrc: LinkedIn, alt: 'LinkedIn', link: '#' },
  { imgSrc: Tiktok, alt: 'Tiktok', link: '#' },
  { imgSrc: Telegram, alt: 'Telegram', link: '#' },
  { imgSrc: Youtube, alt: 'Youtube', link: '#' }
])
</script>
