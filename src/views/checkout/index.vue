<template>
  <div class="container">
    <div class="checkout">
      <!-- 流程概览 -->
      <div class="steps pt-3">
        <h4 class="">流程概览</h4>
        <Steps class="steps-con" :active="active">
          <StepItem title="拍下商品">123</StepItem>
          <StepItem title="提交订单">123</StepItem>
          <StepItem title="支付金额">123</StepItem>
        </Steps>
      </div>

      <!-- 收货地址组件 -->
      <Address style="display: inline-block" class="pt-4"></Address>
      <!-- 确认订单 -->
    </div>

    <!-- 结算列表组 -->
    <CheckoutList></CheckoutList>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Address from "./components/address/index.vue"
import Steps from "@/components/UI/steps/index.vue"
import StepItem from "@/components/UI/steps/components/step-item.vue"
import { useRouter } from "vue-router"
import CheckoutList from "./components/checkout-list/index.vue"
const router = useRouter()
// setps组件默认激活第一个
let active = ref(1)
</script>

<style scoped lang="scss">
.checkout {
  .steps {
    text-align: center;

    :deep(.steps-con) {
      justify-content: center;
    }
  }
}
</style>
