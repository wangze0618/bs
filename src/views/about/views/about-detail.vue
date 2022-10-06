<template>
  <div class="about-detail">info</div>
  <!-- <ul>
    <li @click="getId(item.cid)" v-for="(item, index) in articleList.data">
      {{ item.content }}
    </li>
  </ul> -->
  <Button @click="getProduct">弹出框框</Button>
  <template v-for="(item, index) in products">
    <div @click="goDetail(item.id)">
      <img :src="item.cover_img" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </template>
  <!-- <Comment></Comment> -->
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import { detailData } from "@/api/article_detail"
import { articleList } from "@/api/article"
import { useRouter } from "vue-router"
import { products } from "@/api/product"
import { productsDetail } from "@/api/product_detail"
import Button from "@/components/UI/button/index.vue"
import { getProduct, getProductById } from "@/api/backend/product"
import Comment from "@/components/UI/comment/index.vue"
const router = useRouter()
const goDetail = (id) => {
  router.push({
    name: "/about/detail/:id",
    params: {
      id,
    },
  })
}
// const getId = (id) => {
//   router.push({
//     name: "/about/detail/:id",
//     params: {
//       id,
//     },
//   })
// }
</script>

<style scoped lang="scss">
.about-detail {
  margin-top: 88px;
}
</style>
