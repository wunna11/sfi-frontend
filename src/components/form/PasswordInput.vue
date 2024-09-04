<script setup lang="ts">
import { toRef, ref } from 'vue'
import { useField } from 'vee-validate'
import { PhWarningCircle, PhEyeClosed, PhEye } from '@phosphor-icons/vue'

const props = withDefaults(
  defineProps<{
    type: 'password' | 'text'
    value?: string
    name: string
    label: string
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    disabled: false,
    type: 'password'
  }
)

const name = toRef(props, 'name')
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta
} = useField(name, undefined, {
  initialValue: props.value
})

const values = ref({
  password: '',
  showPassword: false
})

function handleClickShowPwd() {
  values.value.showPassword = !values.value.showPassword
}
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label :for="name" class="text-black-100 text-sm">{{ label }}</label>
    <div class="relative">
      <input
        class="block w-full border border-gray-800 text-sm text-black-100 rounded-lg mt-1 p-2.5 placeholder-gray-400"
        :class="{
          'border-red-50 focus:outline-none focus:border-red-50 focus:ring-1 focus:ring-red-50':
            errorMessage,
          'text-gray-400': disabled,
          'focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500': !errorMessage
        }"
        :name="name"
        :id="name"
        :type="values.showPassword ? 'text' : 'password'"
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleChange"
        @blur="handleBlur"
        autoComplete="off"
      />

      <div
        v-show="errorMessage"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <PhWarningCircle class="w-5 h-5 text-xl text-red-500" />
      </div>

      <div
        v-show="!errorMessage"
        class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        @click="handleClickShowPwd"
      >
        <PhEye v-if="values.showPassword" class="w-5 h-5 text-xl text-black-100" />

        <PhEyeClosed v-else class="w-5 h-5 text-xl text-black-100" />
      </div>
    </div>

    <p class="mt-1 text-sm text-red-50" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>
