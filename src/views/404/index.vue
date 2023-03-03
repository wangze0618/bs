<template>
  <div class="page-404">
    <div class="wrap">
      <div class="box"></div>
      <h1>404 Not Found</h1>
    </div>
    <div class="btn-g">
      <button @click="goHome" class="btn btn-warning">返回首页</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

const goHome = () => {
  router.replace("/")
}
</script>
<style scoped lang="scss">
@keyframes shan {
  to {
    background-position-x: -20%;
  }
}
.page-404 {
  user-select: none;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  .btn-g {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 8em;
    .btn {
      border-bottom: 6px solid #7f6517;
      box-shadow: none;
      transition: all 0.3s;
      &:hover {
        background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%
          )
          #ffc107;
        background-size: 200% 100%;
        background-position-x: 180%;
        animation: shan 2.5s infinite ease-in-out;
      }
      &:active {
        border-bottom: 3px solid #7f6517;
        transform: translateY(3px);
      }
    }
  }
  .wrap {
    position: relative;
    text-align: center;
    .box {
      background-color: rgb(242, 166, 60);
      text-align: center;
      height: 180px;
      width: 180px;
      transform: rotate(45deg);
      border: 6px dashed #3a3a3a;
      transition: all 1s ease;
      @media (prefers-color-scheme: dark) {
        box-shadow: 0px 0px 120px 10px rgba(242, 166, 60, 0.892);
        &:hover {
          transform: rotate(45deg) scale(1.01);
          box-shadow: 0px 0px 200px 10px rgb(242 166 60);
        }
      }
    }
    h1 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -55%);
      color: var(--color-text);
      font-size: 38px;
      font-family: "Courier New", Courier, monospace;
      font-weight: 800;
      pointer-events: none;
    }
  }
}
</style>
