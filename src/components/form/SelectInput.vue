<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'
import Multiselect from '@vueform/multiselect'

const props = defineProps<{
  value?: string | string[]
  name: string
  label: string
  placeholder?: string
  mode: 'multiple' | 'tags' | 'single'
  options: { value: string; label: string }[]
}>()

const name = toRef(props, 'name')

const { value, errorMessage } = useField(name, undefined, {
  initialValue: props.value
})
</script>

<template>
  <div>
    <label :for="name" class="text-sm text-black-100">{{ label }}</label>
    <Multiselect
      v-model="value"
      :mode="mode"
      :close-on-select="true"
      :searchable="true"
      :create-option="false"
      :options="options"
      :id="name"
      class="mt-1 rounded-lg"
      :class="{
        'border-red-50 focus:outline-none focus:border-red-50 focus:ring-1 focus:ring-red-50':
          errorMessage,
        'focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500': !errorMessage
      }"
    />

    <p class="mt-1 text-sm text-red-50" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
.multiselect.is-active {
  border: 1px solid #0ea5e9 !important;
  box-shadow: 0 0 0 1px #0ea5e9 !important;
}
</style>
