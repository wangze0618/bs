<template>
  <div class="container-xl">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, shallowRef } from "vue"
import AMapLoader from "@amap/amap-jsapi-loader"

const props = defineProps({
  location: {
    type: Array,
    default: () => [105.644993, 28.739941],
  },
})
let map = shallowRef(null)
const initMap = async () => {
  const AMap = await AMapLoader.load({
    key: "65773a6a1bca2ce36d1332ba8a11fa8f",
    version: "2.0",
  })
  try {
    const map = new AMap.Map("container", {
      //设置地图容器id
      resizeEnable: true,
      pinch: 45,
      viewMode: "3D", //是否为3D地图模式
      zoom: 16, //初始化地图级别
      center: props.location, //初始化地图中心点位置
    })
    AMap.plugin(
      [
        "AMap.ToolBar",
        "AMap.Scale",
        "AMap.HawkEye",
        "AMap.MapType",
        "AMap.Marker",
        "AMap.ControlBar",
        "AMap.Driving",
      ],
      () => {
        map.addControl(new AMap.Scale())
        map.addControl(new AMap.HawkEye({ isOpen: true }))
        map.addControl(new AMap.MapType())
        map.addControl(
          new AMap.ToolBar({
            position: "LT",
            offset: [50, 120],
          })
        )
        map.addControl(new AMap.ControlBar())
        map.add(
          new AMap.Marker({
            // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            // position: new AMap.LngLat(102.245124, 26.658609) 或者 [102.245124, 26.658609],
            position: props.location,
            title: "尧坝古镇",
          })
        )
      }
    )
  } catch (error) {
    console.log(error)
  }
}

onMounted(function () {
  try {
    initMap()
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped lang="scss">
.container-xl {
  padding: 0;
}

#container {
  margin-top: 10px;
  width: 100%;
  height: 500px;
  position: relative;
  @media (max-width: 576px) {
    height: 450px;
  }
}
</style>
