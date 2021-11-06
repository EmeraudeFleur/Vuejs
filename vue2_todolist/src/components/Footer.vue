<template>
  <!-- 几个注意点
  1. todos 为0 时，整个footer不展示 
  2. 勾选或反勾选，List中所有todo都要勾选或不勾选
  3. todo 右边删除按钮hover style-->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAllDone" @change="checkAll" /> -->
      <!-- checkbox既要展示，又要交互，则可双向绑定(且计算属性不能简写，要加setter) -->
      <input type="checkbox" v-model="isAllDone" />
    </label>
    <span
      ><span>finished {{ doneTodo }}</span> /{{ total }}</span
    >
    <button class="btn btn-danger" @click="$emit('clearAllDone')">
      Delete all done
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["todos"],
  computed: {
    doneTodo() {
      //1. return this.todos.filter((todo) => todo.done === true).length;
      //2.let i = 0;
      // this.todos.forEach((element) => {
      //   if (element.done) i++;
      // });
      // return i;
      //3.
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    total() {
      return this.todos.length;
    },
    isAllDone: {
      get() {
        return this.doneTodo === this.total && this.total > 0;
      },
      //value值自动被set维护好了，相当于e.target.checked. 该计算属性完整写法相当于把下面checkAll发射事件包含在内
      set(value) {
        this.$emit("checkAllTodo", value);
      },
    },
  },
  // methods: {
  //   checkAll(e) {
  //     this.$emit("checkAllTodo", e.target.checked);
  //   },
  // },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
