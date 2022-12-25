<template>
  <nav>
    <div class="nav nav-tabs flex-column flex-sm-row">
      <button
        v-for="(item, index) in propsList"
        class="nav-link"
        :class="{ active: item.name == activeName }"
        type="button"
        role="tab"
        @click="changeActive(item.name)"
      >
        {{ item.label }}
      </button>
    </div>
  </nav>
  <div class="tab-content">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, ref, useSlots, watch } from "vue"
const props = defineProps({
  activeName: {
    type: String,
  },
})
const emit = defineEmits(["update:activeName", "getActive"])
const slot = useSlots().default()
let propsList = []
let activeName = ref("")

slot.forEach((item, index) => {
  propsList.push(item.props)
})

watch(
  () => props.activeName,
  (newVal) => {
    activeName.value = newVal
  },
  {
    immediate: true,
  }
)

const changeActive = (name) => {
  activeName.value = name
  emit("update:activeName", activeName.value)
  emit("getActive", activeName.value)
}
provide("currActiveName", activeName)
</script>

<style scoped lang="scss">
.nav-link {
  color: #000;
  border: 1px solid #e4e7ed;
  &.active {
    border: 1px solid #931e1e !important;
    color: #931e1e;
    z-index: 99;
  }
  @media (max-width: 576px) {
    border-radius: 0;
    &:hover {
    }
    &:first-child {
      border-radius: 6px 6px 0 0;
    }
    &:last-child {
      border-radius: 0 0 6px 6px;
    }
  }
}
.tab-content {
  border: 1px solid #e4e7ed;
  border-top: transparent;
  border-radius: 0 0 6px 6px;
}
.active {
}
</style>
