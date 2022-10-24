<template>
  <div class="comment">
    <div class="container">
      <h4 style="text-align: center">发表评论</h4>
      <!-- 发表评论 -->
      <AddComment @getText="getContent($event)"></AddComment>

      <!-- 评论区域 -->
      <div class="list">
        <div
          v-for="(item, index) in commentList"
          :key="index"
          class="list-item"
        >
          <!-- 评论头像 -->
          <img class="list-avatar" :src="item.user_pic" alt="" />
          <!-- 评论内容和网名 -->
          <div class="main-content">
            <span class="name">{{ item.user_name }}</span>
            <p class="content">{{ item.text }}</p>
            <!-- 时间和点赞 -->
            <div class="detail">
              <span>{{ item.pub_date }}</span>
              <!-- 点赞 -->
              <div class="like">
                <ThumbsUp size="18" class="like-icon"></ThumbsUp>
                <span class="like-number">{{ item.like }}</span>
              </div>
              <!-- 不喜欢 -->
              <div class="dislike">
                <ThumbsDown size="18" class="dislike-icon"></ThumbsDown>
                <span class="dislike-number">{{ item.dislike }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import AddComment from "./components/add-comment.vue"
import { ThumbsUp, ThumbsDown } from "@icon-park/vue-next"
import { useStore } from "vuex"
import AlertBox from "../alert"
const store = useStore()
const getContent = (t) => {
  let PersonObj = reactive({
    user_id: store.state.user.profile.id,
    user_name: store.state.user.profile.username,
    user_pic: store.state.user.profile.user_pic,
    text: t,
    pub_date: new Date().toLocaleString(),
    like: 99,
    dislike: 0,
  })
  setTimeout(() => {
    commentList.value.unshift(PersonObj)
    AlertBox("success", "发布成功！")
  }, 500)
}
const commentList = ref([
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "很好哈哈哈",
    pub_date: "2022/10/6 18:29:59",
    like: 518,
    dislike: 0,
  },
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "值得一去",
    pub_date: "2022/10/6 18:29:59",
    like: 509,
    dislike: 0,
  },
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "想去看看",
    pub_date: "2022/10/6 18:29:59",
    like: 7509,
    dislike: 0,
  },
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "想去看看",
    pub_date: "2022/10/6 18:29:59",
    like: 34,
    dislike: 0,
  },
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "1111111111",
    pub_date: "2022/10/6 18:29:59",
    like: 12,
    dislike: 0,
  },
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "什么时候能出去",
    pub_date: "2022/10/6 18:29:59",
    like: 667,
    dislike: 0,
  },
  {
    user_id: 9,
    user_name: "东北大喵",
    user_pic: require("@/assets/avatar.jpg"),
    text: "沙发",
    pub_date: "2022/10/6 18:29:59",
    like: 3,
    dislike: 0,
  },
])
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
