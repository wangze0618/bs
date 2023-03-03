<template>
  <div class="weather-box" v-if="list">
    <div class="city">{{ city }}天气</div>
    <div class="forecast">
      <div style="text-align: center" class="day" v-for="(item, index) in list">
        <div class="date">{{ item.date }}</div>
        <div class="type">
          <LightRain size="36" v-if="item.type == '小雨'"></LightRain>
          <LightRain size="36" v-else-if="item.type == '中雨'"></LightRain>
          <HeavyRain size="36" v-else-if="item.type == '大雨'"></HeavyRain>
          <Sun size="36" v-else-if="item.type == '晴天'"></Sun>
          <Cloudy size="36" v-else-if="item.type == '多云'"></Cloudy>
          <span>{{ item.type }}</span>
        </div>
        <div class="fengli">{{ item.fengxiang }}{{ item.fengli }}级</div>
        <!-- <div class="fengxiang">{{ item.fengxiang }}</div> -->
        <div class="low">{{ item.low }}°C</div>
        <div class="high">{{ item.high }}°C</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from "axios"
import { LightRain, HeavyRain, Sun, Cloudy } from "@icon-park/vue-next"

const list = ref()
const props = defineProps({
  city: {
    type: String,
    default: "尧坝",
  },
})

// 获取天气数据
const getWeather = () => {
  // const { data } = await axios({
  //   method: "get",
  //   url: `http://wthrcdn.etouch.cn/weather_mini?city=${props.city}`,
  // })
  const data = [
    {
      id: 0,
      date: "3号",
      type: "小雨",
      fengli: "1",
      fengxiang: "南风",
      low: "8",
      high: "12",
    },
    {
      id: 1,
      date: "4号",
      type: "小雨",
      fengli: "1",
      fengxiang: "南风",
      low: "8",
      high: "12",
    },
    {
      id: 2,
      date: "4号",
      type: "小雨",
      fengli: "1",
      fengxiang: "南风",
      low: "8",
      high: "12",
    },
    {
      id: 3,
      date: "4号",
      type: "小雨",
      fengli: "1",
      fengxiang: "南风",
      low: "8",
      high: "12",
    },
    {
      id: 4,
      date: "4号",
      type: "小雨",
      fengli: "1",
      fengxiang: "南风",
      low: "8",
      high: "12",
    },
  ]
  list.value = data
}
getWeather()
// 从风力中过滤出数字
const getNum = (str) => {
  const reg = /\d+/g
  return reg.exec(str)[0]
}
</script>

<style scoped lang="scss">
.weather-box {
  color: var(--color-text) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: none;
}
.city {
  padding-bottom: 20px;
  font-size: 24px;
}
.forecast {
  width: 100%;
  display: flex;
}
.day {
  flex: 1;
  div {
    margin: 5px 0;
  }
}
.type {
  display: flex;
  flex-direction: column;
}
</style>
