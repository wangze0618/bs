<template>
  <!-- <div class="detail">{{ route.params }}</div> -->
  <!-- 头部图片 -->
  <div class="img"></div>
  <!-- 主体区域 -->
  <div class="detail container">
    <!-- 面包屑组件 -->
    <WBread class="bread" sp=">">
      <WBreadItem to="/" class="bread-item">首页</WBreadItem>
      <WBreadItem to="/special" class="bread-item">特色产品</WBreadItem>
      <WBreadItem to="/special/handmade" class="bread-item"
        >特色手工</WBreadItem
      >
      <WBreadItem class="bread-item">尧坝草鞋</WBreadItem>
    </WBread>

    <!-- 详情 -->
    <Tab></Tab>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Tab from "@/components/UI/tab/index.vue"

const route = useRoute()
const currComp = ref(null)
watch(
  () => route.params,
  (newVal) => {
    currComp.value = newVal.id
  },
  {
    immediate: true,
  }
)
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.img {
  @include img("@/assets/image/usercomment.jpeg");
}
.detail {
  padding-top: 10px;

  // 修改顶部面包屑样式
  @include setBread;
}
</style>
