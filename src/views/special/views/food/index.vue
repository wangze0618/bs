<template>
  <div class="food" v-if="list.length && listLength">
    <div class="img"></div>
    <!-- 图片 -->
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item" to="/special">特色产品</WBreadItem>
        <WBreadItem class="bread-item">特色美食</WBreadItem>
      </WBread>

      <!-- 内容区域 -->
      <div class="row">
        <div class="left col-xl-9">
          <div class="left-container">
            <div
              class="food-item mb-3"
              v-for="(item, index) in list[currentPage - 1]"
              :key="index"
              @click="goDetail(item.id)"
            >
              <div class="food-left">
                <img v-img-lazyload="item.img" alt="" />
                <!-- <img :src="item.img" alt="" /> -->
              </div>
              <div class="food-right">
                <h5>{{ item.title }}</h5>
                <p class="desc">
                  {{ item.desc }}
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

      <!-- 分页组件 -->
      <Pagenation
        class="justify-content-center m-4"
        :total="listLength"
        :page-size="5"
        :current-page="currentPage"
        @getCurrentPage="changePage($event)"
      ></Pagenation>
    </div>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import { ref, onMounted } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import StoreRecommend from "../../components/store-recommend/index.vue"
import FoodRecommend from "../../components/food-recommend/index.vue"
import Pagenation from "@/components/UI/pagenation/index.vue"
import { page1 } from "@/tools/tools"
import { getFoodList } from "@/api/special/food/food.js"
import Loading from "@/components/UI/loading/index.vue"
import { useRouter } from "vue-router"
const router = useRouter()
const goDetail = (id) => {
  router.push({
    name: "SpecialFoodDetail",
    params: {
      id: id,
    },
  })
}
const isOk = (e) => {
  console.log(e.target.complete)
}

const currentPage = ref(1)
const changePage = (data) => {
  currentPage.value = data
}
let list = ref([])
let listLength = ref(0)
onMounted(async () => {
  let { data } = await getFoodList()
  listLength.value = data.data.length
  list.value = page1(data.data, 5)
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.food {
  transition: all 0.5s ease;
  background-color: var(--color-background);
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
        color: var(--color-text);
        border-radius: 6px;
        padding: 16px;
        height: 100%;
        background-color: var(--color-content-background);
        border: 1px solid var(--color-border-2);
        .food-item {
          display: flex;
          border: 1px solid var(--color-border-1);
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
      background-color: var(--color-content-background);
      border: 1px solid var(--color-border-2);

      height: fit-content;
      .right-container {
        padding: 8px 8px 0 8px;
      }
    }
  }
}
</style>
