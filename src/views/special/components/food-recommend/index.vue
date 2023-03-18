<template>
  <div class="food-recommend">
    <h5>其他美食推荐</h5>
    <!-- 主体区域 -->
    <div class="con">
      <div class="item mb-4">
        <img src="@/assets/upload/food/douhua.jpg" alt="" />
        <div class="info">
          <p>豆花火锅</p>
          <Star class="star" :star="5"></Star>
        </div>
      </div>
      <div class="item mb-4">
        <img
          src="https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png"
          alt=""
        />
        <div class="info">
          <p>尧坝红汤羊肉</p>
          <Star class="star" :star="5"></Star>
        </div>
      </div>
      <div class="item mb-4">
        <img
          src="http://image.qingk.cn/image/zhhj/2c37e567f78b4771b3561bc3e172410e.png"
          alt=""
        />
        <div class="info">
          <p>尧坝黄粑</p>
          <Star class="star" :star="5"></Star>
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
  color: var(--color-text);
  transition: all 0.5s ease;

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
