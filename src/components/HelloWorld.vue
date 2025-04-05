<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

defineProps<{
  msg: Array<string>
  isHome: boolean
}>()
</script>

<template>
  <div class="greetings">
    <swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :space-between="50"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :direction="'vertical'"
      :loop="true"
      class="green max-w-2xl max-h-11"
    >
      <swiper-slide v-for="(message, index) in msg" :key="index">
        <h1>
          {{ message }}
        </h1>
      </swiper-slide>
    </swiper>
    <h2>My name is Son</h2>
    <p class="max-w-md">
      I am a software engineer with a passion for building web applications. my current role is to
      work on the frontend of the application.
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.8rem;
  font-weight: 500;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
