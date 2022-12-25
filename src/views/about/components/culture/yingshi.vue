<template>
  <div class="yingshi">
    <img src="@/assets/upload/yingshi.jpg" alt="" />
    <p>
      尧坝古镇以其深厚的文化底蕴，独特的民俗风情，精美的古建筑群，深得众多著名导演和影星的钟爱。著名导演凌子风、郭宝昌、黄建中，影星许晴、尤勇、邵兵、马伊琍、魏俊杰（香港）等先后留下了靓丽的身影，故又称为名人故里、影视基地。在古镇拍摄过《狂》、《大鸿米店》、《酒巷深深》、《英雄无界》、《功夫骄子》、《红色记忆》、《革命到底》、《雾柳镇》等20余部影视片佳作，是有名的“川南影视城”。
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.yingshi {
  display: flex;
  flex-direction: column;
  p {
    text-indent: 2em;
    margin: 0 0;
    margin-top: 0.2em;
  }
  img {
    max-width: 100%;
    height: 100%;
    max-height: 260px;
    text-align: center;
  }
}
</style>
