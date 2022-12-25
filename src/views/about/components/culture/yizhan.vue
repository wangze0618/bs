<template>
  <div class="yizhan">
    <img src="@/assets/upload/yizhan.jpg" alt="" />
    <p>
      尧坝古镇的历史可以追溯到宋元时期，它是由最初的驿站逐渐发展起来的。尧坝地处川南与黔北的交通要道，由于古代泸州到贵州的官方传书主要经“川南走廊”过尧坝到贵州赤水、桐梓等地，而尧坝又居走廊中部，是商贾和响马途休、停歇的寨子，加之北方的布匹、食盐、桐油南运、南方的竹笋、药材北调皆要途经尧坝，故尧坝市场繁荣，商品齐全，在别地买不到的东西尧坝能买到，过往客商多，尧坝地区人居复杂，帮派严重，故尧坝有“小香港”之美誉。
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.yizhan {
  display: flex;
  flex-direction: column;

  p {
    text-indent: 2em;
    margin: 0 0;
    margin-top: 0.2em;
  }
  img {
    text-align: center;
    height: 100%;
    max-height: 260px;
    text-align: center;
  }
}
</style>
