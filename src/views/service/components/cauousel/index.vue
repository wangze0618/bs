<template>
  <div class="hotel-detail-carousel">
    <Swiper
      class="swiper"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
    >
      <SwiperSlide v-for="(item, index) in data" class="swiper-item">
        <img :src="item" alt="" />
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
.swiper {
  height: 100% !important;
  user-select: none;
  :deep(.swiper-pagination-bullet) {
    background-color: #fff;
    height: 10px;
    width: 10px;
    opacity: 0.4;
  }
  :deep(.swiper-pagination-bullet-active) {
    opacity: 1;
  }
  :deep(.swiper-button-disabled) {
    opacity: 0;
  }
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    transition: all 0.5s;
    border: 1px solid rgba(226, 226, 226, 0.249);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(#000000, 0.3);
    backdrop-filter: blur(5px);
    &::after {
      font-size: 22px !important;
    }
  }
  .swiper-item {
    width: 100%;
    transition: all 0.5s;
    height: 100% !important;
    // @media (min-width: 576px) {
    //   height: 300px;
    // }
    // @media (min-width: 768px) {
    //   height: 350px;
    // }
    // @media (min-width: 768px) {
    //   height: 400px;
    // }
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
