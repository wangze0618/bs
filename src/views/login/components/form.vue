<template>
  <Form
    v-if="hasAccount"
    ref="formLogin"
    :validation-schema="validateSchema"
    v-slot="{ errors }"
  >
    <!-- 登录 -->
    <div class="has-account">
      <!-- 登录账号 -->
      <div class="">
        <label for="username" class="form-label">账号</label>
        <Field
          name="username"
          type="text"
          v-model="loginForm.username"
          class="form-control"
          id="username"
        />
      </div>
      <div v-if="errors.username" id="username-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> {{ errors.username }} </span>
      </div>

      <!-- 登录密码 -->
      <div class="mt-4">
        <label for="password" class="form-label">密码</label>
        <Field
          name="password"
          type="password"
          v-model="loginForm.password"
          class="form-control"
          id="password"
        />
      </div>
      <div v-if="errors.password" id="password-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> {{ errors.password }} </span>
      </div>
      <div class="mt-2 mb-3 form-check">
        <input
          v-model="loginForm.isAgree"
          class="form-check-input"
          :value="loginForm.isAgree"
          id="exampleCheck1"
          type="checkbox"
          name="isAgree"
        />
        <label
          class="form-check-label"
          style="user-select: none; color: #fff"
          for="exampleCheck1"
          >我同意协议</label
        >
      </div>
      <div v-if="!loginForm.isAgree" id="check-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> 请勾选 </span>
      </div>
    </div>
  </Form>

  <Form
    ref="formRegist"
    :validation-schema="validateSchema2"
    v-slot="{ errors }"
    v-else
  >
    <!-- 注册 -->
    <div class="no-account">
      <!-- 注册账号 -->
      <div class="">
        <label for="username" class="form-label">账号</label>
        <Field
          name="username"
          v-model="registFrom.username"
          type="text"
          class="form-control"
          id="username"
        />
      </div>
      <div v-if="errors.username" id="username-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> {{ errors.username }}</span>
      </div>

      <!-- 注册密码 -->
      <div class="mt-2">
        <label for="registPassword" class="form-label">密码</label>
        <Field
          type="password"
          name="password"
          v-model="registFrom.password"
          class="form-control"
          id="registPassword"
        />
      </div>
      <div v-if="errors.password" id="password-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> {{ errors.password }} </span>
      </div>
      <!-- 重复密码 -->
      <div class="mt-2">
        <label for="registPassword1" class="form-label">重复密码</label>
        <Field
          name="password1"
          type="password"
          class="form-control"
          id="registPassword1"
          v-model="registFrom.password2"
        />
      </div>
      <div v-if="errors.password1" id="password-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span>{{ errors.password1 }} </span>
      </div>
      <!-- 注册手机 -->
      <div class="mt-2 row">
        <div class="tel1 col-8">
          <label for="phone" class="form-label">手机号</label>
          <Field
            name="mobile"
            v-model="registFrom.mobile"
            type="tel"
            class="form-control"
            id="phone"
          />
        </div>
        <div class="tel2 col-4">
          <!-- 验证码倒计时组件 -->
          <Countdown class="countdown"></Countdown>
        </div>
      </div>
      <div v-if="errors.mobile" id="phone-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> {{ errors.mobile }}</span>
      </div>

      <!-- 验证码 -->
      <div class="mt-2">
        <label for="code" class="form-label">验证码</label>
        <Field name="code" type="text" class="form-control" id="code" />
      </div>
      <div v-if="errors.code" id="code-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span>{{ errors.code }} </span>
      </div>

      <!-- 单选验证 -->
      <div class="mt-2 mb-3 form-check">
        <input
          v-model="registFrom.isAgree"
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        />
        <label
          class="form-check-label"
          style="user-select: none; color: #fff"
          for="exampleCheck1"
          >我同意协议</label
        >
        <div v-if="!registFrom.isAgree" id="check-error" class="form-text">
          <Attention class="me-1"></Attention>
          <span> 请勾选 </span>
        </div>
      </div>
    </div>
  </Form>
  <div class="submit d-flex justify-content-around">
    <Button
      type="secondary"
      @click="hasAccount ? resetLogin() : resetRegist()"
      size="normal"
      >重置</Button
    >
    <Button
      @click="loginSubmit()"
      v-if="hasAccount"
      type="primary"
      size="normal"
      >登录</Button
    >
    <Button @click="registSubmit()" v-else type="primary" size="normal"
      >注册</Button
    >
  </div>

  <div class="change-way mt-4">
    <a @click="hasAccount = fasle" v-if="hasAccount" href="javascript:;"
      >没有账号？去注册</a
    >
    <a @click="hasAccount = true" v-else href="javascript:;"
      >已有账号？去登录</a
    >
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { Attention } from "@icon-park/vue-next"
import Button from "@/components/UI/button/index.vue"
import Countdown from "./countdown.vue"
import { Form, Field } from "vee-validate"
import validateSchema from "@/utils/validate-login-schema"
import validateSchema2 from "@/utils/validate-regist-schema"
// import { userLogin, userRegist } from "@/api/backend/user"
import { useStore } from "vuex"
import AlertBox from "@/components/UI/alert"
import { useRouter, useRoute } from "vue-router"
const router = useRouter()
const route = useRoute()
const store = useStore()
const hasAccount = ref(true)
const formLogin = ref(null)
const formRegist = ref(null)

const loginForm = reactive({
  isAgree: true,
  username: null,
  password: null,
})
const registFrom = reactive({
  isAgree: true,
  username: null,
  password: null,
  password2: null,
  mobile: null,
})
const loginSubmit = async () => {
  const valid = await formLogin.value.validate()
  if (valid.valid) {
    const loginData = {
      username: loginForm.username,
      password: loginForm.password,
    }
    // const data = await userLogin(loginData)
    // if (data.data.token) {
    //   store.commit("user/setUserToken", data.data.token)
    //   AlertBox("success", data.data.message)
    // } else {
    //   AlertBox("warning", data.data.message)
    // }
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJhZG1pbjEiLCJwYXNzd29yZCI6IiIsIm5pY2tuYW1lIjoi5bCP5rO98J-YhCIsImVtYWlsIjoiMjg2NzI3MzgyOEBxcS5jb20iLCJ1c2VyX3BpYyI6IiIsImludHJvZHVjZSI6IuaIkeaYr-Wwj-azvX4iLCJtb2JpbGUiOiIiLCJpYXQiOjE2NjY2MTM5MjUsImV4cCI6MTY2NjcwMDMyNX0.es9tit4oRdc3uMMP51Rglzx0WLPYrnJ3TjljpyBdKko"
    if (loginForm.username == "admin1" && loginForm.password == "000000") {
      store.commit("user/setUserToken", token)
      AlertBox("success", "登录成功！三秒后自动返回")
      console.log(route.query)
      setTimeout(() => {
        router.replace(route.query.redirectUrl)
      }, 3000)
    } else {
      AlertBox("warning", "登录失败！")
    }
  }
}
const registSubmit = async () => {
  const valid = await formRegist.value.validate()
  if (valid.valid) {
    const registData = {
      username: registFrom.username,
      password: registFrom.password,
      mobile: registFrom.mobile,
    }
    const { data } = await userRegist(registData)
    if (data) {
      AlertBox("success", "注册成功！")
    }
  }
}
const resetLogin = () => {
  formLogin.value.resetForm()
}
const resetRegist = () => {
  formRegist.value.resetForm()
}
</script>

<style scoped lang="scss">
.tel2 {
  position: relative;
  .countdown {
    padding-left: 5px;
    position: absolute;
    top: 34px;
  }
}
.change-way {
  text-align: center;
  a {
    color: #fff;
  }
}
input {
  background-color: rgba(255, 255, 255, 0.69);
}
.form-label {
  color: #fff;
  letter-spacing: 3px;
}
.form-text {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: red;
}
</style>
