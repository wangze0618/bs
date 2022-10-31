<template>
  <div class="about">
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread sp=">">
        <WBreadItem class="wit" to="/">首页</WBreadItem>
        <WBreadItem class="wit">走进会理</WBreadItem>
      </WBread>
      <!-- 简概列表 -->
    </div>
    <div class="container-xl">
      <div class="wow animated fadeInUp card card1">
        <div class="row card1-row">
          <div class="left1 col-sm-12 col-md-4">
            <div class="content1">
              <h3 class="left-title1">数读尧坝</h3>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">64</span>
                  <Home
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Home>
                </div>
                <p class="area">占地面积(平方千米)</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">60000</span>
                  <Home
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Home>
                </div>
                <p class="area">古街居民群总面积(平方千米)</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">2000+</span>
                  <Home
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Home>
                </div>
                <p class="area">距今已经</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">4.27</span>
                  <Home
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Home>
                </div>
                <p class="area">核心保护区(公顷)</p>
              </div>
            </div>
          </div>
          <div class="right1 col-sm-12 col-md-8">
            <h3 class="right-title">关于尧坝</h3>
            <div class="right-main" style="border: 1px solid red">
              <div class="main-item">
                <div class="item-left">
                  <img
                    style="width: 100px; height: 100px"
                    src="@/assets/avatar.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">地理位置</h4>
                  <div class="right-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis error vero nihil dolores dolorem consequatur,
                    blanditiis ut esse, quibusdam, magnam officia minus
                    assumenda? Accusantium minima omnis ratione fuga nulla
                    recusandae.
                  </div>
                </div>
              </div>
              <div class="main-item">123</div>
              <div class="main-item">123</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <Card title="hah"> asd </Card>
      <div class="wow animated fadeInUp card">
        <div class="card-body">12131</div>
        <img src="@/assets/fj1.jpg" alt="" />
      </div>
      <div class="wow animated fadeInUp card">
        <div class="card-body">12131</div>
        <img src="@/assets/fj1.jpg" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import { articleList } from "@/api/article.js"
import { useRouter } from "vue-router"
import { WOW } from "wowjs"
import { Home } from "@icon-park/vue-next"
import Card from "@/components/UI/card/index.vue"

let dataList = ref(null)
const router = useRouter()
const getId = (id) => {
  router.push({
    name: "/about/detail/:id",
    params: {
      id,
    },
  })
}
onMounted(() => {
  new WOW({
    live: false, // 当时为了解决警告问题 想查看所有属性可去官网了解  https://wowjs.uk/docs.html
  }).init()
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.card {
  @include card-shadow;
}
.card1 {
  padding: 30px 40px;
  .card1-row {
    .left1,
    .right1 {
      padding: 0;
      border: 1px solid #000;
      // height: 400px;
      .right-title {
        text-align: center;
        margin: 20px;
        font-size: 16px;
        color: #808080;
      }
      .right-main {
        width: 100% !important;
        height: auto;
        .main-item {
          border: 1px solid #000;
          display: flex;
          align-items: center;
          .item-left {
            margin-top: 14px;
            margin-right: 16px;
          }
        }
      }
    }
    .left1 {
      .content1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #808080;
        .left-title1 {
          margin: 20px;
          font-size: 16px;
        }
        .left2 {
          text-align: center;
          .left2-content {
            display: flex;
            align-items: center;
            justify-content: center;
            .home-icon {
              display: flex;
              align-items: center;
              margin-left: 10px;
            }
            .left2-span {
              // margin-right: 10px;
              font-size: 60px;
            }
          }
        }
      }
    }
  }
}
.about {
  margin-top: 88px;
  user-select: none;
  .container {
    :deep(.wit) {
      font-size: 20px;
    }
  }
}
</style>
