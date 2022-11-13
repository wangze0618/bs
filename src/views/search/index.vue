<template>
  <div class="search">
    <h1>
      {{ route.query }}<br />
      {{ route.query.q }}
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()
</script>

<style scoped lang="scss"></style>
