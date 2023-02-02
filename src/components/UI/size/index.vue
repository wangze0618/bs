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
.size-select {
  display: flex;
  flex-wrap: wrap;
}
.active {
  border: 1px solid var(--c-goldenrot);
  color: var(--c-goldenrot);
}
span {
  font-size: 14px;
  margin-top: 4px;
  padding: 0.5em;
  height: 30px;
  line-height: 15px;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-content-background);
  margin-right: 6px;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
}
</style>
