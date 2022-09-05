<template>
  <header class="header">
    <details>
      <summary>
        <span></span>
        <span></span>
        <span></span>
      </summary>
    </details>
  </header>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.header {
  height: 88px;
  background-color: rgb(54, 54, 54);
  details {
    user-select: none;
    &[open] {
      summary {
        span {
          &:nth-child(1) {
            top: calc(50% - 1px);
            transform: rotate(-45deg);
          }
          &:nth-child(2) {
            // display: none;
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(45deg);
            bottom: calc(50% - 1px);
          }
        }
      }
    }

    summary {
      position: relative;
      height: 30px;
      list-style: none;
      &::-webkit-details-marker {
        display: none;
      }
      span {
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: #ffffff;
        transition: all 0.5s;
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
    }
  }
}
</style>
