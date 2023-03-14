<template>
  <div class="news" v-if="arr.length">
    <div class="img">
      <TextDrop>新闻资讯</TextDrop>
    </div>
    <!-- 内容区 -->
    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">新闻资讯</WBreadItem>
      </WBread>

      <div class="news-context">
        <div class="row">
          <div class="col-12 col-md-5">
            <!-- 新闻轮播 -->
            <NewsCarousel></NewsCarousel>
          </div>
          <div class="col-12 col-md-7 tabs-con">
            <Tab class="tabs" v-model:activeName="activeName">
              <TabPanel class="tabs-item" label="景区新闻" name="p1">
                <ul>
                  <li v-for="(item, index) in list1">
                    <Announcement size="20" class="icon1"></Announcement>
                    <p style="cursor: pointer" @click="openNews(item.url)">
                      {{ item.title }}
                    </p>
                  </li>
                </ul>
              </TabPanel>
            </Tab>
          </div>
        </div>
        <div class="imgs mt-2 mb-2">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
              <img
                style="object-fit: cover"
                src="@/assets/upload/minsu.jpg"
                alt=""
              />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <img
                style="object-fit: cover"
                src="@/assets/upload/keju.jpg"
                alt=""
              />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <img
                style="object-fit: cover"
                src="@/assets/upload/yingshi.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="news1">
          <div class="row">
            <div class="col-12 col-sm-6">
              <Tab class="tabs" v-model:activeName="news1Name">
                <TabPanel class="tabs-item" label="景区公告" name="news1Tab1">
                  <ul>
                    <li v-for="(item, index) in list21">{{ item.title }}</li>
                  </ul>
                </TabPanel>
                <TabPanel class="tabs-item" label="企业快讯" name="news1Tab2">
                  <ul>
                    <li>123132</li>
                    <li>2132</li>
                    <li>1512</li>
                    <li>1612</li>
                    <li>12</li>
                    <li>12</li>
                  </ul>
                </TabPanel>
              </Tab>
            </div>
            <div class="col-12 col-sm-6">
              <Tab class="tabs" v-model:activeName="news2Name">
                <TabPanel class="tabs-item" label="在线视频" name="news2Tab1">
                  <ul>
                    <li v-for="(item, index) in list31">{{ item.title }}</li>
                  </ul>
                </TabPanel>
                <TabPanel class="tabs-item" label="宣传推荐" name="news2Tab2">
                  <ul>
                    <li>123132</li>
                    <li>2132</li>
                    <li>1512</li>
                    <li>1612</li>
                    <li>12</li>
                    <li>12</li>
                  </ul>
                </TabPanel>
              </Tab>
            </div>
            <div class="col-12 col-sm-6">
              <Tab class="tabs" v-model:activeName="news3Name">
                <TabPanel class="tabs-item" label="活动通知" name="news3Tab1">
                  <ul>
                    <li v-for="(item, index) in list41">{{ item.title }}</li>
                  </ul>
                </TabPanel>
                <TabPanel class="tabs-item" label="管理制度" name="news3Tab2">
                  <ul>
                    <li>123132</li>
                    <li>2132</li>
                    <li>1512</li>
                    <li>1612</li>
                    <li>12</li>
                    <li>12</li>
                  </ul>
                </TabPanel>
              </Tab>
            </div>
            <div class="col-12 col-sm-6 mb-3">
              <Tab class="tabs" v-model:activeName="news4Name">
                <TabPanel class="tabs-item" label="每日人数" name="news4Tab1">
                  <ul>
                    <li v-for="(item, index) in list51">{{ item.title }}</li>
                  </ul>
                </TabPanel>
                <TabPanel class="tabs-item" label="资讯服务" name="news4Tab2">
                  <ul>
                    <li>123132</li>
                    <li>2132</li>
                    <li>1512</li>
                    <li>1612</li>
                    <li>12</li>
                    <li>12</li>
                  </ul>
                </TabPanel>
              </Tab>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import { ref, onMounted } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import NewsCarousel from "./components/news-carousel.vue"
import Tab from "@/components/UI/tab/index.vue"
import { Announcement } from "@icon-park/vue-next"
import TabPanel from "@/components/UI/tab/components/tab-pane/index.vue"
import TextDrop from "@/components/UI/text-drop/index.vue"
import { getNews1, getNews2, getNews3, getNews4, getNews5 } from "@/api/news"
import Loading from "@/components/UI/loading/index.vue"

let list1 = ref([])

let arr = ref([])
let activeName = ref("p1")
let news1Name = ref("news1Tab1")
let news2Name = ref("news2Tab1")
let news3Name = ref("news3Tab1")
let news4Name = ref("news4Tab1")
const openNews = (url) => {
  window.open(url)
}
let list21 = ref([])
let list31 = ref([])
let list41 = ref([])
let list51 = ref([])
onMounted(async () => {
  arr.value = await Promise.all([
    getNews1(),
    getNews2(),
    getNews3(),
    getNews4(),
    getNews5(),
  ])
  list1.value = arr.value[0].data
  list21.value = arr.value[1].data
  list31.value = arr.value[2].data
  list41.value = arr.value[3].data
  list51.value = arr.value[4].data
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.news {
  .row {
    .tabs-con {
      padding-left: 0.4em !important;
      @media (width<=768px) {
        padding-left: 0 !important;
      }
    }
    color: var(--color-text);
    .tabs-item {
      padding: 6px;
      ul > li {
        position: relative;
        margin-bottom: 0.8em;
        &:last-child {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icon1 {
          position: relative;
          top: -2px;
          margin-right: 2px;
        }
        display: flex;
        align-items: flex-start;
      }
    }
    .col-12 {
      padding: 0;
    }
  }
  .img {
    @include img("http://www.zjshenxianju.com/r/cms/www/zx/img/header3.jpg");
  }
  .container {
    @include setBread;
  }
}
.imgs {
  .col-12 {
    padding: 2px !important;
  }
  img {
    width: 100%;
    height: 120px;
  }
}
.news1 {
  .col-12 {
    padding: 4px !important;
  }
}
</style>
