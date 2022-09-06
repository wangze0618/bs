<template>
  <div class="weather-box" v-if="list">
    <div class="city">{{ list.data.city }}天气</div>
    <div class="forecast">
      <div
        style="text-align: center"
        class="day"
        v-for="(item, index) in list.data.forecast"
      >
        <div class="date">{{ item.date }}</div>
        <div class="type">{{ item.type }}</div>
        <div class="fengli">{{ getNum(item.fengli) }}级</div>
        <div class="fengxiang">{{ item.fengxiang }}</div>
        <div class="low">{{ item.low }}</div>
        <div class="high">{{ item.high }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import axios from "axios"

const list = ref()
const city = "金堂县"

// 获取天气数据
const getWeather = async () => {
  const { data } = await axios({
    method: "get",
    url: `http://wthrcdn.etouch.cn/weather_mini?city=${city}`,
  })
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
  color: #fff;
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
}
</style>
