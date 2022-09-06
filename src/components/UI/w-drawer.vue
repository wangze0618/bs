<template>
  <div class="drawer" @click="Close($event)" v-show="show">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const emit = defineEmits(["update:show"])
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
const Close = (e) => {
  if (e.currentTarget === e.target) {
    emit("update:show", false)
  }
}
</script>

<style scoped lang="scss">
.drawer {
  position: fixed;
  width: 100vw !important;
  height: 100vw !important;
  background-color: rgba(0, 0, 0, 0.679);
}
.content {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  background-color: #fff;
  height: 100vh;
  z-index: 999;
  padding: 8px;
}
</style>
