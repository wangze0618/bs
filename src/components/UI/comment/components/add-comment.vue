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
      v-model="text"
    />
    <Button @click="logText()" class="button1" size="large">发布</Button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useStore } from "vuex"
import Button from "@/components/UI/button/index.vue"
import AlertBox from "../../alert"
const store = useStore()
const tar = ref(null)
const text = ref("")
const emit = defineEmits(["getText"])

const logText = () => {
  try {
    if (text.value.trim().length == 0) {
      return AlertBox("warning", "内容不能为空！")
    } else {
      emit("getText", text.value)
      text.value = null
    }
  } catch (error) {}
}

const changeRows = (e) => {
  setTimeout(() => {
    e.target.rows = 3
  }, 100)
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
