<template>
  <div class="size-select">
    <span
      v-for="(item, index) in size"
      @click="setSize(item, index)"
      :class="{ active: currSize == item }"
      >{{ item }}</span
    >
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
const props = defineProps({
  size: {
    type: Array,
    default: () => ["小", "中号", "蓝色"],
  },
})
let currSize = ref("")

const emit = defineEmits(["getSize"])
const setSize = (data, index) => {
  emit("getSize", data)
  currSize.value = data
}
</script>

<style scoped lang="scss">
.active {
  border: 1px solid #903e49;
  color: #903e49;
  background-color: #b47f8738;
}
span {
  padding: 6px;
  height: 30px;
  border: 1px solid #ced4da;
  background-color: #fff;
  margin-right: 6px;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
