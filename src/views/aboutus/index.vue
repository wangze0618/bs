<template>
  <div class="aboutus">
    <!-- 图片 -->
    <div class="img"></div>
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread mt-4 mb-4" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">关于我们</WBreadItem>
      </WBread>
      <!-- 内容区域 -->

      <!-- 关于我们 -->
      <div class="about">
        <div class="about-title">
          <h4>关于我们</h4>
          <p>ABOUT US</p>
        </div>
        <div class="about-context mt-4">
          <p>
            尧坝古镇位于四川省泸州市合江县尧坝镇，地处川渝黔结合部，距合江37公里、泸州22公里。古镇依山傍水，高低错落。现存建筑保存极为完整，古镇大多是典型的川南民居四合院的风格，绝大多数为清代、民国时期建筑。古民居群位于古街道两旁，全长1000多米，有小青瓦房2000余间，形成有节奏、有韵律的民居群落。
            尧坝古镇历史悠久，始于北宋，兴于明清，是古江阳到夜郎国的必经之道，有“川黔走廊”、“茶盐古道”之称；古镇汇集了川、黔两省浓厚历史文化和古风民俗，形成独具特色的中国西部川黔古镇文化是享誉川黔的文化名镇、影视基地、佛教圣地。清华大学古建筑专家陈志华誉之为“川南古民居的活化石”，著名学者于丹称其为“活着的古镇”。古镇内有王朝闻故居、凌子风影视陈列馆、东岳庙、油纸伞铺、大鸿米店、晓云轩、周公馆等景点。
            尧坝古镇先后获得国家AAAA级旅游景区、“国家历史文化名镇”、“全国重点文物保护单位”、“全国特色景观旅游示范名镇”和“省级文化先进乡镇”等荣誉称号。
          </p>
        </div>
      </div>

      <!-- 联系我们 -->
      <div class="contact">
        <div class="contact-title">
          <h4>联系我们</h4>
          <p>CONTACT US</p>
        </div>

        <div class="contact-context mt-4 row">
          <div class="box">
            <div class="tel">
              <ul>
                <li>电话：15994195797</li>
                <li>开放时间：全天</li>
                <li>游玩建议时间：2天</li>
                <li>门票价格：30元</li>
              </ul>
              <ul>
                <li>电话：15994195797</li>
                <li>开放时间：全天</li>
                <li>开放时间：全天</li>
                <li>开放时间：全天</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 地理位置 -->
      <div class="location">
        <div class="location-title">
          <h4>地理位置</h4>
          <p>LOCATION</p>
        </div>
        <div class="location-context mt-4">
          <Map></Map>
        </div>
      </div>

      <!-- 关注我们 -->
      <div class="follow">
        <div class="follow-title">
          <h4>关注我们</h4>
          <p>FOLLOW US</p>
        </div>
        <div class="follow-context row mt-4">
          <div class="item mb-5 col-6 col-md-3">
            <img src="@/assets/image/qrcode.png" alt="" />
            <span style="display: inline-block" class="mt-2">微信公众号</span>
          </div>
          <div class="item mb-5 col-6 col-md-3">
            <img src="@/assets/image/qrcode.png" alt="" />
            <span style="display: inline-block" class="mt-2">抖音</span>
          </div>
          <div class="item mb-5 col-6 col-md-3">
            <img src="@/assets/image/qrcode.png" alt="" />
            <span style="display: inline-block" class="mt-2">微博</span>
          </div>
          <div class="item mb-5 col-6 col-md-3">
            <img src="@/assets/image/qrcode.png" alt="" />
            <span style="display: inline-block" class="mt-2">小红书</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Map from "@/components/UI/map/map.vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.aboutus {
  color: var(--color-text);
  h4,
  p {
    margin-bottom: 0;
    font-weight: bolder;
  }

  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .container {
    @include setBread;
    .about {
      .about-title {
        text-align: center;
        margin-bottom: 1em;
      }
      .about-context {
        p {
          font-weight: normal;
          text-indent: 2em;
          line-height: 2em;
          text-align: justify;
        }
      }
    }

    .contact {
      margin-top: 2em;
      .contact-title {
        text-align: center;
        margin-bottom: 1em;
      }
      .contact-context {
        .box {
          margin: 0 auto;
          height: 180px;
          max-width: 460px;
          padding: 0 8px;
          .tel {
            display: flex;
            justify-content: space-between;
            padding: 1em;
            height: 100%;
            border-radius: 8px;
            border: 2px solid var(--color-border-1);
            background-color: var(--color-content-background);
            ul {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        }
      }
    }

    .location {
      margin-top: 3em;
      .location-context {
        height: fit-content;
        border: 1px solid var(--color-border-1);
      }
      .location-title {
        text-align: center;
      }
    }
    .follow {
      margin-top: 3em;
      .follow-title {
        text-align: center;
      }
      .follow-context {
        text-align: center;
        .item {
          text-align: center;
          img {
            display: block;
            width: 140px;
            height: 140px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
