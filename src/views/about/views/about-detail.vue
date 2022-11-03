<template>
  <div class="about-detail">info</div>
  <!-- <ul>
    <li @click="getId(item.cid)" v-for="(item, index) in articleList.data">
      {{ item.content }}
    </li>
  </ul> -->
  <template v-for="(item, index) in products">
    <div @click="goDetail(item.id)">
      <img :src="item.cover_img" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </template>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue"
import { detailData } from "@/api/article_detail"
import { articleList } from "@/api/article"
import { useRouter } from "vue-router"
import { products } from "@/api/product"
import { productsDetail } from "@/api/product_detail"
import { getProduct, getProductById } from "@/api/backend/product"
import { WOW } from "wowjs"

const router = useRouter()
const goDetail = (id) => {
  router.push({
    name: "AboutDetailInfo",
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
onBeforeMount(() => {
  new WOW({
    offset: 50,
    live: false,
  }).init()
})
</script>

<style scoped lang="scss">
.about-detail {
  margin-top: 88px;
}
</style>
