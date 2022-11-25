<template>
  <div class="pay">
    <div class="container">
      <!-- 流程概览 -->
      <div class="step-box">
        <h4 class="p-2">流程概览</h4>
        <Steps class="steps" :active="activeSteps">
          <StepItem title="拍下商品"></StepItem>
          <StepItem title="提交订单"></StepItem>
          <StepItem title="支付金额"></StepItem>
        </Steps>
      </div>
      <!-- 订单状态 -->
      <div class="checkout-state">
        <div
          class="check-icon m-3 mt-5"
          :class="isSuccess ? 'success' : 'error'"
        >
          <Check v-if="isSuccess" fill="#fff" size="60"></Check>
          <Close v-else fill="#fff" size="60"></Close>
        </div>
        <h4 class="check-msg">订单提交成功！</h4>
        <p v-if="isAvaliable" class="check-desc">
          支付还剩{{ timeText }}，超时后自动取消订单
        </p>
        <p v-else class="check-desc">支付已过期，自动取消订单</p>
      </div>
      <!-- 支付方式 -->
      <PayWay></PayWay>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { Check, Close } from "@icon-park/vue-next"
import Steps from "@/components/UI/steps/index.vue"
import StepItem from "@/components/UI/steps/components/step-item.vue"
import { payTime } from "@/utils/tools"
import PayWay from "./components/pay-way.vue"
let { timeText, isAvaliable, start } = payTime()
start(1800)

let activeSteps = ref(2)
let isSuccess = ref(true)
</script>

<style scoped lang="scss">
.pay {
  .step-box {
    text-align: center;
    .steps {
      justify-content: center;
    }
  }
  .checkout-state {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .check-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      &.success {
        background-color: #1ec779;
      }
      &.error {
        background-color: #dd1b33;
      }
    }
  }
}
</style>
