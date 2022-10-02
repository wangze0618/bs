const { defineConfig } = require("@vue/cli-service")
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    port: 8080,
  },
  // chainWebpack: (config) => {
  //   config.devServer.disableHostCheck(true)
  // },
})
