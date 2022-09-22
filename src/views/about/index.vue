<template>
  <div class="about">
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread sp=">">
        <WBreadItem class="wit" to="/">首页</WBreadItem>
        <WBreadItem class="wit">走进会理</WBreadItem>
      </WBread>
      <!-- 简概 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
</script>

<style scoped lang="scss">
.about {
  margin-top: 88px;
  user-select: none;
  .container {
    :deep(.wit) {
      font-size: 20px;
    }
  }
}
</style>
