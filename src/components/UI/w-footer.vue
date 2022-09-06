<template>
  <div class="footer">
    <div class="container">
      <div class="weather">
        <Weather></Weather>
      </div>
      <div class="list d-none d-md-flex">
        <ul>
          <li>FAQ</li>
          <li>景区概况</li>
          <li>门票预订</li>
          <li>紧急电话</li>
          <li>医疗信息</li>
        </ul>
        <ul>
          <li>生态之旅</li>
          <li>发现之旅</li>
          <li>生态之旅</li>
          <li>发现之旅</li>
          <li>发现之旅</li>
        </ul>
        <ul>
          <li>如何到达</li>
          <li>住在哪里</li>
          <li>游玩信息</li>
          <li>机票预订</li>
          <li>机票预订</li>
        </ul>
        <ul>
          <li>如何到达</li>
          <li>住在哪里</li>
          <li>游玩信息</li>
          <li>机票预订</li>
          <li>机票预订</li>
        </ul>
        <ul>
          <li>如何到达</li>
          <li>住在哪里</li>
          <li>游玩信息</li>
          <li>机票预订</li>
          <li>机票预订</li>
        </ul>
      </div>
      <div class="logo">
        <img src="@/assets/guiguan.png" alt="" srcset="" />
      </div>
      <div class="info">
        <p>©2000-2022 五凤溪景区管理局 | 技术支持：wangze</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Weather from "./weather/index.vue"
</script>

<style scoped lang="scss">
.footer {
  color: #fff;
  background-color: #222222;
  .container {
    .weather,
    .list,
    .logo,
    .info {
      border-bottom: 1px solid #434343;
      padding: 20px;
    }
    .weather {
      border-bottom: 1px solid #434343;
    }
    .list {
      display: flex;
      justify-content: space-around;
      align-items: center;

      ul {
        // width: 20%;
        text-align: center;
      }
    }
    .logo {
      img {
        display: block;
        margin: 0 auto;
        width: 100%;
      }
    }
    .info {
      p {
        margin-bottom: 0;
      }
      text-align: center;
    }
  }
}
</style>
