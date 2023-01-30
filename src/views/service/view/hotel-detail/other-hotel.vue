<template>
  <div v-if="list" class="other-hotel">
    <h4>其他酒店</h4>
    <div class="row">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-6 col-md-4 col-lg-3 item"
      >
        <div class="item-content">
          <img class="img" :src="item.img" alt="" />
          <div class="info">
            <h4 class="title">{{ item.title }}</h4>
            <p class="location">地址：{{ item.location }}</p>
            <p class="tel">电话：{{ item.tel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getOtherHotel } from "@/api/hotel/index.js"

let list = ref(null)
onMounted(async () => {
  const { data } = await getOtherHotel()
  list.value = data.data
})
</script>

<style scoped lang="scss">
.other-hotel {
  position: relative;
  z-index: 0;
  padding-left: 0;
  user-select: none;

  @media (max-width: 576px) {
    padding: 0 0.4em;
  }
  h4 {
    padding-left: 0;
  }
  .row {
    .item {
      padding: 6px;
      .item-content {
        border-radius: 0.6em;
        overflow: hidden;
        border: 1px solid var(--color-border-1);
        box-shadow: 0px 2px 8px 1px var(--color-border-1);
        transition: all 0.5s;
        cursor: pointer;
        background-color: var(--color-content-background);
        &:hover {
          box-shadow: 0px 4px 10px 4px var(--color-border-2);
        }
        .info {
          padding: 0.8em;
          h4 {
            font-size: 19px;
          }
          p {
            margin-bottom: 0;
          }
        }
        .img {
          width: 100%;
          height: 200px;
          -webkit-user-drag: none;
          @media (max-width: 576px) {
            height: 180px;
          }
        }
      }
    }
  }
}
</style>
