<template>
  <div class="img"></div>
  <RouterView></RouterView>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.img {
  @include img("@/assets/image/usercomment.jpeg");
}
</style>
