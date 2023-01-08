<template>
  <div class="qa-collapse shadow">
    <div class="title-box" @click="openBox()">
      <h4 class="title">
        <slot name="title">title</slot>
      </h4>
      <Right class="icon" :class="{ rotate: isOpen }" size="1.6em"></Right>
    </div>
    <Transition
      :duration="{ enter: 500, leave: 450 }"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div v-show="isOpen" class="context">
        <p>
          <slot name="content"></slot>
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { Right } from "@icon-park/vue-next"
const props = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
})
let isOpen = ref(props.open)
const openBox = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped lang="scss">
.qa-collapse {
  border-radius: 0.8em;
  overflow: hidden;
  border: 1px solid #dedede;

  @media (max-width: 576px) {
    font-size: 12px;
  }

  .title-box {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.6em 0.8em;
    justify-content: space-between;
    border-bottom: 1px solid #dedede;

    .title {
      margin-bottom: 0;
      font-size: 19px;
      @media (min-width: 768px) {
        font-size: 19px;
      }
      @media (max-width: 576px) {
        font-size: 17px;
      }
    }
    .icon {
      transition: all 0.5s;
      &.rotate {
        transform: rotate(90deg);
        transform-origin: 50%;
      }
    }
  }
  .context {
    background-color: #f9f9f9;
    padding: 0.4em 0.5em;
    color: #333;
    text-indent: 2em;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 576px) {
      font-size: 16px;
    }
    p {
      margin-bottom: 0;
    }
  }
}
</style>
