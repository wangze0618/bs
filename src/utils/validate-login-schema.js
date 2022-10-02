// 定义校验规则提供给vee-validate组件使用
export default {
  // 校验usernaem
  username: (value) => {
    // value是将来使用该规则的表单元素的值
    // 1. 必填
    // 2. 6-20个字符，需要以字母开头
    // 如何反馈校验成功还是失败，返回true才是成功，其他情况失败，返回失败原因。
    if (!value) return `请输入用户名`
    if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return "字母开头且6-20个字符"
    return true
  },
  password: (value) => {
    if (!value) return "请输入密码"
    if (!/^\w{6,24}$/.test(value)) return "密码必须是6-24个字符"
    return true
  },
}
