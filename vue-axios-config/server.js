const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("有人请求服务器了");
  console.log("请求的资源是: ", request.url);
  console.log("请求来自于: ", request.get("Host"));
  next();
});

//axios 服务
app.get("/students", (req, res) => {
  const students = [
    {
      id: "001",
      name: "Tim",
      age: 19,
    },
    {
      id: "002",
      name: "Bob",
      age: 28,
    },
    {
      id: "003",
      name: "Amy",
      age: 30,
    },
  ];
  //JSONView 在浏览器显示json data
  res.send(students);
});

app.listen(5000, () => {
  console.log("server started");
});
