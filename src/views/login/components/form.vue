<template>
  <Form ref="formCom" :validation-schema="validateSchema" v-slot="{ errors }">
    <!-- 登录 -->
    <div class="has-account" v-if="hasAccount">
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
      <div class="mt-2">
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

    <!-- 注册 -->
    <div class="no-account" v-else>
      <!-- 注册账号 -->
      <div class="">
        <label for="username" class="form-label">账号2</label>
        <input type="text" class="form-control" id="username" />
      </div>
      <div id="username-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> We'll never . </span>
      </div>

      <!-- 注册密码 -->
      <div class="mt-2">
        <label for="registPassword" class="form-label">密码</label>
        <input type="password" class="form-control" id="registPassword" />
      </div>
      <div id="password-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> We'll never sh. </span>
      </div>
      <!-- 重复密码 -->
      <div class="mt-2">
        <label for="registPassword1" class="form-label">重复密码</label>
        <input type="password" class="form-control" id="registPassword1" />
      </div>
      <div id="password-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> We'll never sh. </span>
      </div>
      <!-- 注册手机 -->
      <div class="mt-2 row">
        <div class="tel1 col-6">
          <label for="phone" class="form-label">手机号</label>
          <input type="tel" class="form-control" id="phone" />
        </div>
        <div class="tel2 col-6">
          <label for="code" class="form-label">验证码</label>
          <input type="text" class="form-control" id="code" value="1234" />
        </div>
      </div>
      <div id="phone-error" class="form-text">
        <Attention class="me-1"></Attention>
        <span> We'll never sh. </span>
      </div>

      <!-- 单选验证 -->
      <div class="mt-2 mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label
          class="form-check-label"
          style="user-select: none; color: #fff"
          for="exampleCheck1"
          >我同意协议</label
        >
      </div>
    </div>
    <div class="submit d-flex justify-content-around">
      <Button type="secondary" size="normal">重置</Button>
      <Button
        @click="loginSubmit()"
        v-if="hasAccount"
        type="primary"
        size="normal"
        >登录</Button
      >
      <Button v-else type="primary" size="normal">注册</Button>
    </div>

    <div class="change-way mt-3">
      <a @click="hasAccount = fasle" v-if="hasAccount" href="javascript:;"
        >没有账号？去注册</a
      >
      <a @click="hasAccount = true" v-else href="javascript:;"
        >已有账号？去登录</a
      >
    </div>
  </Form>
</template>

<script setup>
import { reactive, ref } from "vue"
import { Attention } from "@icon-park/vue-next"
import Button from "@/components/UI/button/index.vue"
import { Form, Field, ErrorMessage } from "vee-validate"
import validateSchema from "@/utils/validate-login-schema"
const hasAccount = ref(true)
const formCom = ref(null)

const loginForm = reactive({
  isAgree: true,
  username: null,
  password: null,
})
const loginSubmit = async () => {
  const valid = await formCom.value.validate()
  console.log(valid)
  if (valid.valid) {
    console.log(loginForm)
  }
}
</script>

<style scoped lang="scss">
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
