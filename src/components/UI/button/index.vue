<template>
  <div class="buttons">
    <button
      :disabled="disabled"
      type="button"
      class="btn"
      :class="[`btn-${type}`, `btn-${size}`]"
    >
      <slot>按钮</slot>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
const emit = defineEmits()
const props = defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (value) => {
      return [
        "primary",
        "warning",
        "secondary",
        "success",
        "info",
        "danger",
        "dark",
        "green",
        "light",
      ].includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "mini",
    validator: (value) => {
      return ["mini", "normal", "large"].includes(value)
    },
  },
})
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-green {
  background-color: lightgreen;
}
.btn-light {
  background-color: #84b5df;
}
.btn-mini {
  min-width: 50px;
  height: 32px;
}
.btn-normal {
  min-width: 60px;
  height: 40px;
}
.btn-large {
  min-width: 70px;
  height: 50px;
}
</style>
