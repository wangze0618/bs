<template>
  <div class="header-item">
    <template v-for="(item, index) in headerItem" :key="index">
      <Dropdown class="dropdown" :data="item"></Dropdown>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Dropdown from "./dropdown/index.vue"
import headerItem from "@/api/header-item"
</script>

<style scoped lang="scss">
.header-item {
  width: 100%;
  justify-content: space-around;
}
.dropdown {
}
</style>
