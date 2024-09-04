<template>
  <div class="container p-6 mx-auto">
    <h1 class="mb-4 text-2xl font-bold text-primary">Contact Us</h1>
    <hr class="w-full mb-6 border-gray-800" />

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <!-- Contact Information -->
      <div class="space-y-4">
        <div class="text-black-100 mb-7">
          We’re here to help, and we’d love to hear from you! Whether you have a question or a
          comment, you can reach out to us through the following phone numbers, email, or social
          media.
        </div>

        <div class="flex items-center space-x-2">
          <PhMapPinLine :size="28" class="mb-3 text-primary" :weight="'fill'" />
          <span class="mb-3">No-9A, Baho Road, Sanchaung Township, Yangon</span>
        </div>

        <div class="flex items-center space-x-2">
          <PhCalendarCheck :size="28" class="mb-3 text-primary" :weight="'fill'" />
          <span class="mb-3">Monday - Sunday (09:00 AM - 19:00 PM)</span>
        </div>

        <div class="flex items-center space-x-2">
          <PhPhoneCall :size="28" class="mb-3 text-primary" :weight="'fill'" />
          <span class="mb-3 text-blue-150">
            <a href="tel:+959400088051" class="text-blue-150">+95 9400088051</a>,
            <a href="tel:+959400088052" class="text-blue-150">+95 9400088052</a><br />
            <a href="tel:+959400088053" class="text-blue-150">+95 9400088053</a>,
            <a href="tel:+959400088054" class="text-blue-150">+95 9400088054</a>
          </span>
        </div>

        <div class="flex items-center space-x-2">
          <PhEnvelope :size="28" class="mb-3 text-primary" :weight="'fill'" />
          <a href="mailto:info@sfux.strategyfirst.edu.mm" class="mb-3 text-blue-150"
            >info@sfux.strategyfirst.edu.mm</a
          >
        </div>

        <!-- Social Media Icons -->
        <div class="flex space-x-4">
          <div class="p-2 rounded-lg bg-white-150">
            <PhFacebookLogo :size="25" class="text-primary" :weight="'fill'" />
          </div>
          <div class="p-2 rounded-lg bg-white-150">
            <PhPhone :size="25" class="text-primary" :weight="'fill'" />
          </div>
          <div class="p-2 rounded-lg bg-white-150">
            <PhLinkedinLogo :size="25" class="text-primary" :weight="'fill'" />
          </div>
          <div class="p-2 rounded-lg bg-white-150">
            <PhTiktokLogo :size="25" class="text-primary" :weight="'fill'" />
          </div>
          <div class="p-2 rounded-lg bg-white-150">
            <PhTelegramLogo :size="25" class="text-primary" :weight="'fill'" />
          </div>
          <div class="p-2 rounded-lg bg-white-150">
            <PhYoutubeLogo :size="25" class="text-primary" :weight="'fill'" />
          </div>
        </div>
      </div>

      <!-- Google Map Embed -->
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.325835958444!2d96.12341193240024!3d16.810184069522737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ebe4445b4431%3A0x9879ec18b4e187cf!2sStrategy%20First%20Education%20Group%20(Head%20Office)!5e0!3m2!1sen!2smm!4v1714019434816!5m2!1sen!2smm"
          width="100%"
          height="400"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="border border-gray-300 rounded-lg"
        >
        </iframe>
      </div>
    </div>
    <br /><br />
    <!-- Contact Form UI -->
    <div class="p-8 my-8 rounded-lg shadow-lg bg-white-150">
      <div class="mb-4 text-center">
        <img
          src="/src/assets/images/contactus.png"
          alt="Payment Method 1"
          class="w-12 h-12 mx-auto"
        />
        <h2 class="mt-3 text-lg">LET US KNOW YOUR THOUGHTS</h2>
      </div>

      <!-- Form UI -->
      <Form @submit="onSubmit" :validation-schema="userContactSchema">
        <div class="mb-6">
          <TextInput name="email" type="text" label="Email" placeholder="Enter your email" />
        </div>

        <div class="mb-4">
          <TextAreaInput
            name="message"
            type="text"
            label="Message"
            placeholder="Enter your message"
          />
        </div>

        <div class="text-right">
          <ButtonComponent title="Submit" :primary="true" type="submit" />
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextInput from '../../components/form/TextInput.vue'
import TextAreaInput from '../form/TextAreaInput.vue'
import { ContactVType, userContactSchema } from '../../utils/validation/contact'
import { Form, GenericObject } from 'vee-validate'
import ButtonComponent from '../../components/form/ButtonComponent.vue'

import {
  PhMapPinLine,
  PhPhoneCall,
  PhCalendarCheck,
  PhPhone,
  PhEnvelope,
  PhFacebookLogo,
  PhLinkedinLogo,
  PhTiktokLogo,
  PhTelegramLogo,
  PhYoutubeLogo
} from '@phosphor-icons/vue'

function onSubmit(values: GenericObject) {
  const data = values as ContactVType
  console.log('values', data, values)
}
</script>
