<template>
  <div class="comment-row">
    <img class="avatar" :src="store.state.user.profile.user_pic" alt="" />
    <textarea
      ref="tar"
      rows="2"
      @focus="changeRows($event)"
      @blur="backRows($event)"
      placeholder="善语结良缘，恶语伤人心~"
      class="form-control text1"
    />
    <Button class="button1" size="large">发布</Button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import Button from "@/components/UI/button/index.vue"
const store = useStore()
const tar = ref(null)
const changeRows = (e) => {
  e.target.rows = 3
}
const backRows = (e) => {
  setTimeout(() => {
    e.target.rows = 2
  }, 300)
}
</script>

<style scoped lang="scss">
.comment-row {
  display: flex;
  flex-wrap: nowrap;

  .text1 {
    transition: all 0.5s;
    resize: none;
  }
  .avatar {
    margin-right: 10px;
    padding: 0;
    border-radius: 25px;
    width: 50px;
    height: 50px;
  }
  :deep(.button1) {
    margin-left: 10px;
    button {
      height: 100%;
    }
  }
}
</style>
