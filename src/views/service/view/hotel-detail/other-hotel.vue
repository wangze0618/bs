<template>
  <div class="other-hotel"></div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getOtherHotel } from "@/api/hotel/index.js"
onMounted(async () => {
  console.log(await getOtherHotel())
})
</script>

<style scoped lang="scss"></style>
