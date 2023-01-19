<template>
  <div class="route-carusel">
    <Swiper
      class="swiper"
      :autoplay="autoplay"
      :navigation="navigation"
      :modules="modules"
      :speed="speed"
    >
      <slot name="swiper">
        <SwiperSlide class="swiper-slide">1</SwiperSlide>
      </slot>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/scss"
import "swiper/scss/pagination"
import "swiper/scss/navigation"

const props = defineProps({
  navigation: {
    type: Boolean,
  },
  modules: {
    type: Array,
  },
  autoplay: {
    type: [Object, Boolean],
  },
  speed: {
    type: [String, Number],
  },
})
</script>

<style scoped lang="scss"></style>
