<template>
  <header class="header">
    <details ref="details" @click="toggle">
      <summary>
        <span></span>
        <span></span>
        <span></span>
      </summary>
    </details>
  </header>
  <WDrawer v-model:show="show">
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </WDrawer>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue"
import WDrawer from "./w-drawer.vue"

const show = ref(false)
const details = ref(null)

const toggle = () => {
  show.value = !show.value
  if (show.value == false) {
    setTimeout(() => details.value.removeAttribute("open"), 0)
  }
}
onMounted(() => {
  watch(
    () => show.value,
    (newValue) => {
      if (newValue == false) {
        details.value.removeAttribute("open")
      }
    },
    {
      immediate: true,
    }
  )
})
</script>

<style scoped lang="scss">
ul {
  background-color: red;
}
.header {
  height: 88px;
  background-color: rgb(54, 54, 54);
  details {
    user-select: none;
    &[open] {
      summary {
        span {
          &:nth-child(1) {
            top: calc(50% - 1px);
            transform: rotate(-45deg);
          }
          &:nth-child(2) {
            // display: none;
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(45deg);
            bottom: calc(50% - 1px);
          }
        }
      }
    }

    summary {
      position: relative;
      height: 30px;
      list-style: none;
      &::-webkit-details-marker {
        display: none;
      }
      span {
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: #ffffff;
        transition: all 0.5s;
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
    }
  }
}
</style>
