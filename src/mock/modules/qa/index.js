import Mock from "mockjs"

export const getQa = () => {
  return Mock.mock({
    message: "请求成功！",
    status: 200,
    data: [
      {
        id: 0,
        title: "请问景区营业时间?",
        answer:
          "游客朋友您好，景区夏令营业时间（5月1日—9月30日）8:00—18:00，其他营业时间（10月8日—4月30日）8:00—17:00，节假日营业时间推迟,待所有游客送完为止。a1",
        category: "时间",
      },
      {
        id: 1,
        title: "请问对儿童、学生是如何收费的?",
        answer:
          "游客朋友您好，景区门票对于青少年（儿童、学生、未成年人）:1、6周岁（含6周岁）以下或身高1.2米（含1.2米）以下的儿童免费；2、6周岁（不含6周岁）—18周岁（含18周岁）未成年人享半价优惠；3、身高1.2米—1.5米的儿童享半价优惠。景区门票对于全日制大学本科及以下学历学生凭学生证享半价优惠。",
        category: "收费",
      },
      {
        id: 2,
        title: "请问景区游览需要多少时间?",
        answer:
          "游客朋友您好，游览景区如果乘坐索道来回，需要3—4小时左右，选择全程爬山需要6—7小时，一趟乘坐索道一趟爬山大约5.5小时。",
        category: "时间",
      },
      {
        id: 3,
        title: "景区门票可以用微信或者支付宝支付吗?",
        answer: "游客朋友您好，景区门票是免费的！",
        category: "门票",
      },
      {
        id: 4,
        title: "请问残疾人免票吗?",
        answer:
          "游客朋友您好，残疾人凭有效证件免收门票，在入园时，出示证件给检票口工作人员查看即可进入景区。(温馨提示:因是山岳型景区，下肢残障人士不适宜上山)。        ",
        category: "门票",
      },
      {
        id: 5,
        title: "12?",
        answer:
          "游客朋友您好，残疾人凭有效证件免收门票，在入园时，出示证件给检票口工作人员查看即可进入景区。(温馨提示:因是山岳型景区，下肢残障人士不适宜上山)。        ",
        category: "住宿",
      },
      {
        id: 6,
        title: "12?",
        answer:
          "游客朋友您好，残疾人凭有效证件免收门票，在入园时，出示证件给检票口工作人员查看即可进入景区。(温馨提示:因是山岳型景区，下肢残障人士不适宜上山)。        ",
        category: "住宿2",
      },
      {
        id: 7,
        title: "12?",
        answer:
          "游客朋友您好，残疾人凭有效证件免收门票，在入园时，出示证件给检票口工作人员查看即可进入景区。(温馨提示:因是山岳型景区，下肢残障人士不适宜上山)。        ",
        category: "游玩",
      },
    ],
  })
}
