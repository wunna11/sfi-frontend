<template>
  <div class="grid grid-cols-10 gap-8">
    <div class="col-span-6">
      <div class="flex flex-col space-y-8">
        <VideoComponent />
        <HeaderView />
        <ChooseTab
          :onClickCourse="() => onClickHandler('courseOutline')"
          :onClickProfile="() => onClickHandler('teacherProfile')"
          :onClickBought="() => onClickHandler('studentBought')"
          :selected="currentSection"
        />
        <div v-if="visibility.courseOutline">
          <CourseOutline />
        </div>

        <div v-else-if="visibility.teacherProfile">
          <TeacherProfile />
        </div>

        <div v-else-if="visibility.studentBought">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="n in 9" :key="n">
              <StudentBought
                title="Computing Skills for Office"
                certificate="SFU Diploma"
                :src="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-4">
      <CourseOutlineList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VideoComponent from '../../components/VideoComponent.vue'
import ChooseTab from './ChooseTab.vue'
import CourseOutline from './CourseOutline.vue'
import HeaderView from './HeaderView.vue'
import TeacherProfile from './TeacherProfile.vue'
import StudentBought from './StudentBought.vue'
import CourseOutlineList from './CourseOutlineList.vue'
import image from '../../assets/images/courses/computer.png'

const visibility = ref({
  courseOutline: true,
  teacherProfile: false,
  studentBought: false
})

type Section = 'courseOutline' | 'teacherProfile' | 'studentBought'
const currentSection = ref<Section>('courseOutline')

const onClickHandler = (section: Section) => {
  Object.keys(visibility.value).forEach((key) => {
    visibility.value[key as Section] = false
  })

  visibility.value[section] = true
  currentSection.value = section
}
</script>
