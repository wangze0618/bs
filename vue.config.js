const { defineConfig } = require("@vue/cli-service")
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData: '@import "@/assets/style/variables.scss";',
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   config.devServer.disableHostCheck(true)
  // },
})
