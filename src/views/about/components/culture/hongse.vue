<template>
  <div class="hongse">
    <img src="@/assets/upload/hongse.jpg" alt="" />
    <p>
      合江有着悠久的革命历史。1920年，中共早期优秀赏员穆青，就是从这块养育他的热土，走向革命的法兰西岁月。1922年中共早期革命活动家恽代英在川南师范任教期间率领宣讲团来合江传播马列主义。在他的培养下，合江进宝青年曾润百于1923年加入了中国共产党，成为泸州第一个党小组负责人。1926年合江建立党组织，1928年中共合江特支成立。1929年，中共赤合特支在尧坝古镇成立。成为川黔边区的红色革命据点。1935年3月10日为策应中央长征红军四渡赤水，在中共泸县中心县委领导下爆发了合江五通石顶山起义，成立了“川滇黔边区工农红军游击纵队”，写下了红色武装斗争吏的光辉一页。
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.hongse {
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
