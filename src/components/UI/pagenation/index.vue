<template>
  <ul class="pagination">
    <li
      @click="changePage(myCurrentPage - 1)"
      class="page-item"
      v-if="myCurrentPage > 1"
    >
      <a class="page-link" href="javascript:;">上一页</a>
    </li>
    <li v-else class="page-item disabled">
      <a class="page-link" href="javascript:;">上一页</a>
    </li>
    <li
      @click="changePage(i)"
      v-for="i in pager.btnArr"
      :class="{ active: i === myCurrentPage }"
      class="page-item"
    >
      <a class="page-link" href="javascript:;">{{ i }}</a>
    </li>

    <li
      v-if="myCurrentPage < pager.pageCount"
      @click="changePage(myCurrentPage + 1)"
      class="page-item"
    >
      <a class="page-link" href="javascript:;">下一页</a>
    </li>
    <li v-else class="page-item disabled">
      <a class="page-link" href="javascript:;">下一页</a>
    </li>
  </ul>
</template>

<script setup>
import { computed, ref, toRef } from "vue"
const emit = defineEmits(["getCurrentPage"])
const props = defineProps({
  total: {
    type: Number,
  },
  pageSize: {
    type: Number,
  },
  currentPage: {
    // 一定从1开始，不是0
    type: Number,
  },
})

// 1. 约定按钮的个数
const count = 5

// 2. 当前显示的页码
const myCurrentPage = ref(props.currentPage)

// 3. 总页数 = 总条数/每页显示条数 向上取整
const myTotal = ref(props.total)
const myPageSize = ref(props.pageSize)

// 其他数据（总页数、开始按钮、结束按钮、按钮数组）依赖上述数据得到
const pager = computed(() => {
  // 总页数
  const pageCount = Math.ceil(myTotal.value / myPageSize.value)
  // 求出 start end
  let offset = Math.floor(count / 2)
  let start = myCurrentPage.value - offset
  let end = start + count - 1

  // 处理start
  if (start < 1) {
    start = 1
    end = start + count - 1 > pageCount ? pageCount : start + count - 1
  }

  if (end > pageCount) {
    end = pageCount
    start = end - count + 1 < 1 ? 1 : end - count + 1
  }

  const btnArr = []
  for (let index = start; index <= end; index++) {
    btnArr.push(index)
  }
  return {
    pageCount,
    btnArr,
    start,
    end,
  }
})

const changePage = (page) => {
  myCurrentPage.value = page
  emit("getCurrentPage", myCurrentPage.value)
}
</script>

<style scoped lang="scss">
.pagination {
  user-select: none;
  .page-item {
    &.disable {
      .page-link {
        color: #6c757d !important;
      }
    }
  }

  .active {
    a {
      color: #ffffff;
      background-color: var(--c-brown) !important;
      border: 1px solid var(--c-brown);
    }
  }
}
</style>
