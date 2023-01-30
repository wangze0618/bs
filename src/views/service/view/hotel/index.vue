<template>
  <div v-if="hotelList && Listlength" class="service-hotel">
    <div class="img"></div>
    <div class="container">
      <div class="context">
        <!-- 面包屑组件 -->
        <WBread class="bread mt-3 mb-3" sp=">">
          <WBreadItem class="bread-item" to="/"><Home></Home>首页</WBreadItem>
          <WBreadItem class="bread-item">旅游服务</WBreadItem>
          <WBreadItem class="bread-item">酒店住宿</WBreadItem>
        </WBread>

        <!-- 标题 -->
        <h3 class="title mt-3 mb-3">酒店预订</h3>

        <!-- 展示列表 -->
        <div class="hotel-list">
          <div
            v-for="(item, index) in hotelList[currentPage - 1]"
            :key="index"
            class="item shadow mb-3"
          >
            <div class="row">
              <div class="left col-12 col-sm-4">
                <img class="hotel-img" :src="item.img" alt="" />
              </div>
              <div class="right col-12 col-sm-8">
                <div class="main">
                  <div class="hotel-title">
                    <h3 class="hotel-left-title">{{ item.title }}</h3>
                    <span class="price"> ￥{{ item.price }} </span>
                  </div>
                  <div class="hotel-star">
                    <!-- star -->
                    <Star :star="item.star"></Star>
                  </div>

                  <!-- desc -->
                  <div class="hotel-desc">
                    <p class="hotel-desc-p">{{ item.desc }}</p>
                  </div>

                  <!-- tel -->
                  <div class="tel">
                    <p class="hotel-tel">电话：{{ item.tel }}</p>
                  </div>

                  <!-- locate -->
                  <div class="locate">
                    <p class="hotel-locate">地址：{{ item.locate }}</p>
                  </div>
                </div>
                <!-- button -->
                <div class="hotel-btn mt-3">
                  <button @click="goToHotel(item.id)" class="btn btn-primary">
                    立即查看
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- pagenation -->
        <Pagenation
          class="mt-4 mb-4"
          style="justify-content: center"
          :total="Listlength"
          :currentPage="currentPage"
          :pageSize="5"
          @getCurrentPage="getCurrentPage($event)"
        ></Pagenation>
      </div>
    </div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import { Home } from "@icon-park/vue-next"
import { getInfo } from "@/api/hotel/index.js"
import Star from "@/components/UI/star/index.vue"
import { useRouter } from "vue-router"
import { page1 } from "@/tools/tools"
import Pagenation from "@/components/UI/pagenation/index.vue"
import Loading from "@/components/UI/loading/index.vue"
import { useStore } from "vuex"

const store = useStore()
const hotelList = ref([])
const currentPage = ref(1)
const Listlength = ref(0)
const router = useRouter()
const getCurrentPage = (data) => {
  currentPage.value = data
}
const goToHotel = (id) => {
  router.push({
    name: "ServiceHotelDetail",
    params: {
      id,
    },
  })
}
onMounted(async () => {
  let { data } = await getInfo()
  Listlength.value = data.data.length
  hotelList.value = page1(data.data, 5)
  // 存储数据 并持久化
  store.commit("hotel/setList", data.data)
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.service-hotel {
  @include setBread;
  transition: all 0.5s ease;
  color: var(--color-text);
  background-color: var(--color-background);
  .btn {
    background-color: var(--c-brown);
    border: 1px solid var(--c-brown);
  }
  .container {
    padding: 0;
  }
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
  .context {
    .hotel-btn {
      padding: 0 0.6em;
      text-align: right;
    }
    .tel,
    .locate {
      padding: 0 0.6em;
      p {
        margin-bottom: 0;
      }
    }
    .hotel-list {
      @media (max-width: 576px) {
        padding: 0.6em;
      }
      .item {
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--color-border-1);
        background-color: var(--color-content-background);
        transition: all 0.3s ease;

        > div {
          padding: 0;
        }
        .left {
          overflow: hidden;
          padding: 0;
          .hotel-img {
            width: 100%;
            height: 100%;
            max-height: 320px;
            transition: all 0.5s;
            &:hover {
              transform: scale(1.06);
            }
          }
        }
        .right {
          padding: 1em;
          @media (max-width: 576px) {
            padding: 0.6em 0.6em;
          }
          .main {
            .hotel-star {
              padding: 0 0.6em;
            }
            .hotel-desc {
              padding: 0 0.6em;
              margin-bottom: 1em;
              p {
                margin-top: 0.2em;
                margin-bottom: 0;
              }
            }
            .hotel-title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 0.6em;
              .hotel-left-title {
                margin-bottom: 0;
                font-size: 22px;
                @media (max-width: 576px) {
                  font-size: 18px !important;
                }
              }
              .price {
                @media (max-width: 576px) {
                  font-size: 18px !important;
                }
                color: red;
                font-size: 22px;
                font-weight: bolder;
              }
            }
          }
        }
      }
    }
    .title {
      text-align: center;
      margin-bottom: 0;
    }
  }
}
</style>
