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
  transition: all 0.5s;
  color: #000 !important;
  width: 100%;
  &:hover {
    background-color: rgb(203, 203, 203);
    border-radius: 4px;
  }
}
</style>
