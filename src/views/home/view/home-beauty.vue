<template>
  <div class="home-beauty">
    <div class="container-xl">
      <div class="row">
        <h2 class="title">美在尧坝</h2>
        <div class="content">
          <div class="intro-text">
            <p class="text">
              尧坝古镇位于四川省泸州市合江县尧坝镇，地处川渝黔结合部，距合江37公里、泸州22公里。古镇依山傍水，高低错落。现存建筑保存极为完整，古镇大多是典型的川南民居四合院的风格，绝大多数为清代、民国时期建筑。古民居群位于古街道两旁，全长1000多米，有小青瓦房2000余间，形成有节奏、有韵律的民居群落。
              尧坝古镇历史悠久，始于北宋，兴于明清，是古江阳到夜郎国的必经之道，有“川黔走廊”、“茶盐古道”之称；古镇汇集了川、黔两省浓厚历史文化和古风民俗，形成独具特色的中国西部川黔古镇文化，是享誉川黔的文化名镇、影视基地、佛教圣地。清华大学古建筑专家陈志华誉之为“川南古民居的活化石”，著名学者于丹称其为“活着的古镇”。古镇内有王朝闻故居、凌子风影视陈列馆、东岳庙、油纸伞铺、大鸿米店、晓云轩、周公馆等景点。
              尧坝古镇先后获得国家AAAA级旅游景区、“国家历史文化名镇”、“全国重点文物保护单位”、“全国特色景观旅游示范名镇”和“省级文化先进乡镇”等荣誉称号。
            </p>
          </div>

          <!-- 图片展示 -->
          <div class="pict mt-4 mb-4">
            <PictCarousel></PictCarousel>
          </div>

          <!-- 宣传视频 -->
          <div class="intro-video">
            <video
              class="rounded-3"
              autoplay
              controls
              src="@/assets/login.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import PictCarousel from "../components/pict-carousel/index.vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.title {
  @include home-title;
  color: var(--color-text);
}
.content {
  color: var(--color-text);
  .intro-video {
    margin: 0 auto;
    video {
      width: 100%;
      margin: 0 auto;
    }
  }
  .intro-text {
    padding: 1.2em;
    background-color: var(--color-content-background);
    border-radius: 0.6em;
    border: 1px solid var(--color-border-1);
    line-height: 1.8;
    p {
      text-indent: 2em;
      margin-bottom: 0;
    }
  }
}
</style>
