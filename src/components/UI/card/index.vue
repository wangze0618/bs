<template>
  <div class="card">
    <div class="card-header">{{ header }}</div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  header: {
    type: String,
    default: "header",
  },
})
</script>
<style scoped lang="scss">
.card {
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
