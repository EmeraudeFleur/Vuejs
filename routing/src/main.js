import { createApp } from 'vue';

//1. add router
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

//3. import components to routes paths.
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

//2. create router,
const router = createRouter({
  history: createWebHistory(),
  routes: [
    //3. register routes
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList }
  ]
});
//4. in App.vue, indiciates where to load the routes. and modify codes. no need to register the two components locally.
const app = createApp(App);

//3. use router.
app.use(router);
app.mount('#app');
//5. in order for the click and change page to work with route paths. need update in TheNavigation.
