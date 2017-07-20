import Vue from 'vue'
import App from './views/App.vue'
import VueRouter from 'vue-router';
import store from './store/index.js'; //把vuex仓库引入进来
import routes from './config/router.js'; //这是路由的配置文件

// 把路由 注册到vue上
Vue.use(VueRouter);

// 实例化路由
const router = new VueRouter({
  mode: 'hash',
  routes
});


new Vue({
  el: '#app',
  store, // 将store对象传给vue，这样就可以通过this.$store获取到store对象了
  router,// 将router对象传给vue，这样就可以通过this.$router获取到router对象了
  render: h => h(App)
})
