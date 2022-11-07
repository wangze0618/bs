<template>
  <div class="comment">
    <!-- 顶部图片 -->
    <div class="img"></div>

    <!-- 主体内容 -->
    <div class="container">
      <div class="title m-4" style="text-align: center">
        <h3>用户留言</h3>
        <p>您的留言会在未来几个工作日内得到回复</p>
      </div>
      <div class="comment">
        <Comment class="comment-main"></Comment>
      </div>
    </div>
  </div>
  <div class="pagenation-box m-5">
    <Pagenation :total="12" :pageSize="8" class="pagenation1"></Pagenation>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Comment from "@/components/UI/comment/index.vue"
import Pagenation from "@/components/UI/pagenation/index.vue"
</script>

<style scoped lang="scss">
.pagenation-box {
  :deep(.pagenation1) {
    justify-content: center;
  }
}
:deep(.comment-main) {
  .title {
    display: none;
  }
}
.title {
  // margin-top: 2em;
}
.img {
  background: url("@/assets/image/usercomment.jpeg") center center no-repeat;
  width: 100%;
  height: 300px;
  background-size: cover;
  // object-fit: cover;
  @media (max-width: 992px) {
    height: 260px;
  }
  @media (max-width: 768px) {
    height: 240px;
  }
  @media (max-width: 576px) {
    height: 200px;
  }
}
</style>
