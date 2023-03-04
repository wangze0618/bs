<template>
  <div class="handmade-detail" v-if="list.length">
    <!-- 头部图片 -->
    <div class="img"></div>
    <!-- 主体区域 -->
    <div class="detail container">
      <!-- 面包屑组件 -->
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem to="/" class="bread-item">首页</WBreadItem>
        <WBreadItem to="/special" class="bread-item">特色产品</WBreadItem>
        <WBreadItem to="/special/handmade" class="bread-item"
          >特色手工</WBreadItem
        >
        <WBreadItem class="bread-item">{{ list[0].name }}</WBreadItem>
      </WBread>
      <!-- 商品详情 -->
      <div class="info shadow">
        <SpecialGoods :goods="list[0]"></SpecialGoods>
      </div>

      <!-- 详情 -->
      <div class="shadow wrap mt-4 mb-5">
        <div class="row">
          <div class="col-lg-8 left">
            <Tab v-model:activeName="activeName">
              <TabPane label="详情" name="first">
                <div
                  style="text-align: center; padding: 2em"
                  v-html="list[0].detail"
                ></div>
              </TabPane>
              <TabPane label="评价" name="second">
                <Comment class="comment" :list="commentListData">
                  <template #title>评价</template>
                </Comment>
              </TabPane>
              <TabPane label="注意事项" name="third">
                <DetailsAttention></DetailsAttention>
              </TabPane>
            </Tab>
          </div>
          <div class="col-lg-4 d-none d-lg-block right">
            <Recommend></Recommend>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  reactive,
  ref,
  shallowReactive,
  watch,
} from "vue"
import { useRoute } from "vue-router"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Tab from "../../../../components/UI/tab/index.vue"
import TabPane from "../../../../components/UI/tab/components/tab-pane/index.vue"
import Comment from "@/components/UI/comment/index.vue"
import { commentListData } from "@/api/special/handmade/comment"
import { handmadeList } from "@/api/special/handmade/handmade"
import V2201 from "../../components/v2201.vue"
import V2202 from "../../components/v2202.vue"
import DetailsAttention from "../../components/details-attention/index.vue"
import Recommend from "../../components/recommend/index.vue"
import SpecialGoods from "../../components/special-goods/index.vue"
import axios from "axios"
import { getDetailHandmadeList } from "@/api/special/handmade/handmade"
import Loading from "@/components/UI/loading/index.vue"
const activeName = ref("first")
let list = ref([])
let aa = ref(1)
const route = useRoute()

let check = ref(true)
const isCheck = (data) => {
  check.value = data
  // console.log(check.value)
  // console.log(data)
}
// 从数据列表中获取 手工数据
// const getGoods = (id) => {
//   return handmadeList.filter((item) => item.id == id)
// }
onBeforeMount(async () => {
  const { data } = await getDetailHandmadeList(route.params.id)
  list.value = data.data
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.detail {
}
.container {
  max-width: 1000px;
}
.wrap {
  border-radius: 6px;
  overflow: hidden;
  color: var(--color-text);
  border: 1px solid var(--color-border-1);
  padding: 10px;
  background-color: var(--color-content-background);
  .left {
    height: 100%;
    // padding-left: 0;
  }
  .right {
    display: flex;
  }
}
.img {
  @include img("@/assets/image/usercomment.jpeg");
}
:deep(.comment) {
  .title {
    padding: 30px 0;
  }
}
.detail {
  // 修改顶部面包屑样式
  @include setBread;
}
</style>
