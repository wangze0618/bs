<template>
  <div class="img"></div>
  <!-- 图片 -->
  <div class="handmade container">
    <!-- 面包屑组件 -->
    <WBread class="bread" sp=">">
      <WBreadItem to="/" class="bread-item">首页</WBreadItem>
      <WBreadItem to="/special" class="bread-item">特色产品</WBreadItem>
      <WBreadItem class="bread-item">特色手工</WBreadItem>
    </WBread>
    <!-- 标题 -->
    <h2 class="title m-4">特色手工</h2>
    <!-- 主体部分 -->
    <div class="row">
      <div
        v-for="(item, index) in list[currentPage - 1]"
        class="handmade-card col-lg-4 col-sm-6"
      >
        <div class="ct1">
          <!-- 手工略缩图 -->
          <img
            v-viewer="{
              navbar: false,
            }"
            :src="item.img_preview"
            alt=""
          />
          <!-- 标题部分 -->
          <div class="ct1-body">
            <div class="title-info">
              <span>{{ item.name }}</span>
              <span>￥{{ item.price }}</span>
            </div>
            <!-- 评分组件 -->
            <div class="score">
              <Star :star="item.star"></Star>
            </div>
            <div class="description">
              <p>{{ item.description }}</p>
              <p>地址：尧坝古镇旅游景区</p>
            </div>
            <div class="btn-info">
              <button
                @click="goToDetail(item.id)"
                type="button"
                class="btn btn-primary"
              >
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in list[currentPage - 1]"></div>

    <!-- 分页组件 -->
    <Pagenation
      class="m-5 justify-content-center"
      @getCurrentPage="changePage($event)"
      :total="length"
      :pageSize="pageSize"
      :currentPage="currentPage"
    ></Pagenation>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useStore } from "vuex"
import { page1 } from "@/tools/tools"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"
import Pagenation from "@/components/UI/pagenation/index.vue"
import Star from "@/components/UI/star/index.vue"
import { useRouter } from "vue-router"

const router = useRouter()
const store = useStore()
let list = store.getters["handmade/handmadeList"]()
let length = list.length
const currentPage = ref(1)
const pageSize = 4

// 对数组进行分页处理
list = page1(list, pageSize)

// 获取当前分页
const changePage = (data) => {
  console.log(data)
  currentPage.value = data
}

const goToDetail = (id) => {
  router.push({
    name: "SpecialHandmadeDetail",
    params: {
      id,
    },
  })
  console.log(id)
}

onMounted(() => {
  // 利用vuex 获取手工数据
  store.dispatch("handmade/getHandmade")
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";

.img {
  @include img("@/assets/image/usercomment.jpeg");
}
.container {
  padding-top: 10px;
  .handmade-card {
    padding: 6px;
    height: 100%;

    .ct1 {
      @media (max-width: 576px) {
        margin: 0 auto;
        max-width: 300px;
      }
      height: 100%;
      border: 1px solid rgba(162, 162, 162, 0.2);
      box-shadow: 0px 9px 19px -9px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 100%;
        min-height: 320px;
        transition: all 0.4s;
        @media (max-width: 576px) {
          min-height: 200px;
        }
        &:hover {
          transform: scale(1.04);
        }
      }
      .ct1-body {
        padding: 16px 10px 16px 10px;
        .title-info {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 22px;
            font-weight: 700;
          }
        }
        .description {
          p {
            margin-bottom: 0.5rem;
          }
        }
        .btn-info {
          text-align: center;
          button {
            border-color: #873742;
            background-color: #873742;
          }
        }
      }
    }
  }
  .title {
    text-align: center;
  }
  @include setBread;
}
.pagenation {
  text-align: center;
}
</style>
