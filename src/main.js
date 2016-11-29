import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import home from './components/home.vue';
import list from './components/list.vue';
import detail from './components/detail.vue';
import todolist from './components/todolist.vue';
import routerdata from './components/routerdata.vue';
import tab1 from './components/routertab/tab1.vue';
import tab2 from './components/routertab/tab2.vue';

/*
1. 定义（路由）组件。
可以从其他文件 import 进来

2. 定义路由
每个路由应该映射一个组件。 其中"component" 可以是
通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。

3. 创建 router 实例，然后传 `routes` 配置
你还可以传别的配置参数, 不过先这么简单着吧。

4. 创建和挂载根实例。
记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
*/

Vue.use(VueRouter);

//配置路由
const routes = [
  { path: '/', component: home },
  { path: '/home', component: home },
  { path: '/list', component: list },
  { path: '/detail', component: detail },
  { path: '/todolist', component: todolist },
  { path: '/routerdata', component: routerdata,
    children: [
      {path: 'tab1', component: tab1},
      {path: 'tab2', component: tab2}
    ]
  }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

const app1 = new Vue({
  router,
  components: {
    app: App
  }
}).$mount('#app')




