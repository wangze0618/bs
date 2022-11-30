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

// 模拟分页
export const page1 = (arr: object[], num: number) => {
  // 新建数组，用于储存新数组
  var arrNew = []
  // 如果单页的数组长度大于传入数组长度，则证明一个页面就可以展示
  if (arr.length <= num) {
    arrNew.push(arr)
  } else {
    // 下面这部分的操作是将 [1,2],[3.4]存入arrNew里面
    for (var i = 0; i < Math.floor(arr.length / num); i++) {
      arrNew.push(arr.slice(i * num, (i + 1) * num))
      // 将剩余部分存入arrNew里面 （利用长度来判断后面有没有数字）
      if (
        i + 1 == Math.floor(arr.length / num) &&
        arr.slice((i + 1) * num).length != 0
      ) {
        arrNew.push(arr.slice((i + 1) * num))
      }
    }
  }
  return arrNew
}

// 价格补两个0
export const zero2 = (num: number): string => {
  return num.toFixed(2)
}
