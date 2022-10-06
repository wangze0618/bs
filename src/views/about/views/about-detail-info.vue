<template>
  <div class="about-detail-info">{{ route.params.id }}</div>
  <div class="content1">
    <template v-for="(item, index) in productsDetail">
      <ul>
        <li v-if="route.params.id == item.id">
          {{ item.title }}
          <div v-html="item.text"></div>
          <img :src="item.cover_img" alt="" />
        </li>
      </ul>
    </template>
  </div>
  <!-- 评论区 -->
  <Comment></Comment>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { detailData } from "@/api/article_detail"
import { productsDetail } from "@/api/product_detail"
import Comment from "@/components/UI/comment/index.vue"

const route = useRoute()
console.log(route.params)
</script>

<style scoped lang="scss">
.about-detail-info {
  margin-top: 88px;
}
</style>
