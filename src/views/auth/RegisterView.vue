<template>
  <AuthBgLayout>
    <div class="w-5/12 p-10 shadow-lg rounded-xl bg-white-50 backdrop-blur-md max-sm:p-6">
      <LogoAndTitleGp title="Register Account" />

      <Form class="my-5" @submit="onSubmit" :validation-schema="userRegisterSchema">
        <div class="grid grid-cols-2 gap-4">
          <TextInput name="name" type="text" label="Name" placeholder="Enter your name" />
          <SelectInput name="country" label="Country" mode="single" :options="countryList" />
          <TextInput name="phone" type="tel" label="Phone Number" placeholder="09xxxxxxx" />
          <TextInput name="email" type="text" label="Email" placeholder="Enter your email" />
        </div>

        <div class="grid grid-cols-1 gap-4 mt-4">
          <PasswordInput
            name="password"
            type="password"
            label="Create Password"
            placeholder="Must have at least 6 characters"
          />
          <PasswordInput
            name="confirm_password"
            type="password"
            label="Re-type Password"
            placeholder="Enter password again"
          />
          <ButtonComponent title="REGISTER" primary customClass="py-3" type="submit" />
        </div>
      </Form>

      <div class="flex flex-col space-y-4">
        <SocialAuth />
      </div>
    </div>
  </AuthBgLayout>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import AuthBgLayout from '../../components/layout/AuthBgLayout.vue'
import TextInput from '../../components/form/TextInput.vue'
import PasswordInput from '../../components/form/PasswordInput.vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
import SocialAuth from '../../components/SocialAuth.vue'
import SelectInput from '../../components/form/SelectInput.vue'
import LogoAndTitleGp from '../../components/LogoAndTitleGp.vue'
import { userRegisterSchema } from '../../utils/validation/auth/register'

const countryList = [
  { value: 'myanmar', label: 'Myanmar' },
  { value: 'singapore', label: 'Singapore' }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onSubmit(values: any) {
  console.log('values', values)
}
</script>
