<template>
  <div class="address-choose">
    <div class="select" @click="activeAddress($event)">
      <span v-if="!changeResult.fullLocation" class="value"
        >请选择收货地址</span
      >
      <span v-else class="value">{{ changeResult.fullLocation }}</span>
    </div>
    <div :class="{ active: show }" class="option">
      <div class="loading" v-if="loading">
        <img src="@/assets/image/loading.gif" alt="" />
      </div>
      <div class="city-list" v-else>
        <span
          class="city"
          @click="changeItem(item)"
          v-for="item in currList"
          :key="item.code"
          >{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { Right } from "@icon-park/vue-next"
import { reactive, computed, ref } from "vue"
import { getAddress } from "@/api/address/address"

const emit = defineEmits(["getLocation"])
let show = ref(false)
let loading = ref(false)
let cityData = ref([])
// 默认情况
// const provinceCode = ref("110000")
// const cityCode = ref("119900")
// const countyCode = ref("110101")
// const fullLocation = ref("北京市 市辖区 东城区")

const changeResult = reactive({
  provinceCode: "",
  provinceName: "",
  cityCode: "",
  cityName: "",
  countyCode: "",
  countyName: "",
  fullLocation: "",
})

const activeAddress = (e) => {
  show.value = !show.value
  open()
}

// 点击时记录城市信息
const changeItem = (item) => {
  // 省份
  if (item.level === 0) {
    changeResult.provinceCode = item.code
    changeResult.provinceName = item.name
  }
  if (item.level === 1) {
    changeResult.cityCode = item.code
    changeResult.cityName = item.name
  }
  if (item.level === 2) {
    changeResult.countyCode = item.code
    changeResult.countyName = item.name
    show.value = false
  }
}

const currList = computed(() => {
  let currList = cityData.value
  // TODO 根据点击的省份城市获取对应的列表
  // 点击 省份信息 后显示 城市信息
  if (changeResult.provinceCode) {
    currList = currList.find(
      (item) => item.code === changeResult.provinceCode
    ).areaList
  }
  if (changeResult.cityCode) {
    currList = currList.find(
      (item) => item.code === changeResult.cityCode
    ).areaList
  }
  if (changeResult.countyCode) {
    changeResult.fullLocation = `${changeResult.provinceName} ${changeResult.cityName} ${changeResult.countyName}`
    // 关闭选择区域
    emit("getLocation", changeResult)
  }
  return currList
})

const open = async () => {
  loading.value = true
  for (const key in changeResult) {
    changeResult[key] = ""
  }
  cityData.value = await getAddress()
  loading.value = false
}
</script>

<style scoped lang="scss">
.address-choose {
  width: 100%;
  position: relative;
  .select {
    cursor: pointer;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
  }
  .option {
    position: absolute;
    top: 100%;
    right: 0;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #ced4da;
    transition: all 0.3s;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    &.active {
      opacity: 1;
      visibility: visible;
      margin-top: 0px;
    }
    .loading {
      padding: 18px;
      margin: 0 auto;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .city-list {
      display: flex;
      flex-wrap: wrap;
      .city {
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        // &:nth-child(5n) {
        //   border-right: unset;
        // }
        &:hover {
          background: #d6d6d6;
        }
        flex-basis: 25%;
        border: 1px solid #e2e2e2;
      }
    }
  }
}
</style>
