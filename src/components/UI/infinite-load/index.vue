<template>
  <div class="infinite-load" ref="container">
    123
    <div class="loading" v-if="loading">
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="finished">
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
})
let container = ref(null)
const emit = defineEmits(["infinite"])

onMounted(() => {
  let observer = new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (props.loading == false && props.finished == false) {
          emit("infinite")
        }
      }
    },
    { threshold: 0 }
  )
  observer.observe(container.value)
})
</script>

<style scoped lang="scss"></style>
