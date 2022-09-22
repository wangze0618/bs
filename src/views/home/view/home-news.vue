<template>
  <div class="home-news">
    <div class="container-xl">
      <div class="row">
        <h2 class="news-title">新闻 · 政务</h2>
        <div class="col-12 d-none d-md-block mb-3 news-1">
          <div class="content1">
            <p>
              目前景区最大限量为每天41000人，超过最大限量，景区当日将不再接待游客。
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 news-2">
          <div class="news-2-box">
            <a href="javascript:;"> 景区新闻 </a>
            <div class="content-box">
              <div
                class="table-box"
                v-for="(item, index) in homeNewsItemLeft"
                :key="item.id"
              >
                <p class="table-list-item">{{ item.title }}</p>
                <span class="table-time">{{ item.time }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 news-3">
          <div class="news-3-top">
            <a href="javascript:;"> 景区公告 </a>
            <div class="content-box">
              <div
                class="table-box"
                v-for="(item, index) in homeNewsItemTop"
                :key="item.id"
              >
                <p class="table-list-item">{{ item.title }}</p>
                <span class="table-time">{{ item.time }}</span>
              </div>
            </div>
          </div>
          <div class="news-3-bottom">
            <div class="content-box">
              <div
                class="table-box"
                v-for="(item, index) in homeNewsItemTop"
                :key="item.id"
              >
                <p class="table-list-item">{{ item.title }}</p>
                <span class="table-time">{{ item.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import {
  homeNewsItemTop,
  homeNewsItemLeft,
  homeNewsItemBottom,
} from "@/api/home-news"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.content-box {
  color: #fff;
  margin-top: 5px;
  .table-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .table-list-item {
    margin: 2px 0;
  }
}
.news-title {
  @include home-title;
}
.news-1 {
  background: url("@/assets/home-news-1.jpg") no-repeat no-repeat center;
  background-size: 100%;
  background-position: 0px -290px;
  height: 240px;
  width: 100%;
  overflow: hidden;
  padding: 0;
  color: #fff;
  .content1 {
    margin: 0 auto;
    width: 80%;
    text-align: center;
    padding-top: 70px;
    p {
      font-size: calc(1vw + 20px);
      margin: 0;
      // display: inline-block;
    }
  }
}

.news-2 {
  padding: 0 0;
  padding-right: 20px;
  @media (max-width: 768px) {
    padding-right: 0;
  }
  .news-2-box {
    height: 100% !important;
    padding: 30px 26px;
    background-color: #279fba;
    a {
      color: #fff;
      font-size: 30px;
    }
  }
}
.news-3 {
  padding: 0;
  height: auto;
  a {
    font-size: 30px;
    color: #fff;
  }
  .news-3-top {
    padding: 30px 26px;
    background-color: #ef4a44;
  }
  .news-3-bottom {
    padding: 30px 26px;
    background-color: #ee7933;
  }
}
</style>
