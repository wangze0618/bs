<script setup>
import { ref } from "vue"
const props = defineProps({
  title: {
    type: String,
    default: "StepItem",
  },
  desc: {
    type: String,
    default: "StepItemDesc",
  },
})
</script>

<style scoped lang="scss"></style>
