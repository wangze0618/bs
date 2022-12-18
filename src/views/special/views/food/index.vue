<template>
  <div class="food">
    <div class="img"></div>
    <!-- 图片 -->
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread mt-4 mb-4" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">特色美食</WBreadItem>
      </WBread>

      <!-- 内容区域 -->
      <div class="row">
        <div class="left col-xl-9">
          <div class="left-container">
            <div
              class="food-item mb-3"
              v-for="(item, index) in list[currentPage - 1]"
            >
              <div class="food-left">
                <img v-lazyload="item.img" alt="" />
              </div>
              <div class="food-right">
                <h5>特色美食{{ item.id }}</h5>
                <p class="desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laudantium quibusdam harum, cupiditate ab incidunt asperiores
                  vitae sint veritatis magnam iure numquam ducimus nobis
                  laborum, alias debitis odit delectus corporis ea!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right d-none d-xl-block col-xl-3">
          <div class="right-container">
            <!-- 名店推荐 -->
            <StoreRecommend></StoreRecommend>
            <!-- 其他美食推荐 -->
            <FoodRecommend></FoodRecommend>
          </div>
        </div>
      </div>
      <Pagenation
        class="justify-content-center m-4"
        :total="foodList.length"
        :page-size="5"
        :current-page="currentPage"
        @getCurrentPage="changePage($event)"
      ></Pagenation>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import StoreRecommend from "../../components/store-recommend/index.vue"
import FoodRecommend from "../../components/food-recommend/index.vue"
import Pagenation from "@/components/UI/pagenation/index.vue"
import { page1 } from "@/tools/tools"
import { foodList } from "@/api/special/food/food.js"

const currentPage = ref(1)
let list = page1(foodList, 5)
const changePage = (data) => {
  currentPage.value = data
}
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.food {
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .container {
    @include setBread;
    .row {
      margin: 0;
    }
    .left,
    .right {
      padding: 0;
    }
    .left {
      padding-right: 16px;
      .left-container {
        background-color: #f5f5f5;
        border-radius: 6px;
        padding: 16px;
        height: 100%;
        border: 1px solid #999;
        .food-item {
          display: flex;
          border: 1px solid #999;
          height: 160px;
          border-radius: 10px;
          overflow: hidden;
          @media (max-width: 576px) {
            height: 140px;
          }
          &:last-child {
            margin-bottom: 0 !important;
          }
          .food-left {
            height: 100%;
            img {
              height: 100%;
              width: auto;
              @media (max-width: 576px) {
                width: 140px;
              }
            }
          }
          .food-right {
            padding: 10px;
            p {
              @include ellipsis(3);
            }
          }
        }
      }
    }
    .right {
      background-color: #f5f5f5;
      border: 1px solid #999;
      height: fit-content;
      .right-container {
        padding: 8px 8px 0 8px;
      }
    }
  }
}
</style>
