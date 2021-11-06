<template>
  <li>
    <!-- <label/>在input前只能在格子内打勾，而当label包含input，则点击文字也勾选或反勾选 -->
    <label />
    <!-- 1.根据todo.done 默认值在页面显示勾选或否 2.根据用户点击, 继续使用todo对象，响应式勾选或取消 @click or @change-->
    <input
      type="checkbox"
      :checked="todo.done"
      @change="handleClick(todo.id)"
    />
    <!-- todo编辑的两种实现方法1.contenteditable属性 -->
    <!-- <span
      contenteditable="true"
      v-on:keydown.enter="handleEdit(todo, $event)"
      v-on:blur="handleEdit(todo, $event)"
      >{{ todo.title }}</span
    > -->
    <!-- 方法2. 附加input框 -->
    <span v-show="!todo.isEditing">{{ todo.title }}</span>
    <input
      type="text"
      :value="todo.title"
      v-show="todo.isEditing"
      ref="inputTitle"
      @blur="handleBlur(todo, $event)"
      @keydown.enter="handleBlur(todo, $event)"
    />

    <button class="btn btn-danger" @click="handleDelete(todo.id)">
      Delete
    </button>
    <button class="btn btn-edit" @click="handleEdit(todo)">
      Edit
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  // 声明接收数据并使用
  props: ["todo"],
  methods: {
    handleClick(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.$emit("checkTodo", id);
    },
    handleDelete(id) {
      // 通知App组件将对应的todo对象删除
      if (confirm("Are you sure to delete?")) {
        // this.$bus.$emit("deleteTodo", id);
        this.$emit("deleteTodo", id);
      }
    },
    // handleEdit(todo, e) {
    //   //方法1. 通过contenteditable直接发射事件修改title值.
    //   this.$emit("updateTodo", todo, e);
    //   console.log("&", e.target.value); //undefined
    //   console.log("@", e.target.innerText); //xxx
    //   console.log("#", e.target.innerHtml); //undefined
    // },
    handleEdit(todo) {
      //方法2. 先给todo追加一个属性isEditing, 还要配函数以使失焦时重置该属性，不然input框一直显示
      //注意，不能每次点击就追加isEditing属性，故加判断自身属性判断
      if (Object.prototype.hasOwnProperty.call(todo, "isEditing")) {
        todo.isEditing = true;
      } else {
        this.$set(todo, "isEditing", true);
      }
      //实现点击编辑即光标聚焦在文字
      // this.$refs.inputTitle.focus(); //Vue focus完了之后再去show input框，导致focus在input框里看不见
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus();
      // }, 200);
      this.$nextTick(() => this.$refs.inputTitle.focus());
    },
    handleBlur(todo, e) {
      //失去焦点再回掉发射事件修改title
      todo.isEditing = false;
      this.$emit("updateTodo", todo, e);
      // console.log("&", e.target.value); //xxx
      // console.log("@", e.target.innerText); //
      // console.log("#", e.target.innerHtml); //undefined
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li input {
  vertical-align: middle;
  margin-right: 8px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
