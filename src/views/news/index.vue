<template>
  <div class="news">
    <div class="img"></div>
    <!-- 内容区 -->
    <div class="container">
      <WBread class="wt mt-3 mb-3" sp=">">
        <WBreadItem class="wit">首页</WBreadItem>
        <WBreadItem class="wit">新闻资讯</WBreadItem>
      </WBread>

      <div class="news-context">
        <div class="row">
          <div class="col-12 col-md-5">
            <!-- 新闻轮播 -->
            <NewsCarousel></NewsCarousel>
          </div>
          <div class="col-12 col-md-7 tabs-con">
            <Tab v-model:activeName="activeName">
              <TabPanel class="tabs-item" label="景区要闻" name="p1">
                <ul>
                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>
                      2022-12-17中国风景名胜区协会第六届理事会第二次工作会议在安徽黄山顺利召开
                    </p>
                  </li>

                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>
                      2022-12-16风景名胜区设立40周年纪念大会暨创新与可持续发展论坛在黄山举办
                    </p>
                  </li>
                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>2022-12-14黄山风景区召开2023年工作务虚会</p>
                  </li>
                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>2022-12-09黄山风景区召开2023年度重点项目谋划工作会议</p>
                  </li>
                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>
                      2022-12-07黄山风景区组织全体干部员工收听收看江泽民同志追悼大会
                    </p>
                  </li>
                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>2022-11-30黄山风景区迎来今冬首场降雪</p>
                  </li>
                  <li>
                    <Announcement size="20" class="icon1"></Announcement>
                    <p>2022-11-24“梦幻黄山光影世界”海峡两岸摄影人聚焦黄山</p>
                  </li>
                </ul>
              </TabPanel>
            </Tab>
          </div>
        </div>
        <div class="imgs mt-2 mb-2">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4">
              <img src="@/assets/upload/keju.jpg" alt="" />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <img src="@/assets/upload/keju.jpg" alt="" />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <img src="@/assets/upload/keju.jpg" alt="" />
            </div>
          </div>
        </div>

        <div class="news1">
          <div class="row">
            <div class="col-12 col-sm-6">
              <Tab v-model:activeName="news1Name">
                <TabPanel class="tabs-item" label="景区公告" name="news1Tab1">
                  <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
              <Tab v-model:activeName="news2Name">
                <TabPanel class="tabs-item" label="在线视频" name="news2Tab1">
                  <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
              <Tab v-model:activeName="news3Name">
                <TabPanel class="tabs-item" label="通知公告" name="news3Tab1">
                  <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
            <div class="col-12 col-sm-6">
              <Tab v-model:activeName="news4Name">
                <TabPanel class="tabs-item" label="值班安排" name="news4Tab1">
                  <ul>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
                    <li>12</li>
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
</template>

<script setup>
import { ref, onMounted } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import NewsCarousel from "./components/news-carousel.vue"
import Tab from "@/components/UI/tab/index.vue"
import { Announcement } from "@icon-park/vue-next"
import TabPanel from "@/components/UI/tab/components/tab-pane/index.vue"

let activeName = ref("p1")
let news1Name = ref("news1Tab1")
let news2Name = ref("news2Tab1")
let news3Name = ref("news3Tab1")
let news4Name = ref("news4Tab1")
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.news {
  .row {
    :deep(.tab-content) {
    }
    :deep(.nav-link) {
      border-radius: 0;
    }
    .tabs-con {
      padding-left: 0.4em !important;
      @media (max-width: 768px) {
        padding-left: 0 !important;
      }
    }
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
    @include img("@/assets/image/usercomment.jpeg");
  }
  .container {
    :deep(.wt) {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    :deep(.wit) {
      font-size: 16px;
    }
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
