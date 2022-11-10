<template>
  <div class="main-spot">
    <div
      @click="
        router.push({
          name: 'MainSpotDetail',
          params: {
            id: 1,
          },
        })
      "
    >
      <img src="@/assets/avatar.jpg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
</script>

<style scoped lang="scss"></style>
