<template>
  <div class="like">
    <Like
      @click="likeEvent(true)"
      class="icon"
      v-if="!like"
      size="1.2em"
    ></Like>
    <Like
      @click="likeEvent(false)"
      class="icon"
      v-else
      size="1.2em"
      theme="filled"
      fill="red"
    ></Like>
    <span>{{ count }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Like } from "@icon-park/vue-next"
const emit = defineEmits(["update:like", "onLike"])
const props = defineProps({
  like: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
})

const likeEvent = (isLike) => {
  emit("update:like", isLike)
  if (isLike) {
    emit("onLike", props.count + 1)
  } else {
    emit("onLike", props.count - 1)
  }
}
</script>

<style scoped lang="scss">
.like {
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  .icon {
    margin-top: -0.2em;
    cursor: pointer;
  }
  span {
    margin-left: 0.2em;
  }
}
</style>
