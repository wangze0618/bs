<template>
  <div class="detail-img">
    <div class="showImg" v-viewer="{ navbar: false }">
      <template v-for="(img, index) in imgList">
        <Transition name="img" mode="out-in">
          <img v-if="currImgIndex == index" class="big" :src="img" alt="" />
        </Transition>
      </template>
    </div>
    <div class="small-list">
      <template v-for="(item, index) in imgList">
        <img @click="changeImg(index)" :src="item" alt="" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
let currImgIndex = ref(0)
const props = defineProps({
  imgList: {
    type: Array,
  },
})
const changeImg = (i) => {
  currImgIndex.value = i
}
</script>

<style scoped lang="scss">
.img-enter-active {
  transition: opacity 0.5s;
}
.img-enter-from,
.img-leave-to {
  opacity: 0;
}
.img-enter-to,
.img-leave-from {
  opacity: 1;
}
.detail-img {
  position: relative;
  height: 100%;

  .showImg {
    position: relative;
    cursor: grab;
    overflow: hidden;
    height: 360px;
    @media (max-width: 576px) {
      height: 260px;
    }
  }
  .big {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .small-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
