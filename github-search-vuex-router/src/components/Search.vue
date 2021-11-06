<template>
  <section class="top">
    <h2>Search Github Users</h2>
    <div>
      <!--多个事件触发同一个方法，尤其click & keydown/keyup, click 写在button元素里，后者写在input里 -->
      <input
        type="text"
        placeholder="enter the name"
        v-model="keyword"
        @keydown.enter="searchUsers"
      />
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      //ES6插值语法：''-> ``, 插值用${}包起来.
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
        (response) => {
          //查看返回数据结构，补充属性筛选到符合目的的数据 .items
          //   console.log("request success", response.data.items);
          this.$store.state.users = response.data.items;
        },
        (error) => {
          console.log("failed", error.message);
        }
      );
    },
  },
};
</script>

<style scoped>
.top {
  background-color: rgb(231, 236, 236);
  padding: 1rem 8rem 2rem;
}

input {
  margin-right: 5px;
}

button {
  background-color: rgb(214, 236, 236);
  border: 1px solid rgb(20, 53, 53);
}

button:hover {
  background-color: rgb(205, 252, 253);
  border: 1px solid rgb(26, 107, 107);
}
</style>
