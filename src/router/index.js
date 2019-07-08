import Vue from 'vue'
import Router from 'vue-router'
import { userInfo } from 'os';

Vue.use(Router)

//一级路由
import Login from "@/views/login"
import User from "@/views/user"

//二级路由
import List from "@/views/user/list"
import Add from "@/views/user/add"

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path:"/user",
      component:User,
      children:[
        {
          path:'/user/list',
          component:List
        },{
          path:"/user/add",
          component:Add
        }
      ]
    },{
      path:"*",
      redirect:"/user/list"
    }
  ]
})
