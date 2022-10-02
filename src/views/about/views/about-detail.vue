<template>
  <div class="about-detail">info</div>
  <ul>
    <li @click="getId(item.cid)" v-for="(item, index) in articleList.data">
      {{ item.content }}
    </li>
  </ul>
  <Button @click="tt">弹出框框</Button>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { detailData } from "@/api/article_detail"
import { articleList } from "@/api/article"
import { useRouter } from "vue-router"
import confirmBox from "@/components/UI/confirm/index.js"
import Button from "@/components/UI/button/index.vue"
const router = useRouter()
const tt = async () => {
  try {
    const t = await confirmBox({ title: "注意", text: "请登录！" })
    console.log(t)
  } catch (error) {}
}
const getId = (id) => {
  router.push({
    name: "/about/detail/:id",
    params: {
      id,
    },
  })
}
</script>

<style scoped lang="scss">
.about-detail {
  margin-top: 88px;
}
</style>
