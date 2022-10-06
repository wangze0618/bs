<template>
  <div class="comment">
    <div class="container">
      <h4 style="text-align: center">发表评论</h4>
      <!-- 发表评论 -->
      <AddComment></AddComment>

      <!-- 评论区域 -->
      <div class="list">
        <div v-for="i in 6" class="list-item">
          <!-- 评论头像 -->
          <img class="list-avatar" src="@/assets/avatar.jpg" alt="" />
          <!-- 评论内容和网名 -->
          <div class="main-content">
            <span class="name">东北大喵</span>
            <p class="content">我是第{{ i }}个</p>
            <!-- 时间和点赞 -->
            <div class="detail">
              <span>2022/10/6 18:29:59</span>
              <!-- 点赞 -->
              <div class="like">
                <ThumbsUp size="18" class="like-icon"></ThumbsUp>
                <span class="like-number">7509</span>
              </div>
              <!-- 不喜欢 -->
              <div class="dislike">
                <ThumbsDown size="18" class="dislike-icon"></ThumbsDown>
                <span class="dislike-number">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import AddComment from "./components/add-comment.vue"
import { ThumbsUp, ThumbsDown } from "@icon-park/vue-next"
</script>

<style scoped lang="scss">
.list {
  margin-top: 30px;
  .list-item {
    margin: 20px 0;
    display: flex;
    .list-avatar {
      margin-top: 4px;
      border-radius: 25px;
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }
    .main-content {
      .name {
        color: #777;
      }
      .content {
        margin: 6px 0;
      }
      .detail {
        user-select: none;
        color: #777;
        display: flex;
        .like-number,
        .dislike-number {
          margin-left: 4px;
        }
        .like {
          display: flex;
          align-items: center;
          margin: 0 14px;
        }

        .like,
        .dislike {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
