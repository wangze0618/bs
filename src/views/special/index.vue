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
            <h4>十里飘香酥脆苕丝糖2</h4>
            <img
              style="width: 100%"
              src="http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281149406731.jpg"
              alt="尧坝十里飘香酥脆苕丝糖2"
              title="尧坝十里飘香酥脆苕丝糖2"
            />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <h4>十里飘香酥脆苕丝糖3</h4>
            <img
              style="width: 100%"
              src="http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281149406731.jpg"
              alt="尧坝十里飘香酥脆苕丝糖3"
              title="尧坝十里飘香酥脆苕丝糖3"
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

            <h5>尧坝红汤羊肉</h5>
            <p style="line-height: 1.6em; text-indent: 2em">阿斯达大多</p>

            <h5>尧坝红汤羊肉</h5>
            <p style="line-height: 1.6em; text-indent: 2em">阿斯达大多</p>

            <h5>尧坝红汤羊肉</h5>
            <p style="line-height: 1.6em; text-indent: 2em">阿斯达大多</p>
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
          <div class="list" v-for="i in 4">
            <h5>手工{{ i }}</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              由图16显示，在景区网站页面设计上，调查对象认为重要的因素有：页面布局96%、
              页面内容90%、页面色调86%、页面功能75%、页面字体45%，其他为3%,
              对象认为重要的因素有：页面布局96%、页面内容90%、对象认为重要的因素有：页面布局96%、页面内容90%,由图16显示，在景区网站页面设计上，调查对象认为重要的因素有：页面布局96%、
              页面内容90%、页面色调86%、页面功能75%、页面字体45%，其他为3%,
              对象认为重要的因素有：页面布局96%、页面内容90%、对象认为重要的因素有：页面布局96%、页面内容90%、。
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
  "https://pic.rmb.bdstatic.com/bjh/news/a587bb0d360253fedfd331cc8525afe4.png",
  "https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
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
