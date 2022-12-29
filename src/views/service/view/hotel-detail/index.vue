<template>
  <div v-if="info" class="hotel-detail">
    <div class="img"></div>

    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem to="/" class="bread-item">首页</WBreadItem>
        <WBreadItem class="bread-item">旅游服务</WBreadItem>
        <WBreadItem class="bread-item">酒店预订</WBreadItem>
      </WBread>
      <div class="context">
        <div class="row mb-3 rounded shadow">
          <div class="left col-12 col-sm-12 col-lg-8">
            <Carousel class="hotel-carousel" :data="info.imgs"></Carousel>
          </div>
          <div class="right col-12 col-sm-12 col-lg-4">
            <div class="top-info">
              <h3 class="mb-1 mt-3">尧坝古镇君澜度假酒店</h3>
              <span class="price">￥{{ info.price }}</span>
              <p>营业时间：全天</p>
              <p>电话：{{ info.tel }}</p>
              <p>关键字：123</p>
              <p>地址：123</p>
            </div>
            <hr />
            <div class="bottom-info">
              <div class="time-picker1 mb-3">
                <h5>请选择入住时间：</h5>
                <TimePicker
                  class="tp"
                  :date="getToday1"
                  @getTime="getTime1($event)"
                ></TimePicker>
              </div>
              <div class="time-picker2">
                <h5>请选择退房时间：</h5>
                <TimePicker
                  class="tp"
                  :date="getToday2"
                  @getTime="getTime2($event)"
                ></TimePicker>
              </div>
              <div class="time-diff mt-2">共{{ daydiff }}天</div>

              <div class="pay-info mt-3">
                <h5>立即支付：{{ totalPrice }}元</h5>
                <p class="mt-2 mb-2">（￥{{ info.price }}*{{ daydiff }}天）</p>
                <button @click="goPay()" type="button" class="btn btn-danger">
                  立即支付
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 介绍信息 -->
        <HotelIntro class="introduce-box">
          <template #introduce>
            <div class="introduce">
              <h3>简介</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, facilis. Repellat beatae voluptatum quod, rerum id
                optio illo cumque similique totam deleniti. Voluptatibus
                perferendis ducimus repellat ut ipsam eum id.
              </p>
            </div>
          </template>
          <template #feature>
            <div class="feature">
              <h3>特色</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, facilis. Repellat beatae voluptatum quod, rerum id
                optio illo cumque similique totam deleniti. Voluptatibus
                perferendis ducimus repellat ut ipsam eum id.
              </p>
            </div>
          </template>
          <template #slogan>
            <div class="slogan">
              <h3>酒店设施</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, facilis. Repellat beatae voluptatum quod, rerum id
                optio illo cumque similique totam deleniti. Voluptatibus
                perferendis ducimus repellat ut ipsam eum id.
              </p>
            </div>
          </template>
          <template #traffic>
            <div class="traffic">
              <h3>交通信息</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, facilis. Repellat beatae voluptatum quod, rerum id
                optio illo cumque similique totam deleniti. Voluptatibus
                perferendis ducimus repellat ut ipsam eum id.
              </p>
            </div>
          </template>
        </HotelIntro>

        <!-- 其他酒店 -->
        <OtherHotel></OtherHotel>
      </div>
    </div>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { diffTime } from "@/tools/tools"
import TimePicker from "@/components/UI/time-picker/index.vue"
import dayjs from "dayjs"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Carousel from "../../components/cauousel/index.vue"
import { useStore } from "vuex"
import Loading from "@/components/UI/loading/index.vue"
import { randomDelay } from "@/tools/tools.js"
import HotelIntro from "./hotel-intro.vue"
import OtherHotel from "./other-hotel.vue"

const router = useRouter()

const store = useStore()
const route = useRoute()
let getToday1 = ref(dayjs(new Date()).format("YYYY-MM-DD"))
let getToday2 = ref(dayjs(new Date()).format("YYYY-MM-DD"))
// 比对两个时间点内相差多少天
let daydiff = ref(diffTime(getToday1.value, getToday2.value, "day"))
const getTime1 = (date) => {
  getToday1.value = date
  daydiff.value = diffTime(getToday1.value, getToday2.value, "day")
}
const getTime2 = (date) => {
  getToday2.value = date
  daydiff.value = diffTime(getToday1.value, getToday2.value, "day")
}
let listData = ref([])
let info = ref(null)

// 计算价格
let totalPrice = computed(() => {
  if (info.value) {
    return info.value.price * daydiff.value
  }
})

// 去支付页
const goPay = () => {
  router.push({
    name: "Pay",
    query: {
      price: totalPrice.value,
    },
  })
}
onBeforeMount(() => {
  listData.value = store.getters["hotel/getList"]()
  // 获取id 相同的项
  setTimeout(() => {
    info.value = listData.value.filter((item) => item.id == route.params.id)[0]
    console.log(info.value)
  }, randomDelay(300, 600))
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.hotel-detail {
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .container {
    @include setBread;
    .context {
      .introduce-box {
        display: inline-block;
        margin-top: 2em;
        @media (max-width: 576px) {
          margin-top: 1em;
        }
      }
      .row {
        overflow: hidden;
        border: 1px solid rgba(172, 172, 172, 0.615);
      }
      .left {
        padding: 0;
        .hotel-carousel {
          height: 100%;
          @media (max-width: 576px) {
            height: 300px;
          }
        }
      }
      .right {
        padding-bottom: 1em;
        .bottom-info {
          padding-left: 1.7em;
          padding-right: 1.7em;
          .pay-info {
            text-align: center;
            h5,
            p {
              margin-bottom: 0;
            }
            p {
              color: #5c5c5c;
            }
          }
          .tp {
            &:deep(input) {
              width: 100% !important;
            }
          }
          .time-diff {
            text-align: center;
            font-size: 18px;
            color: #5c5c5c;
          }
        }
        .top-info {
          padding-left: 1.7em;
          p {
            margin-bottom: 0.4em;
            font-weight: bold;
            font-size: 16px;
          }
          .price {
            display: inline-block;
            width: 100%;
            color: #e9bd1b;
            font-size: 24px;
            text-align: center;
            font-weight: bold;
          }
          h3 {
            font-size: 24px;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
