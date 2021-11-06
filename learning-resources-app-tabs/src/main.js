import { createApp } from 'vue';

import App from './App.vue';

// 每个组件需要注册，先import,再component. 局部组件使用的时候也一样.在局部vuejs的script下面import,再 export components.
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseDialog from './components/UI/BaseDialog';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');
