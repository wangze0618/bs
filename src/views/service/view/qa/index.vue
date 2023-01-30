<template>
  <div
    class="qa"
    style="overflow: hidden"
    v-if="viewList.length && categoryList.length"
  >
    <div class="img"></div>

    <div class="container">
      <WBread class="bread mt-3 mb-3" sp=">">
        <WBreadItem class="bread-item" to="/">首页</WBreadItem>
        <WBreadItem class="bread-item">旅游服务</WBreadItem>
        <WBreadItem class="bread-item">常见问答</WBreadItem>
      </WBread>

      <div class="row">
        <div class="left col-12 col-lg-4">
          <div class="btns">
            <!-- 分类标签 -->
            <Collapse class="btns-collapse">
              <template #title>问题分类标签</template>
              <template #content>
                <button
                  type="button"
                  v-for="(item, index) in categoryList"
                  class="btn btn-primary"
                  :class="{
                    success: defaultCategory == item,
                  }"
                  @click="getCate(item)"
                >
                  {{ item }}
                </button>
              </template>
            </Collapse>

            <!-- 联系 -->
            <Collapse class="mt-3 mb-3">
              <template #title>还有其他疑问？</template>
              <template #content>
                <p class="other-title" style="margin-bottom: 0">
                  如果您仍有其他一些关于景区的疑问，可以在本网站的留言页留问，管理员会在三个工作日内给予回复，或者您也可以通过景区官方邮箱<br />2867273828@qq.com、wangze0618@hotmail.com<br />给我们发送邮件，我们会尽快给您回复！
                </p>
              </template>
            </Collapse>
          </div>
        </div>
        <div class="box right col-12 col-lg-8">
          <!-- 问题列表 -->
          <template v-for="(item, index) in viewList" :key="item.id">
            <Collapse class="mb-3">
              <template #title>Q{{ index + 1 }}、{{ item.title }}</template>
              <template #content>
                {{ item.answer }}
              </template>
            </Collapse>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else></Loading>
</template>

<script setup>
import { getQa } from "@/api/service"
import { onMounted, computed, ref, shallowRef, watch } from "vue"
import Collapse from "../../components/collapse/index.vue"
import Loading from "@/components/UI/loading/index.vue"
import WBread from "@/components/UI/bread/w-bread.vue"
import WBreadItem from "@/components/UI/bread/w-bread-item.vue"

let list = ref([])
let categoryList = shallowRef([])
let defaultCategory = ref("全部")
let viewList = shallowRef([])

const getCate = (data) => {
  defaultCategory.value = data
}

// 获得分类数组
const getCategory = async (t) => {
  let newArr = []
  t.forEach((item) => {
    newArr.push(item["category"])
  })
  newArr.unshift("全部")
  return [...new Set(newArr)]
}

onMounted(async () => {
  let { data } = await getQa()
  list.value = data.data
  categoryList.value = await getCategory(data.data)

  // 监测当前分类的变化，并根据变化来计算出来渲染的数组
  watch(
    () => defaultCategory.value,
    (newVal) => {
      if (newVal == "全部") {
        viewList.value = data.data
      } else {
        viewList.value = data.data.filter((item) => item.category == newVal)
      }
    },
    {
      immediate: true,
      deep: true,
    }
  )
})
</script>

<style scoped lang="scss">
@import "@/assets/style/mixin.scss";
.qa {
  .container {
    @include setBread;
  }
  .img {
    @include img("@/assets/image/usercomment.jpeg");
  }
}
.left {
  .btns {
    :deep(.btns-collapse) {
      p {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        button {
          width: 30%;
          margin-right: 0.2em;
          margin-bottom: 0.4em;
        }
      }
    }
  }
  .box {
    transition: all 0.5s;
    height: 100%;
  }
}
.success {
  box-shadow: none;
  background-color: var(--c-goldenrot);
  border: 1px solid var(--c-goldenrot);
}
</style>
