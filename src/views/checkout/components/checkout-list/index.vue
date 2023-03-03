<template>
  <div class="checkout-list container-fluid">
    <table class="table table-hover">
      <thead>
        <tr>
          <th width="280px" scope="col">宝贝</th>
          <th scope="col">属性</th>
          <th scope="col">单价</th>
          <th scope="col">数量</th>
          <th scope="col">小计</th>
          <th scope="col">实付</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in checkoutList" :key="index">
          <tr>
            <td class="goods">
              <img :src="item.img" alt="" />
              <span>{{ item.name }}</span>
            </td>
            <td class="prop">
              <p>颜色：{{ item.prop.color ? item.prop.color : "无" }}</p>
              <p>尺寸：{{ item.prop.size ? item.prop.size : "无" }}</p>
            </td>
            <td>￥{{ toNum2(item.price) }}</td>
            <td>{{ item.prop.count }}</td>
            <td>
              ￥{{ zero2(store.getters["checkout/getRealPrice"](item.id)) }}
            </td>
            <td>
              ￥{{ toNum2(store.getters["checkout/getRealPrice"](item.id)) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="info">
      <dl>
        <dt>总件数：</dt>
        <dd>{{ store.getters["checkout/getCount"]() }}</dd>
      </dl>
      <dl>
        <dt>运费：</dt>
        <dd>￥{{ zero2(store.getters["checkout/getFreight"]()) }}</dd>
      </dl>
      <dl>
        <dt>运费险：</dt>
        <dd>￥{{ zero2(store.getters["checkout/getInsurance"]()) }}</dd>
      </dl>
      <dl>
        <dt>合计：</dt>
        <dd>￥{{ zero2(store.getters["checkout/getFinalPrice"]()) }}</dd>
      </dl>
      <button
        @click="goPay()"
        type="button"
        style="display: block; margin-left: auto"
        class="btn btn-primary me-5 mt-3"
      >
        提交订单
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { zero2 } from "@/tools/tools"
const router = useRouter()
const store = useStore()

const toNum2 = (num) => {
  return num.toFixed(2)
}
// 结算页列表数据
let checkoutList = ref([])
checkoutList.value = store.getters["checkout/getGoodsList"]()
let query = {
  id: new Date().getTime(),
  price: store.getters["checkout/getFinalPrice"](),
}
const goPay = () => {
  router.push({
    path: "/pay",
    query,
  })
}
</script>

<style scoped lang="scss">
// #dee2e6
.checkout-list {
  color: var(--color-text);
  border: 1px solid var(--color-border-1);
  background: var(--color-content-background) !important;
  border-radius: 6px;
  overflow-x: scroll;
  margin: 2rem 0 2rem 0;
  &::-webkit-scrollbar {
    background-color: transparent;
  }
}
.table {
  // 表格滚动
  width: 100%;
  color: var(--color-text);
  text-align: center;
  @media (max-width: 992px) {
    width: 940px;
  }
  thead {
    tr {
      th {
        padding: 1rem 0;
      }
    }
  }
  tbody {
    tr {
      height: 100px;
      td {
        vertical-align: middle;
      }
      .prop {
        p {
          margin-bottom: 0;
        }
      }
      .goods {
        height: 100%;
        img {
          width: 80px;
          margin-right: 0.4rem;
        }
      }
    }
  }
}
.info {
  width: 100%;
  @media (max-width: 992px) {
    width: 940px;
  }
  // border-top: 1px solid #dee2e6;
  dl {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0.5rem;
    margin-bottom: 0;
    dt,
    dd {
      padding: 0.4rem;
      margin-bottom: 0;
    }
    dd {
      text-align: center;
      width: 100px;
    }
  }
}
</style>
