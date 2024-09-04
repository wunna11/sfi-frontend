<template>
  <div>
    <h1 class="mb-6 text-xl font-semibold text-primary">Personal Information</h1>

    <hr class="w-full mb-6 border-gray-800" />
    <div class="grid grid-cols-2 gap-4">
      <div>
        <TextInput name="name" type="text" label="Name" placeholder="Enter your name" />
      </div>
      <div>
        <TextInput name="std_id" type="text" label="Student ID" placeholder="Student ID" />
      </div>

      <div>
        <TextInput name="email" type="text" label="Email" placeholder="Enter your email" />
      </div>
      <div>
        <TextInput name="phone" type="number" label="Phone Number" placeholder="09xxxxxxx" />
      </div>

      <div class="col-span-2">
        <TextInput name="address" type="text" label="Address" placeholder="Enter Your Address" />
      </div>

      <div>
        <DatePicker label="Date of Birth" name="dob" />
      </div>
      <div>
        <SelectInput name="gender" label="Gender" mode="single" :options="genderLists" />
      </div>
      <div>
        <label class="block text-gray-700"></label>
        <TextInput
          name="nrc_info"
          type="text"
          label="NRC Information"
          placeholder="12/KAMAYA (N) 123456"
        />
      </div>
      <div>
        <SelectInput name="country" label="Country" mode="single" :options="countryList" />
      </div>
      <div>
        <SelectInput name="division" label="Division" mode="single" :options="divisionList" />
      </div>
      <div>
        <SelectInput name="city" label="City" mode="single" :options="cityList" />
      </div>

      <div class="col-span-2">
        <h1 class="text-sm font-normal">Academic History</h1>

        <div
          v-for="AcademicList in AcademicLists"
          :key="AcademicList.id"
          class="rounded-[10px] font-item w-full h-fit border border-gray-800 min-h-[50px] p-[14px] mb-1"
        >
          <div class="flex justify-between py-1">
            <p class="text-sm font-semibold">{{ AcademicList.school }}</p>
            <PhTrash class="cursor-pointer text-gray-850" :size="16" />
          </div>
          <p class="py-1 text-xs font-normal text-gray-850">{{ AcademicList.degree }}</p>
          <p class="py-1 text-xs font-normal text-gray-850">{{ AcademicList.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import TextInput from '../../components/form/TextInput.vue'
import SelectInput from '../../components/form/SelectInput.vue'
import DatePicker from '../../components/form/DatePicker.vue'
import { PhTrash } from '@phosphor-icons/vue'

const AcademicLists = [
  {
    id: 1,
    school: 'University of Computer Studies, Yangon',
    degree: 'Bachelor’s Degree',
    date: 'Dec 2017 - Mar 2023'
  },
  {
    id: 2,
    school: 'Kyoto University of Design',
    degree: 'Master Degree',
    date: 'Jun 2023 - Apr 2024'
  }
]

const genderLists = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' }
]
const countryList = [
  { value: 'myanmar', label: 'Myanmar' },
  { value: 'singapore', label: 'Singapore' }
]
//myanmar division
const divisionList = [
  { value: 'yangon', label: 'Yangon' },
  { value: 'mandalay', label: 'Mandalay' },
  { value: 'naypyitaw', label: 'Naypyitaw' }
]
// myanmar city
const cityList = [
  { value: 'yangon', label: 'Yangon' },
  { value: 'mandalay', label: 'Mandalay' },
  { value: 'naypyitaw', label: 'Naypyitaw' }
]
</script>
