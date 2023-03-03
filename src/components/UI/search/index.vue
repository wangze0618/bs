<template>
  <div class="search-container">
    <div class="search-box" @click="showDialog">
      <Search style="color: #fff" size="26" class="search-icon"></Search>
      <!-- <input
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
      </button> -->
    </div>
  </div>

  <Dialog
    @cancel="cancelDia"
    @confirm="confirmDia"
    :show="isShowDialog"
    title="搜索"
  >
    <input
      v-model.trim="q"
      placeholder="请输入要搜索的内容"
      type="search"
      class="form-control"
    />
  </Dialog>
</template>

<script setup>
import { ref, computed } from "vue"
import { Search } from "@icon-park/vue-next"
import { useRouter } from "vue-router"
import Dialog from "@/components/UI/dialog/index.vue"
import AlertBox from "../alert"
let isShowDialog = ref(false)
let q = ref("")
const router = useRouter()
const isValid = computed(() => {
  if (q.value.length == 0) {
    return true
  } else {
    return false
  }
})
const showDialog = () => {
  isShowDialog.value = true
}
const cancelDia = () => {
  isShowDialog.value = false
}

const confirmDia = () => {
  if (q.value.length !== 0) {
    goToSearch()
    q.value = ""
    isShowDialog.value = false
  } else {
    AlertBox("warning", "请输入内容")
  }
}
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
  width: 36px;
  height: 36px;
  border-radius: 50%;
  //
  .search-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    // border: 1px solid rgba(255, 255, 255, 0.8);
    cursor: pointer;

    .search-icon {
      // position: absolute;
      // top: 50%;
      // transform: translateY(-50%);
      // z-index: 9;
      // margin-left: 6px;
      // pointer-events: none;
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
