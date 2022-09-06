<template>
  <WHeader></WHeader>
  <router-view></router-view>
  <WFooter></WFooter>
</template>

<script setup>
import { ref } from "vue"
import WHeader from "../components/UI/w-header.vue"
import WFooter from "@/components/UI/w-footer.vue"
</script>

<style scoped lang="scss"></style>
