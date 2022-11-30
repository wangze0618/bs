<template>
  <div class="address">
    <h4>请选择收货地址</h4>

    <!-- 地址主要区域 -->
    <div class="address-body row">
      <div class="no-goods" v-if="addrLsit == 0">
        <img src="@/assets/svg/nodata.svg" alt="" />
        <h2>您还没有添加地址，快去添加吧~</h2>
      </div>
      <div
        v-else
        class="address-item mb-4 col-12 col-sm-6 col-md-4 col-lg-4"
        v-for="(item, index) in addrLsit"
        :key="index"
      >
        <div
          @click="clickOne(index)"
          class="box shadow"
          :class="{ active: currAddress == index }"
        >
          <CloseOne
            @click="deleteOne(item)"
            v-show="deleteIcon"
            size="22"
            class="close-icon"
          ></CloseOne>
          <p class="address-item-title">
            {{ item.fullLocation }}（{{ item.receiver }}收）
          </p>
          <div class="item-info">
            <p>{{ item.DetailLocation }}</p>
            <p>{{ item.phone }}</p>
          </div>
        </div>
      </div>
    </div>
    <Dialog
      title="新增地址"
      @cancel="show = false"
      @confirm="confirm()"
      :show="show"
    >
      <div class="form">
        <div class="addresser col-12 mb-3">
          <label class="form-label">收货人</label>
          <input v-model="addressForm.receiver" class="form-control" />
        </div>
        <div class="addresser mb-3 col-12">
          <label class="form-label">手机号</label>
          <input
            maxlength="11"
            v-model="addressForm.phone"
            class="form-control"
          />
        </div>
        <div class="addresser mb-3 col-12">
          <label class="form-label">地区</label>
          <Address @getLocation="getFull($event)"></Address>
        </div>
        <div class="addresser mb-3 col-12">
          <label class="form-label">详细地址</label>
          <input v-model="addressForm.DetailLocation" class="form-control" />
        </div>
        <div class="addresser mb-3 col-12">
          <label class="form-label">邮政编码</label>
          <input
            maxlength="6"
            v-model="addressForm.postCode"
            class="form-control"
          />
        </div>
        <div class="addresser mb-3 col-12">
          <label class="form-label">地区标签</label>
          <input v-model="addressForm.tag" class="form-control" />
        </div>
        <div class="addresser mb-3 col-12">
          <label class="form-label">设为默认 </label>
          <Checkbox v-model="addressForm.isDefault"></Checkbox>
        </div>
      </div>
    </Dialog>

    <!-- 按钮区域 -->
    <div class="btns mt-3 mb-3">
      <button @click="deleteAddress()" type="button" class="btn btn-danger">
        {{ deleteIcon ? "取消删除" : "删除地址" }}
      </button>
      <button @click="addNewAddress()" type="button" class="btn btn-primary">
        新增地址
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue"
import Confirm from "@/components/UI/confirm/index.vue"
import Dialog from "@/components/UI/dialog/index.vue"
import Address from "@/components/UI/address/index.vue"
import Checkbox from "@/components/UI/checkbox/index.vue"
import { CloseOne } from "@icon-park/vue-next"
import { useStore } from "vuex"
let currAddress = ref(0)
let show = ref(false)
const store = useStore()
let addrLsit = ref([])
let deleteIcon = ref(false)
onMounted(() => {
  addrLsit.value = store.getters["address/addressList"]()
})

let addressForm = reactive({
  receiver: "",
  phone: "",
  fullLocation: "",
  DetailLocation: "",
  postCode: "",
  tag: "",
  isDefault: false,
})
const getFull = (data) => {
  addressForm.fullLocation = data.fullLocation
}

const confirm = (data) => {
  store.commit("address/addAddress", addressForm)
  show.value = false
}

const addNewAddress = () => {
  for (const key in addressForm) {
    addressForm[key] = ""
  }
  addressForm.isDefault = false
  show.value = true
}

const deleteAddress = () => {
  deleteIcon.value = !deleteIcon.value
}
const clickOne = (index) => {
  if (!deleteIcon.value) {
    currAddress.value = index
  }
}
const deleteOne = (item) => {
  console.log(item.id)
  store.commit("address/delAddress", item.id)
}
</script>

<style scoped lang="scss">
.address {
  width: 100%;
  .btns {
    display: flex;
    justify-content: space-evenly;
  }
  .address-body {
    // display: flex;
    .no-goods {
      text-align: center;
      height: 240px;
      margin-bottom: 30px;
      position: relative;
      img {
        width: 100%;
        height: 240px;
      }
      h2 {
        position: absolute;
        font-size: calc(0.2vw + 16px);
        width: 100%;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
      }
    }
    .address-item {
      .box {
        cursor: pointer;
        overflow: hidden;
        transition: all 0.5s;
        border: 1px solid #cccccc;
        border-radius: 6px;
        position: relative;
        .close-icon {
          position: absolute;
          right: 2px;
          top: 0;
        }
        &.active {
          border: 1px solid #ffad72;
          background-image: linear-gradient(
            180deg,
            #f3f5d0,
            #f9957e
          ) !important;
          z-index: 99;
        }
      }
      .address-item-title {
        padding: 10px;
        margin-bottom: 0;
        background-color: #eaeaea;
      }
      .item-info {
        height: 100px;
        padding: 10px;
        p {
          margin-bottom: 0;
        }
      }
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  .addresser {
    display: flex;
    align-items: center;
    flex-basis: 50%;
    label {
      text-align: right;
      padding-right: 10px;
      width: 90px;
      margin-bottom: 0;
      color: #999;
    }
    input {
      // width: fit-content;
    }
  }
}
</style>
