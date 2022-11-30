<template>
  <div @click="change()" class="check-box">
    <input
      :disabled="disabled"
      type="checkbox"
      v-model="isCheck"
      class="form-check-input m-0"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
const emit = defineEmits(["change"])
const props = defineProps({
  disabled: {
    type: Boolean,
  },
  check: {
    type: Boolean,
  },
  label: {
    type: String,
  },
})
let isCheck = ref(props.check)

watch(
  () => props.check,
  (newVal) => {
    isCheck.value = newVal
  },
  {
    immediate: true,
    deep: true,
  }
)

const change = () => {
  isCheck.value = !isCheck.value
  emit("change", isCheck.value)
}
</script>

<style scoped lang="scss">
.check-box {
  user-select: none;
  height: 100%;
  max-height: 16px;
  width: fit-content;
  .form-check-input {
    display: inline-block;
    cursor: pointer;
  }
}
</style>
