<template>
  <div class="route-carusel">
    <Swiper class="swiper" navigation :modules="modules">
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
})
</script>

<style scoped lang="scss"></style>
