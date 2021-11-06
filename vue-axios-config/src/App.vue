<template>
  <div>
    <button @click="getData">get data</button>
  </div>
</template>

<script>
//引入axios
import axios from "axios";

export default {
  name: "App",
  methods: {
    getData() {
      //加前缀走代理，不加走public自带的
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("request success", response.data);
        },
        (error) => {
          console.log("failed", error.message);
        }
      );
    },
  },
};
</script>
