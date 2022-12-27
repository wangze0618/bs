<template>
  <div class="time-picker">
    <Calendar fill="#414141" size="19" class="icon"></Calendar>
    <input
      class="form-control"
      v-model="dateT"
      placeholder="请选择日期"
      type="date"
      name="time-picker"
    />
  </div>
</template>

<script setup>
import { ref, watch, reactive } from "vue"
import dayjs from "dayjs"
import { Calendar } from "@icon-park/vue-next"
const emit = defineEmits(["getTime"])
const props = defineProps({
  date: {
    type: String,
    default: () => dayjs(new Date()).format("YYYY-MM-DD"),
  },
})
let dateT = ref(props.date)

watch(
  () => dateT.value,
  (newVal) => {
    dateT.value = newVal
    emit("getTime", newVal)
  },
  {
    immediate: true,
    deep: true,
  }
)
</script>

<style scoped lang="scss">
.time-picker {
  display: flex;
  position: relative;
  .icon {
    left: 0.5em;
    top: 0.3em;
    position: absolute;
  }
  input {
    outline: none;
    padding: 0.3em 0.3em 0.3em 1.8em;
    border-radius: 0.4em;
    width: fit-content;
    color: #414141;
  }
}
</style>
