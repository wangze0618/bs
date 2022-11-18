<template>
  <div class="star">
    <Star v-for="i in star" size="18" fill="#ff9240" theme="filled"></Star>
    <Star v-for="i in 5 - star" size="18" fill="#ff9240" theme="outline"></Star>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Star } from "@icon-park/vue-next"

const props = defineProps({
  star: {
    type: Number,
    default: 3,
    validator(value) {
      return [1, 2, 3, 4, 5].includes(value)
    },
  },
})
</script>
