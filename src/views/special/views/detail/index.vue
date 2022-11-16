<template>
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
    <!-- 商品详情 -->
    <div class="row info shadow">
      <div class="left-box">
        <div class="left-con">
          <DetailImg class="detail-img"></DetailImg>
        </div>
      </div>
      <div class="right-box">
        <div class="right-con">
          <!-- 标题区域 -->
          <div class="goods-title-info">
            <h3 class="goods-title">尧坝油纸伞</h3>
            <div class="n">
              <h5 class="goods-price">￥100</h5>
              <span class="goods-oldPrice">￥120</span>
            </div>
          </div>
          <!-- 副标题 -->
          <div class="goods-sectitle-info">
            <p>
              我是哦我是哦我是哦我是哦我是哦我是哦我是哦我是哦哦我是哦我是哦我是哦我是哦我是哦
            </p>
          </div>
          <!-- 功能区 -->
          <div class="func">
            <div class="func1">
              <div class="delevery mb-3">
                <span>配送：</span>
                <span>addasdasdasdasd</span>
              </div>
              <div class="service mb-3">
                <span>服务：</span>
                <span>无忧退货·免费包邮·快速退款</span>
              </div>
              <div class="color mb-3">
                <span>颜色：</span>
                <Color @getColor="setColor($event)"></Color>
              </div>
              <div class="count mb-3">
                <span>数量：</span>
                <Count :max="10" :min="1" @getCount="setCount($event)"></Count>
              </div>
            </div>
            <div class="btns">
              <button type="button" class="btn btn-primary mt-4">
                立即购买
              </button>
              <button type="button" class="btn btn-primary mt-4 ms-4">
                加入购物车
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 详情 -->
    <div class="row shadow mt-5">
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
import Count from "@/components/UI/count/index.vue"
import DetailImg from "@/components/UI/detail-img/index.vue"
import Color from "@/components/UI/color/index.vue"
const activeName = ref("first")
const upName = (d) => {
  console.log(d)
}
const route = useRoute()
const currComp = ref(null)

const setColor = (data) => {
  console.log(data)
}
const setCount = (data) => {
  console.log(data)
}
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
.detail {
}
.container {
  max-width: 1200px;
}
.info {
  display: flex;
  border-radius: 12px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
}
.col-lg-5 {
  width: 38.666667%;
}
.left-box {
  padding: 20px;
  width: 540px;
  @media (max-width: 992px) {
    margin: 0 auto;
    width: 80%;
    :deep(.detail-img) {
    }
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    :deep(.detail-img) {
    }
  }
  @media (max-width: 576px) {
    :deep(.detail-img) {
      .big {
        height: 280px;
      }
      .small-list {
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    :deep(.detail-img) {
      .big {
        height: 260px;
      }
      .small-list {
        img {
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  .left-con {
    width: 100%;
    height: 100%;
    .detail-img {
    }
  }
}
.right-box {
  padding: 20px;
  flex: 1;
  @media (min-width: 992px) {
    padding-left: 0 !important;
  }
  .right-con {
    height: 100%;
    .goods-title-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 18px;
      h3,
      h5 {
        margin-bottom: 0 !important;
      }
      .goods-title,
      .goods-price {
        font-weight: 700;
        display: inline-block;
      }
      .n {
        display: flex;
        align-items: center;
        .goods-price {
          color: red;
          font-size: 24px;
        }
        .goods-oldPrice {
          color: gray;
          font-weight: 700;
        }
      }
    }
    .goods-sectitle-info {
      p {
        font-size: 19px;
        color: #555;
      }
    }
    .func {
      .btns {
        @media (max-width: 576px) {
          text-align: center;
        }
      }
      .func1 {
        width: 100%;
        padding: 20px 10px;
        background-color: #f2f2f2;
        .delevery {
        }
        .service {
        }
        .color {
          display: flex;
          align-items: center;
        }
        .count {
          display: flex;
          align-items: center;
        }
      }
    }
  }
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
