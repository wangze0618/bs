<template>
  <div class="footer">
    <div class="container">
      <!-- 搜索框 -->
      <Search class="search"></Search>
      <!-- 天气 -->
      <div class="weather">
        <Weather></Weather>
      </div>
      <div class="list d-none d-md-flex">
        <ul>
          <li>FAQ</li>
          <li>景区概况</li>
          <li>门票预订</li>
          <li>紧急电话</li>
        </ul>
        <ul>
          <li>生态之旅</li>
          <li>发现之旅</li>
          <li>生态之旅</li>
          <li>发现之旅</li>
        </ul>
        <ul>
          <li>如何到达</li>
          <li>住在哪里</li>
          <li>游玩信息</li>
          <li>机票预订</li>
        </ul>
        <ul>
          <li>如何到达</li>
          <li>住在哪里</li>
          <li>游玩信息</li>
          <li>机票预订</li>
        </ul>
        <ul>
          <li>如何到达</li>
          <li>住在哪里</li>
          <li>游玩信息</li>
          <li>机票预订</li>
        </ul>
      </div>
      <div class="logo">
        <img src="@/assets/guiguan.png" alt="" srcset="" />
      </div>
      <div class="info">
        <p>©2000-2023 尧坝古镇景区管理局 | 技术支持：wangze</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Weather from "./weather/index.vue"
import Search from "./search/index.vue"
</script>

<style scoped lang="scss">
.footer {
  color: #fff;
  background-color: #222222;
  .container {
    .search {
      text-align: center;
      padding: 26px;
      border-bottom: 1px solid #434343;
    }
    .weather,
    .list,
    .logo,
    .info {
      border-bottom: 1px solid #434343;
      padding: 20px;
    }
    .weather {
      border-bottom: 1px solid #434343;
      @media (max-width: 576px) {
        padding-left: 0;
        padding-right: 0;
        font-size: 14px;
      }
    }
    .list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      ul {
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
