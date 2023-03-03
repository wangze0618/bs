<template>
  <div class="header-top">
    <div class="container-1 container-lg">
      <div class="con">
        <div class="">
          <Search></Search>
        </div>
        <span class="link">抖音</span>
        <span class="link">小红书</span>
        <span class="link">微博</span>
        <span class="link">微信公众号</span>
        <!-- 登录注册 -->
        <a
          href="javascript:;"
          class="login-out"
          v-if="store.state.user.token == null"
          @click="router.push('/login')"
          >登录注册</a
        >
        <a
          class="login-out"
          v-if="store.state.user.token"
          @click="logout()"
          href="javascript:;"
          >退出登录</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Search from "@/components/UI/search/index.vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import ConfirmBox from "../confirm"
import AlertBox from "../alert"
const store = useStore()
const router = useRouter()

const logout = async () => {
  try {
    await ConfirmBox({ title: "退出登录", text: "确定退出登录?" })
    store.commit("user/setUserToken", null)
    AlertBox("success", "退出成功!")
  } catch (error) {}
}
</script>

<style scoped lang="scss">
.header-top {
  user-select: none;
  height: 40px;
  background-color: rgb(205, 163, 58);
  position: sticky;
  top: 0;
  z-index: 999;
  // @media (width<=576px) {
  //   transform: translateY(-100%);
  //   // display: none;
  //   visibility: hidden;
  // }
  .container-1 {
    padding-top: 2px;
    .con {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .link {
        // width: 30px;
        color: #fff;
        margin: 0 0.3em;
        cursor: pointer;
      }
      .login-out {
        color: #fff;
      }
    }
    .search-t {
      margin-left: 10px;
    }
  }
}
</style>
