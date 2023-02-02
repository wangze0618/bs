<template>
  <Swiper
    :navigation="true"
    :slides-per-view="view"
    :slides-per-group="group"
    :space-between="10"
    :modules="modules"
  >
    <SwiperSlide v-for="i in data">
      <img class="img-thumbnail" :src="i" alt="" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import "swiper/scss/navigation"

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      require("@/assets/upload/home/home1.jpg"),
      require("@/assets/upload/home/home1.jpg"),
      require("@/assets/upload/home/home1.jpg"),
      // require("@/assets/upload/handmade2.jpeg"),
    ],
  },
})

// 轮播图两边的左右箭头

const modules = [Navigation, A11y]

let view = ref(0)
let group = ref(0)
let width = ref(0)
// width.value = window.document.body.clientWidth

const getInfo = () => {
  width.value = window.document.body.clientWidth
  if (width.value > 950) {
    view.value = 3
    group.value = 3
  } else if (width.value > 630 && width.value <= 950) {
    view.value = 2
    group.value = 2
  } else if (width.value <= 630) {
    view.value = 1
    group.value = 1
  }
}
onMounted(() => {
  getInfo()
  window.addEventListener("resize", (e) => {
    getInfo()
  })
})
</script>

<style scoped lang="scss">
.swiper {
  .swiper-slide {
    text-align: center;
    height: 180px;
    img {
      height: 100%;
      width: 320px;
    }
  }
}
</style>
