<template>
  <div class="count-box">
    <span :class="num == min ? 'disabled' : ''" @click="dec()">&minus;</span>
    <input class="form-control" disabled type="text" v-model="num" readonly />
    <span :class="num == max ? 'disabled' : ''" @click="add()">&plus;</span>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { ref, watch } from "vue"
const props = defineProps({
  count: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 10,
  },
})
let num = ref(props.count)
const emit = defineEmits(["change"])
watch(
  () => props.count,
  (newVal) => {
    emit("change", num.value)
  },
  {
    immediate: true,
  }
)
const add = () => {
  if (num.value < props.max) {
    num.value++
    emit("change", num.value)
  }
}
const dec = () => {
  if (num.value > props.min) {
    num.value--
    emit("change", num.value)
  }
}
</script>

<style scoped lang="scss">
.disabled {
  background-color: #e2e6ea !important;
  color: #a6a6a6 !important;
}
.count-box {
  display: flex;
  user-select: none !important;
  height: 30px;
  justify-content: center;
  color: var(--color-text);
  span {
    cursor: pointer;
    font-size: 24px;
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-border-1);
    color: #666;
    transition: all 0.5s;
    background-color: #f8f8f8;
    &:nth-child(1) {
      border-radius: 6px 0 0 6px;
      border-right: transparent;
    }
    &:nth-child(3) {
      border-radius: 0 6px 6px 0;
      border-left: transparent;
    }
  }
  input {
    width: 50px;
    height: 100%;
    border-color: #ced4da;
    background-color: #ffffff;
    border-radius: unset;
    text-align: center;
  }
}
</style>
