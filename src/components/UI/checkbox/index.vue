<template>
  <div class="check-box">
    <label class="form-check-label" :for="`checkbox-${randomId}`" v-if="label"
      >{{ label }}
    </label>
    <input
      :disabled="disabled"
      type="checkbox"
      v-model="isCheck"
      class="form-check-input ms-1"
      :id="`checkbox-${randomId}`"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
let randomId = ref()
const getId = () => {
  randomId.value = Number((Math.random() * 1000000).toFixed(0))
}
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
  disabled: {
    type: Boolean,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
})
let isCheck = ref(props.modelValue)
watch(
  () => isCheck.value,
  (newVal) => {
    isCheck.value = newVal
    emit("update:modelValue", newVal)
  },
  {
    immediate: true,
  }
)
onMounted(() => {
  getId()
})
</script>

<style scoped lang="scss">
.check-box {
  user-select: none;
  .form-check-label,
  .form-check-input {
    cursor: pointer;
  }
}
</style>
