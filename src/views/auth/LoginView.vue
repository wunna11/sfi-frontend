<template>
  <AuthBgLayout>
    <div class="w-3/12 rounded-xl bg-white-50 p-10 shadow-lg backdrop-blur-md max-sm:p-6">
      <LogoAndTitleGp title="Login with Phone Number" />

      <div class="mt-5 flex flex-col space-y-4">
        <Form
          class="flex flex-col space-y-4"
          @submit="onSubmit"
          :validation-schema="userLoginSchema"
        >
          <TextInput name="phone" type="tel" label="Phone" placeholder="09xxxxxxx" />

          <PasswordInput
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />

          <div class="text-right mb-[20px]">
            <a
              href="/forget-password"
              className="text-[14px] text-blue-50 font-medium hover:text-blue-100"
            >
              Forgot Password?
            </a>
          </div>

          <ButtonComponent title="LOGIN" primary customClass="py-3" type="submit" />
        </Form>

        <SocialAuth />
      </div>
    </div>
  </AuthBgLayout>
</template>

<script setup lang="ts">
import { Form, GenericObject } from 'vee-validate'
import { LoginVType, userLoginSchema } from '../../utils/validation/auth/login'
import AuthBgLayout from '../../components/layout/AuthBgLayout.vue'
import TextInput from '../../components/form/TextInput.vue'
import PasswordInput from '../../components/form/PasswordInput.vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
import SocialAuth from '../../components/SocialAuth.vue'
import LogoAndTitleGp from '../../components/LogoAndTitleGp.vue'

function onSubmit(values: GenericObject) {
  const data = values as LoginVType
  console.log('values', data, values)
}
</script>
