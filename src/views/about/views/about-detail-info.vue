<template>
  <div class="about-detail-info">{{ route.params.id }}</div>
  <div class="content1">
    <template v-for="(item, index) in detailData.data">
      <ul>
        <li v-if="route.params.id == item.id">
          {{ item.detail_content }}
          <img :src="item.img" alt="" />
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { detailData } from "@/api/article_detail"
const route = useRoute()
console.log(route.params)
</script>

<style scoped lang="scss">
.about-detail-info {
  margin-top: 88px;
}
</style>
