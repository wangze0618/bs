<template>
  <div class="news-carousel">
    <Swiper
      class="swiper"
      :navigation="true"
      :pagination="{ clickable: true }"
      :modules="modules"
      :slides-per-view="1"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <template v-for="(item, index) in data" :key="index">
        <SwiperSlide class="swiper-item">
          <img @click="goToNews(item.url)" :src="item.img" />
        </SwiperSlide>
        <div class="info" v-if="index === rIndex">
          <VolumeNotice></VolumeNotice>
          <p>{{ item.info }}</p>
        </div>
      </template>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Pagination, Navigation } from "swiper"
import "swiper/scss"
import "swiper/scss/pagination"
import "swiper/scss/navigation"
import { VolumeNotice } from "@icon-park/vue-next"
const props = defineProps({
  data: {
    type: Array,
    default: () => [
      {
        img: require("@/assets/upload/news/1.jpg"),
        info: "关于春节期间临时停车的通告",
        url: "https://mp.weixin.qq.com/s/orIkI7flFwIq8S2GbOzdSg",
      },
      {
        img: require("@/assets/upload/keju.jpg"),
        info: "招聘|尧坝古镇景区招聘公告",
        url: "https://mp.weixin.qq.com/s/zCmKCj1j9cWwlz51OTVO5w",
      },
      {
        img: require("@/assets/upload/yingshi.jpg"),
        info: "权威解读加强政务新媒体管理的通知",
        url: "https://mp.weixin.qq.com/s/RA5XIbo1X1TRZEU3XXMeyw",
      },
    ],
  },
})
const goToNews = (url) => {
  window.open(url)
}
let rIndex = ref(0)
const onSwiper = (e) => {
  rIndex.value = e.realIndex
}
const onSlideChange = (e) => {
  rIndex.value = e.realIndex
}
const modules = [Pagination, Navigation]
</script>

<style scoped lang="scss">
.swiper {
  user-select: none;
  position: relative;
  :deep(.swiper-button-prev) {
    color: rgb(255, 255, 255) !important;
    &::after {
      font-size: 28px !important;
    }
  }
  :deep(.swiper-button-next) {
    color: rgb(255, 255, 255) !important;
    &::after {
      font-size: 28px !important;
    }
  }
  :deep(.swiper-pagination) {
    text-align: right !important;
    bottom: 5px;
    padding-right: 10px;
  }
  :deep(.swiper-pagination-bullet) {
    opacity: 1;
    background-color: #fff !important;
  }
  :deep(.swiper-pagination-bullet-active) {
    background-color: red !important;
  }
  .swiper-item {
    height: 300px;
    position: relative;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .info {
    // display: flex;
    align-items: center;
    padding-left: 10px;
    height: 34px;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    z-index: 9;
    line-height: 34px;
    color: #fff;
    p {
      margin-left: 6px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: 0;
    }
  }
}
</style>
