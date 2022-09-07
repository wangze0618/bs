<template>
  <div class="dropdown">
    <div class="father">
      <a v-if="!data.to" href="javascript:;">{{ data.title }}</a>
      <router-link v-else :to="data.to">{{ data.title }}</router-link>
      <ul class="son" v-if="data.children">
        <template v-for="(its, ids) in data.children">
          <a v-if="!its.to" href="javascript:;">{{ its.title }}</a>
          <router-link v-else :to="its.to">{{ its.title }}</router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
const props = defineProps({
  data: {
    type: [Array, Object],
  },
})
</script>

<style scoped lang="scss">
.father {
  height: 100%;
  position: relative;
  display: inline-block;
  margin-top: -100px;
  a {
    color: #fff;
  }

  .son {
    width: 140px;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    background-color: #fff;
    display: none;
    z-index: 222;
    opacity: 0;
    left: -30px;
    box-shadow: 0px 2px 20px rgba(51, 51, 51, 0.495);
    a {
      color: #000;
      display: inline-block;
      margin: 2px 0;
    }
  }
  &:hover {
    .son {
      opacity: 1;
      display: block;
    }
  }
}
</style>
