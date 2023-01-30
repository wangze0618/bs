<template>
  <div class="search-container">
    <div class="search-box">
      <Search style="color: #777" size="24" class="search-icon"></Search>
      <input
        v-model.trim="q"
        placeholder="搜索"
        type="search"
        class="form-control"
      />
      <button
        :disabled="isValid"
        @click="goToSearch"
        type="button"
        class="btn btn-primary"
      >
        搜索
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { Search } from "@icon-park/vue-next"
import { useRouter } from "vue-router"
import Button from "@/components/UI/button/index.vue"
let q = ref("")
const router = useRouter()
const isValid = computed(() => {
  if (q.value.length == 0) {
    return true
  } else {
    return false
  }
})
const goToSearch = () => {
  let str = encodeURIComponent(q.value)
  // router.push({
  //   path: "/search",
  //   query: {
  //     q: str,
  //   },
  // })
  window.open(`https://www.baidu.com/s?wd=${q.value}`, "_blank")
  //
}
</script>

<style scoped lang="scss">
.search-container {
  .search-box {
    position: relative;
    .search-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;
      margin-left: 6px;
      pointer-events: none;
      // left: 6px;
    }
    input {
      padding-left: 32px;
      width: 50px;
      display: inline-block;
      border-radius: 6px 0 0 6px;
      vertical-align: middle;
      transition: all 0.5s;
      background-color: rgba(243, 243, 243, 0.791);
      &:focus {
        width: 200px;
        background-color: rgb(255, 255, 255);
      }
    }

    button {
      user-select: none;
      border-radius: 0 6px 6px 0;
    }
  }
}
</style>
