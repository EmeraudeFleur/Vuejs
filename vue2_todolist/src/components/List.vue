<template>
  <ul class="todo-main">
    <!-- 遍历， 传数据到子组件 -->
    <Item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      v-on="$listeners"
    ></Item>
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "List",
  components: { Item },
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
