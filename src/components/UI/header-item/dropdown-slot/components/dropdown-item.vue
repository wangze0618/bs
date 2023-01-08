<template>
  <li style="color: #000" class="dropdown-slot-item">
    <slot></slot>
  </li>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.dropdown-slot-item {
  display: inline-block;
  padding: 4px;
  cursor: pointer;
  user-select: none;
  transition: all ease-out 0.3s;
  color: #000;
  width: 100%;
  &:hover {
    background-color: #4285f4;
    color: #fff !important;
    // border-radius: 4px;
  }
}
</style>
