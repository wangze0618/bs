<template>
  <div class="checkout-list">
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
            <td>{{ store.getters["checkout/getRealPrice"](item.id) }}</td>
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
        <dd>{{ store.getters["checkout/getFreight"]() }}</dd>
      </dl>
      <dl>
        <dt>运费险：</dt>
        <dd>{{ store.getters["checkout/getInsurance"]() }}</dd>
      </dl>
      <dl>
        <dt>合计：</dt>
        <dd>￥{{ store.getters["checkout/getFinalPrice"]() }}</dd>
      </dl>
    </div>
    <button @click="goPay()" type="button" class="btn btn-outline-primary">
      Primary
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
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
  border: 1px solid #c6c6c6;
  border-radius: 6px;
  overflow-x: scroll;
}
.table {
  // 表格滚动
  width: 940px;
  text-align: center;
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
  border-top: 1px solid #dee2e6;
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
