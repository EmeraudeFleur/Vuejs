<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 路由导航栏 */
#nav {
  background-color: rgb(231, 236, 236);
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
/* router-link-active 适用于只有一级路由的时候，多级路由的时候.
router-link-exact-active可以保证只作用于当前路由导航 */
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
