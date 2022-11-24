<template>
  <div class="steps">
    <div
      class="step-item"
      v-for="(item, index) in list"
      :class="{ active1: active >= index + 1 }"
      :key="index"
    >
      <!-- icon and line -->
      <div class="icon-line">
        <div class="line" :class="{ active2: active > index + 1 }"></div>
        <div class="icon">
          <span>{{ index + 1 }}</span>
        </div>
      </div>
      <!-- text -->
      <div class="text">
        <h4 class="title">{{ item.props.title }}</h4>
        <p>{{ item.props.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots } from "vue"
const slots = useSlots().default()
let list = []
const props = defineProps({
  active: {
    type: Number,
    default: 1,
  },
})
slots.forEach((item, index) => {
  list.push(item)
})
</script>

<style scoped lang="scss">
@media (max-width: 992px) {
  .icon {
    width: 45px !important;
    height: 45px !important;
    line-height: 45px !important;
  }
  .text {
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 16px !important;
    }
  }
}
@media (max-width: 768px) {
  .icon {
    width: 40px !important;
    height: 40px !important;
    line-height: 40px !important;
  }
  .text {
    h4 {
      font-size: 19px;
    }
    p {
      font-size: 15px !important;
    }
  }
}
@media (max-width: 768px) {
  .icon {
    width: 38px !important;
    height: 38px !important;
    line-height: 38px !important;
  }
  .text {
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 14px !important;
    }
  }
}
@media (max-width: 576px) {
  .icon {
    width: 36px !important;
    height: 36px !important;
    line-height: 36px !important;
  }
  .text {
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 13px !important;
    }
  }
}
* {
  transition: all 0.1s ease-in-out !important;
}
.steps {
  user-select: none;
  display: flex;

  .step-item {
    text-align: center;
    flex-basis: 25%;
    &:last-child {
      .line {
        display: none;
      }
    }
    .text {
      text-align: center;
      h4 {
        margin-top: 4px;
      }
      p {
        font-size: 18px;
      }
      p,
      h4 {
        margin-bottom: 0;
      }
    }
    .icon-line {
      position: relative;

      .line {
        position: absolute;
        height: 2px;
        width: 100%;
        right: -50%;
        background-color: #d4d4d4;
        bottom: calc(50%);
        transform: translateY(1px);
        z-index: 0;
      }
      .icon {
        display: inline-block;
        position: relative;
        width: 50px;
        height: 50px;
        border: 1px solid gray;
        border-radius: 50%;
        text-align: center;
        line-height: 50px;
        font-size: 28px;
        color: #444;
        background-color: #ebebeb;
      }
    }
  }
}
.active2 {
  background-color: red !important;
}
.active1 {
  .text {
    color: red;
  }
  .icon {
    background-color: red !important;
    color: #fff !important;
    border: 1px solid #ae3535 !important;
  }
}
</style>
