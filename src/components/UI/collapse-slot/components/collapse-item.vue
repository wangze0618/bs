<template>
  <a class="collapse-link" href="javascript:;">
    <slot></slot>
  </a>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.collapse-link {
  display: inline-block;
  color: #000;
}
</style>
