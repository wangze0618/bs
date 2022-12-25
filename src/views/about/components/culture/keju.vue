<template>
  <div class="keju">
    <img src="@/assets/upload/keju.jpg" alt="" />
    <p>
      尧坝古镇的标志性建筑师一座高大的石牌坊。这座牌坊是建于清代嘉庆年间的进士牌坊。石牌坊东西横立古街的南端，高约八米，阔约九米，四柱三重檐，斗拱歇山，是典型的清代牌坊式样。坊额有嘉庆帝御书的“赐进士第”题字，立柱上刻有当朝地方官撰写的楹联，以表彰武进士李跃龙荣耀桑梓之邦的事迹。
      如今的进士府内还有举重、步射等武举考试内容的文化展示。
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
