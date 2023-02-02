<template>
  <header class="header" :class="{ scroll: top > 300 }">
    <!-- 大于576px pc端 -->
    <div class="container-lg pc-item">
      <img @click="goHome" src="@/assets/image/logo.jpg" alt="" />
      <HeaderItem class="pc-item-list"> </HeaderItem>
    </div>

    <!-- 移动端 -->
    <div class="container moble">
      <img @click="goHome" src="@/assets/image/logo.jpg" alt="" />
      <details class="details" ref="details" @click="toggle">
        <summary>
          <span></span>
          <span></span>
          <span></span>
        </summary>
      </details>
    </div>
  </header>
  <WDrawer class="drawer" @touchmove.prevent v-model:show="show">
    <div class="wrap">
      <router-link class="home" to="/">首页</router-link>
      <router-link class="intro" to="/about">走进尧坝</router-link>
      <CollapseSlot>
        <router-link to="/special">特色产品</router-link>
        <template #menu>
          <CollapseItem @click="router.push('/special/food')"
            >特色美食</CollapseItem
          >
          <CollapseItem @click="router.push('/special/handmade')"
            >特色手工</CollapseItem
          >
        </template>
      </CollapseSlot>
      <CollapseSlot>
        <span>旅游服务</span>
        <template #menu>
          <CollapseItem @click="router.push('/service/hotel')"
            >酒店住宿</CollapseItem
          >
          <CollapseItem @click="router.push('/service/route')"
            >路线规划</CollapseItem
          >
          <CollapseItem @click="router.push('/service/qa')"
            >常见问答</CollapseItem
          >
          <CollapseItem @click="router.push('/service/play-guide')"
            >行程推荐</CollapseItem
          >
        </template>
      </CollapseSlot>
      <!-- 新闻资讯 -->
      <router-link class="news" to="/news">新闻资讯</router-link>
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

      <RouterLink class="comment" to="/comment">用户留言</RouterLink>
      <RouterLink class="cart" to="/cart">购物车</RouterLink>
      <RouterLink class="aboutus" to="/aboutus">关于我们</RouterLink>
    </div>
  </WDrawer>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue"
import WDrawer from "./w-drawer.vue"
import HeaderItem from "./header-item/index.vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import CollapseSlot from "./collapse-slot/index.vue"
import CollapseItem from "./collapse-slot/components/collapse-item.vue"
import AlertBox from "./alert"
import ConfirmBox from "./confirm"
const store = useStore()
let top = ref(0)
const show = ref(false)
const details = ref(null)
const router = useRouter()
const goHome = () => {
  router.push("/")
}

const toggle = () => {
  show.value = !show.value
  if (show.value == false) {
    setTimeout(() => details.value.removeAttribute("open"), 0)
  }
}

const logout = async () => {
  try {
    await ConfirmBox({ title: "退出登录", text: "确定退出登录?" })
    store.commit("user/setUserToken", null)
    AlertBox("success", "退出成功!")
  } catch (error) {}
}

onMounted(() => {
  window.document.addEventListener("scroll", () => {
    top.value = document.documentElement.scrollTop
  })
  watch(
    () => show.value,
    (newValue) => {
      if (newValue == false) {
        details.value.removeAttribute("open")
      }
    },
    {
      immediate: true,
    }
  )
})
</script>

<style scoped lang="scss">
.wrap {
  padding: 16px;
  display: flex;
  flex-direction: column;
  .comment,
  .cart,
  .aboutus {
    color: #000;
    // width: 100%;
    line-height: 38px;
    display: block;
    width: fit-content;
    height: 38px;
  }
  .home,
  .login-out,
  .intro,
  .news {
    color: #000;
    width: fit-content;
    line-height: 38px;
    display: block;
    height: 38px;
  }
  .collapse-box {
    a {
      color: #000;
    }
    color: #000;
    padding: 0;
  }
}
img {
  width: 70px;
  height: 70px;
  border-radius: 10px;
}
.pc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  :deep(.pc-item-list) {
    display: flex;
  }
  // @media (min-width: 768px) {
  // }
  @media (max-width: 768px) {
    display: none;
  }
}
.moble {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (width>769px) {
    display: none;
  }
}

.router-link-exact-active {
  position: relative;
  left: 0;
  top: 0;
  &::after {
    position: absolute;
    display: block;
    content: "";
    left: -15px;
    top: 13px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #daa520;
  }
  color: #daa520 !important;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88px;
  background-color: rgba(#daa520, 0.887);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  transition: all 0.4s;
  border-bottom: 1px solid rgba(#d19a0d, 0.4);
  &.scroll {
    height: 74px;
    background-color: rgba(#daa520, 0.9);
  }
  details {
    width: 30px;
    @media (width>769px) {
      display: none;
    }
    user-select: none;
    &[open] {
      summary {
        span {
          &:nth-child(1) {
            top: calc(50% - 1px);
            transform: rotate(-45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(45deg);
            bottom: calc(50% - 1px);
          }
        }
      }
    }

    summary {
      position: relative;
      height: 30px;
      list-style: none;
      &::-webkit-details-marker {
        display: none;
      }
      span {
        position: absolute;
        width: 30px;
        height: 2px;
        background-color: #ffffff;
        transition: all 0.5s;
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
    }
  }
}
.drawer {
  :deep(.content) {
    border-right: 1px solid var(--color-border-1);
    @media (prefers-color-scheme: dark) {
      filter: brightness(95%);
    }
  }
}
</style>
