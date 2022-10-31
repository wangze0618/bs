<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title" v-if="title">{{ props.title }}</h5>
      <p class="card-text">
        <slot></slot>
      </p>
      <img src="@/assets/fj1.jpg" class="card-img" alt="..." />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
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
