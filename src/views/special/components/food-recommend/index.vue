<template>
  <div class="food-recommend">
    <h5>其他美食推荐</h5>
    <!-- 主体区域 -->
    <div class="con">
      <div class="item mb-4" v-for="i in 3">
        <img src="@/assets/upload/handmade1.webp" alt="" />
        <div class="info">
          <p>美食美食1</p>
          <Star class="star" :star="4"></Star>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Star from "@/components/UI/star/index.vue"
</script>

<style scoped lang="scss">
p {
  margin-bottom: 0;
}
.food-recommend {
  h5 {
    text-align: center;
  }
  .con {
    .item {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin-right: 6px;
      }
      .info {
        justify-content: space-between;
        display: flex;
        flex: 1;
        position: relative;
        .star {
          position: absolute;
          right: 0;
          top: -2px;
        }
      }
    }
  }
}
</style>
