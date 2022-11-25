import dayjs from "dayjs"
import { onUnmounted, reactive, ref } from "vue"

export const payTime = () => {
  let time = ref(1800)
  let timer = null
  let timeText = ref("")
  let isAvaliable = ref(true)

  // 传入-开始方法
  const start = (countdown) => {
    time.value = countdown
    timeText.value = dayjs.unix(time.value).format("mm分ss秒")
  }
  if (time.value) {
    timer = setInterval(() => {
      time.value--
      timeText.value = dayjs.unix(time.value).format("mm分ss秒")
      isAvaliable.value = true
      if (time.value < 0) {
        timeText.value = "已过期"
        clearInterval(timer)
        isAvaliable.value = false
      }
    }, 1000)
  }
  onUnmounted(() => {
    clearInterval(timer)
  })
  return { timeText, isAvaliable, start }
}

// 倒计时
// export const payTime = () => {
//   const timer = ref(1800)
//   let timeText = ref("")

//   const start = (countdown) => {
//     timer.value = countdown
//     timeText.value = dayjs.unix(timer.value).format("mm分ss秒")
//   }

//   let timeOut
//   if (timer.value) {
//     timeOut = setInterval(() => {
//       timer.value--
//       timeText.value = dayjs.unix(timer.value).format("mm分ss秒")
//       if (timer.value < 0) {
//         timeText.value = "已过期"
//         clearTimeout(timeOut)
//       }
//     }, 1000)
//   }

//   onUnmounted(() => {
//     clearTimeout(timeOut)
//   })

//   return { start, timeText }
// }
