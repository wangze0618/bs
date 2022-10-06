<template>
  <div class="header-item">
    <template v-for="(item, index) in headerItem" :key="index">
      <Dropdown class="dropdown" :data="item"></Dropdown>
    </template>
    <a
      v-if="store.state.user.token == null"
      @click="router.push('/login')"
      href="javascript:;"
      >登录</a
    >
    <a v-if="store.state.user.token" @click="logout()" href="javascript:;"
      >退出登录</a
    >
    <a href="javascript:;">
      <template v-for="(item, index) in item1" :key="index">
        <Dropdown :data="item"></Dropdown>
      </template>
    </a>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import Dropdown from "./dropdown/index.vue"
import headerItem from "@/api/header-item"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import AlertBox from "../alert"
import confirmBox from "../confirm"
const router = useRouter()
const store = useStore()
const item1 = [
  {
    title: "个人中心",
    to: "/user",
    children: [
      {
        title: "登录",
        to: "/user",
      },
    ],
  },
]

const logout = async () => {
  try {
    await confirmBox({ title: "退出登录", text: "确定退出登录?" })
    store.commit("user/setUserToken", null)
    AlertBox("success", "退出成功!")
  } catch (error) {}
}
</script>

<style scoped lang="scss">
.header-item {
  width: 100%;
  justify-content: space-around;
  a {
    color: #fff;
  }
}
.dropdown {
}
</style>
