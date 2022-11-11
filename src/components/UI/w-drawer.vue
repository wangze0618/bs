<template>
  <div
    class="drawer"
    @click="Close($event)"
    :class="show ? 'showcontainer' : 'hide'"
  >
    <div class="content" :class="show ? 'show' : 'hide1'">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { onMounted, ref } from "vue"
const emit = defineEmits(["update:show"])
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})
const showCard = computed(() => {
  return setTimeout(() => {
    return props.show
  }, 20)
})
const Close = (e) => {
  console.log(e.currentTarget)
  console.log(e.target)
  if (e.currentTarget === e.target) {
    emit("update:show", false)
  }
}
</script>

<style scoped lang="scss">
.showcontainer {
  // opacity: 1;
  visibility: visible;
}
.hide {
  // opacity: 0;
  visibility: hidden;
}
.show {
  transform: translateX(0%) !important;
}
.hide1 {
  transform: translateX(-100%) !important;
}
.drawer {
  transition: all 0.5s;
  position: fixed;
  top: 0;
  width: 100vw !important;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.679);
  z-index: 999;
}
.content {
  position: fixed;
  transition: all 0.4s;
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
  transform: translateX(-100%);
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
