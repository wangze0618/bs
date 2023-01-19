<template>
  <div class="special">
    <div class="img"></div>
    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">特色产品</WBreadItem>
      </WBread>

      <!-- 主轮播 -->
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
            <img style="width: 100%" src="@/assets/home1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img style="width: 100%" src="@/assets/home1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img style="width: 100%" src="@/assets/home1.jpg" alt="" />
          </SwiperSlide>
        </template>
      </BigCarousel>

      <!-- 文字内容区 --美食区 -->
      <div class="main shadow-lg mt-3">
        <h4 style="text-align: center" class="mb-3">特色美食</h4>
        <Carousel :space-between="0" class="carousel" :data="list"></Carousel>

        <div class="food-list mt-3">
          <div class="list" v-for="i in 4">
            <h5>美食{{ i }}</h5>
            <p style="line-height: 1.6em; text-indent: 2em">
              由图16显示，在景区网站页面设计上，调查对象认为重要的因素有：页面布局96%、
              页面内容90%、页面色调86%、页面功能75%、页面字体45%，其他为3%,
              对象认为重要的因素有：页面布局96%、页面内容90%、对象认为重要的因素有：页面布局96%、页面内容90%,由图16显示，在景区网站页面设计上，调查对象认为重要的因素有：页面布局96%、
              页面内容90%、页面色调86%、页面功能75%、页面字体45%，其他为3%,
              对象认为重要的因素有：页面布局96%、页面内容90%、对象认为重要的因素有：页面布局96%、页面内容90%、。
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
        <Carousel :space-between="0" class="carousel" :data="list"></Carousel>

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
import BigCarousel from "@/views/service/components/route/carousel.vue"
const modules = [Navigation, Pagination, Autoplay]
const list = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
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
      .food-list {
        padding: 0 1em;
        .links {
          a {
            color: #56b2e7;
          }
        }
      }
    }
    .swiper-slide {
      overflow: hidden;
      border-radius: 0.8em;
    }
  }
  .img {
    @include img("@/assets/image/usercomment.jpeg");
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
