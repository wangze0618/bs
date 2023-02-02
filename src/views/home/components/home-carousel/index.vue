<template>
  <swiper
    class="swiper-box"
    :navigation="navigation"
    :pagination="pagination"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :speed="speed"
    :autoplay="autoplay"
    :loop="loop"
  >
    <template v-for="(item, index) in imgList" :key="index">
      <swiper-slide class="swiper-item">
        <div class="swiper-content">
          <h1 class="swiper-item-title animated animate__bounceInDown">
            {{ item.title }}
          </h1>
          <h3 class="swiper-item-desc animated animate__bounceInDown">
            {{ item.desc }}
          </h3>
        </div>
        <img class="swiper-item-img" :src="item.url" alt="" />
      </swiper-slide>
    </template>
  </swiper>
</template>

<script setup>
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"

// import Swiper core and required modules
import "swiper/scss"
import "swiper/scss/pagination" // 轮播图底面的小圆点
import "swiper/scss/navigation" // 轮播图两边的左右箭头
import "swiper/scss/scrollbar" // 轮播图的滚动条
import "swiper/scss/autoplay" // 轮播图的自动播放

// let currIndex = ref(1)
const onSwiper = (swiper) => {
  // console.log(swiper)
}
const onSlideChange = (e) => {
  // currIndex.value = e.activeIndex
}

const props = defineProps({
  // 图片列表
  imgList: {
    type: [Array, Object],
  },
  // 加载的模块
  modules: {
    type: Array,
    required: true,
  },
  // 左右控制器
  navigation: {
    type: Boolean,
    default: false,
  },
  // 分页 下方圆点
  pagination: {
    type: Object,
    default: null,
  },
  // 自动播放
  autoplay: {
    type: Object,
    default: null,
  },
  // 切换的速度
  speed: {
    type: [String, Number],
  },
  // 是否无限循环
  loop: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.swiper {
  user-select: none;
  height: 100%;
  &:deep(.swiper-button-prev) {
    left: 36px !important;
    color: #fff;
    text-shadow: 0px 0px 8px #333;
  }
  &:deep(.swiper-button-next) {
    color: #fff;
    right: 36px !important;
    text-shadow: 0px 0px 8px rgb(85, 85, 85);
  }
}
.swiper-item {
  position: relative;
  height: 100%;
  .swiper-content {
    text-align: center;
    position: absolute;
    color: #fff;
    bottom: 140px;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: 768px) {
      left: 50%;
      top: 50%;
      bottom: unset;
      transform: translate(-50%, -50%);
    }
    h1,
    h3 {
      text-shadow: 0px 0px 8px rgb(0, 0, 0, 0.5);
      margin: 0;
    }
    .swiper-item-title {
      font-size: calc(2vw + 20px);
    }
    .swiper-item-desc {
      font-size: calc(1.6vw + 10px);
    }
  }
  .swiper-item-img {
    width: 100%;
    height: auto;
  }
}

:deep(.swiper-pagination-bullet) {
  width: calc(0.4vw + 8px) !important;
  height: calc(0.4vw + 8px) !important;
  background: rgb(0, 0, 0) !important;
}
:deep(.swiper-pagination-bullet-active) {
  background: #fff !important;
}
</style>
