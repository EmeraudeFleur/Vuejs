# 整合 github api 数据获取，vue-router, vuex 的案例

1.-api
https://api.github.com/search/users?q={query}

2.-views
router 实现页面切换--嵌套路由
启用 router 之后，地址后面会有 # .

3.-store
veux-实现集中式状态（数据）管理的一个 vue 插件
https://next.vuex.vuejs.org/guide/
https://github.com/vuejs/vuex

看搜索页面效果
最外边是 App 组件，最上面是 Search 组件，下面是展示组件 List
数据哪里使用设置在哪里，所以设置在 List 组件里.
List 和 Search 属于兄弟组件，在该练习里使用 vuex 进行组件沟通

views vs. components
use Views for the actual pages you want the user to navigate. Components are the elements inside those pages that you can reuse in any page of your project.-
