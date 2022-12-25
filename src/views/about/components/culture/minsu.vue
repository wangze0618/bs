<template>
  <div class="minsu">
    <img src="@/assets/upload/minsu.jpg" alt="" />
    <p>
      尧坝古镇民俗文化丰富多彩，至今仍保留着迎亲、川剧、薅秧歌、对联等。“花花轿”、“牛牛灯”等民风民俗表演展现了尧坝古镇民风醇厚与农耕特色；尧坝古镇传统手工业保存完好，至今依然完整的保留着油纸伞、纺线、补锅、竹编等手工业，传统手工业的发达也造就了中国雕塑家王朝闻的成长基础，增添了古镇的魅力。
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.minsu {
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
