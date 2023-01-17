import { createVNode, render } from "vue"
import Confirm from "@/components/UI/confirm/index.vue"

const confirmBox = ({ title, text }) => {
  const div = document.createElement("div")
  div.setAttribute("class", "confirm-container")
  document.body.appendChild(div)

  return new Promise((resolve, reject) => {
    // 点击确认
    const confirmCallback = () => {
      render(null, div)
      document.body.removeChild(div)
      resolve(true)
    }
    // 点击取消
    const cancelCallback = (data) => {
      const content = document.querySelector(".confirm-content")
      // content.setAttribute("class", "animated fadeOutUp")

      content.classList.remove("animated", "fadeInDown")
      content.classList.add("animated", "fadeOutUp")
      setTimeout(() => {
        render(null, div)
        document.body.removeChild(div)
        reject(false)
      }, 500)
    }
    const vnode = createVNode(Confirm, {
      title,
      text,
      cancelCallback,
      confirmCallback,
    })
    render(vnode, div)
  })
}
export default confirmBox
