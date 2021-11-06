const express = require("express");
const app = express();
//浏览器打开devtools, Network, 点击名字可看到请求，响应内容

//server handles request and send data

// app.get('/',function(request,response){
//   console.log(request);
//   response.send('<h1>Hello World!</h1>');
// });

//simplified: '/'root
app.get("/server", (req, res) => {
  //请求报文有包括响应头，响应体等...
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("hello AJAX");
});
//同源策略，先发送html
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/代码/同源策略.html");
});

//jQeury 服务
app.all("/server-jquery", (req, res) => {
  //请求报文有包括响应头，响应体等...
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "ppp" };
  res.send(JSON.stringify(data));
});

//axios 服务
app.all("/axios-server", (req, res) => {
  //请求报文有包括响应头，响应体等...
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "AAA" };
  res.send(JSON.stringify(data));
});

app.get("/delay", (req, res) => {
  //请求报文有包括响应头，响应体等...
  res.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(() => res.send("hello AJAX"), 3000);
});

//app.all可以接收任意类型的请求
app.all("/json-server", (req, res) => {
  //请求报文有包括响应头，响应体等...
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Headers", "*");
  //响应一个对象
  const data = {
    name: "ooo",
  };
  //字符串转换
  let str = JSON.stringify(data);
  res.send(str); //这里只能发送字符串类型
});

//'/contact' contact route
app.get("/contact", (req, res) => {
  res.send("contact me at: myemail@gmail.com");
});
//'/about' about route
app.get("/about", (req, res) => {
  res.send("me,epsy");
});
-(
  // add new route to test nodemon if it auto restart server after save
  app.get("/hobbies", (req, res) => {
    res.send("<ul><li>aa</li><li>bb</li></ul>");
  })
);

app.listen(3000, () => {
  console.log("server started");
});
