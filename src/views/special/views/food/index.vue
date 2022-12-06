<template>
  <div class="food">
    <div class="img"></div>
    <!-- 图片 -->
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread m-4" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item" to="/special">特色手工</WBreadItem>
        <WBreadItem class="bread-item">特色美食</WBreadItem>
      </WBread>

      <!-- 内容区域 -->
      <div class="row">
        <div class="left col-lg-9">123</div>
        <div class="right d-none d-lg-block col-lg-3">123123</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.food {
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .container {
    @include setBread;
    .row {
      padding: 0;
    }
    .left {
      height: 500px;
      background-color: aquamarine;
    }
    .right {
      height: 500px;
      background-color: bisque;
    }
  }
}
</style>
