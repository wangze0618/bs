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
    <HomeNews></HomeNews>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Carousel from "@/views/home/components/home-carousel/index.vue"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import HomeNews from "./view/home-news.vue"

const modules = [Navigation, Pagination, Autoplay, Scrollbar, A11y]
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
