<template>
  <div class="hotel-intro">
    <div class="row">
      <div class="left col-12 col-sm-5 col-md-3">
        <a
          :class="{ 'link-active': name == 'introduce' }"
          href="javascript:;"
          @click="name = 'introduce'"
          class="link line"
          >简介
          <span :class="{ active: name == 'introduce' }" class="line"> </span>
        </a>
        <a
          :class="{ 'link-active': name == 'feature' }"
          href="javascript:;"
          @click="name = 'feature'"
          class="link line"
          >特色
          <span :class="{ active: name == 'feature' }" class="line"> </span>
        </a>
        <a
          :class="{ 'link-active': name == 'slogan' }"
          href="javascript:;"
          @click="name = 'slogan'"
          class="link line"
          >酒店设施
          <span :class="{ active: name == 'slogan' }" class="line"> </span>
        </a>
        <a
          :class="{ 'link-active': name == 'traffic' }"
          href="javascript:;"
          @click="name = 'traffic'"
          class="link line"
          >交通信息
          <span :class="{ active: name == 'traffic' }" class="line"> </span>
        </a>
      </div>
      <div class="right col-12 col-sm-7 col-md-9">
        <Transition
          class="intro-transition"
          name="intro"
          appear
          :duration="{ enter: 750, leave: 600 }"
          appear-active-class="animated fadeInUp"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
          mode="out-in"
        >
          <slot v-if="name == 'introduce'" name="introduce"> </slot>
          <slot v-else-if="name == 'feature'" name="feature"> </slot>
          <slot v-else-if="name == 'slogan'" name="slogan"></slot>
          <slot v-else-if="name == 'traffic'" name="traffic"></slot>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue"

let name = ref("introduce")
</script>

<style scoped lang="scss">
.hotel-intro {
  border-radius: 0.6em;
  border: 1px solid var(--color-border-1);
  color: var(--color-text);
  background-color: var(--color-content-background);
  .row {
    padding: 2em;
    .left {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      @media (max-width: 576px) {
        padding: 0 1em;
      }
      border-right: 1px solid #8e7037;
      .link {
        font-size: 20px;
        padding-bottom: 0.4em;
        position: relative;
        color: var(--color-text);
        transition: all 0.5s;
        @media (max-width: 576px) {
          font-size: 18px;
        }
        &.link-active {
          color: #8e7037;
        }

        .line {
          position: absolute;
          bottom: 0.2em;
          left: 0;
          height: 3px;
          width: 0px;
          background-color: #8c6c31;
          border-radius: 8px;
          transition: all 0.5s;
          &.active {
            width: 100% !important;
          }
        }
      }
    }
    .right {
      @media (max-width: 576px) {
        padding: 0 1em;
      }
    }
  }
}
</style>
