<template>
  <div v-if="list.length" class="route-recommend">
    <div class="img"></div>
    <div class="container">
      <wBread class="bread mt-3 mb-3" sp=">">
        <wBreadItem class="bread-item" to="/">首页</wBreadItem>
        <wBreadItem class="bread-item">旅游服务</wBreadItem>
        <wBreadItem class="bread-item">行程推荐</wBreadItem>
      </wBread>

      <!-- 主要内容 -->
      <div class="context">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-4"
            v-for="(item, index) in list"
            :key="item.id"
          >
            <div class="list-item mb-3 shadow">
              <!-- 轮播区域 -->
              <ItemCarousel class="carousel" :list="item.imgs"></ItemCarousel>
              <!-- 下主体 -->
              <div class="bottom-box">
                <div v-html="item.title" class="title mt-3 mb-3"></div>

                <div class="sub-info mt-2">
                  <div class="left">
                    <img class="avatar-img" :src="item.avatar" alt="" />
                    <div class="info">
                      <span class="username">{{ item.username }}</span>
                      <span class="date">{{ item.date }}</span>
                    </div>
                  </div>
                  <!-- 红心 -->
                  <button
                    type="button"
                    @click="goTo(item.url)"
                    class="btn btn-danger"
                  >
                    查看详情
                  </button>
                  <!-- <Like
                    v-model:like="item.isLike"
                    :count="item.like_count"
                    @onLike="getCount(item, $event)"
                  ></Like> -->
                </div>
              </div>
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
import wBread from "@/components/UI/bread/w-bread.vue"
import wBreadItem from "@/components/UI/bread/w-bread-item.vue"
import ItemCarousel from "@/views/service/components/play-guide/carousel/index.vue"
import Like from "@/components/UI/like/index.vue"
import { getPlayGuide, postPlayGuideLike } from "@/api/service"
import Loading from "@/components/UI/loading/index.vue"

const getCount = async (i, d) => {
  if ((await postPlayGuideLike(d)).status == 200 && i.like_count < d) {
    i.like_count = d
  } else {
    i.like_count = d
  }
}
const goTo = (i) => {
  window.open(i)
}
let list = ref([])
onMounted(async () => {
  const { data } = await getPlayGuide()
  list.value = data.data
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.route-recommend {
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .container {
    @include setBread;
    .context {
      color: var(--color-text);
      .list-item {
        border-radius: 0.6em;
        background-color: var(--color-content-background);
        border: 1px solid var(--color-border-1);
        .bottom-box {
          .sub-info {
            display: flex;
            align-items: center;

            .left {
              display: flex;
              margin-right: auto;
              align-items: center;
              .info {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                line-height: 19px;
                margin-left: 6px;
              }
              .avatar-img {
                width: 38px;
                height: 38px;
                border-radius: 50%;
              }
            }
          }
          .title {
            font-size: 18px;
            margin-bottom: 0;
            @include ellipsis(8);
            @media (width<576px) {
              font-size: 16px;
            }
          }
        }
        padding: 0.6em;
        .carousel {
          :deep(.swiper) {
            height: 240px;
          }
        }
      }
    }
  }
}
</style>
