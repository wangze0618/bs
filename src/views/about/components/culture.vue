<template>
  <h3>尧坝文化</h3>
  <div class="yaoba-culture shadow">
    <div class="btns">
      <a @click="name = Yizhan" class="links" href="javascript:;"
        >驿站文化
        <span class="bar" :class="name == Yizhan ? 'show' : ''"></span>
      </a>
      <a @click="name = Keju" class="links" href="javascript:;"
        >科举文化
        <span class="bar" :class="name == Keju ? 'show' : ''"></span>
      </a>
      <a @click="name = Zongjiao" class="links" href="javascript:;"
        >宗教文化
        <span class="bar" :class="name == Zongjiao ? 'show' : ''"></span>
      </a>
      <a @click="name = Minsu" class="links" href="javascript:;"
        >民俗文化
        <span class="bar" :class="name == Minsu ? 'show' : ''"></span>
      </a>
      <a @click="name = Hongse" class="links" href="javascript:;"
        >红色文化
        <span class="bar" :class="name == Hongse ? 'show' : ''"></span>
      </a>
      <a @click="name = Yingshi" class="links" href="javascript:;"
        >影视文化
        <span class="bar" :class="name == Yingshi ? 'show' : ''"></span>
      </a>
    </div>

    <div class="context">
      <Transition name="fade" mode="out-in">
        <component class="comp" :is="name"></component>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue"
import Yizhan from "./culture/yizhan.vue"
import Keju from "./culture/keju.vue"
import Hongse from "./culture/hongse"
import Minsu from "./culture/minsu.vue"
import Zongjiao from "./culture/zongjiao.vue"
import Yingshi from "./culture/yingshi.vue"
let name = shallowRef(Yizhan)
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
}
.show {
  width: 100% !important;
}
h3 {
  text-align: center;
  margin: 30px 0;
}
.yaoba-culture {
  display: flex;
  border: 1px solid #ae8352;
  border-radius: 8px;
  .btns {
    width: 180px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ae8352;
    @media (max-width: 576px) {
      width: 120px;
    }

    .links {
      position: relative;
      text-align: center;
      height: 50px;
      line-height: 50px;
      color: #926f46;
      &:hover .bar {
        width: 100%;
      }
      .bar {
        // width: 0%;
        position: absolute;
        height: 2px;
        width: 0%;
        background-color: #ae8352;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.4s ease-out;
      }
    }
  }
  .context {
    flex: 1;
    height: 100%;
    width: auto;
    display: block;
    padding: 0.6em;
    .comp {
      height: 100%;
    }
  }
}
</style>
