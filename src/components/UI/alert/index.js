import { h, render } from "vue"
import AlertVue from "./index.vue"

let alertBox = document.createElement("div")
alertBox.setAttribute("class", "alertBox")
const AlertBox = (type, text) => {
  document.body.appendChild(alertBox)
  const closeFn = () => {
    // alertBox.classList.remove("animated", "animate__fadeInDown")
    // alertBox.classList.add("animated", "animate__fadeOutUp")
    render(null, alertBox)
    document.body.removeChild(alertBox)
  }

  const vnode = h(AlertVue, {
    type,
    text,
    closeFn,
  })
  render(vnode, alertBox)
}

export default AlertBox
