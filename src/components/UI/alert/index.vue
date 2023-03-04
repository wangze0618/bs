<template>
  <div class="alert-box row wow bounceInDown">
    <div class="alert col-11 col-md-7" :class="`alert-${type}`" role="alert">
      <div class="content d-flex">
        <Attention size="22"></Attention>
        <span class="text">{{ text }}</span>
        <CloseOne @click="close()" size="22" class="close-one"></CloseOne>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Attention, CloseOne } from "@icon-park/vue-next"
import { ref, onMounted } from "vue"
import { WOW } from "wowjs"
const props = defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (value) => {
      return [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
        "light",
      ].includes(value)
    },
  },
  text: {
    type: String,
    default: "提示",
  },
  closeFn: {
    type: Function,
  },
})
const close = () => {
  props.closeFn()
}
onMounted(() => {
  new WOW({
    live: false,
  }).init()
})
</script>

<style scoped lang="scss">
.alert-box {
  position: fixed;
  top: 12px;
  left: 0;
  right: 0;
  justify-content: center;
  z-index: 999999;
  .content {
    align-items: center;
  }
}
.text {
  margin-left: 4px;
  font-size: 20px;
}
.close-one {
  cursor: pointer;
  margin-left: auto;
}
</style>
