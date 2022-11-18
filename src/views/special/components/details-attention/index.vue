<template>
  <div class="attention">
    <h4 class="title">注意事项</h4>
    <ul>
      <li>购买运费如何收取？</li>
      <p>
        单笔订单金额(不含运费)满88元免邮费;不满88元，每单收取10元运费。
        (港澳台地区需满500元免邮费;不满500元，每单收取30元运费)
      </p>
    </ul>
    <ul class="mt-5">
      <li>使用什么快递发货？</li>
      <p>默认使用顺丰快递发货(个别商品使用其他快递)</p>
      <p>配送范围覆盖全国大部分地区(港澳台地区除外)</p>
    </ul>
    <ul class="mt-5 mb-4">
      <li>如何申请退货?</li>
      <p>
        1.自收到商品之日起30日内，顾客可申请无忧退货,退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
      </p>
      <p>
        2.退货流程:确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
      </p>
      <p>
        3.因官方产生的退货，如质量问题，退货邮费由官方承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。
      </p>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
ul {
  color: #343434;
  padding-left: 2rem;
  list-style-type: disc;
  li {
    font-size: 18px;
    margin-bottom: 4px;
  }
}

p {
  margin-bottom: 0.5rem;
}
.title {
  text-align: center;
  padding: 30px;
}
</style>
