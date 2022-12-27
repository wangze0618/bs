<template>
  <div class="hotel-detail-carousel">
    <Swiper
      class="swiper"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
    >
      <SwiperSlide class="swiper-item">
        <img src="" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation } from "swiper"

import "swiper/scss"
import "swiper/scss/pagination"
import "swiper/scss/navigation"
const modules = [Pagination, Navigation]

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
})
</script>

<style scoped lang="scss">
.title {
  text-align: center;
}
.swiper-item {
  height: 300px;
}
</style>
