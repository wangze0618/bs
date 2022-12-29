<template>
  <div class="detail-img">
    <div class="showImg" v-viewer="{ navbar: false }">
      <template v-for="(img, index) in imgList">
        <Transition
          name="img"
          class="img-transition"
          :duration="{ enter: 400, leave: 400 }"
          appear
          appear-active-class="animated fadeIn"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
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
import { onMounted, watch, reactive, ref } from "vue"
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
.detail-img {
  position: relative;
  height: 100%;
  // width: 370px;

  .showImg {
    position: relative;
    cursor: grab;
    height: 370px;
    overflow: hidden;
    // width: 370px;
    // height: 370px;
  }
  .big {
    height: 370px;
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
