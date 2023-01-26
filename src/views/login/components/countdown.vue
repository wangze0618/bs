<template>
  <div class="countdown">
    <Button v-if="!isCountdown" @click="count">发送验证码</Button>
    <Button class="count" :disabled="isCountdown" v-else
      >{{ countdown }}秒后重试</Button
    >
    <span :class="{ active: showToast }">已发送</span>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Button from "@/components/UI/button/index.vue"
const countdown = ref(null)
const isCountdown = ref(false)
const showToast = ref(false)

const count = () => {
  showToast.value = true
  isCountdown.value = true
  countdown.value = 60
  let timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 57) {
      showToast.value = false
    }
    if (countdown.value == 0) {
      clearInterval(timer)
      isCountdown.value = false
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.active {
  opacity: 1;
  margin-top: -4px;
}
span {
  padding-top: 3px;
  margin-top: 0px;
  color: #fff;
  transition: all 0.5s;
  opacity: 0;
}
:deep(.count) {
  button {
    width: 100% !important;
  }
}
</style>
