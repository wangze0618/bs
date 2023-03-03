<template>
  <div class="text">
    <h1 class="top-text animated animate__fadeInDown">
      <slot> </slot>
    </h1>
    <p class="bottom-text animated animate__fadeInUp">
      <slot name="bottom"> </slot>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.text {
  color: #fff;
  text-shadow: 0px 1px 6px rgb(0 0 0 / 20%);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .top-text {
    margin-bottom: 0;
  }
  .bottom-text {
    font-size: 20px;
  }
}
</style>
