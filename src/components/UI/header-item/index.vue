<template>
  <div class="header-item">
    <template v-for="(item, index) in headerItem" :key="index">
      <Dropdown class="dropdown" :data="item"></Dropdown>
    </template>
    <a @click="router.push('/login')" href="javascript:;">登录</a>
    <span>wangze</span>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Dropdown from "./dropdown/index.vue"
import headerItem from "@/api/header-item"
import { useRouter } from "vue-router"
const router = useRouter()
</script>

<style scoped lang="scss">
.header-item {
  width: 100%;
  justify-content: space-around;
  a {
    color: #fff;
  }
}
.dropdown {
}
</style>
