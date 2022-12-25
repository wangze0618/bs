<template>
  <div class="keju">
    <img src="@/assets/upload/yizhan.jpg" alt="" />
    <p>
      尧坝古镇有建于明万历时期的东岳庙，供奉东岳大帝。东岳庙全国有多处，北京朝阳区的东岳庙为元代所建。尧坝东岳庙重檐翘角以及设置戏台等建筑形式，带有浓厚的川南宗教文化特点。
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.keju {
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
