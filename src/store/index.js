import Vue from 'vue';
import Vuex from 'vuex';
import Logger from 'vuex/dist/logger';

Vue.use(Vuex);

// 引入模块
import user from '@/store/modules/user'

export default new Vuex.Store({
  modules:{
    user
  },
  plugins: [Logger()]
})