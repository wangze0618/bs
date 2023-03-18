<template>
  <div class="home-product">
    <div class="container-xl">
      <div class="food">
        <h2 class="title">特色美食</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="item">
              <img
                class="imgs img-thumbnail"
                src="@/assets/upload/food/douhua.jpg"
                alt=""
              />
              <span>豆花火锅</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="item">
              <img
                class="imgs img-thumbnail"
                src="http://image.qingk.cn/image/zhhj/2c37e567f78b4771b3561bc3e172410e.png"
                alt=""
              />
              <span>尧坝黄粑</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-1">
            <div class="item">
              <img
                class="imgs img-thumbnail"
                src="https://pic.rmb.bdstatic.com/bjh/news/b284c5875d05978713451fc9c870ed05.png"
                alt=""
              />
              <span>尧坝红汤羊肉</span>
            </div>
          </div>
        </div>
        <div class="con">
          <RouterLink class="link-warning" to="/special/food"
            >查看更多</RouterLink
          >
        </div>
      </div>
      <div class="handmade">
        <h2 class="title">特色手工</h2>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="item">
              <img
                class="imgs img-thumbnail"
                src="http://www.hejiang.gov.cn/Upload/main/image/2022/12/28/202212281126417851.jpeg"
                alt=""
              />
              <span>尧坝油纸伞</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="item">
              <img
                class="imgs img-thumbnail"
                src="@/assets/upload/handmade/xiezi.jpg"
                alt=""
              />
              <span>尧坝草鞋</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-1">
            <div class="item">
              <img
                class="imgs img-thumbnail"
                src="https://photocdn.sohu.com/20150915/mp31874925_1442280147809_5.jpeg"
                alt=""
              />
              <span>尧坝香猴</span>
            </div>
          </div>
        </div>
        <div class="con">
          <RouterLink class="link-warning" to="/special/handmade"
            >查看更多</RouterLink
          >
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
.title {
  @include home-title;
  color: var(--color-text);
}

.col-12 {
  text-align: center;
}
.con {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgs {
  height: 200px;
  width: 300px;
  @media (max-width: 576px) {
    max-width: 380px;
  }
}
</style>
