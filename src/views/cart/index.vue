<template>
  <div class="container">
    <div class="cart">
      <!-- 面包屑组件 -->
      <WBread class="bread" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">购物车</WBreadItem>
      </WBread>

      <div class="no-goods1" v-if="!haveGoods">
        <img src="@/assets/svg/nodata.svg" alt="" />
        <h2>您还没有添加任何商品，快去逛逛吧~</h2>
      </div>
      <!-- cart-body部分 -->
      <table v-else class="cart-body mt-3">
        <thead class="thead">
          <tr>
            <th></th>
            <th>商品信息</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr>
            <td><Checkbox></Checkbox></td>
            <td class="goods-info">
              <img src="@/assets/upload/handmade1.webp" alt="" />
              <div class="info-prop">
                <p>尧坝油纸伞</p>
                <span>颜色：红色</span>
              </div>
            </td>
            <td>￥100</td>
            <td><Count class="count"></Count></td>
            <td>￥100</td>
            <td>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
          <tr>
            <td><Checkbox></Checkbox></td>
            <td>123</td>
            <td>￥100</td>
            <td><Count class="count"></Count></td>
            <td>￥100</td>
            <td>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
        </tbody>
        <tfoot class="tfoot">
          <tr>
            <td>
              <label class="checkAll">
                <Checkbox></Checkbox>
                全选
              </label>
            </td>
            <td>
              <span>删除商品</span>
            </td>
            <td colspan="2">
              <span>共三件，已选择三件</span>
            </td>
            <td>
              共￥
              <span style="color: red">555元</span>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-primary"
                @click="goToCheckout"
              >
                下单结算
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Count from "@/components/UI/count/index.vue"
import Checkbox from "@/components/UI/checkbox/index.vue"
import { useRouter } from "vue-router"
const router = useRouter()
const goToCheckout = () => {
  setTimeout(() => {
    router.push({
      path: "/checkout",
    })
  }, 300)
}
let haveGoods = ref(true)
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.cart {
  @include setBread;
  @media (max-width: 576px) {
    font-size: 14px !important;
  }

  .no-goods1 {
    user-select: none;
    text-align: center;
    position: relative;
    img {
      width: 580px;
      @media (max-width: 576px) {
        width: 100%;
      }
    }
    h2 {
      font-size: calc(1vw + 16px);
      width: 100%;
      bottom: calc(5vw);
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
  .cart-body {
    margin: 0 auto;
    border: 1px solid #c0c0c0;
    .thead {
      tr {
        border-bottom: 1px solid #c0c0c0;
        th {
          text-align: center;
          width: 100px;
          height: 40px;
          &:nth-child(2) {
            width: 180px;
            min-height: 100px;
          }
        }
      }
    }
    .tbody {
      overflow: auto;
      tr {
        border-bottom: 1px solid #c0c0c0;
        td {
          padding: 20px 0 !important;
          text-align: center;
          height: 100%;
          &:last-child {
            height: 100%;
            font-size: 14px;
            vertical-align: middle;
            a {
              width: 100%;
              height: 100%;
              color: red;
            }
          }
        }
        .goods-info {
          display: flex;
          justify-content: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 4px;
          }
          .info-prop {
            max-width: 80px;
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 0;
            }
            text-align: start;
          }
        }
      }
      @media (max-width: 576px) {
        :deep(.count) {
          justify-content: center;
          align-items: center;
          span {
            width: 20px;
            height: 20px;
          }
          input {
            width: 30px;
            padding: 0;
            height: 20px;
          }
        }
      }
    }
    .tfoot {
      td {
        &:nth-child(2) {
          text-align: center;
          color: red;
          span:nth-child(1) {
            margin-left: 6px;
          }
        }
        &:nth-child(3) {
          text-align: center;
        }
      }
      .checkAll {
        padding: 16px 0;
        &:nth-child(1) {
          justify-content: center;
          align-items: center;
          display: flex;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
