<template>
  <div class="home">
    <Carousel
      class="home-carousel"
      :navigation="false"
      :pagination="{ clickable: true }"
      :modules="modules"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :speed="800"
      :loop="true"
    >
    </Carousel>
    <!-- 新闻政务 -->
    <HomeNews class="wow fadeInUp" data-wow-duration="2s"></HomeNews>
    <!-- 旅游服务 -->
    <HomeService class="wow fadeInUp" data-wow-duration="2s"></HomeService>
    <!-- 地图 -->
    <Map class="wow fadeInUp" data-wow-duration="2s"></Map>
  </div>
</template>

<script setup>
import { ref, onMounted, shallowRef, reactive } from "vue"
import Carousel from "@/views/home/components/home-carousel/index.vue"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import HomeNews from "./view/home-news.vue"
import HomeService from "./view/home-service.vue"
import Map from "../../components/UI/map/map.vue"
import { WOW } from "wowjs"
import { getUserInfo } from "@/api/backend/user"
import { useStore } from "vuex"
const store = useStore()
// 轮播图所需模块
const modules = [Navigation, Pagination, Autoplay, Scrollbar, A11y]

// 上来就加载用户信息并保存在VueX里，很快啊~
const getInfo = async () => {
  const { data } = await getUserInfo()
  store.commit("user/setUserProfile", data.data)
}
onMounted(() => {
  getInfo()
  new WOW({
    offset: 50,
    live: false, // 当时为了解决警告问题 想查看所有属性可去官网了解  https://wowjs.uk/docs.html
  }).init()
})
</script>

<style scoped lang="scss">
.home {
  margin-top: 88px;
  .home-carousel {
    // height: 120px !important;
    :deep(img) {
      object-fit: fill;

      @media (min-width: 992px) {
        max-height: calc(100vh - 88px);
      }
    }
  }
}
</style>
