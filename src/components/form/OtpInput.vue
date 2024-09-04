<script setup lang="ts">
import { ref, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = withDefaults(
  defineProps<{
    name: string
    value?: string
    type?: 'text' | 'number'
  }>(),
  {
    type: 'number'
  }
)

const inputs = ref<string[]>(['', '', '', '', '', ''])
const name = toRef(props, 'name')
const { value: inputValue, handleChange } = useField(name, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div class="flex space-x-2 justify-center">
    <input
      v-for="(__, index) in inputs"
      :key="index"
      class="block w-[50px] h-[50px] border border-gray-800 text-sm text-black-100 rounded-lg mt-1 p-2.5 placeholder-gray-400"
      :type="type"
      @input="handleChange"
      autoComplete="off"
      :name="name"
      :id="name"
      :value="inputValue"
    />
  </div>
</template>
