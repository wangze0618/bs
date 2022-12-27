const { defineConfig } = require("@vue/cli-service")
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 目标代理接口地址,实际跨域要访问的接口，记得是填你后端springboot的端口，
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        ws: true, // 是否启用  websockets;
        // pathRewrite: {
        //   // 去掉 路径中的  /api  的这一截
        //   "^/api": "",
        // },
      },
    },
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
