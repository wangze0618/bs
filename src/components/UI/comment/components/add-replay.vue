<template>
  <div style="">
    <span @click="showReplayBox">回复</span>
    <div v-if="isReplay" class="replay-btn ms-3">
      <div class="replay-box">
        <textarea
          rows="3"
          cols="10"
          placeholder="善语结良缘，恶语伤人心~"
          class="form-control"
          v-model="replayText"
          v-foucs
        />
        <button
          type="button"
          @click="sendReplay"
          class="btn btn-outline-primary"
        >
          发送
        </button>
        <button
          type="button"
          @click="hideReplayBox"
          class="btn btn-outline-primary"
        >
          关闭
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const vFoucs = {
  mounted: (el) => el.focus(),
}
let isReplay = ref(false)
const props = defineProps({
  obj: {
    type: [Object],
  },
})
const emit = defineEmits(["getReplay"])
const replayText = ref("")
const sendReplay = () => {
  emit("getReplay", [replayText.value, props.obj])
}
const showReplayBox = () => {
  isReplay.value = true
}
const hideReplayBox = () => {
  isReplay.value = false
}
</script>

<style scoped lang="scss">
.replay-btn {
  position: relative;
  .replay-box {
    transition: all 0.4s;
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0px 0px 2px 0px #333;
    width: 220px;
    position: absolute;
    z-index: 1;
    left: -20px;
    @media (max-width: 576px) {
      left: -200px;
    }
  }
}
</style>
