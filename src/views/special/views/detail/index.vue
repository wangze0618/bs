<template>
  <!-- <div class="detail">{{ route.params }}</div> -->
  <!-- 头部图片 -->
  <div class="img"></div>
  <!-- 主体区域 -->
  <div class="detail container">
    <!-- 面包屑组件 -->
    <WBread class="bread" sp=">">
      <WBreadItem to="/" class="bread-item">首页</WBreadItem>
      <WBreadItem to="/special" class="bread-item">特色产品</WBreadItem>
      <WBreadItem to="/special/handmade" class="bread-item"
        >特色手工</WBreadItem
      >
      <WBreadItem class="bread-item">尧坝草鞋</WBreadItem>
    </WBread>

    <!-- 详情 -->
    <div class="row">
      <div class="col-lg-8 left">
        <Tab v-model:activeName="activeName" @getActive="upName">
          <TabPane label="详情" name="first">
            <V2201 v-if="currComp == 2201"></V2201>
            <V2202 v-if="currComp == 2202"></V2202>
          </TabPane>
          <TabPane label="评价" name="second">
            <Comment class="comment" :list="commentListData"></Comment>
          </TabPane>
          <TabPane label="细则" name="third">Role</TabPane>
        </Tab>
      </div>
      <div class="col-lg-4 right"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Tab from "../../../../components/UI/tab/index.vue"
import TabPane from "../../../../components/UI/tab/components/tab-pane/index.vue"
import Comment from "@/components/UI/comment/index.vue"
import { commentListData } from "@/api/special/handmade/comment"
import V2201 from "../../components/v2201.vue"
import V2202 from "../../components/v2202.vue"
const activeName = ref("first")
const upName = (d) => {
  console.log(d)
}
const route = useRoute()
const currComp = ref(null)
watch(
  () => route.params,
  (newVal) => {
    currComp.value = newVal.id
  },
  {
    immediate: true,
  }
)
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.left {
  // padding: 0;
}
.right {
  display: inline-flex;
  height: 200px;
  padding: 0;
  background-color: aquamarine;
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
  padding-top: 10px;

  // 修改顶部面包屑样式
  @include setBread;
}
</style>
