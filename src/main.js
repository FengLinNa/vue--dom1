import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'

// 引入store
import store from '@/store'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})