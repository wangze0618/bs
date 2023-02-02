<template>
  <div class="recommend">
    <h4 style="text-align: center; margin-bottom: 0">热门推荐</h4>
    <div
      class="body-1 mt-4"
      v-for="(item, index) in recommendList"
      :key="index"
    >
      <img :src="item.img_list[0]" alt="" />
      <div class="info mt-2">
        <div class="title">
          <h4 class="name">{{ item.name }}</h4>
          <span class="price">￥{{ item.price }}</span>
        </div>
        <p class="desc">
          {{ item.description }}
        </p>
        <p class="local">地址：尧坝古镇旅游景区</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { recommendList } from "@/api/special/recommend/index.js"
</script>

<style scoped lang="scss">
.recommend {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--color-border-1);
  .body-1 {
    .info {
      .desc {
        margin-bottom: 4px;
      }
      .local {
      }
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          font-size: 22px;
          font-weight: 700;
        }
        h4 {
          font-weight: 900;
          font-size: 22px;
          margin-bottom: 0;
        }
      }
    }
    img {
      border-radius: 5px;
      width: 100%;
      height: 180px;
    }
  }
}
</style>
