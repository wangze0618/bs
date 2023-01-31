<template>
  <div class="container-xl">
    <div id="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from "vue"
import AMapLoader from "@amap/amap-jsapi-loader"
const props = defineProps({
  location: {
    type: Array,
    default: () => [105.644993, 28.739941],
  },
})
const initMap = () => {
  try {
    window._AMapSecurityConfig = {
      securityJsCode: "be55c683395c3c4f7f49692f443eb6de",
    }
    AMapLoader.load({
      key: "8b26e4badf725d1dbe310bce27c3d73d",
      version: "",
      // AMapUI: {
      //   version: "1.1",
      //   plugins: ["overlay/SimpleMarker"],
      // },
      plugins: [
        "AMap.ToolBar",
        "AMap.Scale",
        "AMap.HawkEye",
        "AMap.MapType",
        "AMap.ControlBar",
        "AMap.Marker",
      ],
      // Loca: {
      //   version: "2.0",
      // },
    }).then((AMap) => {
      const map = new AMap.Map("container", {
        //设置地图容器id
        resizeEnable: true,
        pinch: 45,
        viewMode: "3D", //是否为3D地图模式
        zoom: 16, //初始化地图级别
        //初始化地图中心点位置
        center: props.location,
      })
      map.plugin(
        [
          "AMap.ToolBar",
          "AMap.Scale",
          "AMap.HawkEye",
          "AMap.MapType",
          "AMap.ControlBar",
          "AMap.Marker",
        ],
        () => {
          map.addControl(new AMap.HawkEye({ isOpen: false }))
          map.addControl(new AMap.Scale())
          map.addControl(
            new AMap.MapType({
              defaultType: 0,
            })
          )
          map.addControl(new AMap.ControlBar())
          map.addControl(
            new AMap.ToolBar({
              position: "LT",
              offset: [50, 120],
            })
          )
          map.addControl(
            new AMap.Marker({
              // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
              // position: new AMap.LngLat(102.245124, 26.658609) 或者 [102.245124, 26.658609],
              position: props.location,
              title: "尧坝古镇",
            })
          )
        }
      )
    })
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  await initMap()
})
</script>

<style scoped lang="scss">
.container-xl {
  padding: 0;
}
#container {
  width: 100%;
  height: 500px;
  position: relative;
  @media (max-width: 576px) {
    height: 450px;
  }
}
</style>
