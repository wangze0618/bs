<template>
  <div class="loading">
    <div class="content">
      <img src="@/assets/image/loading.gif" alt="" />
      <h6>加载中</h6>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.loading {
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.953);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  z-index: 999;
  user-select: none;
  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h6 {
      margin-top: 0.6em;
      margin-bottom: 0;
      font-size: 1rem;
      color: #5a5a5a;
    }
    img {
      height: calc(40px + 0.8vw);
      width: calc(40px + 0.8vw);
    }
  }
}
</style>
