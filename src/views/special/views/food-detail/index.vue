<template>
  <div class="food-detail" v-if="item.length">
    <div class="img">
      <TextDrop> 特色美食 </TextDrop>
    </div>
    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item" to="/special">特色产品</WBreadItem>
        <WBreadItem class="bread-item" to="/special/food">特色美食</WBreadItem>
        <WBreadItem class="bread-item">{{ item[0].title }}</WBreadItem>
      </WBread>

      <div class="main overflow-hidden rounded-3 mb-5 shadow-lg">
        <!-- 轮播 -->
        <Carousel class="carousel" :data="item[0].carousel"></Carousel>

        <!-- body -->
        <div class="body">
          <template v-for="(it, index) in item">
            <h3 class="body-title">{{ it.title }}</h3>
            <p class="body-desc" v-html="it.desc"></p>
            <!-- <div class="row">
              <template v-for="i in it.imgs">
                <div class="col-12 col-sm-6 col-md-4 mb-3">
                  <img class="imgs" style="" :src="i" />
                </div>
              </template>
            </div> -->
            以上为简略介绍，如需更详细的介绍请点击这里：
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="goDetail(it)"
            >
              查看
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import { getFoodDetail } from "@/api/special/food/food"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import { ref, onMounted, onBeforeMount } from "vue"
import { useRoute } from "vue-router"
import Loading from "@/components/UI/loading/index.vue"
import Carousel from "@/views/service/components/cauousel/index.vue"
import TextDrop from "@/components/UI/text-drop/index.vue"
const route = useRoute()
let item = ref([])

const goDetail = (it) => {
  window.open(it.url)
}
onBeforeMount(async () => {
  let { data } = (await getFoodDetail(route.params.id)).data
  item.value = data
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.food-detail {
  overflow: hidden;
  color: var(--color-text);
  .img {
    @include img(
      "http://www.zjshenxianju.com/r/cms/www/zx/img/Restaurants.jpg"
    );
  }
  .container {
    @include setBread;
    .main {
      border: 1px solid var(--color-border-1);
      background-color: var(--color-content-background);
      .body {
        padding: 0.8em;
        .row {
          .imgs {
            border-radius: 0.4em;
          }
        }
        .imgs {
          width: 100%;
          height: 100%;
        }

        .body-desc {
          font-size: 1.2rem;
          text-indent: 2em;
        }
      }
      .carousel {
        :deep(img) {
          width: 100%;
          object-fit: cover;
          max-height: 380px;
          @media (width<1024px) {
            height: 350px;
          }
          @media (width<976px) {
            height: 300px;
          }
          @media (width<768px) {
            height: 280px;
          }
          @media (width<576px) {
            height: 240px;
          }
        }
      }
    }
  }
}
</style>
