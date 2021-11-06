*****适合在 AJAX 请求文档后面看这一节

这里选择 axios

用 Vue-cli 实现 AJAX 请求跨域的问题 --配置代理
添加文件：
vue.config.js
https://cli.vuejs.org/zh/config/#vue-config-js


1. 运行server.js 端口为5000
2.运行正常vue程序，npm run serve 端口为8080 点击页面get data, 出现错误，原因即是跨域了
浏览器和服务器之间传数据用AJAX，遵循同源(协议，域名，端口) 策略

3.解决方法--代理服务器，借助vue-cli
代理服务器跟浏览器保持一样的地址，而跟后端服务器交接数据，服务器与服务器打交道用的是传统的http请求，因此解决了跨域。

1）