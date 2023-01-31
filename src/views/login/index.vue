<template>
  <div class="login">
    <div class="header container">
      <div class="main">
        <h1 style="display: flex">
          <img
            @click="router.push('/')"
            src="@/assets/image/logo.jpg"
            alt=""
            srcset=""
          />
          <span style="margin-left: 20px">欢迎登陆</span>
        </h1>
        <router-link to="/">返回首页 &gt;&gt; </router-link>
      </div>
    </div>
  </div>
  <div class="content">
    <!-- <video
      muted
      autoplay
      loop
      class="login-video"
      src="@/assets/login.mp4"
    ></video> -->
    <div class="wrap1">
      <div class="row">
        <div class="form-main col-sm-12">
          <div class="tabs">
            <div
              :class="{ active: activeName == 'form-box' }"
              @click="activeName = 'form-box'"
              class="form-login"
            >
              表单登录
            </div>
            <div
              :class="{ active: activeName == 'qrcode-box' }"
              @click="activeName = 'qrcode-box'"
              class="qrcode"
            >
              二维码登录
            </div>
          </div>
          <!-- 表单登录  -->
          <div v-if="activeName == 'form-box'" class="form-box">
            <Form></Form>
          </div>
          <!-- 二维码 -->
          <div v-if="activeName == 'qrcode-box'" class="qrcode-box">
            <img src="@/assets/qrcode.png" alt="" />
            <p class="qr-notice mt-3">欢迎关注“会理古城”公众号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { WOW } from "wowjs"
import Form from "./components/form.vue"
const router = useRouter()
const activeName = ref("form-box")
onMounted(() => {
  new WOW({
    live: false, // 当时为了解决警告问题 想查看所有属性可去官网了解  https://wowjs.uk/docs.html
  }).init()
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.active {
  color: var(--c-goldenrot);
  border-bottom: 2px solid var(--c-goldenrot);
}
.form-box {
  padding: 20px;
}
.qrcode-box {
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 40px;
    width: 260px;
    border-radius: 5px;
  }
}
.wrap1 {
  position: relative;
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  height: 100vh;
  background: url("@/assets/upload/home/home1.webp") no-repeat center center;
  background-size: cover;
  .form-main {
    backdrop-filter: blur(8px);
    padding: 0;
    z-index: 999;
    overflow: hidden;
    .tabs {
      height: 46px;
      background-color: rgba(240, 248, 255, 0.276);
      display: flex;
      align-items: center;
      color: rgb(255, 255, 255);

      > div {
        user-select: none;
        cursor: pointer;
        flex: 1;
        height: 100%;
        text-align: center;
        line-height: 50px;
      }
      > div:nth-child(1) {
        border-right: 1px solid rgba(255, 255, 255, 0.456);
      }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    @media (min-width: 541px) {
      width: 440px;
    }

    // background-color: rgba(76, 76, 76, 0.618);
    background-color: rgba(34, 34, 34, 0.318);
    @include card-shadow;
    border: 1px solid var(--color-border-1);
  }
}
a {
  color: #fff;
  &:hover {
    color: #fff;
  }
}
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 76px;
  z-index: 999;
  background-color: rgba(54, 54, 54, 0.294);

  .header {
    height: 100%;
    .main {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1,
      img {
        margin-bottom: 0;
      }
      h1 {
        color: #fff;
        font-size: 22px;
        align-items: center;
      }
      img {
        height: 50px;
      }
    }
  }
}

.login-video {
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
