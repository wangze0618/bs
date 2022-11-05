<template>
  <WHeader></WHeader>
  <div class="main-body">
    <router-view></router-view>
  </div>
  <WFooter></WFooter>
</template>

<script setup>
import { ref } from "vue"
import WHeader from "../components/UI/w-header.vue"
import WFooter from "@/components/UI/w-footer.vue"
</script>

<style scoped lang="scss">
.main-body {
  margin-top: 88px;
}
</style>
