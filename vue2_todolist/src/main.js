import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  //安装global event bus
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
