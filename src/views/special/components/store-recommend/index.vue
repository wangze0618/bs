<template>
  <div class="store-recommend">
    <h5>名店推荐</h5>
    <!-- 推荐区域 -->
    <div class="item mb-3" v-for="i in 2">
      <img src="@/assets/upload/handmade1.webp" alt="" />
      <div class="info">
        <div class="title">
          <h6>店铺1123</h6>
          <span>人均：￥200</span>
        </div>
        <p>位置：尧坝古镇景区</p>
        <p>电话：15994195797</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.store-recommend {
  background-color: var(--color-content-background);
  color: var(--color-text);
  transition: all 0.5s ease;

  .item {
    border: 1px solid var(--color-border-1);
    img {
      height: 180px;
      width: 100%;
    }
    .info {
      p {
        margin-bottom: 0;
      }
      padding: 10px;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        h6 {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 0;
        }
      }
    }
  }
}
.item {
  border: 1px solid #999;
}

h5 {
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>
