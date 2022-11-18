<template>
  <div class="search">
    <h1>{{ query }}<br /></h1>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()

let query = ref(decodeURIComponent(route.query.q))
</script>

<style scoped lang="scss"></style>
