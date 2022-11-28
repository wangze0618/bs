<template>
  <div class="pay-way">
    <Card class="col-12" header="请选择支付方式">
      <template #body>
        <h6 class="way-title">支付平台</h6>
        <div class="way row">
          <div
            @click="addActive(index)"
            class="box-1 col-4 col-md-3 col-lg-3"
            v-for="(item, index) in list"
          >
            <div class="box1" :class="{ active: currIndex === index }">
              {{ item.name }}
            </div>
          </div>
        </div>
      </template>
    </Card>
    <Dialog title="确认支付" :show="show" @cancel="cancel" @confirm="confirm">
      <h5 style="text-align: center; margin: 20px">确认支付</h5>
    </Dialog>
    <Dialog
      title="支付二维码"
      :show="show2"
      @cancel="cancel2"
      @confirm="confirm2"
    >
      <div class="qrcode">
        <img src="@/assets/image/qrcode.png" alt="" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { provide, ref } from "vue"
import Card from "@/components/UI/card/index.vue"
import confirmBox from "@/components/UI/confirm"
import Confirm from "@/components/UI/confirm/index.vue"
import Dialog from "@/components/UI/dialog/index.vue"
const list = ref([
  {
    id: 0,
    name: "微信支付",
  },
  {
    id: 1,
    name: "支付宝支付",
  },
  {
    id: 2,
    name: "工商银行",
  },
  {
    id: 3,
    name: "建设银行",
  },
  {
    id: 4,
    name: "农业银行",
  },
  {
    id: 5,
    name: "交通银行",
  },
])

let show = ref(false)
let show2 = ref(false)
let currIndex = ref("")
const addActive = (data) => {
  show.value = true
  currIndex.value = data
}

const cancel = () => {
  show.value = false
}
const confirm = () => {
  show.value = false
  setTimeout(() => {
    show2.value = true
    provide("active", 3)
  }, 500)
}
const confirm2 = () => {
  show2.value = false
}
const cancel2 = () => {
  show2.value = false
}
</script>

<style scoped lang="scss">
.pay-way {
  margin: 0 auto;
  .way {
    margin: 0 auto;
    .box-1 {
      height: 50px;
      line-height: 50px;
      text-align: center;
      margin-bottom: 20px;
      height: 100%;
      padding: 0 4px;
      .box1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        border-radius: 6px;
        border: 1px solid #bcbcbc;
        transition: all 0.5s;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        &.active {
          border: 1px solid #e75100 !important;
          color: #e75100;
        }
      }
    }
  }
}
.qrcode {
  text-align: center;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: none;
  }
}
</style>
