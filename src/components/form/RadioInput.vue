<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'
import { PhWarningCircle } from '@phosphor-icons/vue'

// Define props with default values
const props = withDefaults(
  defineProps<{
    value?: string
    name: string
    label: string
    placeholder?: string
    disabled?: boolean
    options: { label: string; value: string | number }[] // Options for radio buttons
  }>(),
  {
    disabled: false
  }
)

// Extract the name prop using toRef
const name = toRef(props, 'name')

// Set up useField with vee-validate
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  meta
} = useField(name, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <div class="flex space-x-2">
      <!-- Loop through options to create radio buttons -->
      <div
        v-for="(option, index) in props.options"
        :key="index"
        class="flex items-center space-x-2"
      >
        <input
          :name="name"
          :id="`${name}-${index}`"
          type="radio"
          :value="option.value"
          v-model="inputValue"
          :disabled="props.disabled"
          @blur="handleBlur"
        />
        <label :for="`${name}-${index}`" class="text-black-100 text-md">{{ option.label }}</label>
      </div>
    </div>
    <div
      v-show="errorMessage"
      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
    >
      <PhWarningCircle class="w-5 h-5 text-xl text-red-500" />
    </div>
    <p class="text-red-50 text-sm mt-1" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>
