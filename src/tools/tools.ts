// 格式化时间
export const getTime = (): string => {
  let date = new Date()

  // 补零
  let zero = (t: number) => {
    return t > 10 ? t : `0${t}`
  }
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${zero(
    date.getHours()
  )}:${zero(date.getMinutes())}`
}
