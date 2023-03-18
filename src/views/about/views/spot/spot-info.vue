<template>
  <div class="spot" v-if="item.length">
    <div class="img">
      <TextDrop> 景点详情 </TextDrop>
    </div>
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread mb-3 mt-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item" to="/about">走进尧坝</WBreadItem>
        <WBreadItem class="bread-item">{{ item[0].name }}</WBreadItem>
      </WBread>

      <div class="content">
        <h3 class="title mb-4">{{ item[0].name }}</h3>
        <!-- <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <img
              class="imgs img-thumbnail mb-3"
              src="@/assets/upload/food/douhua.jpg"
              alt=""
            />
          </div>Die Woodys-Fichtl's Lied 
          <div class="col-12 col-md-6 col-lg-4">
            <img
              class="imgs img-thumbnail mb-3"
              src="@/assets/upload/food/douhua.jpg"
              alt=""
            />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <img
              class="imgs img-thumbnail mb-3"
              src="@/assets/upload/food/douhua.jpg"
              alt=""
            />
          </div>
        </div> -->
        <div class="main" v-html="item[0].content"></div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import { getSpotInfo } from "@/api/spot/index.js"
import Loading from "@/components/UI/loading/index.vue"
import TextDrop from "@/components/UI/text-drop/index.vue"
const router = useRoute()
let item = ref([])
onMounted(async () => {
  const { data } = await getSpotInfo(router.params.id)
  item.value = data
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.spot {
  color: var(--color-text) !important;
  .img {
    @include img("@/assets/image/bgImg/2.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    h3 {
      font-size: 2rem;
      margin-bottom: 0;
      text-shadow: 1px 1px 6px #808080;
      color: var(--color-text);
    }
  }
  .container {
    @include setBread;
    .content {
      .img {
        width: 100%;
        height: 100%;
      }
      .main {
        p {
          text-indent: 2em;
        }
        font-size: 18px;
      }
      .title {
        text-align: center;
      }
    }
  }
}
</style>
