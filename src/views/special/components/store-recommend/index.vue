<template>
  <div class="store-recommend">
    <h5>名店推荐</h5>
    <!-- 推荐区域 -->
    <div class="item mb-3">
      <img
        src="https://luzhou.scol.com.cn/items/201909/190912174610000000001D78.jpg"
        alt=""
      />
      <div class="info">
        <div class="title">
          <h6>合江尧坝驿网红店“任幺婆”麻辣萝卜干</h6>
          <span>人均：￥30</span>
        </div>
        <p>位置：尧坝古镇景区</p>
        <p>电话：15994195797</p>
      </div>
    </div>
    <div class="item mb-3">
      <img
        src="https://dimg04.c-ctrip.com/images/100v1d000001ek1ne27C7_R_10000_1200.jpg"
        alt=""
      />
      <div class="info">
        <div class="title">
          <h6>古镇土菜</h6>
          <span>人均：￥200</span>
        </div>
        <p>位置：尧坝古镇景区</p>
        <p>电话：19980769274</p>
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
