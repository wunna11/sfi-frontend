<script setup lang="ts">
import { ref, toRef, watch } from 'vue'
import { useField } from 'vee-validate'
import moment from 'moment'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = withDefaults(
  defineProps<{
    value?: string
    name: string
    label: string
    disabled?: boolean
  }>(),
  {}
)

const name = toRef(props, 'name')

const { errorMessage, handleChange } = useField(name)

const date = ref(new Date())

// Watch for changes in date and update the validation field value
watch(date, (newDate) => {
  handleChange(moment(newDate).format('YYYY-MM-DD'))
})

const format = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}
</script>

<template>
  <div>
    <label :for="name" class="text-sm text-black-100">{{ label }}</label>
    <VueDatePicker
      :enable-time-picker="false"
      v-model="date"
      utc
      auto-apply
      :disabled="disabled"
      placeholder="Select Date"
      :name="name"
      model-type="dd.MM.yyyy"
      :format="format"
      class="mt-1"
    />
    <p class="mt-1 text-sm text-red-50" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style>
.dp__pointer {
  height: 42px !important;
  border-radius: 10px !important;
}
</style>
