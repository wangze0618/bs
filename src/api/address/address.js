import axios from "axios"

export const getAddress = () => {
  return new Promise((resolve, reject) => {
    // 有缓存
    if (window.cityData) {
      resolve(window.cityData)
    } else {
      // 无缓存
      const url =
        "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json"
      axios
        .get(url)
        .then((res) => {
          window.cityData = res.data
          resolve(window.cityData)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  })
}
