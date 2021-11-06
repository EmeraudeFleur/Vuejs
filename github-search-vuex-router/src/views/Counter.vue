<template>
  <div>
    <h1>{{ $store.state.counter }}</h1>
    <h1>{{ $store.getters.squared }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
//mapState, mapGetters, mapActions, mapMutations. 当组件中需要的数据和函数很多时，可以省略很多重复写的步骤。
//使用方法：先import {mapState,...} from 'vuex'，再...mapXXX(['a', 'b',... ]) or ...mapXXX({a*: 'a', b*: 'b',...})
//注意：mapActions, mapMutations 传参的时候这种简写方式中需要把参数写在html的事件中，不然出错.
export default {
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    //跳过dispatch to actions，直接commit to mutations
    add() {
      this.$store.commit("increment", this.n);
    },
    //先dispatch to actions，再commit to mutations
    //第二个参数可以是各种类型，string/number/object.
    subtract() {
      this.$store.dispatch("decrement", { value: this.n });
    },
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
