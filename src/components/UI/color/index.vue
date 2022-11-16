<template>
  <div class="color-select">
    <span
      v-for="(item, index) in color"
      @click="setColor(item, index)"
      :class="{ active: currColor == item }"
      >{{ item }}</span
    >
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
const props = defineProps({
  color: {
    type: Array,
    default: () => ["红色", "绿色", "蓝色"],
  },
})
let currColor = ref("")

const emit = defineEmits(["getColor"])
const setColor = (data, index) => {
  emit("getColor", data)
  currColor.value = data
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
}
</style>
