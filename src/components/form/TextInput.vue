<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'
import { PhWarningCircle } from '@phosphor-icons/vue'

const props = withDefaults(
  defineProps<{
    type?: 'text' | 'number' | 'email' | 'file' | 'tel' | 'password' | 'hidden' | 'image'
    value?: string
    name: string
    label?: string
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    type: 'text',
    disabled: false
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
        :type="type"
        :value="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleChange"
        @blur="handleBlur"
      />

      <div
        v-show="errorMessage"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <PhWarningCircle class="w-5 h-5 text-xl text-red-500" />
      </div>
    </div>

    <p class="text-red-50 text-sm mt-1" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>
