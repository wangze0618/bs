import axios from "axios"
const baseURL = `http://127.0.0.1:9900`
const instance = axios.create({
  baseURL,
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return response
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    /* 
      1. 如果是get请求,需要使用params来传递submitData
      2. 如果是get请求 需要使用data 来传递submitData
      [] 设置一个动态的key，写js表达式，js表达式的执行结果当作KEY
    */
    [method.toLowerCase() === "get" ? "params" : "data"]: submitData,
  })
}
