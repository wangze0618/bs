<template>
  <div class="spot-carousel-item shadow">
    <div class="spot">
      <h3><slot name="title">title</slot></h3>
      <div class="context rows">
        <div class="img col-12 col-md-4">
          <slot name="img">
            <img class="imgs" src="@/assets/upload/handmade2.jpeg" alt="" />
          </slot>
        </div>
        <p class="col-12 col-md-8">
          <slot name="content">
            <slot />
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
</script>

<style scoped lang="scss">
.spot {
  border-radius: 8px;
  padding: 20px;
  // box-shadow: 0 4px 11px 1px #dbdbdb;
  h3 {
    font-size: 20px;
  }
  .context {
    display: flex;
    flex-wrap: wrap;
    p {
      text-indent: 2em;
      font-size: 18px;
      padding: 0.4em;
      margin-bottom: 0;
      @media (min-width: 768px) {
        padding-top: 0;
      }
    }
    .img {
      :slotted(.pic) {
        border-radius: 8px;
        // max-width: 300px;
        width: 100%;
        height: 100%;
      }
      .imgs {
        border-radius: 8px;
        // max-width: 300px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
