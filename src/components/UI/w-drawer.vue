<template>
  <transition name="fade">
    <div class="drawer" @click="Close($event)" v-show="show">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </transition>
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
// .fade-enter-from {
//   background-color: red !important;
// }
// .fade-enter-active {
//   background-color: blue !important;
// }
// .fade-enter-leave {
//   background-color: forestgreen !important;
// }
.drawer {
  position: fixed;
  top: 0;
  width: 100vw !important;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.679);
  z-index: 999;
}
.content {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  background-color: #fff;
  height: 100vh;
  max-width: 300px;
  z-index: 999;
  padding: 8px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column !important;
  // 隐藏滚动条
  &::-webkit-scrollbar {
    width: 0 !important;
  }
}

.header-item-list {
  display: flex;
  flex-direction: column !important;
}
</style>
