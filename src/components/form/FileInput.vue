<script setup lang="ts">
import { ref, toRef } from 'vue'
import { useField } from 'vee-validate'
import { PhCloudArrowUp, PhTrash, PhWarningCircle } from '@phosphor-icons/vue'

const props = withDefaults(
  defineProps<{
    value?: string
    name: string
    label?: string
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    disabled: false
  }
)

const name = toRef(props, 'name')
const { resetField, errorMessage, handleBlur, handleChange, meta } = useField(name, undefined, {
  initialValue: props.value
})

const fileInputRef = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null) // Store the selected file
const fileName = ref<string | null>(null)
const fileSize = ref<number | string | null>(null)

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files && target.files.length > 0) {
    selectedFile.value = target.files[0]
    fileName.value = target.files[0].name
    fileSize.value = target.files[0].size
    handleChange(event)
  }
}

const removeFile = () => {
  selectedFile.value = null
  resetField()
}
</script>

<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <div class="relative">
      <div
        class="flex items-center justify-center block bg-white-50 w-full p-4 border-dashed border-2 text-sm rounded-lg placeholder-gray-200"
      >
        <div class="flex items-center justify-center space-x-2">
          <PhCloudArrowUp :size="32" color="#212121" />
          <p
            class="text-blue-50 underline underline-offset-1 cursor-pointer"
            @click="triggerFileInput"
          >
            Click Here
          </p>
          <span class="text-gray-200 text-center"> to upload your payment screenshot </span>
        </div>

        <div class="flex items-center justify-center rounded-r-lg cursor-pointer">
          <input
            ref="fileInputRef"
            :name="name"
            :id="name"
            type="file"
            @input="handleFileChange"
            @blur="handleBlur"
            :placeholder="placeholder"
            :disabled="disabled"
            hidden
          />
        </div>
      </div>

      <div
        v-show="selectedFile"
        class="flex justify-between py-4 px-8 rounded-lg bg-white-150 mt-[10px]"
      >
        <div class="flex space-x-4">
          <img src="../../assets/images/png.png" alt="PNG" />
          <div class="flex flex-col">
            <p class="text-gray-800 text-base font-medium">{{ fileName }}</p>
            <p class="text-gray-400 text-xs font-normal">{{ fileSize }}KB</p>
          </div>
        </div>

        <div @click="removeFile" class="flex items-center justify-center cursor-pointer">
          <PhTrash :size="28" color="#212121" />
        </div>
      </div>

      <div
        v-show="errorMessage"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <PhWarningCircle class="w-5 h-5 text-xl text-red-500" />
      </div>
    </div>

    <p class="text-red-50 text-sm mt-2" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>
  </div>
</template>
