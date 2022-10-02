<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin: 0 auto;
  border: 1px solid #000;
  background-color: pink;
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
