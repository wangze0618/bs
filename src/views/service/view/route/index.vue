<template>
  <div class="route" style="overflow: hidden">
    <div class="container">
      <WBread class="bread mt-3 mb-3" style="display: inline-block" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item" to="/">旅游服务</WBreadItem>
        <WBreadItem class="bread-item">路线规划</WBreadItem>
      </WBread>
      <div class="context">
        <!-- 轮播 -->
        <RouteCarousel
          class="mb-5 carousel"
          :modules="modules"
          :navigation="true"
        >
          <template #swiper>
            <SwiperSlide class="swiper-slide">
              <img
                v-viewer="{
                  toolbar: false,
                }"
                src="@/assets/image/route/1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <img
                v-viewer="{
                  toolbar: false,
                }"
                src="@/assets/image/route/2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <img
                v-viewer="{
                  toolbar: false,
                }"
                src="@/assets/image/route/3.jpg"
                alt=""
              />
            </SwiperSlide>
          </template>
        </RouteCarousel>

        <!-- 空中交通 -->
        <div class="main mb-4">
          <h3>空中交通</h3>
          <div class="main-box">
            <p>
              泸州云龙机场（Luzhou Yunlong
              Airport；IATA：LZO，ICAO：ZULZ）位于中国四川省泸州市龙马潭区与泸县交界处，距离泸州市区约17千米，为4C级军民合用机场
              ，是川南地区第一大航空港，是川滇黔渝结合部区域航空运输中心，同时也是西部重要的区域枢纽机场。<br />
              泸州云龙机场于2012年5月14日获得国务院、中央军委批准立项；于2016年4月22日开工建设；于2018年9月10日正式通航
              。
            </p>
            <p>
              截至2018年9月，泸州云龙机场设有1座航站楼，面积为3万平方米；设有1条跑道，长度为2800米、宽度为50米；民航站坪设14个停机位；可满足年旅客吞吐量260万人次的使用需求
              。
            </p>

            <p>
              2020年，泸州云龙机场旅客吞吐量为162.43万人次，同比减少12.74%；货邮吞吐量为5643.20吨，同比减少15.08%；完成起降17698架次，同比增长7.26%
              。
            </p>
            <p style="text-align: center; font-weight: 700">
              需要注意：成都到泸州云龙机场需要中转，暂无直达机票！
            </p>
            <img
              v-viewer="{
                toolbar: false,
              }"
              class="buy-plane img-thumbnail"
              src="@/assets/image/route/buy.png"
              alt=""
            />
          </div>
          <div class="main-box mt-5">
            <div class="row">
              <div class="buy-ticket col-sm-12 col-md-6">
                <img src="@/assets/image/route/plane.jpg" alt="" />
                <a
                  target="_blank"
                  href="https://flight.tuniu.com/timetable/s2802-a2814/"
                  >去途牛订票</a
                >
              </div>
              <div class="buy-ticket col-sm-12 col-md-6">
                <img src="@/assets/image/route/plane2.jpg" alt="" />
                <a
                  target="_blank"
                  href="https://www.fliggy.com/jipiao/?spm=181.1108777.a1z68.11.llIJEl&ttid=seo.000000580"
                  >去飞猪订票</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- 陆路交通 -->
        <div class="main mb-4">
          <h3>陆路交通</h3>
          <div class="main-box">
            <p class="mb-0">大巴（成都方向）：</p>
            <p>
              目前可以从成都汽车总站、龙泉汽车总站、东站汽车站、新南门车站等车站乘坐大巴抵达泸州客运中心站（西南商贸城）
              、泸州太安站。
            </p>
            <p>示例车票购买截图（携程）| 查看更多请去官方网站</p>
            <img
              style="display: block; margin: 0 auto; cursor: grab"
              class="img-thumbnail"
              v-viewer="{
                toolbar: false,
              }"
              src="@/assets/image/route/dabache.png"
              alt=""
            />
            <a
              class="mt-2"
              style="text-align: center; display: inherit; color: #56b2e7"
              target="_blank"
              href="https://bus.ctrip.com/list?param=%7B%22fromCity%22%3A%22%E6%88%90%E9%83%BD%22%2C%22toCity%22%3A%22%E6%B3%B8%E5%B7%9E%22%2C%22fromDate%22%3A%222023-01-19%22%7D"
              >去携程买票</a
            >

            <p class="mb-0 mt-4">高铁（成都方向）：</p>
            <p>示例车票购买截图（携程）| 查看更多请去官方网站</p>
            <img
              style="display: block; margin: 0 auto; cursor: grab"
              class="img-thumbnail"
              v-viewer="{
                toolbar: false,
              }"
              src="@/assets/image/route/gaotie.png"
              alt=""
            />
            <a
              class="mt-2"
              style="text-align: center; display: inherit; color: #56b2e7"
              target="_blank"
              href="https://trains.ctrip.com/webapp/train/list?ticketType=0&dStation=%E6%88%90%E9%83%BD&aStation=%E6%B3%B8%E5%B7%9E&dDate=2023-01-18&rDate=&trainsType=&hubCityName=&highSpeedOnly=0"
              >去携程买票</a
            >
          </div>
        </div>

        <!-- 自驾抵达 -->
        <div class="main mb-4">
          <h3>自驾抵达</h3>
          <div class="main-box">
            <p style="font-weight: 700">成都方向：</p>

            <ul>
              <li>
                <p style="margin-bottom: 0">方案一</p>

                <p style="margin-bottom: 0; text-indent: 4em">
                  <span>约3小时10分钟</span
                  >&nbsp;|&nbsp;<span>284.3公里</span>&nbsp;|&nbsp;<span
                    >红绿灯<span class="red">2</span>个
                  </span>
                </p>

                <p style="text-indent: 4em">
                  途经：
                  G4202成都绕城高速&nbsp;>&nbsp;G4215蓉遵高速&nbsp;>&nbsp;兴尧路
                </p>
              </li>
              <li>
                <p style="margin-bottom: 0">方案二</p>
                <p style="margin-bottom: 0; text-indent: 4em">
                  <span>约3小时16分钟</span
                  >&nbsp;|&nbsp;<span>290.4公里</span>&nbsp;|&nbsp;<span
                    >红绿灯<span class="red">2</span>个
                  </span>
                </p>

                <p style="text-indent: 4em">
                  途经：
                  S3成资渝高速&nbsp;>&nbsp;G76厦蓉高速&nbsp;>&nbsp;G4215蓉遵高速
                </p>
              </li>
              <li>
                <p style="margin-bottom: 0">方案三</p>
                <p style="margin-bottom: 0; text-indent: 4em">
                  <span>约3小时10分钟</span
                  >&nbsp;|&nbsp;<span>295.7公里</span>&nbsp;|&nbsp;<span
                    >红绿灯<span class="red">2</span>个
                  </span>
                </p>

                <p style="text-indent: 4em">
                  途经：
                  新兴特大桥&nbsp;>&nbsp;S4成宜昭高速&nbsp;>&nbsp;G4215蓉遵高速
                </p>
              </li>
            </ul>
            <img
              v-viewer="{
                toolbar: false,
              }"
              src="@/assets/image/route/self-drive.png"
              class="img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import RouteCarousel from "../../components/route/carousel.vue"
import { SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper"
import { Right } from "@icon-park/vue-next"
const modules = [Navigation]
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.route {
  .red {
    color: red;
  }
  background-color: #ff7529;
  .container {
    @include setBread;
    .bread {
      color: #fff;
    }
    .bread-item {
      :deep(a) {
        color: #fff !important;
      }
    }
  }
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .swiper-slide {
    img {
      width: 100%;
      height: 100%;
      max-height: 650px;
    }
  }
  .carousel {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }
  .main {
    color: #856453;
    background: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 1em 2em;
    font-size: 18px;
    h3 {
      color: #566388;
      text-align: center;
      font-size: 30px;
    }
    .buy-plane {
      display: block;
      height: 600px;
      object-fit: fill;
      margin: 0 auto;
      cursor: grab;
    }
    .main-box {
      padding: 0 2em;
      transition: all 0.5s;
      @media (width<768px) {
        padding: 0 0;
      }
      p {
        text-indent: 2em;
        line-height: 1.6em;
      }
      .buy-ticket {
        text-align: center;
        img {
          width: 100%;
          max-width: 410px;
          height: 270px;
          display: block;
          margin: 0 auto;
          margin-bottom: 0.8em;
          border-radius: 8px;
        }
        a {
          color: #56b2e7;
          text-align: center;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
