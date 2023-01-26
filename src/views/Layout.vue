<template>
  <WHeader></WHeader>
  <div class="main-body">
    <router-view></router-view>
  </div>
  <WFooter></WFooter>
  <Btns></Btns>
</template>

<script setup>
import { ref } from "vue"
import WHeader from "../components/UI/w-header.vue"
import WFooter from "@/components/UI/w-footer.vue"
import Btns from "@/components/UI/btns/index.vue"
</script>

<style lang="scss">
::selection {
  color: #fff;
  background-color: #c59a4c !important;
}
.main-body {
  margin-top: 88px;
  transition: all 0.4s;
  background-color: var(--color-background) !important;
}
</style>
