<template>
  <div class="w-bread-item">
    <RouterLink v-if="to" :to="to"><slot></slot></RouterLink>
    <span v-else><slot></slot></span>
  </div>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: "",
  },
})
</script>

<style scoped lang="scss">
.w-bread-item {
  display: inline-block;
  margin: 0 3px;
  font-size: 22px;
  a {
    text-decoration: none;
    color: var(--color-text);
  }
  span {
    color: gray;
  }
  .sp {
    font-size: 22px;
  }
}
</style>
