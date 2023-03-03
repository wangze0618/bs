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
      <transition
        mode="out-in"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutLeft"
      >
        <div class="checkout-box" v-if="isPaySuccess == false">
          <div class="checkout-state">
            <!-- 提交状态 -->
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
          <div class="pay-way" v-if="isPaySuccess == false">
            <Card class="card col-12 col-lg-10" header="请选择支付方式">
              <template #body>
                <h6 class="way-title">支付平台</h6>
                <div class="way row">
                  <div
                    @click="addActive(index)"
                    class="box-1 col-4 col-md-3 col-lg-3"
                    v-for="(item, index) in list"
                  >
                    <div class="box1" :class="{ active: currIndex === index }">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </template>
            </Card>
            <Dialog
              class="dialog"
              title="确认支付"
              :show="show"
              @cancel="cancel"
              @confirm="confirm"
            >
              <h5 style="text-align: center; margin: 20px">
                确认支付<span style="color: red">￥{{ route.query.price }}</span
                >元？
              </h5>
              <template #cancelBtn>取消支付</template>
              <template #confirmBtn>去支付</template>
            </Dialog>
            <Dialog
              class="dialog"
              title="支付二维码"
              :show="show2"
              @cancel="cancel2"
              @confirm="confirm2"
            >
              <div class="qrcode">
                <img src="@/assets/image/qrcode.png" alt="" />
              </div>
              <template #cancelBtn>取消支付</template>
              <template #confirmBtn>我已支付</template>
            </Dialog>
          </div>
        </div>
        <div v-else class="pay-success">
          <!-- 支付成功icon -->
          <div
            class="pay-icon m-3 mt-5"
            :class="isPaySuccess ? 'success' : 'error'"
          >
            <Check v-if="isPaySuccess" fill="#fff" size="60"></Check>
            <Close v-else fill="#fff" size="60"></Close>
          </div>
          <h2 v-if="isPaySuccess" style="color: red" class="pay-msg">
            ￥{{ route.query.price }}元
          </h2>
          <h4 v-if="isPaySuccess" class="pay-msg">支付成功！</h4>
          <p class="pay-desc">我们会尽快将宝贝送到您的身边！</p>
          <button
            @click="router.replace('/')"
            type="button"
            class="btn btn-primary m-5"
          >
            返回首页
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { Check, Close } from "@icon-park/vue-next"
import Steps from "@/components/UI/steps/index.vue"
import StepItem from "@/components/UI/steps/components/step-item.vue"
import { payTime } from "@/utils/tools"
import Card from "@/components/UI/card/index.vue"
import Dialog from "@/components/UI/dialog/index.vue"
const router = useRouter()
const route = useRoute()
console.log(route.query)
let { timeText, isAvaliable, start } = payTime()
start(1800)
let activeSteps = ref(2)
let isSuccess = ref(true)
let isPaySuccess = ref(false)

const list = ref([
  {
    id: 0,
    name: "微信支付",
  },
  {
    id: 1,
    name: "支付宝支付",
  },
  {
    id: 2,
    name: "工商银行",
  },
  {
    id: 3,
    name: "建设银行",
  },
  {
    id: 4,
    name: "农业银行",
  },
  {
    id: 5,
    name: "交通银行",
  },
])

let show = ref(false)
let show2 = ref(false)
let currIndex = ref("")
const addActive = (data) => {
  show.value = true
  currIndex.value = data
}

const cancel = () => {
  show.value = false
}
const confirm = () => {
  show.value = false
  setTimeout(() => {
    show2.value = true
  }, 500)
}
const confirm2 = () => {
  show2.value = false
  activeSteps.value = 3

  setTimeout(() => {
    isPaySuccess.value = true
  }, 500)
}
const cancel2 = () => {
  isPaySuccess.value = false
  show2.value = false
}
</script>

<style scoped lang="scss">
.dialog {
  color: black;
}
.pay {
  color: var(--color-text);
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
        box-shadow: 0 0 6px #1ec779;
      }
      &.error {
        background-color: #dd1b33;
        box-shadow: 0 0 6px #dd1b33;
      }
    }
  }
}

.pay-way {
  margin: 0 auto;
  margin-bottom: 3rem;
  .card {
    background: var(--color-content-background);
  }
  .way {
    margin: 0 auto;
    .box-1 {
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-bottom: 20px;
      height: 100%;
      padding: 0 4px;
      .box1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        border-radius: 6px;
        border: 1px solid var(--color-border-1);
        transition: all 0.5s;

        &.active {
          border: 1px solid #e75100 !important;
          color: #e75100;
        }
      }
    }
  }
}
.qrcode {
  text-align: center;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: none;
  }
}
.pay-success {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .pay-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    &.success {
      background-color: #1ec779;
      box-shadow: 0 0 6px #1ec779;
    }
    &.error {
      background-color: #dd1b33;
      box-shadow: 0 0 6px #dd1b33;
    }
  }
}
</style>
