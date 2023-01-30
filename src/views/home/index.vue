<template>
  <div class="home" v-if="listData.length !== 0">
    <!-- 大屏轮播 -->
    <Carousel
      class="home-carousel"
      :navigation="false"
      :pagination="{ clickable: true }"
      :modules="modules"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :speed="800"
      :loop="true"
      :imgList="listData"
    >
    </Carousel>

    <!-- 美在尧坝 -->
    <HomeBeauty class="wow fadeInUp" data-wow-duration="2s"></HomeBeauty>

    <!-- 游客风采 -->
    <HomeCustom class="wow fadeInUp" data-wow-duration="2s"></HomeCustom>

    <!-- 新闻资讯 -->
    <HomeNews class="wow fadeInUp" data-wow-duration="2s"></HomeNews>

    <!-- 快速链接 -->
    <HomeService class="wow fadeInUp mb-5" data-wow-duration="2s"></HomeService>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import { ref, onMounted, shallowRef } from "vue"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import { WOW } from "wowjs"
import { useStore } from "vuex"
import { getCarouselListData } from "@/api/home"
import Carousel from "@/views/home/components/home-carousel/index.vue"
import HomeNews from "./view/home-news.vue"
import HomeService from "./view/home-service.vue"
import HomeBeauty from "./view/home-beauty.vue"
import HomeCustom from "./view/home-custom.vue"
import Loading from "@/components/UI/loading/index.vue"
const store = useStore()
// 轮播图所需模块
const modules = [Navigation, Pagination, Autoplay, Scrollbar, A11y]
let listData = shallowRef([])
// 初始化加载用户信息并保存在VueX里
const getInfo = async () => {
  // const { data } = await getUserInfo()
  const data = {
    id: 0,
    username: "Rosenstolz🍞",
    nickname: "小泽君",
    email: "2867273828@qq.com",
    user_pic: require("@/assets/avatar.jpg"),
    mobile: "15994195797",
    introduce: "",
  }
  store.commit("user/setUserProfile", data)
}
onMounted(async () => {
  const { data } = await getCarouselListData()
  listData.value = data.data
  getInfo()
  new WOW({
    offset: 50,
    live: false,
  }).init()
})
</script>

<style scoped lang="scss">
.home {
  .home-carousel {
    :deep(img) {
      object-fit: fill;

      @media (width>=992px) {
        max-height: calc(100vh - 88px);
      }
    }
  }
}
</style>
