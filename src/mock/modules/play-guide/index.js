import Mock from "mockjs"

export const getPlayGuide = () => {
  return Mock.mock({
    message: "请求成功！",
    status: 200,
    data: [
      {
        id: 0,
        username: "杰拍中国",
        date: "2023-01-03",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/63a55a86adc873d22c4b2f35.jpg",
        title: `
        <h5>尧坝古镇</h5>
          ❤推荐理由：
          尧坝古镇本身不大，就一条老街，快的话20分钟都能走完，人比较少，主要还是人文为主，街上织席贩履，来往摊贩，茶馆商铺都有种很淳朴自然的感觉。
          <p class='mb-0'>特产：街上很多卖榨菜，麦酱的味道都不错，可以带点做下饭菜</p>`,

        isLike: false,
        like_count: 492,
        imgs: [
          require("@/assets/upload/play-guide/2.png"),
          require("@/assets/upload/play-guide/1.png"),
          require("@/assets/upload/play-guide/3.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/63b41427000000001f00fd03?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678026390",
      },
      {
        id: 1,
        username: "余生",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: `<h5>泸州尧坝古镇｜原汁原味充满烟火气｜旅行攻略</h5>
        <p class='mb-0'>
        尧坝古镇，位于川渝贵三省交界处，宋代开始就是川黔走廊上的驿站，🈶清代进士牌坊⛩和很多川南民居四合院🏠，保存非常完好。街道灯笼🏮高挂，屋檐下的卷席很有特色，原汁原味，人少免费🆓，是可以慢慢逛逛和拍照的古镇。
        </p>`,
        isLike: false,
        like_count: 249,
        imgs: [
          require("@/assets/upload/play-guide/4.png"),
          require("@/assets/upload/play-guide/5.png"),
          require("@/assets/upload/play-guide/6.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/639ef258000000001f0246ce?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678027839",
      },
      {
        id: 2,
        username: "混子徐混水摸鱼",
        date: "2021-04-11",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f66f979db0552000121583b.jpg",
        title: `
        <h5>
        泸州🍶尧坝古镇.好看的皮囊“千翩一绿🌳”
        </h5>
<p>
我家老徐是个酒葫芦，因此前往泸州的第一目的是整点老窖回去孝顺他。对于酒乡的所有印象都和发酵相关，直到踏入这个古镇。红土筑起的古门牌 、瓦脊相连的四合院、高低错落的民居，沿路各户人家热闹的做着自己的小本生意，米花糖、苕丝糖、红汤羊肉、摆地摊的小市集，这里安静祥和但不失市井烟火，与世隔绝却也自成一派。
</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/7.png"),
          require("@/assets/upload/play-guide/8.png"),
          require("@/assets/upload/play-guide/9.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/6072582600000000210347fc?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678028094",
      },
      {
        id: 3,
        username: "槑呆呆",
        date: "2022-10-06",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/63c2dc858a4b1a0c7b1041fe.jpg",
        title: `
        <h5>
        泸州周边半小时🚗我来尧坝古镇只办三件事！
        </h5>
        <p>
        国庆假期和家人一起自驾到合江尧坝古镇玩
        我来尧坝只办三件事！
        🟠拍点照片🟡买点土特产🟢吃羊肉汤<br/>
        这里能看到本地人生活的常态化，临街的铺子有的做买卖，有的打大贰…不是为商而商，基本是家里人传承的生意，还有不少农民挑着菜、拎着鸡叫卖，也就是说尧坝依然是一座本地人主导的自然古镇，相比于丽江大理凤凰古城这些知名古镇来说，这里的商业气息并不非常浓厚</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/10.png"),
          require("@/assets/upload/play-guide/11.png"),
          require("@/assets/upload/play-guide/12.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/633e7f03000000001d027e79?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678112304",
      },
      {
        id: 4,
        username: "爱摄影的大头宾",
        date: "2021-09-16",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/62f84fc4506f03e00213df7c.jpg",
        title: `
        <h5>邂逅尧坝古镇</h5>
        <p class='mb-0'>看点：尧坝古镇本身不大，就一条老街，快的话20分钟都能走完，人比较少，主要还是人文为主，街上织席贩履，来往摊贩，茶馆商铺都有种很淳朴自然的感觉。</p>
        <p class='mb-0'>特产：街上很多卖榨菜，麦酱的味道都不错，可以带点做下饭菜</p>
        <p class='mb-0'>路线：导航不要直接搜尧坝古镇，会把你导航到外面的一个新修的地方，直接搜“合江尧坝镇政府”就可以直哒</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/13.png"),
          require("@/assets/upload/play-guide/14.png"),
          require("@/assets/upload/play-guide/15.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/614305e600000000210354bf?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678113004",
      },
      {
        id: 5,
        username: "潘绍清",
        date: "2022-12-07",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/63db92b928025eb34162b33f.jpg",
        title: `
        <h5>四川尧坝古镇的建筑群</h5>
        <p>
        尧坝古镇位于四川省泸州市合江县尧坝镇，地处川渝黔结合部，古镇依山傍水，高低错落。现存建筑保存极为完整，古镇大多是典型的川南民居四合院的风格，绝大多数为清代、民国时期建筑。</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/16.png"),
          require("@/assets/upload/play-guide/17.png"),
          require("@/assets/upload/play-guide/18.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/63903318000000001b017aee?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678113027",
      },
      {
        id: 6,
        username: "错了个错",
        date: "2023-02-19",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/619952c7e6e69cb106fb4bc9.jpg",
        title: `
        <h5>四川古镇推荐之—泸州·尧坝古镇</h5>
        <p class='mb-0'>因为回家吃酒，顺便去了趟合江的尧坝古镇逛了下，接下来的推荐可以说是很真实的</p>
        <p class='mb-0'>1️⃣如果非泸州地区范围的外地朋友，是特意为了尧坝古镇而来，那我会建议考虑下.</p>
        <p class='mb-0'>2️⃣如果是回家、或者顺利会路过且可以安排在行程里的行程、那尧坝可以是个不错的地方.</p>
        <p class='mb-0'>首先，尧坝古镇位于坝镇，地处川渝黔结合部，距离泸州35公里左右，从泸州驾车预计40分钟左右.</p>
        <p class='mb-0'>古镇依山傍水，高低错落。现存建筑保存极为完整，古镇大多是典型的川南民居四合院的风格，绝大多数为清代、民国时期建筑.</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/19.png"),
          require("@/assets/upload/play-guide/20.png"),
          require("@/assets/upload/play-guide/21.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/63f16f730000000013017d84?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678113094",
      },
      {
        id: 7,
        username: "三文鱼有条黑鲔鱼",
        date: "2022-03-19",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5b2f04f614de414ac2e23f2b.jpg",
        title: `
        <h5>带狗旅行|活着的古镇四川泸州尧坝古镇</h5>
        <p class='mb-0'>✨分享四个狗狗美好的狗生体验。✨</p>
        <p class='mb-0'>⭐回归带狗旅行途中的景点和住宿分享⭐</p> 
        <p class='mb-0'>📍地点：四川泸州合江尧坝古镇📍</p>
        <p class='mb-0'>🎫门票：免费🎫</p>
        <p class='mb-0'>🅿️停车：免费🅿️</p>
        <p class='mb-0'>🐕宠物：免费🐕</p>
        <p class='mb-0'>⏱时间：1~2h⏱</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/22.png"),
          require("@/assets/upload/play-guide/23.png"),
          require("@/assets/upload/play-guide/24.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/6235bbeb000000002103bbee?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678113147",
      },
      {
        id: 8,
        username: "哦几步呀",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/637a0cac8df888c1a4cb4206.jpg",
        title: `
        <h5>⭐泸州小众旅游景点| 尧坝古镇⭐</h5>
        <p class='mb-0'>推荐指数：🌟🌟🌟</p>
        <p class='mb-0'>1️⃣从2013年读大学时，就听合江的同学提到合江有尧坝古镇和福宝古镇。虽然是泸州人，但还真去过合江，这次打卡合江，称得上是合江印象啦～</p>
        <p class='mb-0'>2️⃣说实话，现在一提到古镇，刻板印象是商业打造。不过听到的评价里，尧坝不算太差，便按计划前往啦～</p>
        `,
        isLike: false,
        like_count: 149,
        imgs: [
          require("@/assets/upload/play-guide/25.png"),
          require("@/assets/upload/play-guide/26.png"),
          require("@/assets/upload/play-guide/27.png"),
        ],
        url: "https://www.xiaohongshu.com/explore/63404574000000001d013f25?app_platform=ios&app_version=7.77&share_from_user_hidden=true&type=normal&xhsshare=CopyLink&appuid=5b94a4ac2bcd6d0001104540&apptime=1678115019",
      },
    ],
  })
}

export const postPlayGuideLike = (options) => {
  return {
    message: options,
  }
}
