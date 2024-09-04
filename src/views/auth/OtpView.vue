<template>
  <AuthBgLayout>
    <div class="p-10 shadow-lg rounded-xl bg-white-50 backdrop-blur-md max-sm:p-6">
      <LogoAndTitleGp title="Otp Verification" />

      <Form class="flex flex-col mt-5 space-y-4" @submit="onSubmit">
        <p class="text-sm text-gray-50">
          Enter 6 digits code we've sent to your phone number 09768676123
        </p>

        <TextInput name="phone" type="number" label="Phone" placeholder="09xxxxxxx" />

        <div class="text-right mb-[20px]">
          <a
            href="/forget-password"
            className="text-[14px] text-blue-50 font-medium hover:text-blue-100"
          >
            Resend Code
          </a>
        </div>
        <ButtonComponent title="CONFIRM" :primary="true" customClass="py-3" type="submit" />
      </Form>
    </div>
  </AuthBgLayout>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import AuthBgLayout from '../../components/layout/AuthBgLayout.vue'
import TextInput from '../../components/form/TextInput.vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
import LogoAndTitleGp from '../../components/LogoAndTitleGp.vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSubmit(values: any) {
  console.log('values', values)
}
</script>
