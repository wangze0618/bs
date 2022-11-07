<template>
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="javascript:;">上一页</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="javascript:;">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
    <li class="page-item"><a class="page-link" href="javascript:;">3</a></li>
    <li class="page-item">
      <a class="page-link" href="javascript:;">下一页</a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue"
const props = defineProps({
  total: {
    type: Number,
  },
  pageSize: {
    type: Number,
  },
  currentPage: {
    type: Number,
  },
})
</script>

<style scoped lang="scss"></style>
