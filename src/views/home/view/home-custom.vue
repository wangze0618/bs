<template>
  <div class="home-custom">
    <div class="container-xl">
      <h2 class="title">游客风采</h2>
      <div class="content">
        <PictCarousel :data="data"></PictCarousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import PictCarousel from "../components/pict-carousel/index.vue"
let data = [
  "https://img1.qunarzz.com/travel/d7/1508/f3/fc4d6b87044d85.jpg_r_720x480x95_2c782461.jpg",
  "https://img1.qunarzz.com/travel/d3/1508/8f/2b62d6befda113.jpg_r_720x480x95_71f0bc51.jpg",
  "https://img1.qunarzz.com/travel/d9/1508/a5/c50308f53a368d.jpg_r_720x480x95_3e2ac5ca.jpg",
  require("@/assets/upload/play-guide/6.png"),
  require("@/assets/upload/play-guide/2.png"),
  require("@/assets/upload/play-guide/3.png"),
]
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.title {
  @include home-title;
  color: var(--color-text);
}
</style>
