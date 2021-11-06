module.exports = {
  //配置代理服务器完了重启vue-cli

  //方式一：
  // devServer: {
  //默认端口是8080，数据服务端口为5000，此处即申请代理向5000交接，但是代理服务器本身跟8080路径一样
  //   proxy: "http://localhost:5000",
  // },
  //方式二
  devServer: {
    proxy: {
      //设置不同的请求前缀和URL，请求前缀要紧跟在端口号后面，写在axios请求URL里
      "/api": {
        target: "http://localhost:5000",
        pathRewrite: { "^/api": "" }, //匹配所有以data开头的路径，并换成空字符串，解决前缀带到服务请求的问题
        ws: true, //websocket
        changeOrigin: true, //跟后端隐藏来源路径，伪装成服务器同源的请求,如果为false, 来源就会暴露
      },
      //配置其他的代理
      "/foo": {
        target: "<other_url>",
        pathRewrite: {}
      },
    },
  },
};
