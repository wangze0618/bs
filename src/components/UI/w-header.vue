<template>
  <header class="header">
    <!-- 大于576px -->
    <div class="container pc-item">
      <img @click="goHome" src="@/assets/logo.jpg" alt="" />
      <HeaderItem class="pc-item-list"></HeaderItem>
    </div>

    <!-- 移动端 -->
    <div class="container moble">
      <img @click="goHome" src="@/assets/logo.jpg" alt="" />
      <details class="details" ref="details" @click="toggle">
        <summary>
          <span></span>
          <span></span>
          <span></span>
        </summary>
      </details>
    </div>
  </header>
  <WDrawer class="drawer" v-model:show="show">
    <Collapse :obj="item" v-for="(item, index) in headerItem"></Collapse>
  </WDrawer>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue"
import WDrawer from "./w-drawer.vue"
import HeaderItem from "./header-item/index.vue"
import headerItem from "@/api/header-item"
import Collapse from "./collapse/index.vue"
import { useRouter } from "vue-router"

const show = ref(false)
const details = ref(null)
const router = useRouter()
const goHome = () => {
  router.push("/")
}

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
img {
  width: 50px;
  height: 50px;
}
.pc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  :deep(.pc-item-list) {
    display: flex;
  }
  // @media (min-width: 768px) {
  // }
  @media (max-width: 768px) {
    display: none;
  }
}
.moble {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88px;
  background-color: rgb(54, 54, 54);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  details {
    width: 30px;
    @media (min-width: 768px) {
      display: none;
    }
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
