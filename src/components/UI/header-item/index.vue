<template>
  <div class="header-item">
    <RouterLink class="routerLink1" to="/">首页</RouterLink>

    <!-- 走进尧坝 -->
    <DropdownSlot>
      <RouterLink class="routerLink1" to="/about">走进尧坝</RouterLink>
      <template #dropdown>
        <DropdownItem @click="router.push('/about/detail')">
          详细介绍
        </DropdownItem>
        <DropdownItem @click="router.push('/about/main-spot')">
          主要景点
        </DropdownItem>
      </template>
    </DropdownSlot>

    <!-- 特色产品 -->
    <DropdownSlot>
      <RouterLink class="routerLink1" to="/special">特色产品</RouterLink>
      <template #dropdown>
        <DropdownItem @click="router.push('/special/food')">
          特色美食
        </DropdownItem>
        <DropdownItem @click="router.push('/special/handmade')">
          特色手工
        </DropdownItem>
      </template>
    </DropdownSlot>

    <!-- 旅游服务 -->
    <DropdownSlot>
      <RouterLink class="routerLink1" to="/service">旅游服务</RouterLink>
      <template #dropdown>
        <DropdownItem @click="router.push('/service/hotel')">
          酒店住宿
        </DropdownItem>
        <DropdownItem @click="router.push('/service/route')">
          路线规划
        </DropdownItem>
        <DropdownItem @click="router.push('/service/ticket')">
          门票预订
        </DropdownItem>
      </template>
    </DropdownSlot>

    <!-- 新闻资讯 -->
    <RouterLink class="routerLink1" to="/news">新闻资讯</RouterLink>

    <!-- 登录注册 -->
    <a
      class="routerLink1"
      v-if="store.state.user.token == null"
      @click="router.push('/login')"
      >登录注册</a
    >
    <a
      class="routerLink1"
      v-if="store.state.user.token"
      @click="logout()"
      href="javascript:;"
      >退出登录</a
    >

    <!-- 用户留言 -->
    <RouterLink class="routerLink1" to="/comment"
      ><span>用户留言</span></RouterLink
    >

    <!-- 关于我们 -->
    <RouterLink class="routerLink1" to="/aboutus">关于我们</RouterLink>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import Dropdown from "./dropdown/index.vue"
import headerItem from "@/api/header-item"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import AlertBox from "../alert"
import confirmBox from "../confirm"
import DropdownSlot from "./dropdown-slot/index.vue"
import DropdownItem from "./dropdown-slot/components/dropdown-item.vue"
import { computed } from "@vue/reactivity"
const router = useRouter()
const route = useRoute()
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
.routerLink1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
  line-height: calc(20px);
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
  height: 100%;
  align-items: center;
  // margin-left: 200px;
  // justify-content: space-around;
  justify-content: flex-end;
}
.dropdown-slot {
  display: flex;
  text-align: center;
  align-items: center;
  width: 80px;
  // line-height: 88px;
  height: 100%;
}
.router-link-exact-active {
  background-color: aqua;
}
</style>
