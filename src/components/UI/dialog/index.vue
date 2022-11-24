<template>
  <!-- Modal -->
  <div class="dialog fade1" v-if="show">
    <div class="wrapper col-12 col-sm-8 col-md-7 col-lg-6">
      <div class="header">
        <h5>{{ title }}</h5>
        <a @click="cancel()" href="javascript:;">
          <Close></Close>
        </a>
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <button @click="cancel()" type="button" class="btn btn-secondary">
          取消
        </button>
        <button @click="confirm()" type="button" class="btn btn-primary">
          确认
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Close } from "@icon-park/vue-next"
import { ref } from "vue"
import Button from "../button/index.vue"
const emit = defineEmits(["cancel", "confirm"])
const props = defineProps({
  show: {
    type: Boolean,
  },
  title: {
    type: String,
    default: "title",
  },
})

const confirm = () => {
  emit("confirm", false)
}
const cancel = () => {
  emit("cancel", false)
}
</script>

<style scoped lang="scss">
.dialog {
  user-select: none;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}
.fade1 {
  transition: all 0.4s;
  background-color: rgba(0, 0, 0, 0.5);
}

.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 6px;
  max-width: 500px;

  .header {
    padding: 10px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    h5 {
      margin-bottom: 0;
      // display: inline-block;
    }
    a {
      // margin-left: auto;
    }
  }
  .body {
    padding: 10px 12px;
  }
  .footer {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e4e4e4;
    padding: 10px 12px;
  }
}
</style>
