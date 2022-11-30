<template>
  <div class="cart">
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">购物车</WBreadItem>
      </WBread>

      <!-- 如果没有商品 -->
      <div class="no-goods1" v-if="!cartListLength">
        <img src="@/assets/svg/nodata.svg" alt="" />
        <h2>您还没有添加任何商品，快去逛逛吧~</h2>
      </div>

      <!-- table部分 -->
      <table v-else class="table table-hover cart-body mt-3">
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
          <tr
            :class="{ selected: item.selected }"
            v-for="(item, index) in cartList"
            :key="index"
          >
            <td>
              <Checkbox
                class="c1"
                :check="item.selected"
                @change="selectedGoods(item.id, $event)"
              ></Checkbox>
            </td>
            <td class="goods-info">
              <img src="@/assets/upload/handmade1.webp" alt="" />
              <div class="info-prop">
                <p>{{ item.name }}</p>
                <span
                  >颜色：{{ item.prop.color ? item.prop.color : "暂无" }}</span
                ><br />
                <span
                  >尺寸：{{ item.prop.size ? item.prop.size : "暂无" }}</span
                >
              </div>
            </td>
            <td>￥{{ item.price }}</td>
            <td>
              <Count
                :count="item.prop.count"
                @change="setCount(item.id, $event)"
                class="count"
              ></Count>
            </td>
            <td>￥{{ store.getters["cart/getPrice"](item.id) }}</td>
            <td>
              <a @click="deleteGoods(item.id)" href="javascript:;">删除</a>
            </td>
          </tr>
        </tbody>
        <tfoot class="tfoot">
          <tr>
            <td>
              <label class="checkAll">
                <Checkbox
                  :check="store.getters['cart/isCheckAll']()"
                  @change="setAllSelect($event)"
                ></Checkbox>
                全选
              </label>
            </td>
            <td>
              <span @click="clearAllList">删除商品</span>
            </td>
            <td colspan="2">
              <span
                >共{{ store.getters["cart/getCartList"]().length }}件，已选择{{
                  store.getters["cart/getSelectedCount"]()
                }}件</span
              >
            </td>
            <td>
              共￥
              <span style="color: red"
                >{{ zero2(store.getters["cart/checkAllPrice"]()) }}元</span
              >
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
import { computed, onMounted, ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Count from "@/components/UI/count/index.vue"
import Checkbox from "@/components/UI/checkbox/index.vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { zero2 } from "@/tools/tools"
import confirmBox from "@/components/UI/confirm"

const store = useStore()
const router = useRouter()

let cartList = ref([])
let cartListLength = computed(() => {
  return cartList.value.length
})
// 获取并修改件数
const setCount = (id, count) => {
  let obj = {
    id,
    count,
  }
  store.commit("cart/setGoodsCount", obj)
}

// 勾选单个商品
const selectedGoods = (id, selected) => {
  let obj = {
    id,
    selected,
  }
  store.commit("cart/selectGoods", obj)
}

// 全选商品
const setAllSelect = (data) => {
  store.commit("cart/selectAll", data)
}

// 删除所有商品
const clearAllList = async () => {
  try {
    await confirmBox({ title: "删除商品", text: "删除购物车所有商品？" })
    store.commit("cart/clearList")
  } catch (error) {}
}
// 删除单个商品
const deleteGoods = async (id) => {
  try {
    await confirmBox({ title: "删除商品", text: "确认从购物车删除这个商品？" })
    store.commit("cart/deleteGoods", id)
  } catch (error) {}
}
const goToCheckout = () => {
  store.commit("checkout/setList", store.getters["cart/getCartList"]())
  setTimeout(() => {
    router.push({
      path: "/checkout",
    })
  }, 300)
}
onMounted(() => {
  cartList.value = store.getters["cart/getCartList"]()
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.c1 {
  margin: 0 auto;
}
.table {
  border-radius: 6px !important;
}
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
    width: 100%;
    .thead {
      tr {
        height: 40px;
        line-height: 40px;
        // border-bottom: 1px solid #c0c0c0;
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
      .selected {
        background-color: #e794703f;
      }
      tr {
        vertical-align: middle;
        // border-bottom: 1px solid #c0c0c0;
        td {
          height: 100%;
          padding: 20px 0 !important;
          text-align: center;
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
          img {
            width: 50px;
            height: 50px;
            margin-right: 4px;
          }
          .info-prop {
            vertical-align: middle;
            max-width: 80px;
            display: inline-block;
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-bottom: 0;
            }
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
