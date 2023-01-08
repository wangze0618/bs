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
  .menu {
    transition: all 0.5s;
    width: 150px;
    border-radius: 6px;
    padding: 12px 0;
    position: absolute;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    // margin-top: 20px;
    transform: translateY(20px);
    z-index: 222;
    top: 60px;
    left: -36px;
    box-shadow: 0px 2px 20px rgba(51, 51, 51, 0.495);
    a {
      color: #000 !important;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 2px;
      transform: rotate(45deg) translateX(-50%);
      background-color: #fff;
    }
  }
  &:hover .menu {
    opacity: 1;
    visibility: visible;
    // margin-top: 0;
    transform: translateY(0px);
  }
}
</style>
