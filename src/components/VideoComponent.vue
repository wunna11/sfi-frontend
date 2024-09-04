<template>
  <div>
    <video id="my-video" class="video-js w-full" controls preload="auto" data-setup="{}">
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
      </p>
    </video>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css' // Importing Video.js CSS

const videoPlayer = ref<any>(null)

onMounted(() => {
  videoPlayer.value = videojs('my-video', {
    controls: true,
    fluid: true,
    autoplay: true,
    preload: 'auto',
    responsive: true
  })
})
</script>
