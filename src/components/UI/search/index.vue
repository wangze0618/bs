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
      <button @click="goToSearch" type="button" class="btn btn-primary">
        搜索
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Search } from "@icon-park/vue-next"
import { useRouter } from "vue-router"
import Button from "@/components/UI/button/index.vue"
let q = ref("")
const router = useRouter()
const goToSearch = () => {
  let str = encodeURIComponent(q.value)
  router.push({
    path: "/search",
    query: {
      q: str,
    },
  })
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
      // left: 6px;
    }
    input {
      padding-left: 32px;
      width: 200px;
      display: inline-block;
      border-radius: 6px 0 0 6px;
      vertical-align: middle;
    }

    button {
      user-select: none;
      border-radius: 0 6px 6px 0;
    }
  }
}
</style>
