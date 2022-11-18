<template>
  <div class="special-goods">
    <div class="left-box">
      <div class="left-con">
        <DetailImg :imgList="goods.img_list" class="detail-img"></DetailImg>
      </div>
    </div>
    <div class="right-box">
      <div class="right-con">
        <!-- 标题区域 -->
        <div class="goods-title-info">
          <h3 class="goods-title">{{ goods.name }}</h3>
          <div class="n">
            <h5 class="goods-price">￥{{ goods.price }}</h5>
            <span class="goods-oldPrice">￥{{ goods.oldPrice }}</span>
          </div>
        </div>
        <!-- 星级及库存 -->
        <div class="star-count">
          <Star :star="goods.star"></Star>
          <span class="me-3">库存：{{ goods.count }}件</span>
        </div>
        <!-- 副标题 -->
        <div class="goods-sectitle-info mt-2">
          <p>
            {{ goods.description }}
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
            <div v-if="goods.category.color" class="color mb-3">
              <span>颜色：</span>
              <Color
                :color="goods.category.color"
                @getColor="setColor($event)"
              ></Color>
            </div>
            <div v-if="goods.category.size" class="size mb-3">
              <span>尺寸：</span>
              <Size
                :size="goods.category.size"
                @getSize="setSize($event)"
              ></Size>
            </div>
            <div class="count mb-3">
              <span>数量：</span>
              <Count :max="10" :min="1" @getCount="setCount($event)"></Count>
            </div>
          </div>
          <div class="btns">
            <button type="button" class="btn btn-primary mt-4">立即购买</button>
            <button type="button" class="btn btn-primary mt-4 ms-4">
              加入购物车
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import DetailImg from "@/components/UI/detail-img/index.vue"
import Count from "@/components/UI/count/index.vue"
import Color from "@/components/UI/color/index.vue"
import Star from "@/components/UI/star/index.vue"
import Size from "@/components/UI/size/index.vue"
const emit = defineEmits(["getGoods"])
const props = defineProps({
  goods: {
    type: Object,
    required: true,
  },
})
const goodsObj = ref(props.goods)
const setColor = (data) => {
  console.log(data)
}
const setCount = (data) => {
  console.log(data)
}
const setSize = (data) => {
  console.log(data)
}
</script>

<style scoped lang="scss">
.special-goods {
  display: flex;
  border-radius: 12px;
  @media (max-width: 992px) {
    flex-direction: column;
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
      .star-count {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .goods-title-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
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
            margin-left: 4px;
            text-decoration: line-through;
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
          .size {
            display: flex;
          }
          .count {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
