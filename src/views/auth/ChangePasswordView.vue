<template>
  <AuthBgLayout>
    <div class="w-3/12 rounded-xl bg-white-50 p-10 shadow-lg backdrop-blur-md max-sm:p-6">
      <LogoAndTitleGp title="Set New Password" />

      <Form
        class="mt-5 flex flex-col space-y-4"
        @submit="onSubmit"
        :validation-schema="changePasswordSchema"
      >
        <PasswordInput
          name="password"
          type="password"
          label="New Password"
          placeholder="Enter your password"
        />

        <PasswordInput
          name="confirm_password"
          type="password"
          label="Confirm New Password"
          placeholder="Enter your password"
        />

        <ButtonComponent title="CONFIRM" primary customClass="py-3" type="submit" />
      </Form>
    </div>
  </AuthBgLayout>
</template>

<script setup lang="ts">
import { Form, GenericObject } from 'vee-validate'
import AuthBgLayout from '../../components/layout/AuthBgLayout.vue'
import PasswordInput from '../../components/form/PasswordInput.vue'
import ButtonComponent from '../../components/form/ButtonComponent.vue'
import LogoAndTitleGp from '../../components/LogoAndTitleGp.vue'
import {
  changePasswordSchema,
  ChangePasswordVType
} from '../../utils/validation/auth/changePassword'

function onSubmit(values: GenericObject) {
  const data = values as ChangePasswordVType
  console.log('values', data, values)
}
</script>
