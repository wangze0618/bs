<script>
import { ref, render, h } from "vue"
export default {
  name: "w-bread",
  props: {
    // 分隔符
    sp: {
      type: String,
    },
    // icon
    icon: {
      type: Object,
    },
  },

  render() {
    // 获取插槽、分隔符、icon
    const slot = this.$slots.default()
    const sp = this.$props.sp
    const icon = this.$props.icon

    // 定义动态数组，将插槽的数据push到dyna里
    const dyna = []
    slot.forEach((item, index) => {
      if (item.type["__name"] == "w-bread-item") {
        dyna.push(item)
        Boolean(sp) == true
          ? dyna.push(h("span", { class: "sp" }, sp))
          : dyna.push(h(icon))
      } else {
        item.children.forEach((item, index) => {
          dyna.push(item)
          Boolean(sp) == true ? dyna.push(sp) : dyna.push(h(icon))
        })
      }
    })
    // 删除最后一个icon/分隔符
    dyna.pop()
    // 返回VNode
    return h("div", { class: "w-bread" }, dyna)
  },
}
</script>

<style scoped lang="scss">
.w-bread {
  display: flex;
  align-items: center;
}
.sp {
  font-size: 22px;
}
</style>
