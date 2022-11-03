<template>
  <div class="dropdown-slot">
    <slot></slot>
    <ul class="menu">
      <slot name="dropdown"></slot>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.dropdown-slot {
  user-select: none;
  position: relative;
  color: #fff;
  transition: all 0.5s;
  .menu {
    transition: all 0.5s;
    width: 160px;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    background-color: #fff;
    // opacity: 0;
    display: none;
    // height: 0;
    z-index: 222;
    left: -10px;
    overflow: hidden;
    box-shadow: 0px 2px 20px rgba(51, 51, 51, 0.495);
    a {
      color: #000 !important;
    }
  }
  &:hover .menu {
    // overflow: hidden;
    // height: 120px;
    // opacity: 1;
    display: block;
  }
}
</style>
