<template>
  <div class="carousel">
    <Swiper
      class="swiper"
      :modules="modules"
      navigation
      :pagination="{
        clickable: true,
      }"
      :speed="600"
    >
      <SwiperSlide class="item" v-for="i in list">
        <img v-img-lazyload="i" class="img" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination } from "swiper"
import "swiper/scss"
import "swiper/scss/pagination"
import "swiper/scss/navigation"
const modules = [Navigation, Pagination]

const props = defineProps({
  list: {},
})
</script>

<style scoped lang="scss">
.swiper {
  user-select: none;
  :deep(.swiper-button-prev) {
    backdrop-filter: blur(5px);
    padding: 0.4em;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    border: 1px solid var(--color-border-1);
    &::after {
      font-size: 20px;
      font-weight: 700;
      color: var(--color-text);
    }
  }
  :deep(.swiper-button-next) {
    backdrop-filter: blur(5px);
    padding: 0.4em;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    border: 1px solid var(--color-border-1);
    &::after {
      font-size: 20px;
      font-weight: 700;
      color: var(--color-text);
    }
  }
  :deep(.swiper-pagination) {
    bottom: 0em !important;
  }
  :deep(.swiper-pagination-bullet) {
    background-color: #fff;
    height: 0.8em;
    width: 0.8em;
  }
  .item {
    .img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
