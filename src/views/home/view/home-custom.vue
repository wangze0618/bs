<template>
  <div class="home-custom">
    <div class="container-xl">
      <h2 class="title">游客风采</h2>
      <div class="content">
        <PictCarousel></PictCarousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import PictCarousel from "../components/pict-carousel/index.vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.title {
  @include home-title;
  color: var(--color-text);
}
</style>
