<template>
  <div v-if="commentList == null">加载中！</div>
  <div v-else class="comment">
    <div class="container">
      <h4 class="title" style="text-align: center">发表评论</h4>
      <!-- 发表评论 -->
      <AddComment @getText="getContent($event)"></AddComment>

      <!-- 评论区域 -->
      <div class="list">
        <div
          v-for="(item, index) in getData().arr[currentPage - 1]"
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
              <!-- 回复 -->
              <AddReplay
                :obj="item"
                @getReplay="getReplayText($event)"
              ></AddReplay>
            </div>
            <!-- 评论回复 -->
            <template v-if="item.replay">
              <div v-for="(r, i) in item.replay" class="replay">
                <p>{{ r.user_name }}：{{ r.text }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="pagenation-box m-5">
      <Pagenation
        :total="getData().Totallength"
        :pageSize="10"
        :currentPage="currentPage"
        class="pagenation1"
        @get-current-page="getPage($event)"
      ></Pagenation>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue"
import AddComment from "./components/add-comment.vue"
import { ThumbsUp, ThumbsDown } from "@icon-park/vue-next"
import { useStore } from "vuex"
import AlertBox from "../alert"
import { commentListData } from "../../../api/user-comment/comment"
import AddReplay from "./components/add-replay.vue"
import Pagenation from "../pagenation/index.vue"
import { getTime, page1 } from "@/tools/tools"
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
})
const store = useStore()

const getData = () => {
  let listLength = ref(0)
  commentList.value = props.list
  listLength.value = commentList.value.length

  return {
    arr: page1(commentList.value, 10),
    Totallength: listLength.value,
  }
}
onMounted(() => {
  getData()
})

const getContent = (t) => {
  let PersonObj = reactive({
    id: 1,
    user_id: store.state.user.profile.id,
    user_name: store.state.user.profile.username,
    user_pic: store.state.user.profile.user_pic,
    text: t,
    pub_date: getTime(),
    like: 99,
    dislike: 0,
    replay: [],
  })
  setTimeout(() => {
    commentList.value.unshift(PersonObj)
    AlertBox("success", "发布成功！")
  }, 0)
}

let commentList = ref("")

const getReplayText = (data) => {
  console.log(data[1].user_name)
  let it = commentList.value.filter((item) => item.id == data[1].id)
  it[0].replay.push({
    user_id: 0,
    user_name: store.state.user.profile.username,
    text: data[0],
    pub_date: "2022/10/7 12:45:32",
  })
}
const currentPage = ref(1)
// watch(
//   () => currentPage.value,
//   () => {
//     // console.log(commentList.value)
//     // console.log(currentPage.value)
//   },
//   {
//     immediate: true,
//   }
// )

const getPage = (page) => {
  currentPage.value = page
}
</script>

<style scoped lang="scss">
.pagenation-box {
  :deep(.pagenation1) {
    justify-content: center;
  }
}
.replay {
  background-color: rgb(167, 167, 167);
  border-radius: 6px;
  p {
    margin-bottom: 2px;
    padding: 6px;
    color: rgb(255, 255, 255);
  }
}
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
      width: 100%;
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
          margin: 0 8px;
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
