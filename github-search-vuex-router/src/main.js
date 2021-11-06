import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import store from "./store";

//Vue 解析所有的 import再运行其他代码

createApp(App).use(store).use(router).mount("#app");
