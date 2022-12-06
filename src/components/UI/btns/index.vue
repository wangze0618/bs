<template>
  <div class="btns" :class="{ show: top > 300 }">
    <div class="cart">
      <Shopping size="1.8rem" theme="outline" fill="#555"></Shopping>
    </div>
    <div class="up mt-2" @click="backTo">
      <DoubleUp size="2rem" theme="filled" fill="#555"></DoubleUp>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { Shopping, DoubleUp } from "@icon-park/vue-next"

let top = ref(0)

let backTo = () => {
  document.documentElement.scrollTop = 0
}

let onscroll = () => {
  top.value = document.documentElement.scrollTop
}

onMounted(() => {
  window.document.addEventListener("scroll", onscroll)
})
</script>

<style scoped lang="scss">
.btns {
  position: fixed;
  right: 2vw;
  bottom: 10rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  transform: translateY(70%);
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(50%);
  }
  .up,
  .cart {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border: 1px solid #eeeeee85;
    background-color: #eeeeee;
    border-radius: 3rem;
    &.show {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
