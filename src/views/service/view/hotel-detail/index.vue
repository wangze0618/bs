<template>
  <div class="hotel-detail">
    <div class="img"></div>

    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem to="/" class="bread-item">首页</WBreadItem>
        <WBreadItem class="bread-item">旅游服务</WBreadItem>
        <WBreadItem class="bread-item">酒店预订</WBreadItem>
      </WBread>
      <div class="context">
        <div class="row">
          <div class="left col-12 col-sm-12 col-md-8 col-lg-8">
            <Carousel></Carousel>
          </div>
          <div class="right col-12 col-sm-12 col-md-4 col-lg-4">2</div>
        </div>
      </div>
    </div>
    <!-- <TimePicker :date="getToday1" @getTime="getTime1($event)"></TimePicker>
    <TimePicker :date="getToday2" @getTime="getTime2($event)"></TimePicker> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { diffTime } from "@/tools/tools"
import TimePicker from "@/components/UI/time-picker/index.vue"
import dayjs from "dayjs"
import { Right } from "@icon-park/vue-next"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Carousel from "../../components/cauousel/index.vue"
import { getInfo } from "@/api/hotel/index"
const route = useRoute()
let getToday1 = ref(dayjs(new Date()).format("YYYY-MM-DD"))
let getToday2 = ref(dayjs(new Date()).format("YYYY-MM-DD"))
let daydiff = ref(diffTime(getToday1.value, getToday2.value, "day"))
const getTime1 = (date) => {
  getToday1.value = date
  daydiff.value = diffTime(getToday1.value, getToday2.value, "day")
}
const getTime2 = (date) => {
  getToday2.value = date
  daydiff.value = diffTime(getToday1.value, getToday2.value, "day")
}
// 比对两个时间点内相差多少天

onMounted(async () => {
  let data = await getInfo()
  console.log(data)
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
      .left {
        border: 1px solid #000;
      }
      .right {
        border: 1px solid #000;
      }
    }
  }
}
</style>
