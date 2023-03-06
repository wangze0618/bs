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
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
      {
        id: 3,
        username: "余生",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: "泸州尧坝古镇｜1原汁原味充满烟火气｜旅行攻略3",
        isLike: false,
        like_count: 149,
        imgs: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
      {
        id: 4,
        username: "余生",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: "泸州尧坝古镇｜1原汁原味充满烟火气｜旅行攻略3",
        isLike: false,
        like_count: 149,
        imgs: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
      {
        id: 5,
        username: "东北大喵",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: "泸州尧坝古镇｜1原汁原味充满烟火气｜旅行攻略3",
        isLike: false,
        like_count: 149,
        imgs: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
      {
        id: 6,
        username: "东北大喵",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: "泸州尧坝古镇｜1原汁原味充满烟火气｜旅行攻略3",
        isLike: false,
        like_count: 149,
        imgs: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
      {
        id: 7,
        username: "东北大喵",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: "泸州尧坝古镇｜1原汁原味充满烟火气｜旅行攻略3",
        isLike: false,
        like_count: 149,
        imgs: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
      {
        id: 8,
        username: "东北大喵",
        date: "2022-12-18",
        avatar:
          "https://sns-avatar-qc.xhscdn.com/avatar/5f089d5fde78f70001a37612.jpg",
        title: "泸州尧坝古镇｜1原汁原味充满烟火气｜旅行攻略3",
        isLike: false,
        like_count: 149,
        imgs: [
          "https://picsum.photos/500/600",
          "https://picsum.photos/540/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/500/600",
          "https://picsum.photos/520/600",
          // "@image('500x600','#e1251b','#fff','demo')",
        ],
      },
    ],
  })
}

export const postPlayGuideLike = (options) => {
  return {
    message: options,
  }
}
