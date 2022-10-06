<template>
  <div ref="el" class="img-view"></div>
</template>

<script setup>
import { ref } from "vue"
import { useDraggable } from "@vueuse/core"

const el = ref(null)
const { x, y, style } = useDraggable(el)
</script>

<style scoped lang="scss">
.img-view {
  position: fixed;
  width: 300px;
  height: 300px;
  background-color: rgb(31, 21, 8);
}
</style>
