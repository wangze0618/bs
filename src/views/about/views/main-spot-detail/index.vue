<template>
  <div class="main-spot-detail">
    {{ route.params }}
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
</script>

<style scoped lang="scss"></style>
