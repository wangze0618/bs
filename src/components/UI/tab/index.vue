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
    <div class="tab-content">
      <slot></slot>
    </div>
  </nav>
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
nav {
  background-color: var(--color-content-background);
  overflow: hidden;
  border: 1px solid var(--color-border-1);
  border-radius: 0.4em;
  padding: 0.3em;
}
.nav-tabs {
  border-bottom: 1px solid var(--color-border-1) !important;
}
.nav-link {
  color: var(--color-text);
  border-radius: 0.4em !important;
  margin-right: 0.2em;
  &.active {
    border: 1px solid #931e1e !important;
    color: #cc2a2a;
    z-index: 99;
    background-color: var(--color-content-background);
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
  border-top: transparent;
  border-radius: 0 0 6px 6px;
}
.active {
}
</style>
