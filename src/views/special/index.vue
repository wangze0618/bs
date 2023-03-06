<template>
  <div class="special">
    <div class="img">
      <TextDrop> 特色产品 </TextDrop>
    </div>
    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">特色产品</WBreadItem>
      </WBread>

      <!-- 图片轮播 -->
      <BigCarousel
        class="mb-5 shadow-lg big"
        :modules="modules"
        :navigation="true"
        :autoplay="{
          open: true,
          delay: 3000,
        }"
        :speed="1600"
      >
        <template #swiper>
          <SwiperSlide class="swiper-slide">
            <h4>尧坝红汤羊肉</h4>
            <img
              style="width: 100%"
              src="https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png"
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <h4>十里飘香酥脆苕丝糖</h4>
            <img
              style="width: 100%"
              src="http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281149406731.jpg"
              alt="尧坝十里飘香酥脆苕丝糖"
              title="尧坝十里飘香酥脆苕丝糖"
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <h4>尧坝油纸伞</h4>
            <img
              style="width: 100%"
              src="http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281149406731.jpg"
              alt="尧坝油纸伞"
              title="尧坝手工油纸伞"
            />
          </SwiperSlide>
        </template>
      </BigCarousel>

      <!-- 文字内容区 --美食区 -->
      <div class="main shadow-lg mt-3">
        <h4 style="text-align: center" class="mb-3">特色美食</h4>
        <Carousel :space-between="0" class="carousel" :data="list"></Carousel>

        <div class="food-list mt-3">
          <div class="list">
            <h5>尧坝红汤羊肉</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              民以食为天，在外旅游观光，到了目的地首先要解决的就是吃的问题。在尧坝古镇旅游时，你可选择最实惠又廉价还有地方特色的佳肴——“红汤羊肉汤锅”。
              小寒吃羊肉，大寒吃萝卜，在合江县人们有入冬喝羊肉汤的习惯。尧坝红汤羊肉作为合江县县级非物质文化遗产代表性项目，由传统祖传秘方烹调熬制，鲜嫩的黑山羊肉，再配上泡萝卜泡椒蘸水，酸辣爽口。
              当你看到一大锅红红的，冒着热汽的，散发着羊肉香汽的大锅时，这就是远近闻名的尧坝红汤羊肉汤锅。你乍一看，好红的汤啊，是不是很辣啊！不！不是的，你不要被那红红的汤色吓着了。看着好象很辣，其实辣味温和，刚好恰当。不信你尝尝。
              品尝尧坝古镇的羊肉汤锅要先喝汤，当你喝下第一口汤的时候，那鲜鲜的汤味可以让你的每一根神经都调动起来，迫不急待地想挟住一块羊肉。据说，尧坝古镇的羊肉汤锅吃了能滋阴补肾，强身健体，特别是对女性还有美容的作用。
            </p>

            <h5>尧坝黄粑</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              尧坝是四川省泸州市合江县传统手工制作的特色食品。选择尧坝山区、天堂坝等地的糯米、粘米配用红糖、
              冰糖和良姜叶、楠竹笋尖、棕丝等制作包裹而成。其制作历史悠久、工艺传统，是具有地方特色的天然绿色食品。其成品晶莹黄亮，
              清香糍润、甜而不腻、柔韧瓷实，兼以糯米、红糖原香，竹叶、良姜叶的特殊气味，上蒸时香味弥漫，方圆数里可闻。在尧坝古镇临街叫卖的商家小铺里，
              必不可少的东西就是黄粑了，造型古朴的黄粑整齐摆在摊前，或者把蒸熟的黄粑存放在木甑里，一打开，热气和清香就弥漫在古镇街道上，本地人爱黄粑，
              因为这股香甜陪伴他们长大，外地人喜欢黄粑，因为这是属于尧坝古镇的舌尖味道。
            </p>

            <h5>豆花火锅</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              来到尧坝古镇，还有一种美食是必尝的，就是这里的豆花火锅。
              味鲜香豆花,以其“滚、嫩、绵、白”适中,“辣、麻、香、鲜、甜”你俱备闻名全川。吃火锅时，可以放入鸡肉、猪肉、内脏等，因为豆花非常清香，所以使得这种汤底煮出来的食物也具有清香宜人的特点。
            </p>

            <h5>枉氏月母鸡汤</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              枉氏土鸡汤是合江最早的土鸡汤，比著名的白马鸡汤还要早10多年，
              1986年枉氏土鸡汤创始人枉成良就在新店开了合江第一家土鸡汤馆。后来经过赤水-九支的多次搬迁，现今落户尧坝古镇。30多年的老字号土鸡汤，鸡汤熬制技术可谓是非常纯熟的了。枉氏土鸡汤的风味和做法
              30 多年来都没有改变。
            </p>
          </div>

          <div class="links" style="text-align: right">
            <RouterLink to="/special/food">查看更多</RouterLink>
          </div>
        </div>
      </div>

      <!-- 文字内容区 --手工区 -->
      <div class="main shadow-lg mt-4 mb-5">
        <h4 style="text-align: center" class="mb-3">特色手工</h4>
        <Carousel :space-between="0" class="carousel" :data="list2"></Carousel>

        <div class="food-list mt-3">
          <div class="list">
            <h5>尧坝油纸伞</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              尧坝油纸伞都是纯手工制作的，从开料到制作完毕需要经历采竹子、搭骨架、做伞边、上桐油等等近百道工序，得耗上半个月的功夫才能做出一把油纸伞，每一把油纸伞上的图案都让人对这把伞爱不释手。
              油纸伞的制作工艺在这里存在了四百多年，走进一家油纸伞铺，进门口就会闻到一股独特的油桐味。这里的油纸伞是我国的非物质文化遗产，当时申遗所用的伞就是一把手绘的龙凤呈祥图案，龙凤飞舞，尽显中国魅力。在现代科技高速发展的今天，传统手工艺却变得越发珍贵，尧坝古镇保持了古老技艺的油纸伞所带来的文化传承，难道不正是不忘初心的最佳体现么？
            </p>
          </div>
          <div class="list">
            <h5>尧坝草鞋</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              “竹杖芝鞋轻胜马，一蓑风雨任平生”。草鞋文化在中国起源很早，其历史可以追溯到商周时代，至今已有三千多年的历史。作为中国传统文化的重要组成部分，何有全决心不让这份手艺失传。“草鞋不仅经济又舒适，还有除湿的效果。”何有全说道，草鞋以太阳晾晒干后的稻草为原材料，在经过手搓、编织的过程以后，将草鞋的两头用麻绳绑好使之成型。同时，为了让草鞋做到舒适又美观，还需去掉多余的稻草，反复对比大小、调整比例，在经过一系列工序以后草鞋就制作完成了。
            </p>
          </div>
          <div class="list">
            <h5>香猴</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              香猴。香猴是用当地的一种草药来充当填充香料，散发着幽幽的香，是很有当地特色的手工艺品，价格却并不贵。
            </p>
          </div>

          <div class="links" style="text-align: right">
            <RouterLink to="/special/handmade">查看更多</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Navigation, Pagination, Autoplay } from "swiper"
import Carousel from "./components/special/carousel/index.vue"
import { SwiperSlide } from "swiper/vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import TextDrop from "@/components/UI/text-drop/index.vue"
import BigCarousel from "@/views/service/components/route/carousel.vue"
const modules = [Navigation, Pagination, Autoplay]
const list = [
  "https://pic.rmb.bdstatic.com/bjh/news/a587bb0d360253fedfd331cc8525afe4.png",
  "https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png",
  "http://image.qingk.cn/image/zhhj/b0d4cc5d2fe945c8824f816565e4ff60.png",
  "http://image.qingk.cn/image/zhhj/baf7e3026bd4492d9198848c57968dca.png",
  "http://image.qingk.cn/image/zhhj/659d147db9be4a2dbebe7f7bdbf56e83.png",
]
const list2 = [
  require("@/assets/upload/handmade2.jpeg"),
  "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126411686.jpeg",
  require("@/assets/upload/handmade/cat.jpg"),
  "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126417851.jpeg",
  "http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126410902.jpeg",
]
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.special {
  user-select: none;
  .container {
    .big {
      border-radius: 0.8em;
      overflow: hidden;

      :deep(.swiper-button-prev),
      :deep(.swiper-button-next) {
        &::after {
          font-size: 20px;
          font-weight: 700;
        }
        color: rgb(255, 255, 255);
        padding: 0.4em;
        height: 46px;
        width: 46px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
        border: 1px solid rgba(226, 226, 226, 0.249);
      }

      :deep(img) {
        border-radius: 0.8em;
      }
    }
    @include setBread;
    .main {
      padding: 1em;
      border-radius: 0.8em;
      color: var(--color-text);
      border: 1px solid var(--color-border-1);
      background-color: var(--color-content-background);
      .food-list {
        padding: 0 1em;
        .links {
          a {
            color: var(--c-blue);
            @media (prefers-color-scheme: dark) {
              color: var(--c-goldenrot);
            }
          }
        }
      }
    }
    .swiper-slide {
      overflow: hidden;
      position: relative;
      border-radius: 0.8em;
      max-height: 720px;
      border: 1px solid var(--color-border-1);

      h4 {
        color: #fff;
        position: absolute;
        left: 50%;
        bottom: 5%;
        transform: translateX(-50%);
      }
      img {
        max-height: 720px;
        object-fit: cover;
      }
    }
  }
  .img {
    @include img(
      "https://pic.rmb.bdstatic.com/bjh/news/6850daf3a78ed11a234debde8da4012c.jpeg"
    );
    background-position: center;
  }
  .carousel {
    :deep(img) {
      width: 100%;
      max-width: 300px;
    }

    :deep(.swiper-button-prev),
    :deep(.swiper-button-next) {
      color: rgb(255, 255, 255);
      padding: 0.4em;
      height: 46px;
      width: 46px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(226, 226, 226, 0.249);
      &::after {
        font-size: 20px;
        font-weight: 700;
      }
    }
    :deep(.swiper-button-disabled) {
      backdrop-filter: blur(5px) !important;
      background: rgba(0, 0, 0, 0.2) !important;
      opacity: unset !important;
    }
  }
}
</style>
