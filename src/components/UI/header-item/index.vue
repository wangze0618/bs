<template>
  <template v-for="(item, index) in headerItem">
    <div class="box">
      <router-link class="link" :to="item.to">
        {{ item.title }}
      </router-link>
      <template v-if="item.children">
        <div class="layer">
          <ul>
            <li v-for="(its, ind) in item.children">{{ its.title }}</li>
          </ul>
        </div>
      </template>
    </div>
  </template>
  <input
    placeholder="搜索"
    type="search"
    class="form-control search-input"
    id="search"
  />
</template>

<script setup>
import { ref } from "vue"
import headerItem from "@/api/header-item"
</script>

<style scoped lang="scss">
.active {
  display: block !important;
}
.box {
  position: relative;
  height: 100%;
  line-height: 88px;
  a {
    display: inline-block;
    height: 100%;
  }
  .layer {
    position: absolute;
    width: 136px;
    height: 200px;
    background-color: #fff;
    top: 56px;
    left: -36px;
    display: none;
    &::after {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      display: block;
      border: 20px solid;
      border-color: transparent transparent rgb(255, 255, 255);
    }
  }
}

.search-input {
  display: none;
  height: 40px;
  min-width: 100px;
  max-width: 150px;
  @media (min-width: 1024px) {
    display: block;
  }
}
</style>
