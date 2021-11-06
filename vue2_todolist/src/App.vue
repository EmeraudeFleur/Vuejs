<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo"></Header>
        <List
          :todos="todos"
          @checkTodo="checkTodo"
          @deleteTodo="deleteTodo"
          @updateTodo="updateTodo"
        ></List>
        <Footer
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllDone="clearAllDone"
        ></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    List,
  },
  data() {
    return {
      //本地导入,并且本地没有数据时，防止提取null, 加上或空数组防止报错
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    //**** 数据在哪里，操作数据的方法在哪里 ****
    //添加一个toto
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    //勾选或取消勾选todo，取反todo done值
    checkTodo(id) {
      //先找到该对象
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    checkAllTodo(checked) {
      //checked = e.target.checked in Footer.vue, is boolean value
      this.todos.forEach((todo) => (todo.done = checked));
    },
    clearAllDone() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
    // updateTodo(todo, e) {
    //   e.preventDefault();
    //   todo.title = e.target.innerText;
    //   e.target.blur(); //this will trigger second time updateTodo but doesn't change text value.
    // },
    updateTodo(todo, e) {
      todo.title = e.target.value;
    },
  },
  watch: {
    // todos(value) {
    //   localStorage.setItem("todos", JSON.stringify(value));
    // },
    todos: {
      //本地存储，需要深度监视done值并存储
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  //给全局事件总线绑定事件
  // mounted() {
  //   this.$bus.$on("deleteTodo", this.deleteTodo);
  // },
  // beforeDestroy() {
  //   this.$bus.$off("deleteTodo");
  // },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da6b49;
  border: 1px solid #c44d2f;
  margin-left: 5px;
}
.btn-edit {
  color: #fff;
  background-color: #5761e7;
  border: 1px solid #4c3dd3;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c44d2f;
}

.btn-edit:hover {
  color: #fff;
  background-color: #4c3dd3;
}

.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
