<template>
  <div
    class="tab-pane fade"
    role="tabpanel"
    :class="{
      show: currActiveName == props.name,
      active: currActiveName == props.name,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, computed, ref, toRef } from "vue"
const props = defineProps({
  label: {
    type: String,
  },
  name: {
    type: [String, Number],
  },
})
let currActiveName = inject("currActiveName")
</script>

<style scoped lang="scss"></style>
