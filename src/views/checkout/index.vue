<template>
  <div class="container">
    <div class="checkout">
      <!-- 流程概览 -->
      <div class="steps mt-3 mb-3">
        <h4 class="mb-3">流程概览</h4>
        <Steps class="steps-con" :active="active">
          <StepItem title="拍下商品">123</StepItem>
          <StepItem title="提交订单">123</StepItem>
          <StepItem title="支付金额">123</StepItem>
        </Steps>
      </div>

      <!-- 收货地址组件 -->
      <Address style="display: inline-block" class="mt-3"></Address>
      <!-- 确认订单 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Address from "./components/address/index.vue"
import Steps from "@/components/UI/steps/index.vue"
import StepItem from "@/components/UI/steps/components/step-item.vue"

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
