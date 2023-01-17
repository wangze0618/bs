<template>
  <h3>热门景点</h3>
  <div class="spot-carousel">
    <Swiper
      class="swiper"
      :navigation="true"
      :pagination="true"
      :modules="modules"
      slidesPerView="1"
      :spaceBetween="20"
      :speed="1000"
      :grid="{
        fill: 'row',
        rows: 4,
      }"
    >
      <slot name="SwiperSlide"> </slot>
      <!-- <SwiperSlide>
          <slot name="slideItem">
            <SpotCarouselItem>
              <template #title> 尧坝古街道1 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                古镇面积不大，古街道及民居群总面积近60000
                平方米。一条一千米的青石板古街南北走向穿镇而过，略呈S形。这样的古街道始建于明清时代，分为南北街。北街是由周其宾为代表的周氏家族修建，南街是由武进士李跃龙为代表的李氏家族修建，素有周半场、李半场之说。
                街道的两边还有许多保留完好的商铺、古民居，明清寺庙等建筑。家家有巷道和天井，户户有木楼，房屋进深一般为四至六间屋，房后有小路与水井相连。墙壁为夹竹蓖、古朴的木板壁或厚实的大方砖壁。这样的古建筑虽历经几百年风雨，至今仍保存着明朝古庙东岳寺、清代建筑大鸿米店和进士牌坊、神仙古洞、尧王古墓、古镇历史陈列馆等建筑，古色古香，以其宏大的规模和完好的保护程度，被专家称之为“川南古民居的化石”。
              </template>
            </SpotCarouselItem>
          </slot>
        </SwiperSlide> -->
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation, Grid, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/pagination" // 轮播图底面的小圆点
import "swiper/scss/navigation" // 轮播图两边的左右箭头
import "swiper/scss/scrollbar" // 轮播图的滚动条
import "swiper/scss/autoplay" // 轮播图的自动播放
import "swiper/scss/grid"
import { useRouter } from "vue-router"
import SpotCarouselItem from "./spot-carousel-item.vue"
const router = useRouter()
const modules = [Navigation, Grid, A11y]
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
  margin: 30px 0;
}
.swiper-slide {
  padding: 0.3em;
}

.swiper {
  padding: 1em;
  :deep(.swiper-button-prev) {
    color: #daa520 !important;
  }
  :deep(.swiper-button-next) {
    color: #daa520 !important;
  }
}
</style>
