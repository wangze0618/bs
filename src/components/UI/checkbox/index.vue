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
  margin: 0.2em;
  .form-check-input {
    transition: all 0.3s;
    display: inline-block;
    cursor: pointer;
    border: 1px solid var(--color-border-1);
    background-color: rgba(231, 231, 231, 0.217);
    border-radius: 50%;
    padding: 0.6em;
    box-shadow: inset 0px 0px 3px 2px rgb(0 0 0 / 20%);
  }
}
</style>
