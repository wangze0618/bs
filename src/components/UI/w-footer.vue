<template>
  <div class="footer">
    <div class="container">
      <div class="list d-none d-md-flex">
        <ul>
          <li>走进尧坝</li>
          <li>路线规划</li>
          <li>常见问答</li>
          <li>新闻资讯</li>
        </ul>
        <ul>
          <li>酒店住宿</li>
          <li>行程推荐</li>
          <li>特色产品</li>
          <li>特色美食</li>
        </ul>
        <ul>
          <li>特色手工</li>
          <li>联系我们</li>
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
