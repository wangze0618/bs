<template>
  <div class="confirm-box">
    <div class="confirm-content">
      <div class="title-content">
        <h2 class="title">{{ title }}</h2>
        <Close size="24" @click="cancel" class="close-icon"></Close>
      </div>
      <div class="main-content">
        <Attention
          theme="outline"
          style="margin-right: 5px"
          size="24"
          fill="#333"
        />
        <p>{{ text }}</p>
      </div>
      <div class="bottons-content">
        <Button @click="cancel" type="primary" size="normal">取消</Button>
        <Button @click="confirm" type="primary" size="normal">好</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import Button from "../button/index.vue"
import { Close, Attention } from "@icon-park/vue-next"
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
  text: {
    type: String,
    default: "内容",
  },
  cancelCallback: {
    type: Function,
  },
  confirmCallback: {
    type: Function,
  },
})
const cancel = () => {
  props.cancelCallback()
}
const confirm = () => {
  props.confirmCallback()
}
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.confirm-box {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.432);
  backdrop-filter: blur(5px);
  .confirm-content {
    position: absolute;
    left: 50%;
    border-radius: 10px;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    @include card-shadow;
    margin: 0 auto;
    height: 260px;
    width: 460px;
    @media (max-width: 576px) {
      width: 100%;
    }
    .title-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px;
      .title {
        font-size: 18px;
        margin: 0;
      }
      .close-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
    .main-content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      height: 140px;
      p {
        margin-bottom: 0;
      }
    }
    .bottons-content {
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
    }
  }
}
</style>
