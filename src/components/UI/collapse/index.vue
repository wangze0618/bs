<template>
  <div class="collapse-box">
    <div class="collapse-item">
      <a v-if="!obj.to" class="collapse-link">
        {{ obj.title }}
      </a>
      <router-link v-else :to="obj.to" class="collapse-link">
        {{ obj.title }}
      </router-link>

      <Right
        @click="setClass"
        class="icon1 collapse-link"
        data-bs-toggle="collapse"
        :href="`#collapseExample${obj.id}`"
        v-show="obj.children"
        size="26"
        :class="{ 'rotate-45': rotate }"
      ></Right>
    </div>

    <!-- 渲染子菜单 -->
    <div class="collapse" :id="`collapseExample${obj.id}`">
      <div class="card card-body" v-if="obj.children">
        <template v-for="(its, ids) in obj.children">
          <a v-if="!its.to" href="javascript:;">{{ its.title }}</a>
          <router-link v-else :to="its.to" class="collapse-link">
            {{ obj.title }}
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { MenuUnfold, Right } from "@icon-park/vue-next"
const props = defineProps({
  obj: {
    type: Object,
  },
})
const rotate = ref(false)
const setClass = () => {
  rotate.value = !rotate.value
}
console.log(props.obj)
</script>

<style scoped lang="scss">
.card {
  a {
    color: #000;
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
      color: #000;
    }
  }
}
</style>
