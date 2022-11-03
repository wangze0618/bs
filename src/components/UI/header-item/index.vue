<template>
  <div class="header-item">
    <!-- <template v-for="(item, index) in headerItem" :key="index">
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
    > -->
    <RouterLink to="/">首页</RouterLink>

    <!-- 走进尧坝 -->
    <DropdownSlot>
      <span @click="router.push('/about')">走进尧坝</span>
      <template #dropdown>
        <DropdownItem @click="router.push('/about/detail')">
          详细介绍
        </DropdownItem>
        <DropdownItem> 主要景点 </DropdownItem>
      </template>
    </DropdownSlot>

    <!-- 特色产品 -->
    <DropdownSlot>
      <span>特色产品</span>
      <template #dropdown>
        <DropdownItem @click="router.push('/')"> 特色美食 </DropdownItem>
        <DropdownItem> 特色手工 </DropdownItem>
      </template>
    </DropdownSlot>

    <!-- 旅游服务 -->
    <DropdownSlot>
      <span>旅游服务</span>
      <template #dropdown>
        <DropdownItem @click="router.push('/')"> 酒店住宿 </DropdownItem>
        <DropdownItem> 路线规划 </DropdownItem>
        <DropdownItem> 门票预订 </DropdownItem>
      </template>
    </DropdownSlot>

    <!-- 新闻资讯 -->
    <RouterLink to="/">新闻资讯</RouterLink>

    <!-- 登录注册 -->
    <RouterLink
      v-if="store.state.user.token == null"
      @click="router.push('/login')"
      to="/"
      >登录注册</RouterLink
    >
    <a v-if="store.state.user.token" @click="logout()" href="javascript:;"
      >退出登录</a
    >

    <!-- 用户留言 -->
    <RouterLink to="/">用户留言</RouterLink>

    <!-- 关于我们 -->
    <RouterLink to="/">关于我们</RouterLink>
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
import DropdownSlot from "./dropdown-slot/index.vue"
import DropdownItem from "./dropdown-slot/components/dropdown-item.vue"
const router = useRouter()
const store = useStore()

const logout = async () => {
  try {
    await confirmBox({ title: "退出登录", text: "确定退出登录?" })
    store.commit("user/setUserToken", null)
    AlertBox("success", "退出成功!")
  } catch (error) {}
}
</script>

<style scoped lang="scss">
a {
  color: #fff;
  &:hover {
    color: #fff;
  }
}
span {
  cursor: pointer;
}
.header-item {
  width: 100%;
  justify-content: space-around;
}
.dropdown {
}
</style>
