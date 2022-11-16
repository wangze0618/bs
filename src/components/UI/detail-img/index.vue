<template>
  <div class="detail-img">
    <div class="showImg">
      <img class="big" :src="imgList[currImgIndex].url" alt="" />
    </div>
    <div class="small-list">
      <template v-for="(item, index) in imgList">
        <img @click="changeImg(index)" :src="item.url" alt="" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch, reactive, ref } from "vue"
let currImgIndex = ref(0)

const changeImg = (i) => {
  currImgIndex.value = i
}
let imgList = [
  {
    id: 0,
    url: require("@/assets/upload/handmade1.webp"),
  },
  {
    id: 1,
    url: require("@/assets/upload/handmade2.jpeg"),
  },
  {
    id: 2,
    url: require("@/assets/upload/handmade1.webp"),
  },
  {
    id: 3,
    url: require("@/assets/upload/handmade2.jpeg"),
  },
  {
    id: 4,
    url: require("@/assets/upload/handmade1.webp"),
  },
]
</script>

<style scoped lang="scss">
.detail-img {
  position: relative;
  height: 100%;
  // width: 370px;

  .showImg {
    position: relative;
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
