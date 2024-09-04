<template>
  <AuthBgLayout>
    <div class="w-3/12 rounded-xl bg-white-50 p-10 shadow-lg backdrop-blur-md max-sm:p-6">
      <LogoAndTitleGp title="Forgot Password!" />

      <div class="mt-5 flex flex-col space-y-4">
        <p class="text-gray-50 text-sm">
          Please enter your phone number that used to open the account
        </p>
        <TextInput name="phone" type="tel" label="Phone" placeholder="09xxxxxxx" />
        <ButtonComponent title="CONTINUE" primary customClass="py-3" type="submit" isDisabled />
      </div>
    </div>
  </AuthBgLayout>
</template>

<script setup lang="ts">
import AuthBgLayout from '../../components/layout/AuthBgLayout.vue'
import TextInput from '../../components/form/TextInput.vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
import LogoAndTitleGp from '../../components/LogoAndTitleGp.vue'
</script>
