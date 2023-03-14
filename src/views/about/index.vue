<template>
  <div class="about">
    <div class="img">
      <TextDrop>走进尧坝</TextDrop>
    </div>
    <div class="container">
      <!-- 面包屑组件 -->
      <WBread class="bread mb-3 mt-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">走进尧坝</WBreadItem>
      </WBread>
    </div>
    <div class="container-xl">
      <!-- 简概列表 -->
      <div class="wow animated fadeInUp card card1">
        <div class="row card1-row">
          <!-- 熟读尧坝 -->
          <div class="left1 col-sm-12 col-md-4">
            <div class="content1">
              <h3 class="left-title1">数读尧坝</h3>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">64</span>
                  <Home
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Home>
                </div>
                <p class="area">占地面积(平方千米)</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">60000</span>
                  <Home
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Home>
                </div>
                <p class="area">古街居民群总面积(平方千米)</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">2000+</span>
                  <Time
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Time>
                </div>
                <p class="area">距今已经</p>
              </div>
              <div class="left2">
                <div class="left2-content">
                  <span class="left2-span">4.27</span>
                  <Time
                    class="home-icon"
                    size="52"
                    fill="gray"
                    theme="filled"
                  ></Time>
                </div>
                <p class="area">核心保护区(公顷)</p>
              </div>
            </div>
          </div>
          <!-- 关于尧坝 -->
          <div class="right1 col-sm-12 col-md-8">
            <h3 class="right-title">关于尧坝</h3>
            <div class="right-main">
              <div class="main-item">
                <div class="item-left">
                  <img
                    class="rounded-2"
                    style="width: 80px; height: 80px"
                    src="https://n.sinaimg.cn/sinakd2021513s/267/w640h427/20210513/7366-kpzzqmz6629522.jpg"
                    alt=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">位置地貌</h4>
                  <div class="right-content">
                    尧坝古镇位于川南黔北结合部，地处东经105°42′，北纬28°45′，处于泸赤路（泸州——赤水）中段，距合江37公里、泸州22公里、赤水27公里、重庆市区94公里，成自泸赤高速公路穿境而过。尧坝古镇属浅丘地貌，四面环山，中间为平坝，最高点鼓楼山顶海拔720米，最低点尧坝场海拔310米。
                  </div>
                </div>
              </div>

              <div class="main-item">
                <div class="item-left">
                  <img
                    class="rounded-2"
                    style="width: 80px; height: 80px"
                    src="https://n.sinaimg.cn/sinakd2021513s/267/w640h427/20210513/5dd1-kpzzqmz6629743.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">名称由来</h4>
                  <div class="right-content">
                    尧坝古镇历史悠久，文化积淀深厚。根据考证，早在唐宋时期，尧坝所居人口主要是少数民族瑶族，当时的尧坝为瑶家坝子，古名“瑶坝”，后随着汉人从北方南进，入居尧坝人口的增多，少数民族逐渐向云贵高原山区迁徙；又因汉人祟拜尧舜黄帝，便将“瑶坝”的“瑶”改为“尧”，尧坝故而得名。
                  </div>
                </div>
              </div>

              <div class="main-item">
                <div class="item-left">
                  <img
                    class="rounded-2"
                    style="width: 80px; height: 80px"
                    :src="require('@/assets/image/spot/dongyuemiao.png')"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="item-right">
                  <h4 class="right-title1">综合概述</h4>
                  <div class="right-content">
                    尧坝古镇依山傍水，高低错落。现存建筑保存极为完整，古镇大多是典型的川南民居四合院的风格，绝大多数为清代、民国时期建筑。古民居群位于古街道两旁，全长1000多米，有小青瓦房2000余间。上街房依山而建，高低起伏、错落有致，下街房宁静平和，瓦脊连成一线，形成有节奏、有韵律的民居群落。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门景点 -->
      <SpotCarousel class="mt-5">
        <template #SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'gujiedao',
                  },
                })
              "
              class="slide-item"
            >
              <template #title> 尧坝古镇古街道民居群 </template>
              <template #img>
                <img class="pic" src="@/assets/upload/古街道.jpeg" alt="" />
              </template>
              <template #content>
                <p class="content mb-1">
                  尧坝古镇古街道民居群为川南古民居的活化石，为我国建筑遗迹类的重点文物保护单位。
                  外观形态：街道始建于明代，长约1000米。街面弯曲成S形，街石采用山区青石板和长条石镶嵌而成，跌宕起伏，无梯步能通行车辆。北街是由周其宾为代表的周氏家族修建.南街是由武进士李跃龙为代表的李氏家族修建，素有周半场，李半场之说。古镇上古民群居保存完好，分上下两面街房。上街房依山而建，高低起伏、错落有致。下街房宁静平和，瓦脊成一线连贯，形成有节奏、有韵律的民居群落。家家有巷道和天井，户户有木楼。房屋进深一一般为四至六间屋。房后有小路与水井相连。墙壁为央竹蓖、古朴的水板壁或厚实的大方砖壁。有的房屋为了防火，户与户间还建有防火墙，也有置木逗格子窗、繁复而新奇的图案，或雕饰灵动的吉祥灵瑞于图中。墙角随处可见石雕、石狮等。古居民群中，李跃龙公馆、周其宾公馆、凌子风故居、李子英故居等建筑仍可寻觅。茶馆、染坊、酒肆、客栈、戏楼、石雕、木雕、窗楼、亭台等无不古风遗存。虽历经几百年风雨，仍古色古香，以其宏大的规模和完好的保护程度，被众多专家所关注。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'dongyuemiao',
                  },
                })
              "
            >
              <template #title> 东岳庙 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/dongyuemiao.png')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  东岳庙，俗称火神庙，坐西南向东北，位于古镇中央，依九龙聚宝山而建，初建于明万历年间（1573—1620年），清代康熙、嘉庆几度重修。建筑整体顺依地势，逐级爬升至坡顶，建筑风格是歇山式木石结构，由五重殿宇组成。总进深84米，总面宽29米，占地面积6500多平方米，是典型的川南民俗性宗教建筑。一重殿，名庆典戏楼，俗称万年台，系单重檐歇山式穿逗木石结构，占地面积210平方米。天花板绘有对称的36个“寿”字图案。楼台围栏雕刻大量精美的深浮雕木刻戏剧内容。二重殿名魁星楼。三重殿名城隍殿。四重殿名东皇殿。五重殿名孔圣殿。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'jiulong',
                  },
                })
              "
            >
              <template #title> 九龙聚宝山 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/jiulong.png')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  九龙聚宝山位于古镇中央。取“九龙聚宝山”之名，寓意此地乃非凡龙庭府第处所。民间传说，九龙聚宝山曾被尧王相中，选作都址，因峰数不足一百，尧王周遭悻悻，抱憾而去。临山远眺，黔北之大娄山余脉蟒行而来，龙卦山、仙顶山、鼓楼山沉稳呼应，动静结合，龙气环生，尧坝因此聚福而成了人间宝地。九龙聚宝山就是尧坝山川形胜与地灵人杰奇妙配合的象征。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'wujinshi',
                  },
                })
              "
            >
              <template #title> 武进士牌坊 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/wujinshi.png')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  武进士牌坊属于建筑与设施主类景观与小品建筑亚类牌坊牌楼、影壁基本类
                  外观形态：牌坊采用的是三重檐四柱三间，斗拱歇山式建筑。最上面的冒顶端有个半圆型的冒顶，上有：“圣旨”二字，已在文革中毁坏，意为嘉庆皇帝亲赐修建，牌坊上匾额、题对保存完好，檐上题有“营守府”“赐进士第”字样。中间两根石柱上刻有“景明北停处提刑按察仗司按察使王正常题”的楹联：“对天仗以呈能，勇冠貔貅之队；戴宫花而焕彩，荣耀桑梓之邦。”石柱背后的楹联是：“宴预阴扬，银榜金花初得意，名题雁塔，铜筋铁肘尽称奇”。
                  人文背景：可以从中体会到当年李跃龙的神气与风光。虽说李跃龙是尧坝响当当的人物，但从来没有仗势欺人，反而对穷苦百姓多加照顾，乐于赞助。乐善好施的侠骨情怀使他在尧坝人民的心目中留下了很好的口碑。现在只要一提到李进士，尧坝人民都会觉得非常自豪。而他出资修建的“李半场“也像李跃龙的名字一样永远造福尧坝的后代子孙。
                  规模与体量：是一座坐北向南的牌坊，牌坊采用的是三重檐四柱三间，斗拱歇山式建筑，通高7.8米，面阔8.8米，门前有两座石狮子，青石而成，占地8平米。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'xianding',
                  },
                })
              "
            >
              <template #title> 仙顶 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/xianding.jpg')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  仙顶山位于尧坝西南，总面积5平方千米，森林覆盖率90%以上。因唐代僧人刘珍曾在峰顶的石洞中修行而得仙顶美名。有神仙古洞、薄刀岭观险、衫林大峡谷、十里麻竹长廊、邓山地主庄园、象鼻石等景点。山上多种桃树，山民有“桃花开时山神灵，仙女邀你仙顶行”谚俗，逐渐形成仙顶朝山节民俗。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'midian',
                  },
                })
              "
            >
              <template #title> 大鸿米店 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/midian.png')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  大鸿米店位于尧坝古镇中央临街17级台阶之上，是古镇标志性建筑，为清嘉庆武进士李跃龙修建，保存完好。建筑坐东向西，全木质穿逗结构，四合院布局，上下两层，建筑面积近2000平方米。上层护拦串花雕刻，下层廊道精致典雅，建筑两侧封火墙完好如初。
                  大鸿米店是尧坝古镇在历史上作为川黔粮食贸易重要集散地的遗存古建筑，是研究川黔经济史、交通史和建筑风格的重要实物资料。著名导演黄健中曾以此背景拍摄电影《大鸿米店》而使该店名闻遐迩。大鸿米店内设有在尧坝古镇拍摄的所有影视道具展厅和明、清时期家具展厅。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'guloushan',
                  },
                })
              "
            >
              <template #title> 鼓楼山 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/guloushan.png')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  鼓楼山位于合江县、江阳区、纳溪区结合部地区，长8千米，宽2—6千米，环山20千米，丹霞地貌，森林覆盖率70%以上。山上生长松杉、桢楠、珙桐、桫椤等名贵树木。有鼓楼碑亭、三关、五寨、晒羞石、古石太平、石笋、星星崖、庙基遗址、项石刻、八仙泉、聂龙辞祖、高峰寺、白云寺、永丰寺、玉皇庙、地主庄园、剿匪战场等景点。山上居住着苗族、彝族后裔，有着芦笙歌舞、芦笙联姻等民俗。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'wangzhaowen',
                  },
                })
              "
            >
              <template #title> 王朝闻故居（添寿堂） </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/wangzhaowen.jpg')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  王朝闻故居（添寿堂）位于古镇进士牌坊下侧，立木结构，是川南典型四合院，面积500平方米，院内天井50平方米，有明代古井一口，一方戏楼，三方厢楼，木雕精美。故居分为戏楼、正堂、客厅、卧室、天井、作坊室、偏房等。正堂供奉神龛、神案，左右置太师椅。作坊室是王朝闻少年时代使用的碾子、龙骨车、风簸、簸箕、撮箕、蓑衣、斗筐、锄头、犁耙等。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
          <SwiperSlide class="slide">
            <SpotCarouselItem
              @click="
                router.push({
                  name: 'SpotInfo',
                  params: {
                    id: 'lingzifeng',
                  },
                })
              "
            >
              <template #title> 凌子风故居 </template>
              <template #img>
                <img
                  class="pic"
                  :src="require('@/assets/image/spot/lingzifeng.jpg')"
                  alt=""
                />
              </template>
              <template #content>
                <p class="content mb-1">
                  凌子风故居现存房屋4间，屋内天井石台上生长古榕树。1991年，凌子风先生在尧坝古镇拍摄电影《狂》，欣然在老屋小住月余。
                </p>
              </template>
            </SpotCarouselItem>
          </SwiperSlide>
        </template>
      </SpotCarousel>

      <!-- 尧坝文化 -->
      <Culture></Culture>

      <!-- 历史沿革 -->
      <History></History>

      <!-- 全景图 -->
      <div class="quanjing">
        <h3 class="quanjingtu">景区全景图</h3>
        <img v-viewer src="@/assets/upload/quanjingtu.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import { useRouter } from "vue-router"
import { WOW } from "wowjs"
import { Home, Time } from "@icon-park/vue-next"
import Card from "@/components/UI/card/index.vue"
import SpotCarousel from "./components/spot-carousel.vue"
import Culture from "./components/culture.vue"
import History from "./components/history.vue"
import SpotCarouselItem from "./components/spot-carousel-item.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import TextDrop from "@/components/UI/text-drop/index.vue"
let dataList = ref(null)
const router = useRouter()
const go = () => {
  console.log(1)
}
onMounted(() => {
  new WOW({
    live: false, // 当时为了解决警告问题 想查看所有属性可去官网了解  https://wowjs.uk/docs.html
  }).init()
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.about {
  color: var(--color-text) !important;
  user-select: none;
  .img {
    @include img("@/assets/image/bgImg/2.jpg");
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    h3 {
      font-size: 2rem;
      margin-bottom: 0;
      text-shadow: 1px 1px 6px #808080;
      color: var(--color-text);
    }
  }
  .container {
    @include setBread;
  }
  .slide {
    color: var(--color-text);
    background-color: var(--color-content-background);
    border-radius: 8px;
    .content {
      @include ellipsis(8);
    }
  }
  .card {
    height: 100%;
    @include card-shadow;
    color: var(--color-text);
    background-color: var(--color-content-background);
  }
  .card1 {
    padding: 30px 40px;
    .card1-row {
      .left1,
      .right1 {
        .right-title {
          text-align: center;
          margin: 20px;
          font-size: 16px;
          color: #808080;
        }
        .right-main {
          width: 100% !important;
          display: flex;
          flex-direction: column;
          .main-item {
            display: flex;
            margin-top: 30px;
            .item-left {
              margin-top: 30px;
              margin-right: 16px;
            }
            .item-right {
              .right-content {
                text-indent: 2em;
              }
            }
          }
        }
      }
      .left1 {
        .content1 {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: #808080;
          .left-title1 {
            margin: 20px;
            font-size: 16px;
          }
          .left2 {
            text-align: center;
            .left2-content {
              display: flex;
              align-items: center;
              justify-content: center;
              .home-icon {
                display: flex;
                align-items: center;
                margin-left: 10px;
              }
              .left2-span {
                font-size: 60px;
              }
            }
          }
        }
      }
    }
  }
  .quanjing {
    .quanjingtu {
      text-align: center;
      margin: 30px 0;
    }
    img {
      width: 100%;
      cursor: grab;
    }
  }
}
</style>
