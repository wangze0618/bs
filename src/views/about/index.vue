<template>
  <div class="about">
    <div class="img">
      <h3 class="wow animated fadeInDown" style="color: #fff">走进尧坝</h3>
    </div>
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread mb-3 mt-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">走进尧坝</WBreadItem>
      </WBread>
    </div>
    <div class="container-xl">
      <!-- 简概列表 -->
      <div class="wow animated fadeInUp card card1">
        <div class="row card1-row">
          <!-- 熟读尧坝 -->
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
                  <Time
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Time>
                </div>
                <p class="area">距今已经</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">4.27</span>
                  <Time
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Time>
                </div>
                <p class="area">核心保护区(公顷)</p>
              </div>
            </div>
          </div>
          <!-- 关于尧坝 -->
          <div class="right1 col-sm-12 col-md-8">
            <h3 class="right-title">关于尧坝</h3>
            <div class="right-main">
              <div class="main-item">
                <div class="item-left">
                  <img
                    style="width: 80px; height: 80px"
                    src="@/assets/avatar.jpg"
                    alt=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">位置地貌</h4>
                  <div class="right-content">
                    尧坝古镇位于川南黔北结合部，地处东经105°42′，北纬28°45′，处于泸赤路（泸州——赤水）中段，距合江37公里、泸州22公里、赤水27公里、重庆市区94公里，成自泸赤高速公路穿境而过。尧坝古镇属浅丘地貌，四面环山，中间为平坝，最高点鼓楼山顶海拔720米，最低点尧坝场海拔310米。
                  </div>
                </div>
              </div>

              <div class="main-item">
                <div class="item-left">
                  <img
                    style="width: 80px; height: 80px"
                    src="@/assets/avatar.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">名称由来</h4>
                  <div class="right-content">
                    尧坝古镇历史悠久，文化积淀深厚。根据考证，早在唐宋时期，尧坝所居人口主要是少数民族瑶族，当时的尧坝为瑶家坝子，古名“瑶坝”，后随着汉人从北方南进，入居尧坝人口的增多，少数民族逐渐向云贵高原山区迁徙；又因汉人祟拜尧舜黄帝，便将“瑶坝”的“瑶”改为“尧”，尧坝故而得名。
                  </div>
                </div>
              </div>

              <div class="main-item">
                <div class="item-left">
                  <img
                    style="width: 80px; height: 80px"
                    src="@/assets/avatar.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">综合概述</h4>
                  <div class="right-content">
                    尧坝古镇依山傍水，高低错落。现存建筑保存极为完整，古镇大多是典型的川南民居四合院的风格，绝大多数为清代、民国时期建筑。古民居群位于古街道两旁，全长1000多米，有小青瓦房2000余间。上街房依山而建，高低起伏、错落有致，下街房宁静平和，瓦脊连成一线，形成有节奏、有韵律的民居群落。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门景点 -->
      <SpotCarousel class="mt-5">
        <template #SwiperSlide>
          <SwiperSlide
            class="slide"
            @click="
              router.push({
                name: 'gujie',
              })
            "
          >
            <SpotCarouselItem>
              <template #title> 尧坝古街道1 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                古镇面积不大，古街道及民居群总面积近60000
                平方米。一条一千米的青石板古街南北走向穿镇而过，略呈S形。这样的古街道始建于明清时代，分为南北街。北街是由周其宾为代表的周氏家族修建，南街是由武进士李跃龙为代表的李氏家族修建，素有周半场、李半场之说。
                街道的两边还有许多保留完好的商铺、古民居，明清寺庙等建筑。家家有巷道和天井，户户有木楼，房屋进深一般为四至六间屋，房后有小路与水井相连。墙壁为夹竹蓖、古朴的木板壁或厚实的大方砖壁。这样的古建筑虽历经几百年风雨，至今仍保存着明朝古庙东岳寺、清代建筑大鸿米店和进士牌坊、神仙古洞、尧王古墓、古镇历史陈列馆等建筑，古色古香，以其宏大的规模和完好的保护程度，被专家称之为“川南古民居的化石”。
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide
            class="slide"
            @click="
              router.push({
                name: 'buxingjie',
              })
            "
          >
            <SpotCarouselItem>
              <template #title> 尧坝古街道2 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                古镇面积不大，古街道及民居群总面积近60000
                平方米。一条一千米的青石板古街南北走向穿镇而过，略呈S形。这样的古街道始建于明清时代，分为南北街。北街是由周其宾为代表的周氏家族修建，南街是由武进士李跃龙为代表的李氏家族修建，素有周半场、李半场之说。
                街道的两边还有许多保留完好的商铺、古民居，明清寺庙等建筑。家家有巷道和天井，户户有木楼，房屋进深一般为四至六间屋，房后有小路与水井相连。墙壁为夹竹蓖、古朴的木板壁或厚实的大方砖壁。这样的古建筑虽历经几百年风雨，至今仍保存着明朝古庙东岳寺、清代建筑大鸿米店和进士牌坊、神仙古洞、尧王古墓、古镇历史陈列馆等建筑，古色古香，以其宏大的规模和完好的保护程度，被专家称之为“川南古民居的化石”。
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem>
              <template #title> 尧坝古街道3 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                古镇面积不大，古街道及民居群总面积近60000
                平方米。一条一千米的青石板古街南北走向穿镇而过，略呈S形。这样的古街道始建于明清时代，分为南北街。北街是由周其宾为代表的周氏家族修建，南街是由武进士李跃龙为代表的李氏家族修建，素有周半场、李半场之说。
                街道的两边还有许多保留完好的商铺、古民居，明清寺庙等建筑。家家有巷道和天井，户户有木楼，房屋进深一般为四至六间屋，房后有小路与水井相连。墙壁为夹竹蓖、古朴的木板壁或厚实的大方砖壁。这样的古建筑虽历经几百年风雨，至今仍保存着明朝古庙东岳寺、清代建筑大鸿米店和进士牌坊、神仙古洞、尧王古墓、古镇历史陈列馆等建筑，古色古香，以其宏大的规模和完好的保护程度，被专家称之为“川南古民居的化石”。
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem>
              <template #title> 尧坝古街道1 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                古镇面积不大，古街道及民居群总面积近60000
                平方米。一条一千米的青石板古街南北走向穿镇而过，略呈S形。这样的古街道始建于明清时代，分为南北街。北街是由周其宾为代表的周氏家族修建，南街是由武进士李跃龙为代表的李氏家族修建，素有周半场、李半场之说。
                街道的两边还有许多保留完好的商铺、古民居，明清寺庙等建筑。家家有巷道和天井，户户有木楼，房屋进深一般为四至六间屋，房后有小路与水井相连。墙壁为夹竹蓖、古朴的木板壁或厚实的大方砖壁。这样的古建筑虽历经几百年风雨，至今仍保存着明朝古庙东岳寺、清代建筑大鸿米店和进士牌坊、神仙古洞、尧王古墓、古镇历史陈列馆等建筑，古色古香，以其宏大的规模和完好的保护程度，被专家称之为“川南古民居的化石”。
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem>
              <template #title> 尧坝古街道1 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                古镇面积不大，古街道及民居群总面积近60000
                平方米。一条一千米的青石板古街南北走向穿镇而过，略呈S形。这样的古街道始建于明清时代，分为南北街。北街是由周其宾为代表的周氏家族修建，南街是由武进士李跃龙为代表的李氏家族修建，素有周半场、李半场之说。
                街道的两边还有许多保留完好的商铺、古民居，明清寺庙等建筑。家家有巷道和天井，户户有木楼，房屋进深一般为四至六间屋，房后有小路与水井相连。墙壁为夹竹蓖、古朴的木板壁或厚实的大方砖壁。这样的古建筑虽历经几百年风雨，至今仍保存着明朝古庙东岳寺、清代建筑大鸿米店和进士牌坊、神仙古洞、尧王古墓、古镇历史陈列馆等建筑，古色古香，以其宏大的规模和完好的保护程度，被专家称之为“川南古民居的化石”。
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
        </template>
      </SpotCarousel>

      <!-- 尧坝文化 -->
      <Culture></Culture>

      <!-- 历史沿革 -->
      <History></History>

      <!-- 全景图 -->
      <div class="quanjing">
        <h3 class="quanjingtu">景区全景图</h3>
        <img v-viewer src="@/assets/upload/quanjingtu.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import { useRouter } from "vue-router"
import { WOW } from "wowjs"
import { Home, Time } from "@icon-park/vue-next"
import Card from "@/components/UI/card/index.vue"
import SpotCarousel from "./components/spot-carousel.vue"
import Culture from "./components/culture.vue"
import History from "./components/history.vue"
import SpotCarouselItem from "./components/spot-carousel-item.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
let dataList = ref(null)
const router = useRouter()

onMounted(() => {
  new WOW({
    live: false, // 当时为了解决警告问题 想查看所有属性可去官网了解  https://wowjs.uk/docs.html
  }).init()
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.about {
  margin-top: 88px;
  user-select: none;
  .img {
    @include img("@/assets/image/usercomment.jpeg");
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    h3 {
      font-size: 2rem;
      margin-bottom: 0;
      text-shadow: 1px 1px 6px #808080;
    }
  }
  .container {
    @include setBread;
  }
  .slide {
    background-color: var(--c-gray);
    border-radius: 8px;
  }
  .card {
    height: 100%;
    @include card-shadow;
  }
  .card1 {
    padding: 30px 40px;
    .card1-row {
      .left1,
      .right1 {
        .right-title {
          text-align: center;
          margin: 20px;
          font-size: 16px;
          color: #808080;
        }
        .right-main {
          width: 100% !important;
          display: flex;
          flex-direction: column;
          .main-item {
            display: flex;
            margin-top: 30px;
            .item-left {
              margin-top: 30px;
              margin-right: 16px;
            }
            .item-right {
              .right-content {
                text-indent: 2em;
              }
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
                font-size: 60px;
              }
            }
          }
        }
      }
    }
  }
  .quanjing {
    .quanjingtu {
      text-align: center;
      margin: 30px 0;
    }
    img {
      width: 100%;
      cursor: grab;
    }
  }
}
</style>
