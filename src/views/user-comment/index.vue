<template>
  <div class="user-comment">
    <!-- 顶部图片 -->
    <div class="img"></div>

    <!-- 主体内容 -->
    <div class="container">
      <div class="title m-4" style="text-align: center">
        <h3>用户留言</h3>
        <p>您的留言会在未来几个工作日内得到回复</p>
      </div>
      <div class="comment-c mb-5">
        <Comment :list="commentListData" class="comment-main"></Comment>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { commentListData } from "@/api/user-comment/comment.js"
import Comment from "@/components/UI/comment/index.vue"
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.comment-c {
  padding: 2em;
  border-radius: 0.6em;
  border: 1px solid var(--color-border-1);
  background-color: var(--color-content-background);
}
.title {
  color: var(--color-text) !important;
}
:deep(.comment-main) {
  .title {
    display: none;
  }
}

.img {
  @include img("@/assets/image/usercomment.jpeg");
}
</style>
