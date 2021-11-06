import { createStore } from "vuex";
//模块化把单独的模块封装成一个独立的类似初始化的createStore({})
// const XXX = {
//   state: {}
//   actions: {}
//   mutations: {}
//   getters: {}
// }
//const YYY = {namespaced:true...} //重命名要在模块里写

//再组件里引用时，也要更改数据和函数的路径，要么写成XXX: [...] 或者XXX/xxx

export default createStore({
  state: {
    users: [],
    counter: 0,
  },
  // 允许跳过dispatch直接commit.
  mutations: {
    //两个参数(state, value)
    increment(state, value) {
      // console.log("mutations被调用了");
      // state.counter += n;//[Violation] 'message' handler took 209ms
      state.counter = state.counter + value;
    },
    //或者(state, payload)
    decrement(state, payload) {
      state.counter = state.counter - payload.value;
    },
  },
  // actions 可以连接后端，请求ajax得到外部数据进行操作
  actions: {
    //两个参数(context, value),这一步可以筛选数据，发送http request等
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
  },
  //computed state
  getters: {
    squared(state) {
      return state.counter * 2;
    },
  },
  //模块化-当各个部分的内容多了以后，很容易显得混乱，则可以根据不同的功能划分出模块
  // modules: {
  //   XXX,
  //   YYY
  // },
  //***or*** 重命名模块
  // modules: {
  //   a: XXX,
  //   b: YYY
  // }
});
