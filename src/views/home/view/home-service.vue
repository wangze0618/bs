<template>
  <div class="home-service">
    <div class="container-xl">
      <div class="row">
        <h2 class="service-title">快速链接</h2>
      </div>
      <div class="row">
        <div class="col-md-4 about1">
          <div class="content1">
            <div class="text1">
              <div class="center1">了解</div>
              <div class="bottom1">走进会理</div>
            </div>
          </div>
        </div>
        <div class="col-md-8 about2">
          <div class="row">
            <div class="col-md-6 about3">
              <div class="content3">
                <div class="text2">
                  <div class="center2">了解</div>
                  <div class="bottom2">走进会理</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 about3">
              <div class="content3">
                <div class="text2">
                  <div class="center2">了解</div>
                  <div class="bottom2">走进会理</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 about3">
              <div class="content3">
                <div class="text2">
                  <div class="center2">了解</div>
                  <div class="bottom2">走进会理</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 about3">
              <div class="content3">
                <div class="text2">
                  <div class="center2">了解</div>
                  <div class="bottom2">走进会理</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.service-title {
  @include home-title;
}
.home-service {
  user-select: none;
}
.about1 {
  padding: 0;
  padding-right: 4px;
  height: 604px;
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 4px;
    height: 402px !important;
  }

  .content1 {
    height: 100%;
    background: url("@/assets/fj1.jpg") no-repeat;
    background-size: cover;
    .text1 {
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      position: relative;
      color: #fff;
      .center1,
      .bottom1 {
        position: absolute;
      }
      .center1 {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
      }
      .bottom1 {
        bottom: 16%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
      }
    }
  }
}
.about3 {
  box-sizing: border-box;
  padding: 0;
  &:nth-child(3),
  &:nth-child(4) {
    padding-top: 4px;
  }
  &:nth-child(2) {
    @media (max-width: 768px) {
      padding-top: 4px;
    }
  }
  &:nth-child(1),
  &:nth-child(3) {
    padding-right: 4px;
    @media (max-width: 768px) {
      padding-right: 0;
    }
  }
  .content3 {
    height: 300px;
    background: url("@/assets/fj1.jpg") no-repeat;
    background-size: 100% 100%;
    object-fit: cover;
    position: relative;
    .text2 {
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      position: relative;
      color: #fff;
      .center2,
      .bottom2 {
        position: absolute;
      }
      .center2 {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 40px;
      }
      .bottom2 {
        bottom: 16%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
      }
    }
    @media (max-width: 768px) {
      height: 200px;
    }
  }
}
</style>
