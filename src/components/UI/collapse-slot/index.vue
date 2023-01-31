<template>
  <!-- 基于slot插槽的移动端 折叠菜单 -->
  <div class="collapse-box">
    <div class="collapse-item">
      <!-- 插槽 title -->
      <a class="collapse-link">
        <slot></slot>
      </a>
      <Right
        v-if="showIcon"
        @click="setClass"
        class="icon1 collapse-link"
        data-bs-toggle="collapse"
        :href="`#collapseExample${randomNum}`"
        size="26"
        :class="{ 'rotate-45': rotate }"
      ></Right>
    </div>

    <!-- 渲染子菜单 -->
    <div class="collapse" :id="`collapseExample${randomNum}`">
      <div class="card card-body">
        <slot name="menu"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { MenuUnfold, Right } from "@icon-park/vue-next"
const props = defineProps({
  showIcon: {
    type: Boolean,
    default: true,
  },
})
let randomNum = ref("")
const randomId = () => {
  randomNum.value = (Math.random() * 1000).toFixed(0)
}

const rotate = ref(false)
const setClass = () => {
  rotate.value = !rotate.value
}
onMounted(() => {
  randomId()
})
</script>

<style scoped lang="scss">
.card {
  border: 2px solid var(--color-border-1);
  a {
    color: #181818;
  }
}
.icon1 {
  transition: all 0.5s;
  transform-origin: 50% 50%;
}
.rotate-45 {
  transform: rotate(90deg);
}
.collapse-box {
  padding: 0 16px;
  .collapse-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .collapse-link {
      padding-top: 6px;
      padding-bottom: 6px;
      display: inline-block;
      color: #181818;
    }
  }
}
</style>
